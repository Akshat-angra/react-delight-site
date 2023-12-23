// import React from "react";
// class Clock extends React.Component {
//   state = {
//     time: new Date(),
//   };
//   constructor() {
//     super();
//   }

//   componentDidMount() {
//     this.interval = setInterval(() => {
//       this.setState({ time: new Date() });
//     }, 1000);
//   }
//   componentDidUpdate() {
//     console.log("Clock Updated");
//   }

//   componentWillUnmount() {
//     clearInterval(this.interval);
//     console.log("Clock Component Unmounted");
//   }

//   render() {
//     return (
//       <>
//         <h1 align="center">{this.state.time.toLocaleTimeString()}</h1>
//       </>
//     );
//   }
// }

// export default Clock;

// import React, { Component } from "react";
// class Stopwatch extends Component {
//   state = {
//     time: 0,
//     reset: false,
//   };

//   updateInterval = () => {
//     this.interval = setInterval(() => {
//       var second = parseInt(this.state.time);
//       this.setState({
//         time: second + 1,
//       });
//     }, 1000);
//   };

//   constructor() {
//     super();
//   }

//   componentDidMount() {
//     this.updateInterval();
//     console.log("State Updated");
//   }

//   componentDidUpdate() {
//     if (this.state.reset) {
//       this.setState({ time: 0, reset: false });
//     }
//     clearInterval(this.interval);
//     this.updateInterval();
//   }

//   reset = () => {
//     this.setState({ reset: true });
//   };

//   render() {
//     return (
//       <>
//         <h1>{this.state.time}</h1>
//         <button onClick={this.reset}>Reset</button>
//       </>
//     );
//   }
// }
// export default Stopwatch;

// Hooks in react

// import { useState } from "react";

// export default function State() {
//   // Using the useState hook to create a state variable 'name' with an initial value of "Ansh, Ansh"
//   const [name, setName] = useState("Ansh");

//   // Function to update the 'name' state
//   const handleButtonClick = () => {
//     // Update the 'name' state with a new value
//     setName("Abhijeet");
//   };

//   return (
//     <div>
//       <h1>Name: {name}</h1>
//       {/* Button that, when clicked, calls the handleButtonClick function to update the 'name' state */}
//       <button onClick={handleButtonClick}>Update Name</button>
//     </div>
//   );
// }

// input and counter

import React, { useState } from "react";

export default function MyComponent() {
  const [inputData, setInputData] = useState("");

  const change = (event) => {
    setInputData(event.target.value.toLowerCase());
  };
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <input
        value={inputData}
        onChange={change}
        type="text"
        placeholder="Enter Lowercase Data"
      />
      <h1>{inputData.toUpperCase()}</h1>
    </div>
  );
}
