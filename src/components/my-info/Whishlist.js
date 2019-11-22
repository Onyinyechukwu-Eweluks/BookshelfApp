import React from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'



function Whishlist() {
    return(
        <div>
            <section class="breadcrumb-section">
            <h2 class="sr-only">Site Breadcrumb</h2>
            <div class="container">
                <div class="breadcrumb-contents">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                    <li class="breadcrumb-item"><Link to="index.html">Home</Link></li>
                    <li class="breadcrumb-item active">Wishlist</li>
                    </ol>
                </nav>
                </div>
            </div>
            </section>
            
            <div class="cart_area inner-page-sec-padding-bottom">
            <div class="container">

                        <Table class="table" responsive>
                        <thead>
                            <tr>
                            <th class="pro-thumbnail">Image</th>
                            <th class="pro-title">Product</th>
                            <th class="pro-price">Price</th>
                            <th class="pro-quantity">Quantity</th>
                            <th class="pro-subtotal">Total</th>
                            <th class="pro-remove">Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td class="pro-thumbnail "><Link to="#"><img src="image/products/product-1.jpg" alt="Product" class= "image"/></Link></td>
                            <td class="pro-title"><Link to="#">Rinosin Glasses</Link></td>
                            <td class="pro-price"><span>$395.00</span></td>
                            <td class="pro-quantity">
                                <div class="pro-qty">
                                <div class="count-input-block">
                                    <input type="number" class="form-control text-center" value="1"/>
                                </div>
                                </div>
                            </td>
                            <td class="pro-subtotal"><span>$395.00</span></td>
                            <td class="pro-remove"><Link to="#"><i class="far fa-trash-alt"></i></Link></td>
                            </tr>
                            <tr>
                            <td class="pro-thumbnail"><Link to="#"><img src="image/products/product-2.jpg" alt="Product" class= "image" /></Link></td>
                            <td class="pro-title"><Link to="#">Silacon Glasses</Link></td>
                            <td class="pro-price"><span>$275.00</span></td>
                            <td class="pro-quantity">
                                <div class="pro-qty">
                                <div class="count-input-block">
                                    <input type="number" class="form-control text-center" value="1"/>
                                </div>
                                </div>
                            </td>
                            <td class="pro-subtotal"><span>$550.00</span></td>
                            <td class="pro-remove"><Link to="#"><i class="far fa-trash-alt"></i></Link></td>
                            </tr>
                            <tr>
                            <td class="pro-thumbnail "><Link to="#"><img src="image/products/product-3.jpg" alt="Product" class= "image"/></Link></td>
                            <td class="pro-title"><Link to="#">Easin Glasses</Link></td>
                            <td class="pro-price"><span>$295.00</span></td>
                            <td class="pro-quantity">
                                <div class="pro-qty">
                                <div class="count-input-block">
                                    <input type="number" class="form-control text-center" value="1"/>
                                </div>
                                </div>
                            </td>
                            <td class="pro-subtotal"><span>$295.00</span></td>
                            <td class="pro-remove"><Link to="#"><i class="far fa-trash-alt"></i></Link></td>
                            </tr>
                            <tr>
                            <td class="pro-thumbnail image"><Link to="#"><img src="image/products/product-4.jpg" alt="Product" class= "image"/></Link></td>
                            <td class="pro-title"><Link to="#">Macrox Glasses</Link></td>
                            <td class="pro-price"><span>$220.00</span></td>
                            <td class="pro-quantity">
                                <div class="pro-qty">
                                <div class="count-input-block">
                                    <input type="number" class="form-control text-center" value="1"/>
                                </div>
                                </div>
                            </td>
                            <td class="pro-subtotal"><span>$220.00</span></td>
                            <td class="pro-remove"><Link to="#"><i class="far fa-trash-alt"></i></Link></td>
                            </tr>
                        </tbody>
                        </Table>
                   
            </div>
            </div>
        </div>
    )
}

export default Whishlist;