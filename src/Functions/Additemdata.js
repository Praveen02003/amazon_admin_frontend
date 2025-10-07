import axios from '../Axios/Axios.js'
export const additemsdata = async (setOpen, setSeverity, setAddmessage,categories, addimage, addtitle, adddiscription, addprice, addoffer) => {
    var finalPrice = addprice
    var finaldefaultprice = addprice
    if (!addimage || !addtitle || !adddiscription || !addprice || !categories) {
        // alert('please fill all the data')
        setOpen(true)
        setSeverity("info")
        setAddmessage("please fill all the data")
    }
    else {
        if (!addoffer) {
            finaldefaultprice = finalPrice
            // setAdddefaultprice(addprice)
        }
        else {
            finalPrice = finalPrice - (finalPrice * addoffer / 100)
            //console.log(finalPrice);

            // setAdddefaultprice(addprice)
            // setAddprice(finalPrice)
        }
    }


    const userdata = {
        catergory: categories,
        image: addimage,
        title: addtitle,
        description: adddiscription,
        price: finalPrice,
        offer: addoffer,
        defaultprice: finaldefaultprice
    }
    try {
        const response = await axios.post('/additems', userdata)
        if (response.data.message === "Item Added Successfully")
        {
            // alert(response.data.message)
            setOpen(true)
            setSeverity("success")
            setAddmessage(response.data.message)
        }
        else
        {
            // alert(response.data.message)
            setOpen(true)
            setSeverity("error")
            setAddmessage(response.data.message)
        }
    }
    catch (error) {
        console.log("error");
    }

}