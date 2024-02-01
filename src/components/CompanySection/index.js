import React from 'react'
import "./CompanySection.css"
import { StaticImage } from "gatsby-plugin-image"


function CompanySection() {
    return (
    <div>
        <section class="splash">
        <StaticImage
                    src="../../images/Aurora_Logo.png"
                    loading="eager"
                    width={750}
                    quality={95}
                    formats={["auto", "webp", "avif"]}
                    alt=""
                />
        <h1>Working Together, Through Treatment, Towards Recovery</h1>
       
<p>Aurora Project Lambeth is a registered charity, based in the London borough of Lambeth. The project offers support to people who are in, or about to go through, treatment for drug and or alcohol problems within the borough through a Volunteer Peer Mentoring scheme. The Aurora Project was commissioned by the Primary Care Trust (PCT) to carry forward the requests highlighted by the Patient Satisfaction Survey, carried out by the Lambeth Service Users Council and the “treatment population” within Lambeth.</p>
<p>Aurora Project Lambeth offers Peer Mentoring to individuals in treatment for substance and alcohol use within Lambeth& Wandsworth.  Aurora Project was set up by a group of individuals with experience of seeking treatment for substance or alcohol use and is governed by a board of trustees. This small organisation offers a unique service for clients, offering them the chance to get support and advice from people who have been through treatment themselves.</p>
<p>The Aurora Project is a registered charity that works to support people that have had experience of substance use.
We hope to promote the belief that those in recovery from their addictions have much to offer their local communities, and challenge the stereotype that drug & alcohol users are a constant burden on society.</p>
        </section>
        <p class="footer">Charity No. 1157492</p>
        
    </div>
    
    )
    }

export default CompanySection