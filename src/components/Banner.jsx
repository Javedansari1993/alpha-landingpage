import React from "react";
import banner1 from "../img/banner1.png";
import "./banner.css";
const Banner = () => {
    return (
        <div
            style={{
                height:"100vh",
                backgroundImage: `url(${banner1})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                opacity: 1,
            }}
        >
            <div className="d-flex flex-column gap-2" style={{padding: 80 }}>
                <h1 id="dol">DOL Max Overlaminate Films</h1>
                <p id="printed">
                    Printed graphics deserve maximum protection, DOL Max is the
                    solution.
                </p>
                <h3>Features & Benefits:</h3>
                <ul className="features d-flex flex-column gap-5">
                    <li>
                        Premium vertical durability of up to 7 years and up to 2
                        years horizontal durability protection.
                    </li>
                    <li>
                        The high gloss finish enhances the appearance of
                        graphics and adds a special touch to help your graphics
                        stand out.
                    </li>
                    <li>
                        Our digital overlaminates can be used on a variety of
                        substrates, including banners, vehicle graphics, outdoor
                        signage, and more.
                    </li>
                </ul>
                <button>Inquiry now</button>
            </div>
        </div>
    );
};

export default Banner;
