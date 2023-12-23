// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Image from "./component/Image";
import San from "./San";
import Footer from "./component/Footer";
import Carousel from "./component/Carousel";
import Blog from "./Blog";
import Gototop from "./component/Gototop";
import Newsitem from "./component/Newsitem";
import Vs from "./component/Vs";
// import { useState } from "react";
import Stopwatch from "./StopWatch";
function App() {
  // const [alert, setAlert] = useState();

  // const showAlert = (message, type) => {
  //   setAlert({
  //     msg: message,
  //     type: type,
  //   });
  // };

  return (
    <div className="app1">
      <Header title="𝘛𝘳𝘢𝘥𝘦 𝘓𝘪𝘯𝘬𝘴" sustainability="sustainability" />
      <Vs />
      <Carousel />
      <Image />
      <San />
      <Blog />
      <Gototop />
      <Newsitem />
      <Footer />
      <Stopwatch />
    </div>
  );
}
export default App;
