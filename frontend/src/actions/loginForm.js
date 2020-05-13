

export const updateLoginForm =formdata=>{
    return{
        type: "UPDATE_LOGIN_FORM",
        formdata
    }
}
export const resetLoginForm =()=>{
    return{
        type: "RESET_LOGIN_FORM"
    }
}