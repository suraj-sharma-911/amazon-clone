import React from 'react';
import "./Home.css";
import Product from "./Product"


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
                        id={12345678}
                        title='Cracking the Coding Interview: 189 Programming Questions and Solutions'
                        image='https://m.media-amazon.com/images/I/61mIq2iJUXL._AC_UY218_.jpg'
                        price={1032.25}
                        rating={4}
                    />
                    <Product
                        id={12345679}
                        title='RESPAWN 110 Racing Style Gaming Chair, Reclining Ergonomic Chair with Footrest, in Green (RSP-110-GRN)'
                        image='https://m.media-amazon.com/images/I/71y8rPagzDL._AC_UL320_.jpg'
                        price={12469.50}
                        rating={5}
                    />
                </div>

                <div className="home__row">
                    <Product
                        id={12345680}
                        title='Samsung 24 inch SF35 Monitor (LS24F350FHNXZA) - 1080p, Dual Monitor, Laptop Monitor, Monitor Stand/Riser/Mount Compliant, AMD Freesync, Gaming, HDMI, Black'
                        image='https://m.media-amazon.com/images/I/71EB85J+J8L._AC_UY218_.jpg'
                        price={9547}
                        rating={4}
                    />
                    <Product
                        id={12345681}
                        title='All-new Echo Dot (4th Gen) - Charcoal - bundle with Sengled Bluetooth bulb'
                        image='https://m.media-amazon.com/images/I/61G-0k098UL._AC_UY218_.jpg'
                        price={2291}
                        rating={5}
                    />
                    <Product
                        id={12345682}
                        title='New Apple iPad Pro (12.9-inch, Wi-Fi + Cellular, 256GB) - Space Gray (4th Generation)'
                        image='https://m.media-amazon.com/images/I/81Pi4nhjlwL._AC_UY218_.jpg'
                        price={4649}
                        rating={4}
                    />
                </div>

                <div className="home__row">
                    <Product
                        id={12345683}
                        title='Sceptre 35 Inch Curved UltraWide 21: 9 LED Creative Monitor QHD 3440x1440 Frameless AMD Freesync HDMI DisplayPort Up to 100Hz, Machine Black 2020 (C355W-3440UN)'
                        image='https://m.media-amazon.com/images/I/81bkp5rYYuL._AC_UY218_.jpg'
                        price={29034}
                        rating={5}
                    />
                </div>

            </div>
        </div>
    )
}

export default Home
