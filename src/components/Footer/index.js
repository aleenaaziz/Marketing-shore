import { Container, Row, Col } from "react-bootstrap"
// import { Facebook, Twitter, Youtube } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-5 mt-20">
      <Container>
        <Row>
          {/* Location Pages */}
          <Col md={3} sm={6} className="mb-4 mb-md-0">
            <h5 className="text-warning mb-4">Location Pages</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link href="#" className="text-white text-decoration-none hover:text-warning">
                  India
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-white text-decoration-none hover:text-warning">
                  Pakistan
                </Link>
              </li>
            </ul>
          </Col>

          {/* Services */}
          <Col md={3} sm={6} className="mb-4 mb-md-0">
            <h5 className="text-warning mb-4">Services</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link href="#" className="text-white text-decoration-none hover:text-warning">
                  SEO/Web Design/Development
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-white text-decoration-none hover:text-warning">
                  Branding/Logo/Google Ads
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-white text-decoration-none hover:text-warning">
                  Media Marketing
                </Link>
              </li>
            </ul>
          </Col>

          {/* Quick Links */}
          <Col md={3} sm={6} className="mb-4 mb-md-0">
            <h5 className="text-warning mb-4">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link href="/" className="text-white text-decoration-none hover:text-warning">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/about" className="text-white text-decoration-none hover:text-warning">
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/services" className="text-white text-decoration-none hover:text-warning">
                  Services
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/blog" className="text-white text-decoration-none hover:text-warning">
                  Blog
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/contact" className="text-white text-decoration-none hover:text-warning">
                  Contact
                </Link>
              </li>
            </ul>
          </Col>

          {/* Contact Us */}
          <Col md={3} sm={6}>
            <h5 className="text-warning mb-4">Contact Us</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <strong>Location:</strong> Pakistan (Head Office)
                <br />
                <span className="ms-4">United States</span>
              </li>
              <li className="mb-2">
                <strong>Phone:</strong> +92-348-9398540
              </li>
              <li className="mb-2">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:contact@marketinghere.net"
                  className="text-white text-decoration-none hover:text-warning"
                >
                  contact@marketinghere.net
                </a>
              </li>
              <li className="mb-2">
                <strong>Opening Hours:</strong> 24/7
              </li>
            </ul>
          </Col>
        </Row>

        {/* Social Media */}
        <Row className="mt-4">
          <Col xs={12}>
            <h5 className="text-warning mb-3">Follow Us</h5>
            <div className="d-flex gap-2">
              <a href="#" className="text-white hover:text-warning" aria-label="Facebook">
                {/* <Facebook size={24} /> */} Facebook
              </a>
              <a href="#" className="text-white hover:text-warning" aria-label="Twitter">
                {/* <Twitter size={24} /> */} Twiiter
              </a>
              <a href="#" className="text-white hover:text-warning" aria-label="YouTube">
                {/* <Youtube size={24} /> */} Youtube
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
