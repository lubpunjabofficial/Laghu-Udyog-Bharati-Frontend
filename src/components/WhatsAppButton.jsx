import React from "react";
import { FaWhatsapp } from "react-icons/fa"; // react-icons install hona chahiye
import "./WhatsAppButton.css";

const WhatsAppButton = () => {
  const phoneNumber = "92161-25258"; 
  const message = "Hi LUB Punjab, I want to know more about membership."; // Default message

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="whatsapp-float" onClick={handleClick}>
      <FaWhatsapp className="whatsapp-icon" />
    </div>
  );
};

export default WhatsAppButton;