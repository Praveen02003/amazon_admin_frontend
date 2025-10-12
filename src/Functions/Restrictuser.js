export const restrictuser=(navigate)=>{
    const token=localStorage.getItem("Admintoken")
    if (token)
    {
        navigate('/home')    
    }
}

export const restrictpage=(navigate)=>{
    const token=localStorage.getItem("Admintoken")
    if (!token)
    {
        navigate('/')    
    }
}