import React from "react";
import header1 from "../img/header1.png";
import vector1 from "../img/vector1.png";
import "./header.css";

const Header = () => {
    return (
        <div>
        <div
            style={{
                height:"100vh",
                backgroundImage: `url(${header1})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                opacity: 1,
            }}
        >
            <div className="d-flex flex-column gap-5" style={{ padding: 80 }}>
                <img
                    src={vector1}
                    className="fs-5 bg-black"
                    alt="Vector 1"
                    style={{ width: 150, color: "white" }}
                />
                <div
                    id="take"
                    className="p-2 bd-highlight"
                >
                    Take your graphics protection to the next level with DOL Max
                    overlaminates
                </div>
                <div id="pair" className="p-2 bd-highlight">Pair with MPI 1105 wrapping film for ramped up protection</div>
                <div className="p-2 bd-highlight">Flex item 3</div>
            </div>
        </div>
        </div>
    );
};

export default Header;
