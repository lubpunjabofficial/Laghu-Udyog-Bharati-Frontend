import React from "react";
import "./Certificate.css";

const Certificate = () => {
  return (
    <div className="certificate-container">
      <h1 className="title">Certificate Of Origin – Laghu Udyog Bharati Punjab</h1> 


      <p className="text">
        A Certificate of Origin (CoO) is a document used in international trade.
        It is prepared by the exporter or its agent and certified by an issuing
        agency, attesting that the goods in a particular export shipment have
        been wholly produced, manufactured or processed in a particular country.
      </p>

      <p className="text">
        In short, a Certificate of Origin (CoO) is a document which is used for
        certification that the products exported are wholly obtained, produced
        or manufactured in a particular country such as India. Laghu Udyog
        Bharati is one of the agencies authorised to issue Certificate of Origin
        (Non-Preferential).
      </p>

      <p className="text">
        The Director General of Foreign Trade has developed a common electronic
        platform for issuance of Certificate of Origin through
        <span className="link"> <a href="https://coo.dgft.gov.in/"> https://coo.dgft.gov.in</a></span>.
      </p>

      <h2 className="section-title">
        Procedure for issue of Certificate of Origin in electronic form:
      </h2>

      <ul className="list">
        <li>All exporters should get registered at <a href="https://coo.dgft.gov.in"> https://coo.dgft.gov.in</a></li>
        <li>Select exporter registration under online services</li>
        <li>First time users should click “Registration”</li>
        <li>IEC code and digital signature of authorized signatory required</li>
      </ul>

      <h2 className="section-title">Process of Issue of CoO:</h2>

      <ul className="list">
        <li>Login to portal at https://coo.dgft.gov.in</li>
        <li>Click “Make new application”</li>
        <li>Choose Non-preferential scheme</li>
        <li>Select issuing agency: Laghu Udyog Bharati Punjab</li>
        <li>Upload invoice and shipment details with digital signature</li>
        <li>Pay fee ₹200 + 18% GST</li>
        <li>Download digitally signed Certificate of Origin</li>
      </ul>

   
    </div>
  );
};

export default Certificate;
