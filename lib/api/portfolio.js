import axios from "axios"
import apiList from "./apiList"
import commonApi from "./commonApi"

export const portfolio = {
    allPortfolios() {
        return axios.get(commonApi.api + apiList.ALL_PORTFOLIOS)
    },
    allPortfoliosByName(id) {
        console.log(commonApi.api + apiList.ALL_PORTFOLIOS_BY_NAME + id)
        return axios.get(commonApi.api + apiList.ALL_PORTFOLIOS_BY_NAME + id)
    },
    allPortfoliosName() {
        return axios.get(commonApi.api + apiList.ALL_PORTFOLIOS_NAME)
    }
}