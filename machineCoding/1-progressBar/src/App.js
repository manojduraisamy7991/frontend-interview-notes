import { useState } from "react";

import ProgressBar from "./component/ProgressBar";
import Button from "./component/Button";
import "./styles.css";

let timer = null;

export default function App() {
  const [completedPercentage, setCompletedPercentage] = useState(0);
  const [stop, setStop] = useState(false);

  const handleOnclick = () => {
    if (stop) {
      clearInterval(timer);
      timer = null;
      setStop(false);
      return;
    }

    setStop(true);
    let i = parseInt(completedPercentage);

    timer = setInterval(() => {
      i += 5;
      let per = `${i.toString()}%`;
      setCompletedPercentage(per);

      if (i >= 100) {
        clearInterval(timer);
        timer = null;
        setStop(false);
      }
    }, 500);
  };

  return (
    <div className="App">
      <h1>Progress Bar </h1>
      <ProgressBar completedPercentage={completedPercentage} />
      <Button handleClick={handleOnclick} label={stop ? "stop" : "start"} />
    </div>
  );
}
