import axios from "axios"
import useSWR from "swr"
import apiList from "./apiList"
import commonApi from "./commonApi"

const categoriesFetcher = url => axios.get(url).then(res => res.data)
const subCategoriesFetcher = url => axios.get(url).then(res => res.data)
export const headerApi = {
    serviceCategories() {
        const { data } = useSWR(commonApi.api + apiList.SERVICE_CATEGORIES_LIST, categoriesFetcher, {
            revalidateOnFocus: false,
        })
        return {
            categoriesData: data,
        }
    },
    serviceSubCategories() {
        const { data } = useSWR(commonApi.api + apiList.SERVICE_SUBCATEGORIES_LIST_NAVBAR, subCategoriesFetcher, {
            revalidateOnFocus: false,
        })
        return {
            subCategoriesData: data,
        }
    },

}