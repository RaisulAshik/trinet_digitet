const userCommonApi = "api/user/";


const apiList = {
    BANNER: userCommonApi + "banner",
    ABOUT_US: userCommonApi + "aboutUs",
    TERMS_AND_CONDITIONS: userCommonApi + "termsAndCondition",
    PRIVACY_AND_POLICY: userCommonApi + "privacyPolicy",
    FAQ: userCommonApi + "faqs",
    // service
    SERVICE_SUBCATEGORIES_LIST_NAVBAR: userCommonApi + "navbarServiceSubcategories",
    SERVICE_CATEGORIES_LIST: userCommonApi + "serviceCategories",
    SERVICE_LIST: userCommonApi + "indexServiceSubcategories",
    SERVICE_DETAILS: userCommonApi + "serviceSubcategoriesDetail/",//id//
    // porfolio
    ALL_PORTFOLIOS: userCommonApi + "portfolios",
    ALL_PORTFOLIOS_NAME: userCommonApi + "portfolioFilters",
    ALL_PORTFOLIOS_BY_NAME: userCommonApi + "portfoliosByFilter/",//id//
    //blogs
    ALL_BLOGS: userCommonApi + "pageBlogs",
    BLOGS_DETAILS: userCommonApi + "blogDetails/",//id//
}

export default apiList;