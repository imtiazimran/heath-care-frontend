import { authKey } from "@/constants/authkey"
import { decodedToken } from "@/utils/jwt"
import { getFromLocalStorage, removeFromLocalStorage, setToLocalStorage } from "@/utils/local-storage"

export const storeUserInfo = async ( token : string) => {
    return setToLocalStorage(authKey, token)

}


export const getUserInfo = () => {
    const authToken = getFromLocalStorage(authKey)

    if (authToken) {
        const userInfo : any = decodedToken(authToken)
       return {
        ...userInfo,
        role: userInfo?.role.toLowerCase(),
       }
    }
}

export const isLoggedIn = () => {
    const authToken = getFromLocalStorage(authKey)

    if (authToken) {
        return !!authToken
    }
}


export const removeUserInfo = () => {
    return removeFromLocalStorage(authKey)
}