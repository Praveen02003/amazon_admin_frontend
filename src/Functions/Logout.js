export const logout=(navigate)=>{
    localStorage.removeItem('Admintoken')
    navigate('/')
}