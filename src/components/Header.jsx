import React from "react";
import header1 from "../img/header1.png";
import vector1 from "../img/vector1.png";
import "./header.css";
import maskgroup2 from "../img/Mask Group 2.png";
import banner1 from "../img/banner1.png";
import Form from "./Form";
import HeaderContent from "./HeaderContent";
const Header = () => {
    return (
        <div id="relative" className="rel">
            <div
                className="d-md-none d-lg-block"
                style={{
                    height: "100vh",
                    backgroundImage: `url(${header1})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    opacity: 1,
                }}
            ></div>
            <div
                className="d-xl-none d-md-block"
                style={{
                    height: "100vh",
                    backgroundImage: `url(${banner1})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    opacity: 1,
                }}
            ></div>
            <div>
                <HeaderContent />
            </div>
            <div id="absolute" className="border border-danger rounded">
                <Form />{" "}
            </div>
        </div>
    );
};

export default Header;
