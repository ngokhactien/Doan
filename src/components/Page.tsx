import { useRouter } from "next/router";
import React from 'react';
import { useUser } from "./RootProvider";
import { USER_ROLES } from "~@/constants";
const AuthedWrapper = props => {
    const [user] = useUser();
    const Router = useRouter();
    

}