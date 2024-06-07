import React from 'react'

function Footer() {
  return (
    <>

  <footer style={{ color: 'white', padding: '20px 0'}}>
    <div style={{maxWidth: 1200, margin: 'auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
      {/* Company Info */}
      <div style={{flex: 1, minWidth: 200, margin: 10}}>
        <h3 style={{color: '#ECF0F1'}}>NGO</h3>
        <p style={{color: '#BDC3C7'}}>123 Main Street <br />City, State, 12345</p>
       
      </div>
      {/* Navigation Links */}
      <div style={{flex: 1, minWidth: 200, margin: 10}}>
        <h3 style={{color: '#ECF0F1'}}>Quick Links</h3>
        <ul style={{listStyleType: 'none', padding: 0}}>
          <li><a href="#" style={{color: '#BDC3C7', textDecoration: 'none'}}>Home</a></li>
          <li><a href="#" style={{color: '#BDC3C7', textDecoration: 'none'}}>About Us</a></li>
          <li><a href="#" style={{color: '#BDC3C7', textDecoration: 'none'}}>Programs</a></li>
          <li><a href="#" style={{color: '#BDC3C7', textDecoration: 'none'}}>Contact</a></li>
          
        </ul>
      </div>
      {/* Social Media Links */}
      <div style={{flex: 1, minWidth: 200, margin: 10}}>
        <h3 style={{color: '#ECF0F1'}}>Follow Us</h3>
        <div>
          <a href="#" style={{color: '#BDC3C7', textDecoration: 'none', marginRight: 10}}><i class='fa-brands fa-facebook'></i></a>
          <a href="#" style={{color: '#BDC3C7', textDecoration: 'none', marginRight: 10}}><i class='fa-brands fa-twitter'></i></a>
          <a href="#" style={{color: '#BDC3C7', textDecoration: 'none', marginRight: 10}}><i class='fa-brands fa-instagram'></i></a>
        </div>
      </div>
      {/* Contact Information */}
      <div style={{flex: 1, minWidth: 200, margin: 10}}>
        <h3 style={{color: '#ECF0F1'}}>Contact Us</h3>
        <p style={{color: '#BDC3C7'}}>Email: info@company.com</p>
        <p style={{color: '#BDC3C7'}}>Phone: (123) 456-7890</p>
      </div>
     
    </div>
    <p className='mt-5' style={{color: '#BDC3C7'}}>© 2024 Company Name. All rights reserved.</p>
  </footer>



    </>
  )
}

export default Footer
