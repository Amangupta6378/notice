import React, { useState } from 'react';

function AccordionWithSelect() {
  const [selectedOption, setSelectedOption] = useState('none');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      {/* Select dropdown */}
      <select value={selectedOption} onChange={handleSelectChange}>
        <option value="none">Batch</option>
        <option value="uniques1">Uniques 1.0</option>
        <option value="uniques2">Uniques 2.0</option>
        <option value="super60">Super 60</option>
      </select>

      {/* Accordion content */}
      {/* {selectedOption !== 'none' && (
        <div className="accordion-body">
          {selectedOption === 'uniques1' && <p>Uniques 1.0 content...</p>}
          {selectedOption === 'uniques2' && <p>Uniques 2.0 content...</p>}
          {selectedOption === 'super60' && <p>Super 60 content...</p>}
        </div>
      )} */}
    </div>
  );
}

export default AccordionWithSelect;
