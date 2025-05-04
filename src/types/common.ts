import { USER_ROLES } from "@/constants/UserRoles";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export type IMeta = {
    page: number;
    limit: number;
    total: number;
}

export type userRoles = keyof typeof USER_ROLES | null | undefined;

export type DrawerItem = {
    title: string;
    path: string;
    parentPath?: string;
    icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
    child?: DrawerItem[];
}

export type responseSuccessType = {
    data: any;
    meta: IMeta;

}

export type TGenericErrorResponse = {
    statusCode: number;
    message: string;
    errorMesseges: IGenericErrorMessage[];
}

export type IGenericErrorMessage = {
    path: string | number;
    message: string;
}