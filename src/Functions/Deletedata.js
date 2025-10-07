import axios from '../Axios/Axios.js'
export const deletedata = async (item,count,setCount,setOpen,setDeletemessage,setSeverity) => {
    const userdata = {
        id: item._id
    }
    try {
        const response = await axios.post('/delete', userdata)
        if (response.data.message === "Item Deleted Successfully")
        {
            setCount(count + 1)
            setOpen(true)
            setDeletemessage(response.data.message)
            setSeverity("success")
            // alert(response.data.message)
        }
        else
        {
            // alert(response.data.message)
            setOpen(true)
            setDeletemessage(response.data.message)
            setSeverity("error")
        }
    }
    catch (error) {
        console.log("error");

    }
}