import axios from "../Axios/Axios.js";

export const gettotalrevenue = async (setTotalrevenue) => {
    try {
        const response = await axios.get("/getorders");
        var cartitems = response.data.message
        var carttotal = cartitems.reduce((sum, data) => sum + Number(data.total), 0)
        setTotalrevenue(carttotal);


    } catch (error) {
        console.log("error");

    }
}