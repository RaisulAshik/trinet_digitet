import Link from 'next/link';
import Head from 'next/head'
import React from 'react';
import Layout from '../../components/layout';
import Blog from '../../components/blog';
import CallInAction from '../../components/callInAction';

import StickyBox from "react-sticky-box";

//API
import { blog } from '../../lib/api/blogApi';

const blogDetails = (data) => {
    const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });
    return (
        <div>
            <Head>
                <title>{data.data?data.data.title:<></>}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Layout>
                {/* <!-- Page Banner --> */}
                <section className="page-banner page-bgOne">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="page-title text-center">
                                    <div className="h1">{data.data?data.data.title:<></>}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- SEO --> */}
                <section className="seo--area pt-100 ">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                {renderHTML(data.data?data.data.description:<></>)}
                                <div className="comment-form pt-5">
                                    <form className="blog-form">
                                        <div className="h3 pb-2">Leave A Comment</div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <input type="text" name="name" className="w-100" placeholder="Name" />
                                            </div>
                                            <div className="col-md-6">
                                                <input type="email" name="email" className="w-100" placeholder="Email" />
                                            </div>
                                            <div className="col-md-6">
                                                <input type="text" name="name" className="w-100" placeholder="Phone" />
                                            </div>
                                            <div className="col-md-6">
                                                <input type="text" name="name" className="w-100" placeholder="website" />
                                            </div>
                                            <div className="col-md-12">
                                                <textarea className="w-100" placeholder="Your Message"></textarea>
                                            </div>
                                            <div className="col-md-12">
                                                <button type="submit" className="theme-btn btn-lg">Post A Comment</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <StickyBox offsetTop={120} offsetBottom={10}>
                                    <div className="popular-post">
                                        <div className="post-title">Popular Post</div>
                                        <div className="p-4">
                                            <div className="post-item d-flex gap-3">
                                                <div className="blog-img align-self-center">
                                                    <a href="#">
                                                        <img src="https://trinetdigital.herokuapp.com/uploads/blog/1632027465841Basic-SEO-Tips-to-Get-Most-Conversion-Out-of-Your-Business%20(2).png" />
                                                    </a>
                                                </div>
                                                <div className="post-text align-self-center">
                                                    <p className="post-date mb-2">05 Sep, 2021</p>
                                                    <h6><a href="">Post Tile Here</a></h6>
                                                </div>
                                            </div>
                                            <div className="post-item d-flex gap-3">
                                                <div className="blog-img align-self-center">
                                                    <a href="#">
                                                        <img src="https://trinetdigital.herokuapp.com/uploads/blog/1632027465841Basic-SEO-Tips-to-Get-Most-Conversion-Out-of-Your-Business%20(2).png" />
                                                    </a>
                                                </div>
                                                <div className="post-text align-self-center">
                                                    <p className="post-date mb-2">05 Sep, 2021</p>
                                                    <h6><a href="">Post Tile Here</a></h6>
                                                </div>
                                            </div>
                                            <div className="post-item d-flex gap-3">
                                                <div className="blog-img align-self-center">
                                                    <a href="#">
                                                        <img src="https://trinetdigital.herokuapp.com/uploads/blog/1632027465841Basic-SEO-Tips-to-Get-Most-Conversion-Out-of-Your-Business%20(2).png" />
                                                    </a>
                                                </div>
                                                <div className="post-text align-self-center">
                                                    <p className="post-date mb-2">05 Sep, 2021</p>
                                                    <h6><a href="">Post Tile Here</a></h6>
                                                </div>
                                            </div>
                                            <div className="post-item d-flex gap-3">
                                                <div className="blog-img align-self-center">
                                                    <a href="#">
                                                        <img src="https://trinetdigital.herokuapp.com/uploads/blog/1632027465841Basic-SEO-Tips-to-Get-Most-Conversion-Out-of-Your-Business%20(2).png" />
                                                    </a>
                                                </div>
                                                <div className="post-text align-self-center">
                                                    <p className="post-date mb-2">05 Sep, 2021</p>
                                                    <h6><a href="">Post Tile Here</a></h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="popular-post mt-5">
                                        <div className="post-title">Social</div>
                                        <div className="p-4 post-social">
                                            <a href="" className="sq facebook" target="_blank">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                            <a href="" className="sq twitter" target="_blank">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                            <a href="" className="sq instagram" target="_blank">
                                                <i className="fab fa-instagram"></i>
                                            </a>
                                            <a href="" className="sq youtube" target="_blank">
                                                <i className="fab fa-youtube"></i>
                                            </a>
                                        </div>
                                    </div>
                                </StickyBox>
                            </div>

                        </div>
                    </div>
                </section>

                {/* <!-- Blog --> */}
                <Blog allBlogs={data.allBlogs} />

                {/* <!-- Call to Action --> */}
                <CallInAction />
            </Layout>
        </div>
    );
};

export default blogDetails;


export async function getStaticPaths() {
    const blogs = await blog.allBlogs().then(res => res.data)
    const paths = blogs.map(res => {
        return {
            params: {
                // id: res._id.toString(),
                id: res.slug.toString(),
            }
        }
    });
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}) {
    const slug = params.id;
    const data = await blog.blogsDetails(slug).then(res => res.data)

    const allBlogs = await blog.allBlogs().then(res => res.data)
    return {
        props: {
            allBlogs,
            data
        }
    }
}
