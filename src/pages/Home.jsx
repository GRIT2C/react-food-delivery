import React from "react";
import Helment from "../components/Helmet/Helmet.js";
import { Container, Row, Col } from "reactstrap";

import heroImg from "../assets/images/hero.png";
import "../styles/hero-section.css";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Helment title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <h5 className="mb-3">ง่ายต่อการสั่งซื้อ</h5>
                <h1 className="mb-4 hero__title">
                  <span>หิว? </span>รอที่หน้าประตูได้เลย!
                </h1>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempora quod impedit odit odio qui beatae debitis eos quia?
                </p>

                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <button className="order__btn d-flex align-items-center justify-content-between">
                    Order now <i class="ri-arrow-right-s-line"></i>
                  </button>

                  <button className="all__foods-btn"><Link to='/foods'>See all foods</Link></button>
                </div>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="hero-img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helment>
  );
};

export default Home;
