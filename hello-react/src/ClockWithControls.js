import { useState } from "react";
import Clock from "./Clock";
import ClockHooks from "./ClockHooks";

function ClockWithControls() {
  const [delay, setDelay] = useState(1000);
  const [format, setFormat] = useState('HH:mm:ss');
  const [show, setShow] = useState(true);

  return (
    <div className="ClockWithControls">
      <input value={delay} onChange={(e) => setDelay(+e.target.value)} />
      <input value={format} onChange={(e) => setFormat(e.target.value)} />
      <button onClick={() => setShow(!show)}>{show ? 'Off' : 'On'}</button>
      {show && <Clock delay={delay} format={format} />}
      {show && <ClockHooks delay={delay} format={format} />}
    </div>
  );
}

export default ClockWithControls;


