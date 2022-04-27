import React, {useState} from "react";

function Toggle() {
  const [btn, setBtn] = useState(false);
  const handleBtn = () => setBtn(prev => !prev)
  const color = btn ? 'red' : 'white';
  return <button style={{background : color }} onClick={handleBtn}>{btn ? 'ON' : 'OFF'}</button>;
}

export default Toggle;
