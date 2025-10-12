import axios from "../Axios/Axios.js";

export const gettotalcustomers = async (setTotalcustomers) => {
    try {
        const response = await axios.get("/getorders");
        setTotalcustomers(response.data.message.length);

    } catch (error) {
        console.log("error");

    }
}