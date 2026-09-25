import { useState } from "react";

export default function Show() {
  const [show, setShow] = useState(false);
  const Showing = () => setShow(!show)
  return (
    <div>
      <button onClick={Showing}>
        {show ? "Hide" : "Show"}
      </button>

      {show && <p>Welcome to React!</p>}
    </div>
  );
}