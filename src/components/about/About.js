import React from "react";
import Card from "../card/Card";


function About() {
    return (
        <div className="container">
            <h1>SERVICES</h1>
            <h6>TechloSet Solutions aspires to enhance the productivity and growth of your business by providing 'Smart Solutions' and 'Digitally Transforming' your business processes. Using latest state-of-the-art Technologies, we're providing the following services to bring life in your product.</h6>
            <div className="row">
                <div className="col col-sm-4">
                    <Card title="Mobile App Development" />
                </div>
                <div className="col col-sm-4">
                    <Card title="Web App Development"/>
                </div>
                <div className="col col-sm-4">
                    <Card title="ISo App Development"/>
                </div>
                <div className="col col-sm-4">
                    <Card title=" App Development"/>
                </div>
                <div className="col col-sm-4">
                    <Card title="Word Press App Development"/>
                </div>
            </div>
        </div>
    )
}

export default About;