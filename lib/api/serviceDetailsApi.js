import axios from "axios"
import apiList from "./apiList"
import commonApi from "./commonApi"


export const serviceDetailsApi = {
    servicesDetails(id) {
        return axios.get(commonApi.api + apiList.SERVICE_DETAILS + id)
    },
    about() {
        return axios.get(commonApi.api+apiList.ABOUT_US);
    },
}
