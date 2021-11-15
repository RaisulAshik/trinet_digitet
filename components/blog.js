import React from 'react';
import commonApi from '../lib/api/commonApi';
import Link from 'next/link';

const Blog = (allBlogs) => {
    const renderHTML = (rawHTML) => React.createElement("span", { dangerouslySetInnerHTML: { __html: rawHTML } });
    const DATE_OPTIONS = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    const handleDate = (blogDate) => {
        const date = new Date(blogDate);
        const returnDate = date.toLocaleDateString('en-US', DATE_OPTIONS)
        return returnDate;
    }

    return (
        <div>
            <section className="blog-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="section-title seo-titles text-center">
                                <div className="h6">recent blog posts</div>
                                <div className="h2">Learn from our experienced and online bloggers about the world of digital marketing and SEO</div>
                                <div className="section-bar"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">


                        {allBlogs.allBlogs ? allBlogs.allBlogs.map(res =>
                            <div className="col-lg-4 col-md-6" key={res._id}>
                                <div className="blog-item mt-5">
                                    <div className="blog-img">
                                        <Link href={`/blogs/${res.slug}`}>
                                            <img src={commonApi.api + res.blogImage} />
                                        </Link>
                                    </div>
                                    <div className="blog-text">
                                        {/* <div className="blog-admin">
                                            <div className="blog-admin-img">
                                                <img src={commonApi.api + res.authorImage} />
                                            </div>
                                            <div className="blog-admin-name">
                                                <h6>{res.authorName}</h6>
                                                <span>{handleDate(res.date)}</span>
                                            </div>
                                        </div> */}
                                        <div className="h4"><h1><Link href={`/blogs/${res.slug}`}>{res.title}</Link></h1></div>
                                        <div className="blog-desc">{renderHTML(res.description.substr(0, 200))}<span className="blog-dots">...</span></div>
                                        <div className="read-btn"><Link href={`/blogs/${res.slug}`}>Read More</Link></div>
                                    </div>
                                </div>
                            </div>
                        ) : <></>}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;
