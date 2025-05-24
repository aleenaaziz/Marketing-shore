import React from "react";
import "@/css/banner.css";
import { ICONS } from "@/utils/getIcons";
import AuditForm from "../AuditForm";
import Link from "next/link";
import Image from "next/image";
import { Container } from "react-bootstrap";

const BlogBanner = ({ page = "Pakistan" }) => {
  return (
    <>
      <div className="banner banner-seo ">
        <Container className="mx-auto">
          <div className="main-content">
            {/* <div className="left-section"> */}
              <div className="text-content text-center">
                <h2 className="text-6xl font-bold">
                  Blogs
                  <div> </div>
                </h2>
                <p className=" pl-52 pt-5">
                  Marketing Shore is a global marketing company offering expert
                  SEO services in {page}, focused on driving qualified rankings,
                  increasing traffic, and maximizing ROI.
                </p>
              </div>
            {/* </div> */}
          </div>
        </Container>
      </div>
    </>
  );
};

export default BlogBanner;
