import { getUserInfo, removeUserInfo } from "@/services/auth.service";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AuthButton = () => {
    const userInfo = getUserInfo();
    const router = useRouter()

    const handleLogout = () => {
        removeUserInfo();
        router.refresh();
    }
    return (
        <>
            {
                userInfo?.userId ? (

                    <Button color="error" onClick={handleLogout} >Log Out</Button>
                ) :
                    (
                        <Button component={Link} href="/login">Login</Button>
                    )
            }
        </>
    );
};

export default AuthButton;