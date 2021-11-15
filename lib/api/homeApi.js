import commonApi from "./commonApi";
import axios from "axios";
import useSWR from "swr";
import apiList from "./apiList";

const fetcher = url => axios.get(url).then(res => res.data )

export const homeApi = {
    banner() {

        return axios.get(commonApi.api+apiList.BANNER);

        // const { data, error } = useSWR(commonApi.api + apiList.BANNER, fetcher, {
        //     revalidateOnFocus: false,
        // })
        // return {
        //     data,
        //     error,
        // }
    },
    about() {
        return axios.get(commonApi.api+apiList.ABOUT_US);
    },
    service() {
        return axios.get(commonApi.api+apiList.SERVICE_LIST);
    },
    faq() {
        return axios.get(commonApi.api+apiList.FAQ);
    },
    allBlogs() {
        return axios.get(commonApi.api + apiList.ALL_BLOGS)
    }
}
