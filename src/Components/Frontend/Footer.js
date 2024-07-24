import React from "react";

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={sectionStyle}>
        <h3>About Us</h3>
        <p>
          Welcome to TotalHealth Hub, your one-stop market for all your supplimentary 
          needs. Our platform provides you a seamless and enjoyable shopping experience. 
            We offer a wide range of products to cater to your health and wellness needs.
        </p>
      </div>
      <div style={sectionStyle}>
        <h3>Terms</h3>
        <p>
          By using TotalHealthHub, you agree to our terms and conditions. We value
          your privacy and strive to protect your personal information. For more
          details, please read our full terms and privacy policy.
        </p>
      </div>
      <div style={sectionStyle}>
        <h3>Location</h3>
        <p>Find us at our office location:</p>
        <div style={mapContainerStyle}>
          <iframe
            title="TotalHealthHub Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31910.130919054183!2d36.80081176029106!3d-1.3157376101800347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1053bc7118e7%3A0xb365376f1d28175!2sNairobi%20West%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1721806728389!5m2!1sen!2ske"
           
            width="300"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </footer>
  );
};

// Styles
const footerStyle = {
  display: "flex",
  justifyContent: "space-around",
  padding: "20px",
  backgroundColor: "#f8f9fa",
  borderTop: "1px solid #dee2e6",
};

const sectionStyle = {
  flex: "1",
  margin: "0 20px",
};

const mapContainerStyle = {
  marginTop: "10px",
};

export default Footer;
