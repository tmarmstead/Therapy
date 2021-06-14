// import { Typography } from "@material-ui/core";
import React from "react";
// import SimpleCard from "../../components/Card/card";
import SimplePaper from "../../components/Paper/paper";
import './home.css';


function HomePage() {
    return (
        <div>
            <h1 className="page-title">Stein-Greene Therapy</h1>
            <SimplePaper />
            {/* <h1>Our therapists are experienced and ready to help you navigate through a wide variety of topics. Call us now for a consultation where we can work together to get you the help you need.</h1> */}
        </div>
    )
}

export default HomePage;