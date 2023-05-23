import React from "react";
import header1 from "../img/header1.png";
import vector1 from "../img/vector1.png";
import "./header.css";
import Group194 from "../Group194.svg";
import Group195 from "../Group 195.svg";
import asset from "../Asset 2ne.svg";
import Form from "./Form";
const Header = () => {
    return (
        <div id="relative">
            <div id="absolute" className="border border-danger rounded"><Form/> </div>
            <div
                style={{
                    height: "100vh",
                    backgroundImage: `url(${header1})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    opacity: 1,
                }}
            >
                <div
                    className="d-flex flex-column gap-5"
                    style={{ padding: 80 }}
                >
                    <img
                        src={vector1}
                        className="fs-5 bg-black"
                        alt="Vector 1"
                        style={{ width: 150, color: "white" }}
                    />
                    <div id="take" className="p-2 bd-highlight">
                        Take your graphics protection to the next level with DOL
                        Max overlaminate
                    </div>
                    <div id="pair" className="p-2 bd-highlight">
                        Pair with MPI 1105 wrapping film for ramped up
                        protection
                    </div>
                    <div className="p-2 bd-highlight d-flex gap-5">
                        <div>
                            <div
                                className="border bg-dark rounded-circle d-flex justify-content-center align-items-center"
                                style={{ width: 70, height: 70 }}
                            >
                                <img
                                    src={Group194}
                                    className="fs-5 bg-black"
                                    alt="Vector 1"
                                    style={{ width: 40 }}
                                />
                            </div>
                            <div id="l1">Maximum Durability</div>
                        </div>
                        <div>
                            <div
                                className="border bg-dark rounded-circle d-flex justify-content-center align-items-center"
                                style={{ width: 70, height: 70 }}
                            >
                                <img
                                    src={Group195}
                                    className="fs-5 bg-black"
                                    alt="Vector 1"
                                    style={{ width: 40 }}
                                />
                            </div>
                            <div id="l1">Enhanced Appearane</div>
                        </div>
                        <div>
                            <div
                                className="border bg-dark rounded-circle d-flex justify-content-center align-items-center"
                                style={{ width: 70, height: 70 }}
                            >
                                <img
                                    src={asset}
                                    className="fs-5 bg-black"
                                    alt="Vector 1"
                                    style={{ width: 40 }}
                                />
                            </div>
                            <div id="l1">HighGloss</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
