import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import ProgressBar from "./ProgressBar";

/*
  I have refactored the code in a Container-Component Pattern (smart-dumb pattern) 
  widly used in react and improved maintainability, scalability and readability.

  Took the minimalistic approch to avoid multiple renders on a component.
  
  App Flow- 
  On first component mount(load) it sets the progress state with initial value to 0
  useEffect runs only on the first render of the component and starts the interval.
  This interval callback function runs every 300 miliseconds and check if the progress is >= 100
  If not it updates the progress by 10 and the interval continues.
  Once the progress reaches 100 it clears the interval and keeps progress at 100 and the application 
  will stop (no further renders) and clearing interval avoid any performance and memory leaks & overheads.
  
  The ProgressBar component (child component) just recieves the progress as prop and renders the progress bar template.
*/

function App() {
  const [progress, setProgress] = React.useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevValue) => {
        if (prevValue >= 100) {
          // Once the progress reaches 100 stop the interval 
          // so that we dont keep it running which may cause performance and memory overheads
          clearInterval(interval);
          return prevValue;
          // we can keep it running and start again from 0 progress 
          // just comment above 2 lines and uncomment below line, we will still have clean interval covered from the clean up function below when this component distorys
          // return 0;
        }
        return prevValue + 10;
      });
    }, 300);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, []);

  return <ProgressBar progress={progress} />;
}

export default App;
