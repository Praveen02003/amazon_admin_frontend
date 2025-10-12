import axios from "../Axios/Axios.js";

export const gettotalproducts = async (setTotalproducts) => {
    try {
        const response = await axios.get('/getallitems')
        setTotalproducts(response.data.message.length);
    }
    catch (error) {
        console.log("error");

    }
}