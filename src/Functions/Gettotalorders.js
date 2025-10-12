import axios from "../Axios/Axios.js";

export const gettotalorders = async (setTotalorders) => {
    try {
        const response = await axios.get("/getorders");
        setTotalorders(response.data.message.length);
        
    } catch (error) {
        console.log("error");
        
    }
}