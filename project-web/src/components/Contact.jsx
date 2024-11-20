import React from "react";
import parse from "html-react-parser";
import "../styles/Contact.css";

function Contact(props) {
  return (
    <div id="contact">
      <div className="wrapper">
        <div className="footer">
          {props.contactSection.map((item, index) => {
            return (
              <div className="footer-section">
                {parse(item.content)}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Contact;
