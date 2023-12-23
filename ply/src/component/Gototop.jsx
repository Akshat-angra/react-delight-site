import React, { useState, useEffect } from 'react';
import './Gototop.css';

const Gototop = () => {
  // State to control button visibility
  const [isVisible, setIsVisible] = useState(false);
  // props.showAlert("succeeded","success");

  // Function to scroll to the top of the page
  const goToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    // props.showAlert("succeeded","success");
  };

  // Function to handle scroll event and show/hide the button
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Add a scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <div id='top-btn' class="btn btn-primary" title = "Go Back" abbr onClick={goToTop}>
          <i class="fa-solid fa-angle-up"></i>{/* You can use a font icon or your custom button */}
        </div>
      )}
    </div>
  );
};

export default Gototop;
