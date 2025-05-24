"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const BetterResults = () => {
  return (
    <div className="better-results-section py-5">
      <Container className="py-4">
        <h2 className="text-center mb-3">
          Expert Better Results With <span className="text-warning">Our Seo Agency</span></h2>
        <p className="text-center text-sm mb-5">Our results speaks for themselves, transforming Businesses from nearly invisible to booming</p>
        <Row className="g-4 justify-content-between align-items-center">
          <Col md={4}>
            <Image
              src="/images/Group-21.png"
              alt="Better Results"
              className="img-fluid"
              width={300}
              height={300}
            />
          </Col>
          <Col md={3}>
            <div className="center-sec">
              <span>BEFORE</span>
              <div className="arrow"><Image src={"/images/Arrow-1.png"} alt="arrow" width={300} height={300} /></div>
              <span>AFTER</span>
            </div>
          </Col>
          <Col md={4}>
            <Image
              src="/images/Group-20.png"
              alt="Better Results"
              className="img-fluid"
              width={300}
              height={300}
            />
          </Col>
        </Row>

        <div className="details">
          <div className="box">
            <span className="text-warning">104,457</span>
            <span>Annual Organic Traffic</span>
          </div>
          <div className="box">
            <span className="text-warning">26,740</span>
            <span>Ranking Keywords</span>
          </div>
          <div className="box">
            <span className="text-warning">1780%</span>
            <span>Return on investment</span>
          </div>
        </div>

        <Link className="custom-btn primary-btn" href="/">Let's Talk</Link>

      </Container>
    </div>
  );
};

export default BetterResults;
