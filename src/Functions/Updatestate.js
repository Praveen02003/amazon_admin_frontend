export const updatestatedata = (item,navigate,count,setCount,updateimage,setUpdateimage,updatetitle,setUpdatetitle,updatediscription,setUpdatediscription,updateprice,setUpdateprice,updatedefaultprice,setUpdatedefaultprice,updateoffer,setUpdateoffer,updateid,setUpdateid) => {
    setUpdateid(item._id)
    setUpdateimage(item.image)
    setUpdatetitle(item.title)
    setUpdatediscription(item.description)
    setUpdateprice(item.price)
    setUpdateoffer(item.offer)
    setUpdatedefaultprice(item.defaultprice)
    navigate('/update')
}