import getConfig from "next/config";

export enum FLResponseStatus {
    SUCCESS = "success"
}

export enum PROJECT_CONFIRM_TYPE {
    UNCONFIRM = 0,
    ACCEPT = 1,
    REJECT = -1,
    SKIPPED = -2,
}

export const keyUserLocalStorage = "dashboard:dvg:user";

export enum USER_ROLES {
    ADMIN = "admin",
    MANAGER = "manager",
    DEVELOPER = "developer",
    FREELANCE = "freelancer"
}

export const OptionSelectRoleUser = [
    { value: "manager", label: "MANAGER"},
    { value: "developer", label:"DEVELOPER"},
    { value: "admin", label: "ADMIN"},
    { value: "freelancer", label: "FREELANCER"}
];

export const CONFIG = getConfig().publicRuntimeConfig;