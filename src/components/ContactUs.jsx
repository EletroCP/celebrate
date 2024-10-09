import React from "react";

const  ContactUs = () => {
  const handleClick = () => {
    window.open("https://wa.me/message/CYT6YKIGPYCNC1", "_blank");
  };
  return (
    <div id="contact-us-container">
      <input type="button" value="Entre em Contato" id="contact-us-button" onClick={handleClick}/>
    </div>
  );
};

export default ContactUs
