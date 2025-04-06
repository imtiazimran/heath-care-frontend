import { authKey } from "@/constants/authkey"
import { setToLocalStorage } from "@/utils/local-storage"

export const storeUserInfo = async ( token : string) => {
    return setToLocalStorage(authKey, token)

}