import React from "react";
import "./CompaniesStyle.css";
import img01 from "../assets/1.jpg";
import img02 from "../assets/2.jpg";
import img03 from "../assets/3.jpg";
import img04 from "../assets/4.jpg";

const Companies = () =>
{
    return(
        <section className="c-wrapper">
            <div className="c-container">
                <img src={img01} alt=""/>
                <img src={img02} alt=""/>
                <img src={img03} alt=""/>
                <img src={img04} alt=""/>
                <img src={img03} alt=""/>
                <img src={img04} alt=""/>
            </div>
        </section>
    )
}

export default Companies;
