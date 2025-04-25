import { JSX } from "react";
import { useState } from "react";

function UseStateandEvents(): JSX.Element | null {
  const [number, setNumber] = useState<number>(0);
  return (
    <div>
      <div className="mb-1">hello</div>
      <button> OnClick</button>
    </div>
  );
}
export default UseStateandEvents;
