import React from "react";
import "@/css/banner.css";
import { ICONS } from "@/utils/getIcons";
import AuditForm from "../AuditForm";
import Link from "next/link";
import Image from "next/image";
import { Container } from "react-bootstrap";

const HomeBanner = ({ page = "America" }) => {
  return (
    <>
      <div className="banner banner-seo">
        <Container className="mx-auto">
          <div className="main-content">
            <div className="left-section left-section-home">
              <div className="text-content ">
                <h2 >
                Data-Driven Digital Marketing to Skyrocket Your Business Growth
                 
                </h2>
                <p className="">
                SEO, PPC, Social Media & More – Customized Strategies for Local & Global Businesses
                </p>
                <Link className="custom-btn primary-btn" href="/">Let's Talk</Link>

                <Image src="/images/Group-1.png" alt="partners" className="mt-5" width="600" height="100" />
              </div>
            </div>
            <div className="right-section">
              <h2>GET A FREE AUDIT & COMPETITOR STRATEGY REVIEW NOW</h2>
              <AuditForm page={page} />
            </div>
          </div>
        </Container>
      </div>
      
    </>
  );
};

export default HomeBanner;
