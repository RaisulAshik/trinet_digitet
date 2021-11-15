import axios from "axios"
import apiList from "./apiList"
import commonApi from "./commonApi"

export const footerApi={
    termsAndConditions(){
        return axios.get(commonApi.api+apiList.TERMS_AND_CONDITIONS)
    },
    praivacyAndPolicy(){
        return axios.get(commonApi.api+apiList.PRIVACY_AND_POLICY)
    },
}