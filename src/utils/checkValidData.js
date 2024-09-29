
const checkValidData = (email,password)=>{
    const isEmailValid = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/.test(email)
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password)

    if(!isEmailValid)
        return "Email is not valid"
    if(!isPasswordValid)
        return "Password is not valid"
    return null
}

export default checkValidData