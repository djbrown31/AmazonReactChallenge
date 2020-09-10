import React from 'react'
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt=""
                />

                <div className="home__row">
                    <Product
                        id="12321341"
                        title="The Lean Startup"
                        price={29.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                        rating={5}
                    />
                    <Product
                        id="49538094"
                        title="Stand Mixer, Cusimax 5-Quart 800W Dough Mixer, Tilt-Head Electric Mixer with Stainless Steel Bowl, Dough Hook, Mixing Beater and Whisk, CMKM-150, Black"
                        price={239.0}
                        image="https://m.media-amazon.com/images/I/61S1+6AY13L._AC_UY218_.jpg"
                        rating={4}
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="4903850"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                        price={199.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466.jpg"
                        rating={3}
                    />
                    <Product
                        id="23445930"
                        title="Amazon Echo (3rd Generation) | Smart Speaker with Alexa, Charcoal Fabric"
                        price={98.99}
                        image="https://m.media-amazon.com/images/I/6182S7MYC2L._AC_UY218_.jpg"
                        rating={5}
                    />
                    <Product
                        id="3254354345"
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB - Silver (4th Generation"
                        price={598.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                        rating={4}
                    />
                </div>
                <div className="home__row">
                    <Product id="90829332"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide"
                        price={1094.98}
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                        rating={4}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
