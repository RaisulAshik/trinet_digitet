import React from 'react';
import Head from 'next/dist/next-server/lib/head';
import Link from 'next/link';
import { blog } from '../lib/api/blogApi';
import commonApi from '../lib/api/commonApi';
import Layout from '../components/layout';

const blogs = (allBlogs) => {
    const renderHTML = (rawHTML) => React.createElement("span", { dangerouslySetInnerHTML: { __html: rawHTML } });
    const DATE_OPTIONS = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    const handleDate = (blogDate) => {
        const date = new Date(blogDate);
        const returnDate = date.toLocaleDateString('en-US', DATE_OPTIONS)
        return returnDate;
    }
    return (
        <div>
            <Head>
                <title>Blogs</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="The latest blog posts from Trinet Digital. Check back regularly to stay up-to-date on the latest news, tips, and tricks for digital marketing success!" />
                <meta name="keywords" content="blog marketing agency" />
            </Head>
            <Layout>
                {/* <!-- Page Banner --> */}
                <section className="page-banner page-bgOne">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="page-title text-center">
                                    <div className="h1">Our Blog</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- Breadcrumbs --> */}
                <div className="breadcrumbs-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="breadcrumbs-content">
                                    <ul>
                                        <li><Link href="/">Home</Link></li>
                                        <li><a href="#">Blog</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="#" className="breadcrumbs-shap"></a>
                </div>

                {/* <!-- Blog --> */}
                <section className="blog-area pt-5 pb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <div className="section-title text-center">
                                    <div className="h2">recent blog posts</div>
                                    <p>Check out the posts on digital marketing and web design. Including tips for business owners to increase traffic, create more leads, or sell products online.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {allBlogs.allBlogs ? allBlogs.allBlogs.map(res =>
                                <div className="col-lg-4 col-md-6" key={res._id}>
                                    <div className="blog-item mt-5">
                                        <div className="blog-img">
                                            <Link href={`/blogs/${res.slug}`}>
                                                <img src={commonApi.api + res.blogImage} alt="" />
                                            </Link>
                                        </div>
                                        <div className="blog-text">
                                            {/* <div className="blog-admin">
                                            <div className="blog-admin-img">
                                                <img src={commonApi.api + res.authorImage}  />
                                            </div>
                                            <div className="blog-admin-name">
                                                <div className="h6">{res.authorName}</div>
                                                <span>{handleDate(res.date)}</span>
                                            </div>
                                        </div> */}
                                            <div className="h4"><Link href={`/blogs/${res.slug}`}>{res.title}</Link></div>
                                            <div className="blog-description blog-desc">{renderHTML(res.description.substr(0, 250))}<span className="blog-dots">...</span></div>
                                            <div className="read-btn"><Link href={`/blogs/${res.slug}`}>Read More</Link></div>
                                        </div>
                                    </div>
                                </div>
                            ) : <></>}
                        </div>
                    </div>
                </section>
            </Layout>

        </div>
    );
};

export default blogs;

export async function getStaticProps() {
    const allBlogs = await blog.allBlogs().then(res => res.data)
    return {
        props: {
            allBlogs,
        }
    }
}