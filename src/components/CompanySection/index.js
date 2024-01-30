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
        <p>Working Together, Through Treatment, Towards Recovery</p>
        </section>
        {/* <p class="footer"></p> */}
        
    </div>
    
    )
    }

export default CompanySection