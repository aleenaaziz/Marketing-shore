"use client"
import { Container, Row, Col, Card } from "react-bootstrap"
import "@/css/sections.css";
import Image from "next/image";

export default function SeoServices({ headingName = "" }) {
  const services = [
    {
      title: "On-Page SEO",
      icon: "/images/Vector.png",
      description:
        "Search Engine Optimization or SEO for short, is considered an organic method to marketing your business nowadays to drive your site's ranking. SEO ensures you sit on top getting your website listed as the first result on Google when someone searches for your product or service.",
    },
    {
      title: "Off-Page SEO",
      icon: "/images/SVG.png",
      description:
        "Search Engine Optimization or SEO for short, is considered an organic method to marketing your business nowadays to drive your site's ranking. SEO ensures you sit on top getting your website listed as the first result on Google when someone searches for your product or service.",
    },
    {
      title: "Content Writing",
      icon: "/images/Group.png",
      description:
        "Search Engine Optimization or SEO for short, is considered an organic method to marketing your business nowadays to drive your site's ranking. SEO ensures you sit on top getting your website listed as the first result on Google when someone searches for your product or service.",
    },
    {
      title: "Website Migration",
      icon: "/images/Container.png",
      description:
        "Search Engine Optimization or SEO for short, is considered an organic method to marketing your business nowadays to drive your site's ranking. SEO ensures you sit on top getting your website listed as the first result on Google when someone searches for your product or service.",
    },
  ]

  return (
    <div className="seo-services-section position-relative py-5">
      <div className="diagonal-background"></div>
      <Container className="py-4">
        <h2 className="text-center mb-5">
          Our <span className="text-warning">{headingName}</span> SEO Services Includes
        </h2>
        <Row className="g-4">
          {services.map((service, index) => (
            <Col md={6} key={index}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <Image src={service.icon} alt={service.title} className="mb-3" width={50} height={50} />
                  <Card.Title as="h5" className="mb-3 fw-bold">
                    {service.title}
                  </Card.Title>
                  <p className="text-muted small">{service.description}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}
