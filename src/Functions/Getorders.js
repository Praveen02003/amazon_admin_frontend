import axios from "../Axios/Axios.js";
export const getorders = async (setGetorderedemail) => {
    try {
        const response = await axios.get("/getorders");
        const orders = response.data.message;
        //console.log(response.data.message);

        // fetch products for each order
        for (var order of orders) {
            const ids = Object.values(order.cartitems);
            //console.log(ids);
            const res = await axios.post("/getcartid", { ids });
            //console.log(res.data.message);
            order.products= res.data.message;
        }
        //console.log(orders);
        setGetorderedemail(orders);
    } catch (error) {
        console.log("error", error);
    }
};
