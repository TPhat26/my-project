
import React, { useEffect, useState } from 'react';

const useFetch = (url) => {
    const [product, setProduct] = useState(); 
    const [error, setError] = useState();

    const getProduct = async () => {
        try {
            const res = await fetch(url);
            
            const data = await res.json();
            setProduct(data);
        } catch (err) {
            setError(err.message);
            setProduct("Not found"); 
        }
    };

    useEffect(() => {
        getProduct();
    }, [url]);

    return { product, error };
};

export default useFetch;
