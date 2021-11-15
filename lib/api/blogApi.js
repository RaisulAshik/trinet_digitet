import axios from "axios"
import apiList from "./apiList"
import commonApi from "./commonApi"

export const blog = {
    allBlogs() {
        return axios.get(commonApi.api + apiList.ALL_BLOGS)
    },
    blogsDetails(id) {
        console.log(id);
        return axios.get(commonApi.api + apiList.BLOGS_DETAILS + id);
    }
}