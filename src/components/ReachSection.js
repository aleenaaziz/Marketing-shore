"use client"
import React, { useState } from 'react'
import CustomButton from './button'
import BarChart from './BarChart'
import { Container } from 'react-bootstrap';

const auditData = [
    { label: "Clients Retention", value: 90, height: 320 },
    { label: "Budget Growth", value: 56, height: 180 },
    { label: "ROI", value: 82, height: 270 },
    { label: "Clicks", value: 79, height: 250 },
    { label: "Conversations", value: 95, height: 320 },
];

const rankingData = [
    { label: "Clients Retention", value: 90, height: 10 },
    { label: "Budget Growth", value: 56, height: 20 },
    { label: "ROI", value: 82, height: 30 },
    { label: "Clicks", value: 79, height: 40 },
    { label: "Conversations", value: 95, height: 50 },
];

const ReachSection = () => {
    const [barData, setBarData] = useState(auditData);
    const [buttonClick, setButtonClick] = useState("audit");
    return (
        <div className="reach-sec">
            <Container fluid className="mx-auto">
                <div className='flex'>
                    <div className='left-section'>
                        <h2>Reach #1: <span> Marketing Shore’s </span> SEO Services</h2>
                    </div>
                    <div className='right-section'>
                        <p>Search Engine Optimisation (SEO) is an organic, long-term strategy that puts your website at the top of
                            Google’s search results when potential customers look for your products or services. The higher your
                            website ranks, the more clicks and conversions you will receive. While every business’s journey varies, our
                            goal is to help your business achieve top rankings through a customized SEO strategy.</p>

                        <p>
                            If you want your business to rank at the top of Google in Florida, look no further. Search “SEO Florida” and
                            see how the competition stacks up. Let’s discuss how Marketing Shore can bring your business to the
                            forefront.
                        </p>

                        <div className='button-group'>
                            <CustomButton text='Free Audit' classes={buttonClick == "audit" ? `active` : ''} onClick={() => {setBarData(auditData); setButtonClick("audit")}} />
                            <CustomButton text='Start Ranking' classes={buttonClick == "ranking" ? `active` : ''} onClick={() => {setBarData(rankingData); setButtonClick("ranking")}} />
                        </div>
                    </div>
                </div>

                <div>
                    <BarChart {...{ barData }} />
                </div>
            </Container>
        </div>
    )
}

export default ReachSection