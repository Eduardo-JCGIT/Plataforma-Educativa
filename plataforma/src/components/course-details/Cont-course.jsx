import React, { useState } from "react";

const Accordion = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    if (activeSection === section) {
      setActiveSection(null);
    } else {
      setActiveSection(section);
    }
  };

  return (
    <div className="accordion">
      <div
        className={`section ${activeSection === "introduction" ? "active" : ""}`}
      >
        <button className="section-header" onClick={() => toggleSection("introduction")}>
          <p>Introducción</p>
          <div className="color-red-arco"></div>
        </button>
        {activeSection === "introduction" && (
          <div className="section-content">
            <ul>
              <li>Acerca del curso</li>
              <li>Qué es Laravel</li>
              <li>Cómo instalar Laravel</li>
            </ul>
          </div>
        )}
      </div>
      <div
        className={`section ${activeSection === "knowledge" ? "active" : ""}`}
      >
        <button className="section-header" onClick={() => toggleSection("knowledge")}>
          Conocimiento y explorando
          <div className="color-red-arco"></div>
        </button>
        {activeSection === "knowledge" && (
          <div className="section-content">
            <ul>
              <li>Explorando la estructura</li>
              <li>Usando PHP artisan serve</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
