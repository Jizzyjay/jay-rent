import React from "react";
import CommonSection from "../UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../UI/AboutSection";
import { Col, Container, Row } from "reactstrap";
import BecomeDriver from "../UI/BecomeDriver";
import Drive from "../asset/cars/pexels-oleksandr-pidvalnyi-376729.jpg";
import OurMembers from "../UI/OurMembers";
import "../styles/about.css";

const About = () => {
    return (
        <Helmet title="About">
        <CommonSection title="About Us" />
        <AboutSection aboutClass="aboutPage" />

        <section className="about_page-section">
            <Container>
            <Row>
                <Col lg="6" md="6" sm="12">
                <div className="about_page-img">
                    <img src={Drive} alt="" className="w-100 rounded-3" />
                </div>
                </Col>

                <Col lg="6" md="6" sm="12">
                <div className="about_page-content">
                    <h2 className="section_title">
                    We Are Committed to Providing a Safe Ride Solution
                    </h2>
                    <p className="section_description">
                    Lorem ipsum dolor sit amet. Nam a maximus eros. Duis sit amet
                    dui turpis.t eu placerat. Nullam vel dapibus mauris, quis
                    pharetra dui. Sed arcu ex, rhoncus ut consectetur vitae,
                    molestie a mi. Donec id lacinia enim. Morbi facilisis, massa
                    sit amet sollicitudin rhoncus, orci nisl fringilla nisl, id
                    lobortis ligula turpis eget purus. Vivamus nec arcu cursus
                    tellus volutpat egestas id vel lacus.
                    </p>

                    <p className="section_description">
                    Nullam eu tempor est. Nam a maximus eros. Duis s rat. Nullam
                    vel dapibus mauris, quis pharetra dui. Sed arcu ex, rhoncus ut
                    consectetur vitae, molestie a mi. Donec id lacinia enim. Morbi
                    facilisis, massa sit amet sollicitudin rhoncus, orci nisl
                    fringilla nisl, id lobortis ligula turpis eget purus. Vivamus
                    nec arcu cursus tellus volutpat egestas id vel lacus.et
                    aliquet dui tempor ut. Quisque a arcu vitae eros fermentum
                    viverra.
                    </p>

                    <div className="d-flex align-items-center gap-3 mt-4">
                    <span className="fs-4">
                        <i class="ri-phone-line" />
                    </span>
                    <div>
                        <h6 className="section_subtitle">Need Any Help</h6>
                        <h4>+234 8141153727</h4>
                    </div>
                    </div>
                </div>
                </Col>
            </Row>
            </Container>
        </section>
        <BecomeDriver />

        <section>
            <Container>
            <Row>
                <Col lg="12" className="mb-5 text-center">
                <h6 className="section_subtitle">Experts</h6>
                <h2 className="section_title">Our Members</h2>
                </Col>
                <OurMembers />
            </Row>
            </Container>
        </section>
        </Helmet>
    );
    };

    export default About;
