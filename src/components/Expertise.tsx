import React from "react";
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <h3>📊 Fintech & Financial Systems</h3>
                    <p>I've led product development for complex financial products at scale, including BNPL systems, loan management platforms, and merchant payment solutions. I specialize in building products for underserved markets with varying digital literacy levels.</p>
                    <div className="skill-bubbles">
                        <div className="bubble-title">Domain expertise:</div>
                        <div className="bubbles">
                            <span className="bubble">Consumer Finance</span>
                            <span className="bubble">Payment Processing</span>
                            <span className="bubble">Risk Management</span>
                            <span className="bubble">Merchant Services</span>
                            <span className="bubble">Digital Identity Verification</span>
                            <span className="bubble">Field Operations</span>
                        </div>
                    </div>
                </div>

                <div className="skill">
                    <h3>🔄 Product Lifecycle & Operations</h3>
                    <p>I manage end-to-end product development from discovery through launch and optimization. This includes stakeholder management across risk, ops, and engineering teams, agile delivery, and establishing operational excellence through documentation and process design.</p>
                    <div className="skill-bubbles">
                        <div className="bubble-title">Core skills:</div>
                        <div className="bubbles">
                            <span className="bubble">Product Strategy</span>
                            <span className="bubble">Roadmapping</span>
                            <span className="bubble">User Research</span>
                            <span className="bubble">Requirements Definition</span>
                            <span className="bubble">Cross-functional Leadership</span>
                            <span className="bubble">Metrics & Analytics</span>
                            <span className="bubble">Process Design</span>
                        </div>
                    </div>
                </div>

                <div className="skill">
                    <h3>💡 Enterprise SaaS & Integration</h3>
                    <p>I've designed and implemented complex B2B systems including CRM platforms, omnichannel customer support infrastructure, and multi-party merchant portals. I focus on scalable architectures that serve diverse user needs.</p>
                    <div className="skill-bubbles">
                        <div className="bubble-title">Tech stack:</div>
                        <div className="bubbles">
                            <span className="bubble">Zoho Desk</span>
                            <span className="bubble">Vlens Integration</span>
                            <span className="bubble">Multi-channel Support Systems</span>
                            <span className="bubble">Payment Gateway Integration (Fawry, Paymob)</span>
                            <span className="bubble">Role-based Access Control</span>
                            <span className="bubble">Workflow Automation</span>
                        </div>
                    </div>
                </div>

                <div className="skill">
                    <h3>🎯 User-Centered Design</h3>
                    <p>With my technical background in HCI and computer science, I bridge product and engineering to create intuitive experiences. I conduct UX audits, create prototypes, and ensure accessibility for diverse user populations.</p>
                    <div className="skill-bubbles">
                        <div className="bubble-title">Approach:</div>
                        <div className="bubbles">
                            <span className="bubble">User Journey Mapping</span>
                            <span className="bubble">Wireframing & Prototyping</span>
                            <span className="bubble">Usability Testing</span>
                            <span className="bubble">Inclusive Design</span>
                            <span className="bubble">Mobile-First Design</span>
                            <span className="bubble">Accessibility Standards</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;