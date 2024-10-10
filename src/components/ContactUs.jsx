import React from "react";

const  ContactUs = () => {
  const handleClick = () => {
    window.open("https://wa.me/message/CYT6YKIGPYCNC1", "_blank");
  };
  return (
    <div id="contact-us-container" className="grid-contact-container">
      <input type="button" value="Entre em Contato" id="contact-us-button" onClick={handleClick}/>
    </div>
  );
};

export default ContactUs
