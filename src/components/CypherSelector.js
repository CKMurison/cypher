import React, { useState } from "react";

const CypherSelector = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open); 
  };

  return (
    <div>
      <button onClick={handleOpen}>Dropdown</button>
      {open ? <div>Is Open</div> : <div>Is Closed</div>}
    </div>
  );
};

export default CypherSelector;
