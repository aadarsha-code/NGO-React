import React from 'react'
function Contact() {
    return (
        <>  
            <main>
                <section>
                    <h2 className='text-center'>Contact Us</h2>
                    <form action="#" method="post">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required />
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" required defaultValue={""} />
                        <button type="submit">Send Message</button>
                    </form>
                </section>
                <div className='section2'>
                    <h2>Our Location</h2>
                    <p>123 Main Street</p>
                    <p>City, 12345</p>
                    <p>Country</p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9476519598444!2d-74.00915268459596!3d40.71115847932918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2sNew%20York%2C%20NY%2010004%2C%20USA!5e0!3m2!1sen!2s!4v1684504107455!5m2!1sen!2s" width={600} height={450} style={{ border: 1 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                </div>
            </main>
            
        </>
    )
}

export default Contact
