"use client"
import { useState } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import { motion } from "framer-motion"

export default function SeoProcess() {
    const [activeStep, setActiveStep] = useState("Planning")

    const processSteps = [
        {
            id: "Planning",
            title: "Planning",
            description:
                "<span>Once we've got a solid strategy to take over the search results, we can get to work. Cutting through the digital noise and reaching your ideal customer through organic search requires optimizing your website through best-practice SEO, and a strong content marketing plan.</span> <br /> <br /> <span>After understanding your company, to ensure our SEO services are a good fit, we start implementing the  work right away.Search Engine Optimization is a long term strategy but it's even longer if your SEO team is slow to implement.Delays gets stuff done and doesn't mess around. Here is our step by step process.</span>",
        },
        {
            id: "SiteStructure",
            title: "Site Structure",
            description:
                "We analyze and optimize your website's architecture to ensure search engines can easily crawl and index your content. This includes improving URL structure, internal linking, site speed, mobile responsiveness, and technical SEO elements.",
        },
        {
            id: "ContentDevelopment",
            title: "Content Development",
            description:
                "Our content development process is thorough and powerful. We create high-quality, keyword-optimized content that addresses your audience's needs while signaling relevance to search engines. This includes blog posts, service pages, and other valuable resources.",
        },
        {
            id: "AuthorityBuilding",
            title: "Authority Building",
            description:
                "We implement strategies to build your site's authority through quality backlinks, social signals, and online reputation management. This helps search engines recognize your site as a trusted source of information in your industry.",
        },
        {
            id: "MonitorGrow",
            title: "Monitor & Grow",
            description:
                "SEO is an ongoing process. We continuously monitor your site's performance, analyze metrics, and make data-driven adjustments to your strategy. This ensures sustainable growth and helps you stay ahead of algorithm changes and competitors.",
        },
    ]

    const handleStepClick = (stepId) => {
        setActiveStep(stepId)
    }

    return (
        <div className="seo-process-section py-5">
            <Container className="px-4 py-5">
                <Row className="position-relative">
                    <Col lg={4} className="mb-4 mb-lg-0">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                            <h2 className="mb-4 text-white">
                                A Proven <span className="text-warning">SEO</span> Process
                            </h2>
                            <p className="text-light">
                                After getting to know your business, we ensure that our SEO services align with your goals and begin
                                implementing the strategy immediately. SEO is a long-term investment, but the process takes even longer
                                if your team delays execution. At Marketing Shore, we don't waste time — we get things done efficiently
                                and effectively. Here's our step-by-step approach to delivering results.
                            </p>
                        </motion.div>
                    </Col>

                    <div className="col-lg-2 d-none d-lg-block" style={{ position: "relative" }}>
                        <div className="vertical-line"></div>
                        <div className={`timeline-dot ${activeStep}`}></div>
                    </div>

                    <Col lg={6}>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
                            <div className="timeline-container">
                                {processSteps.map((step, index) => (
                                    <motion.div
                                        key={step.id}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: 0.1 * index }}
                                        className="mb-4"
                                    >
                                        <Button
                                            variant={activeStep === step.id ? "warning" : "outline-warning"}
                                            className={`mb-3 ${activeStep === step.id ? "text-dark fw-bold" : "text-warning"}`}
                                            onClick={() => handleStepClick(step.id)}
                                        >
                                            {step.title}
                                        </Button>

                                        {activeStep === step.id && (
                                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="step-description mb-3">
                                                <p className="text-light" dangerouslySetInnerHTML={{ __html: step.description }} />
                                            </motion.div>
                                        )}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
