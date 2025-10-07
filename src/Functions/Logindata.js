export const loginuser = (loginmail, loginpassword, navigate, setOpen, setSeverity, setLoginmessage) => {
    var email = "admin@gmail.com"
    var password = '123'
    if (!loginmail || !loginpassword) {
        // alert("Please fill all the data")
        setOpen(true)
        setSeverity("info")
        setLoginmessage("Please fill all the data")
    }
    else {
        if (loginmail && loginpassword) {
            if ((loginmail === email) && (loginpassword === password)) {
                //alert("Login successfull")
                setOpen(true)
                setSeverity("success")
                setLoginmessage("Login successfull")
                localStorage.setItem('Admintoken', 'set')
                setTimeout(() => {
                    navigate('/home')
                }, 1000);
            }
            else {
                // alert("Please enter correct data")
                setOpen(true)
                setSeverity("error")
                setLoginmessage("Please enter correct data")
            }
        }
    }
}