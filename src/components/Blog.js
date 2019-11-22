import React from 'react';
import { Link } from 'react-router-dom';


function Blog () {
    return(
        <div>
             <section class="breadcrumb-section">
            <h2 class="sr-only">Site Breadcrumb</h2>
            <div class="container">
                <div class="breadcrumb-contents">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                    <li class="breadcrumb-item"><Link to="index.html">Home</Link></li>
                    <li class="breadcrumb-item active">Blog</li>
                    </ol>
                </nav>
                </div>
            </div>
            </section>
            <section class="inner-page-sec-padding-bottom">
            <div class="container">
                <div class="row">
                <div class="col-lg-9 mb--40 mb-lg--0">
                    <div class="blog-list-cards">
                    <div class="blog-card card-style-list">
                        <div class="row">
                        <div class="col-md-5">
                            <Link to="blog-details.html" class="image d-block">
                            <img src="image/others/blog-grid-3.jpg" alt=""/>
                            </Link>
                        </div>
                        <div class="col-md-6">
                            <div class="card-content">
                            <h3 class="title"><Link to="blog-details.html">Use BLOG TITLE To Make Someone Fall In Love</Link></h3>
                            <p class="post-meta"><span>13/08/2017 </span> | <Link to="#">Hastech</Link></p>
                            <article>
                                <h2 class="sr-only">
                                Blog Article
                                </h2>
                                <p>Maria Denardo is the Fashion Director at theFashionSpot. Prior to joining tFS, she worked as...</p>
                                <Link to="blog-details.html" class="blog-link">Read More</Link>
                            </article>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="blog-card card-style-list">
                        <div class="row">
                        <div class="col-md-5">
                            <Link to="blog-details.html" class="image d-block">
                            <img src="image/others/blog-grid-4.jpg" alt=""/>
                            </Link>
                        </div>
                        <div class="col-md-5">
                            <div class="card-content">
                            <h3 class="title"><Link to="blog-details.html">Ho To (Do) BLOG TITLE Without Your Office(House).</Link></h3>
                            <p class="post-meta"><span>28/10/2017 </span> | <Link to="#">Hastech</Link></p>
                            <article>
                                <h2 class="sr-only">
                                Blog Article
                                </h2>
                                <p>Maria Denardo is the Fashion Director at theFashionSpot. Prior to joining tFS, she worked as...</p>
                                <Link to="blog-details.html" class="blog-link">Read More</Link>
                            </article>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="blog-card card-style-list">
                        <div class="row">
                        <div class="col-md-5">
                            <Link to="blog-details.html" class="image d-block">
                            <img src="image/others/blog-grid-1.jpg" alt=""/>
                            </Link>
                        </div>
                        <div class="col-md-5">
                            <div class="card-content">
                            <h3 class="title"><Link to="blog-details.html">How to Grow Epiphytic Tropical Plants</Link></h3>
                            <p class="post-meta"><span>30/10/2017 </span> | <Link to="#">Hastech</Link></p>
                            <article>
                                <h2 class="sr-only">
                                Blog Article
                                </h2>
                                <p>Maria Denardo is the Fashion Director at theFashionSpot. Prior to joining tFS, she worked as...</p>
                                <Link to="blog-details.html" class="blog-link">Read More</Link>
                            </article>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="blog-card card-style-list">
                        <div class="row">
                        <div class="col-md-5">
                            <Link to="blog-details.html" class="image d-block">
                            <img src="image/others/blog-grid-2.jpg" alt=""/>
                            </Link>
                        </div>
                        <div class="col-md-5">
                            <div class="card-content">
                            <h3 class="title"><Link to="blog-details.html">Want A Thriving Business? Focus On BLOG TITLE!</Link></h3>
                            <p class="post-meta"><span>22/01/2017 </span> | <Link to="#">Hastech</Link></p>
                            <article>
                                <h2 class="sr-only">
                                Blog Article
                                </h2>
                                <p>Maria Denardo is the Fashion Director at theFashionSpot. Prior to joining tFS, she worked as...</p>
                                <Link to="blog-details.html" class="blog-link">Read More</Link>
                            </article>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="inner-page-sidebar">
                    <div class="single-block">
                        <h2 class="sidebar-title mb--30">Search</h2>
                        <div class="site-mini-search">
                        <input type="text" placeholder="Search"/>
                        <button><i class="fas fa-search"></i></button>
                        </div>
                    </div>
                    <div class="single-block">
                        <h2 class="sidebar-title mb--30">BLOG ARCHIVES</h2>
                        <ul class="sidebar-list mb--30">
                        <li><Link to="#"> March 2015 (1)</Link></li>
                        <li><Link to="#">December 2014 (3)</Link></li>
                        <li> <Link to="#">November 2014 (4)</Link></li>
                        <li><Link to="#">September 2014 (1)</Link></li>
                        <li><Link to="#">August 2014 (1)</Link></li>
                        </ul>
                    </div>
                    <div class="single-block ">
                        <h2 class="sidebar-title mb--30">RECENT POSTS</h2>
                        <ul class="sidebar-list">
                        <li><Link to="#"> Blog image post</Link></li>
                        <li><Link to="#">Post with Gallery</Link></li>
                        <li> <Link to="#">Post with Audio</Link></li>
                        <li><Link to="#">Post with Video</Link></li>
                        <li><Link to="#">Maecenas ultricies</Link></li>
                        </ul>
                    </div>
                    <div class="single-block ">
                        <h2 class="sidebar-title mb--30">Tags</h2>
                        <ul class="sidebar-tag-list">
                        <li><Link to="#"> Chilled</Link></li>
                        <li><Link to="#">Dark</Link></li>
                        <li> <Link to="#">Euro</Link></li>
                        <li><Link to="#">Fashion</Link></li>
                        <li><Link to="#">Food</Link></li>
                        <li><Link to="#">Hardware</Link></li>
                        <li><Link to="#">Hat</Link></li>
                        <li><Link to="#">Hipster</Link></li>
                        <li><Link to="#">Holidays</Link></li>
                        <li><Link to="#">Light</Link></li>
                        <li><Link to="#">Mac</Link></li>
                        <li><Link to="#">Place</Link></li>
                        <li><Link to="#">T-Shirt</Link></li>
                        <li><Link to="#">Travel</Link></li>
                        <li><Link to="#">Video-2</Link></li>
                        <li><Link to="#">White</Link></li>
                        </ul>
                    </div>
                   
                    <div class="single-block">
                        <Link to="#" class="promo-image sidebar">
                        <img src="image/others/home-side-promo.jpg" alt=""/>
                        </Link>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
        </div>
    )
}

export default Blog;