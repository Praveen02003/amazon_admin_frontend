import axios from "../Axios/Axios.js"

export const updateitem = async (navigate, count, setCount, updateimage, setUpdateimage, updatetitle, setUpdatetitle, updatediscription, setUpdatediscription, updateprice, setUpdateprice, updatedefaultprice, setUpdatedefaultprice, updateoffer, setUpdateoffer, updateid, setUpdateid, setOpen, setSeverity, setUpdatemessage) => {
    try {
        var finalprice = 0
        var defaultprice = 0
        var offer = updateoffer
        defaultprice = updatedefaultprice
        if (!updateimage || !updatetitle || !updatediscription || !updatedefaultprice) {
            // alert("please fill all the data")
            setOpen(true)
            setSeverity("info")
            setUpdatemessage("please fill all the data")

        }
        else {
            if (updateoffer > 0) {
                finalprice = updatedefaultprice - (updatedefaultprice * (updateoffer / 100))
                offer = updateoffer
                setUpdateprice(finalprice)
            }
            else if (!updateoffer || updateoffer <= 0) {

                finalprice = defaultprice
                offer = 0
                setUpdateprice(finalprice)
                setUpdateoffer(offer)
                //console.log(updateoffer);
            }
            const userdata = {
                id: updateid,
                image: updateimage,
                title: updatetitle,
                description: updatediscription,
                price: finalprice,
                offer: offer,
                defaultprice: updatedefaultprice
            }
            const response = await axios.post('/updateitem', userdata)
            if (response.data.message === "Item Updated Successfully") {
                // alert(response.data.message)
                setOpen(true)
                setSeverity("success")
                setUpdatemessage(response.data.message)
                setCount(count + 1)
                setTimeout(() => {
                    navigate('/showitems')
                }, 500);
                
            }
            else {
                // alert(response.data.message)
                setOpen(true)
                setSeverity("error")
                setUpdatemessage(response.data.message)
            }
        }




    }
    catch (error) {
        console.log("error");

    }
}