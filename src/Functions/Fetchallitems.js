import axios from '../Axios/Axios.js'
export const fetchallitems = async (setShowallitems) => {
    try {
        const response = await axios.get('/getallitems')
        // console.log(response.data.message);
        setShowallitems(response.data.message)
    }
    catch (error) {
        console.log("error");

    }
}