import React from 'react'

function Compare() {
    return(
        <div>
            <section className="breadcrumb-section">
                <h2 className="sr-only">Site Breadcrumb</h2>
                <div className="container">
                    <div className="breadcrumb-contents">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                <li className="breadcrumb-item active">Compare</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </section>
            

            <main className="compare_area inner-page-sec-padding-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <form action="#">
                               

                                <div className="compare-table table-responsive">
                                    <table className="table mb-0">
                                        <tbody>
                                            <tr>
                                                <td className="first-column">Product</td>
                                                <td className="product-image-title">
                                                    <a href="#" className="image"><img src="image/products/product-1.jpg"
                                                            alt="Compare Product"/></a>
                                                    <a href="#" className="category">Glasses</a>
                                                    <a href="#" className="title">Rinosin Glasses</a>
                                                </td>
                                                <td className="product-image-title">
                                                    <a href="#" className="image"><img src="image/products/product-2.jpg"
                                                            alt="Compare Product"/></a>
                                                    <a href="#" className="category">Glasses</a>
                                                    <a href="#" className="title">Macro Melodi</a>
                                                </td>
                                                <td className="product-image-title">
                                                    <a href="#" className="image"><img src="image/products/product-3.jpg"
                                                            alt="Compare Product"/></a>
                                                    <a href="#" className="category">Glasses</a>
                                                    <a href="#" className="title">Oakley Sunglasses</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="first-column">Description</td>
                                                <td className="pro-desc">
                                                    <p>Eye glasses are very important for thos whos have some difficult in
                                                        their eye to see every hing clearly and perfectly</p>
                                                </td>
                                                <td className="pro-desc">
                                                    <p>Eye glasses are very important for thos whos have some difficult in
                                                        their eye to see every hing clearly and perfectly</p>
                                                </td>
                                                <td className="pro-desc">
                                                    <p>Eye glasses are very important for thos whos have some difficult in
                                                        their eye to see every hing clearly and perfectly</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="first-column">Price</td>
                                                <td className="pro-price">$295</td>
                                                <td className="pro-price">$275</td>
                                                <td className="pro-price">$395</td>
                                            </tr>
                                            <tr>
                                                <td className="first-column">Color</td>
                                                <td className="pro-color">Black</td>
                                                <td className="pro-color">Black</td>
                                                <td className="pro-color">Black</td>
                                            </tr>
                                            <tr>
                                                <td className="first-column">Stock</td>
                                                <td className="pro-stock">In Stock</td>
                                                <td className="pro-stock">In Stock</td>
                                                <td className="pro-stock">In Stock</td>
                                            </tr>
                                            <tr>
                                                <td className="first-column">Add to cart</td>
                                                <td className="pro-addtocart"><a href="#" className="add-to-cart" tabindex="0"><i
                                                            className="fas fa-shopping-cart"></i><span>ADD TO CART</span></a>
                                                </td>
                                                <td className="pro-addtocart"><a href="#" className="add-to-cart" tabindex="0"><i
                                                            className="fas fa-shopping-cart"></i><span>ADD TO CART</span></a>
                                                </td>
                                                <td className="pro-addtocart"><a href="#" className="add-to-cart" tabindex="0"><i
                                                            className="fas fa-shopping-cart"></i><span>ADD TO CART</span></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="first-column">Delete</td>
                                                <td className="pro-remove"><button><i className="fas fa-trash"></i></button></td>
                                                <td className="pro-remove"><button><i className="fas fa-trash"></i></button></td>
                                                <td className="pro-remove"><button><i className="fas fa-trash"></i></button></td>
                                            </tr>
                                            <tr>
                                                <td className="first-column">Rating</td>
                                                <td className="pro-ratting">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star-o"></i>
                                                </td>
                                                <td className="pro-ratting">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                </td>
                                                <td className="pro-ratting">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star-o"></i>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
            
        </div>
        
    )
}

export default Compare;