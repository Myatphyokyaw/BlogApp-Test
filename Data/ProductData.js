import React from "react";
import axios from "axios";

var data = []
const ProductData =  () => {
    return axios.get('https://fakestoreapi.com/products?limit=3')
        .then(function (response) {
            return response.data
        })
        .catch(function (error) {
            console.log(error);
        })
}

export default ProductData()



