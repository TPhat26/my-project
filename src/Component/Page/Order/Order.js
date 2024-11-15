import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import "./Order.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from 'emailjs-com';
import { UseCart } from "../../Context/CartContext";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const Order = () => {
  const form = useRef();
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const { cart, setCart } = UseCart();
  useEffect(() => {
    axios.get("https://provinces.open-api.vn/api/p/")
    .then(response => {
      const filteredProvinces = response.data.filter(province => 
        province.name === "Thành phố Hồ Chí Minh" || province.name === "Tỉnh Vĩnh Long"
      );
      setProvinces(filteredProvinces);
    })
    .catch(error => console.error("Error fetching provinces:", error));
  }, []);

  const handleProvinceChange = (event) => {
    const provinceCode = event.target.value;
    formik.setFieldValue("province", provinceCode);
    axios.get(`https://provinces.open-api.vn/api/p/${provinceCode}?depth=2`)
      .then(response => {
        setDistricts(response.data.districts);
      })
      .catch(error => console.error("Error fetching districts:", error));
  };
  const handleDeliveryChange = (event) => {
    formik.setFieldValue("deliveryMethod", event.target.value);
  };
  const navigate = useNavigate();
  const myCart = cart.map(item => ({
    title: item.title,
    quantity: item.quantity,
    price: item.price,
  }));
  const formik = useFormik({
    initialValues: {
      deliveryMethod: "delivery",
      user_name: "",
      user_email: "",
      time: "",
      message: "",
      payment_method: "",
      province: "",
      district: "",
      address: "",
      cart: myCart,
    },
    validationSchema: Yup.object({
      user_name: Yup.string().required("Required"),
      user_email: Yup.string().email("Invalid email address").required("Required"),
      message: Yup.string().required("Required"),
      time: Yup.string().required("Please select a time"),
      payment_method: Yup.string().required("Please select a payment method"),
      province: Yup.string().test(
        "Please select a province",
        function (value) {
          // Kiểm tra nếu phương thức giao hàng là 'delivery'
          return this.parent.deliveryMethod === "delivery" ? (value ? true : false) : true;
        }
      ),
    
      // District
      district: Yup.string().test(
        "Please select a district",
        function (value) {
          // Kiểm tra nếu phương thức giao hàng là 'delivery' 
          return this.parent.deliveryMethod === "delivery" ? (value ? true : false) : true;
        }
      ),
    
      // Address
      address: Yup.string().test( //một phương thức tùy chỉnh để thêm điều kiện kiểm tra.test nhận một lỗi và một hàm kiểm tra.
        "Please enter your address",
        function (value) {
          // Kiểm tra nếu phương thức giao hàng là 'delivery'
          return this.parent.deliveryMethod === "delivery" ? (value ? true : false) : true;
        }
      ),
    }),
    onSubmit: async (values) => {
      console.log("Form values:", values);
      if (values.deliveryMethod === "pickup") {
        delete values.province;
        delete values.district;
        delete values.address;
      }
      emailjs.sendForm("service_j4lx6lm", "template_9nmgakg", form.current, "TaeUwqFjLMRePanLe")
      .then((result) => {
        
      }, (error) => {
       
        console.log(error.text);
      });
      try {
        await axios.post(`https://672226612108960b9cc31a9d.mockapi.io/Cart`, values);
        
        setTimeout(() => {
          toast.success("Order has been confirmed", {
            position: "top-center",
            autoClose: 1000,
          });
          localStorage.removeItem("Cart");
          setCart([]);
          setTimeout(() => {
            navigate("/");
          }, 2000);
        }, 2000);
        
      } catch (error) {
        console.error("Error occurred:", error);
        alert("Order is defective, please try again later");
        toast.error("Order is defective, please try again later", {
          position: "top-center",
          autoClose: 1000,
        });
      }
    }
  });
  return (
    <form ref={form} id="form-order" onSubmit={formik.handleSubmit}>
      <input 
        type="text" 
        onChange={formik.handleChange} 
        onBlur={formik.handleBlur} 
        value={formik.values.user_name} 
        name="user_name" 
        placeholder="Your Name" 
      />
      {formik.touched.user_name && formik.errors.user_name ? <div className="error">{formik.errors.user_name}</div> : null}
      <input 
        type="email" 
        onChange={formik.handleChange} 
        onBlur={formik.handleBlur} 
        value={formik.values.user_email} 
        name="user_email" 
        placeholder="Your Email" 
      />
      {formik.touched.user_email && formik.errors.user_email ? <div className="error">{formik.errors.user_email}</div> : null}

      <textarea 
        name="message" 
        onChange={formik.handleChange} 
        onBlur={formik.handleBlur} 
        value={formik.values.message} 
        placeholder="Your Message" 
      />
      {formik.touched.message && formik.errors.message ? <div className="error">{formik.errors.message}</div> : null}

      <div>
        <label htmlFor="time">Choose a time:</label>
        <select name="time" value={formik.values.time} onChange={formik.handleChange} onBlur={formik.handleBlur}>
          <option value="" label="Select a time" />
          <option value="8AM - 9AM" label="8AM - 9AM" />
          <option value="9AM - 10AM" label="9AM - 10AM" />
        </select>
        {formik.touched.time && formik.errors.time ? <div className="error">{formik.errors.time}</div> : null}
      </div>

      <div>
        <h3>Select delivery method:</h3>
        <label className="method">
          <input
            type="radio"
            name="deliveryMethod"
            value="delivery"
            checked={formik.values.deliveryMethod === 'delivery'}
            onChange={handleDeliveryChange}
          />
          Delivery
        </label>
        <label className="method">
          <input
            type="radio"
            name="deliveryMethod"
            value="pickup"
            checked={formik.values.deliveryMethod === 'pickup'}
            onChange={handleDeliveryChange}
          />
          Pickup
        </label>
      </div>
      <div className="address">
        {formik.values.deliveryMethod === 'delivery' && (
          <>
            <div>
              <label>Province:</label>
              <select
                name="province"
                value={formik.values.province}
                onChange={handleProvinceChange}
                onBlur={formik.handleBlur}
              >
                <option value="" label="Select province" />
                {provinces.map((province) => (
                  <option key={province.code} value={province.code}>
                    {province.name}
                  </option>
                ))}
              </select>
              {formik.touched.province && formik.errors.province ? (
                <div className="error">{formik.errors.province}</div>
              ) : null}
            </div>

            <div>
              <label>District:</label>
              <select
                name="district"
                value={formik.values.district}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                disabled={!formik.values.province}
              >
                <option value="" label="Select district" />
                {districts.map((district) => (
                  <option key={district.code} value={district.name}>
                    {district.name}
                  </option>
                ))}
              </select>
              {formik.touched.district && formik.errors.district ? (
                <div className="error">{formik.errors.district}</div>
              ) : null}
            </div>

            <div>
              <label>Address:</label>
              <input
                type="text"
                name="address"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.address}
                placeholder="Your address"
              />
              {formik.touched.address && formik.errors.address ? (
                <div className="error">{formik.errors.address}</div>
              ) : null}
            </div>
          </>
        )}
      </div>
      
      <div>
        <label>Payment Method</label>
        <select name="payment_method" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.payment_method}>
          <option value="" label="Select payment method" />
          <option value="Credit Card" label="Credit Card" />
          <option value="Cash on Delivery" label="Cash on Delivery" />
          <option value="Bank Transfer" label="Bank Transfer" />
        </select>
        {formik.touched.payment_method && formik.errors.payment_method ? <div className="error">{formik.errors.payment_method}</div> : null}
      </div>
      <button type="submit" className="s_button">
        <i className="fa fa-shopping-cart" aria-hidden="true"></i> ORDER NOW
      </button>
    </form>
  );
};

export default Order;
