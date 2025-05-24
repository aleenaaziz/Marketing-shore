import React from "react";
import "@/css/banner.css";
import { ICONS } from "@/utils/getIcons";
import AuditForm from "../AuditForm";
import Link from "next/link";
import Image from "next/image";
import { Container } from "react-bootstrap";

const SeoBanner = ({ page = "Pakistan" }) => {
  return (
    <>
      <div className="banner banner-seo">
        <Container className="mx-auto">
          <div className="main-content">
            <div className="left-section">
              <div className="text-content">
                <h2>
                  #1 SEO Services in{" "}
                  <div>
                    {" "}
                    <span>
                      {page} {ICONS?.chartIcon}
                    </span>{" "}
                  </div>
                </h2>
                <p>
                  Marketing Shore is a global marketing company offering expert
                  SEO services in {page}, focused on driving qualified rankings,
                  increasing traffic, and maximizing ROI.
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
      <div className="sub-banner">
        <p>SEO Services in {page}</p>
      </div>
    </>
  );
};

export default SeoBanner;
