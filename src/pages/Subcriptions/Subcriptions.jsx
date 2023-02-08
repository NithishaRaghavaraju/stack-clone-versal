import React from 'react'
import "./Subcriptions.css"
import {displayRazorpay} from "./Subcription.js"
import {Link,useNavigate} from "react-router-dom"
import logoo from "../../assets/logo.png"
// import "./Subcription.js"


const Subcription = () => {
  return (
    <div id="generic_price_table">
        <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="price-heading clearfix">
                            <h1>Subscription Plan</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <div class="generic_content clearfix">
                            <div class="generic_head_price clearfix">
                                <div class="generic_head_content clearfix">
                                    <div class="head_bg"></div>
                                        <div class="head">
                                            <span>Basic</span>
                                        </div>
                                </div>

                                <div class="generic_price_tag clearfix">
                                    <span class="price">
                                        {/* <span class="sign">$</span> */}
                                        <span class="currency">FREE</span>
                                    </span>
                                </div>
                            </div>

                            <div class="generic_feature_list">
                                <ul>
                                    <li><span>Only 1 Question can be Posted</span></li>
                                    <li><span>Per day</span></li>
                                </ul>
                            </div>

                            <div class="generic_price_btn clearfix">
                                {/* <button onClick={() => displayRazorpay()}>Sign Up</button> */}
                                <Link to="/Auth"><button >Sign Up</button></Link>
                                
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="generic_content active clearfix">
                            <div class="generic_head_price clearfix">
                                <div class="generic_head_content clearfix">
                                    <div class="head_bg"></div>
                                        <div class="head">
                                            <span>Standard</span>
                                        </div>
                                </div>

                                <div class="generic_price_tag clearfix">
                                    <span class="price">
                                        <span class="sign">₹</span>
                                        <span class="currency">99</span>
                                        <span class="cent">.99</span>
                                        <span class="month">/MON</span>
                                    </span>
                                </div>
                            </div>

                            <div class="generic_feature_list">
                                <ul>
                                    <li><span>5 Questions can be Posted</span></li>
                                    <li><span>Per day</span></li>
                                </ul>
                            </div>

                            <div class="generic_price_btn clearfix">
                            <button onClick={() => displayRazorpay(100)}>Sign Up</button>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="generic_content clearfix">
                            <div class="generic_head_price clearfix">
                                <div class="generic_head_content clearfix">
                                    <div class="head_bg"></div>
                                        <div class="head">
                                            <span>Unlimited</span>
                                        </div>
                                </div>

                                <div class="generic_price_tag clearfix">
                                    <span class="price">
                                        <span class="sign">₹</span>
                                        <span class="currency">999</span>
                                        <span class="cent">.99</span>
                                        <span class="month">/MON</span>
                                    </span>
                                </div>
                            </div>

                            <div class="generic_feature_list">
                                <ul>
                                <li><span>Unlimited Questions can be posted</span></li>
                                <li><span>Per day</span></li>
                                </ul>
                            </div>

                            <div class="generic_price_btn clearfix">
                            <button onClick={() => displayRazorpay(1000)}>Sign Up</button>
                            </div>
                        </div>
                    </div>

                    

                    
                </div>
            </div>
    </div>
  )
}

export default Subcription
