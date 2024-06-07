import React from 'react'

function Home() {
    return (
        <>
            <div>
                <main>
                    <section className="hero">
                        <h1>Making a Difference, One Step at a Time</h1>
                        <p>Join our mission to create a better world.</p>
                        <button>Donate Now</button>
                    </section>
                    <section className="about">
                        <h2>About Our NGO</h2>
                        <p>We are a non-profit organization dedicated to empowering communities and promoting sustainable development. Our focus areas include education, healthcare, and environmental conservation.</p>
                        <img src="https://osa-advisory.com.hk/wp-content/uploads/2023/10/NGOs-and-Charities.jpeg" alt="About Image" />
                    </section>
                    <div className="title">Our Programs</div>
                    <section className="programs">
                        <div className="program-card">
                            <img src="https://assets.thehansindia.com/h-upload/2023/01/26/1600x960_1331858-edu.jpg" alt="Program 1" />
                            <h3>Education for All</h3>
                            <p>Providing access to quality education for underprivileged children.</p>
                            <button>Learn More</button>
                        </div>
                        <div className="program-card">
                            <img src="https://www.iifl.com/files/iifl_insights/images/healthcare-initiatives-undertaken-narendra-modis-government.webp" alt="Program 2" />
                            <h3>Healthcare Initiatives</h3>
                            <p>Improving healthcare services in remote areas.</p>
                            <button>Learn More</button>
                        </div>
                        <div className="program-card ">
                            <img src="https://qph.cf2.quoracdn.net/main-qimg-a50c0dab36e0cf25dec5beafc2bc2414-lq" alt="Program 3" />
                            <h3>Envi.Conservation</h3>
                            <p>Promoting sustainable practices and protecting natural resources.</p>
                            <button>Learn More</button>
                        </div>
                    </section>
                </main>
               
            </div>

        </>
    )
}

export default Home
