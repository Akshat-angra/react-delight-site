import React, { useState } from 'react';
import './san.css';

const Quote2 = () => {
  const [expanded, setExpanded] = useState(false);

  // Function to toggle the visibility of additional text
  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className='text'>
      <h4>A.S.Trade Links : WHERE INNOVATION MEETS QUALITY</h4>
      <p className="para">A.S.Trade Links is a one-stop destination for all your home furnishing needs, and it is proud to be recognised as one of the best plywood traders in India by so many homeowners. We provide functional benefits with our innovative range of products, whether it is the living room, bedroom, bathroom, or kitchen.</p>
      <p className="para">A.S.Trade Links is the most reliable and authentic plywood Trader in India. We offer products with high stiffness and high strength. Every one of them comes with special features and technical specifications. We successfully trades high-quality plywood, allowing customers to select from a variety of options. It has two major product categories: plywood and laminates, making us one of the leading plywood traders in India.</p>
      {expanded && (
        <>
          <strong className='strong'>What does it take to be a prime plywood manufacturer in India?</strong>
          <p className="para1">As one of the top plywood manufacturers in India, we are dedicated to creating the best ply board, laminate, and veneer sheets for any interior. The most incredible product features that no other plywood companies offer are <span className='pie'>ViroKill Technology</span> and <span className='pie'>Firewall Technology</span> Protection. All our plywood are available in varied thicknesses to perfectly suit your interior design needs. We understand your requirements and offer a variety of best ply boards for you to choose from.</p>
          <strong className='strong'>Precision Manufacturing By CenturyPly</strong>
          <p className='para1'>A.S.Trade Links provides its customers with a combination that only limited plywood companies provide in India. Unique product features paired with precision manufacturing! You can never go wrong with the top-notch plywood manufacturer in India. Our endearing commitment to providing customers with quality products such as Boiling Waterproof grade plywood is what distinguishes us as one of the best plywood manufacturers in India.</p>
          <strong className='strong'>Renovating Homes Through Innovation</strong>
          <p className='para1'>Since the early 2000's, we have been providing our customers with authentic quality at reasonable prices. A.S.Trade Links has been consistently known as the best plywood brand in India due to its wide variety of designs, excellent quality and competitive pricing. Your interiors deserve the best, after all and we deliver exactly that!</p>
        </>
      )}
      <button className="btn btn-light" id='btn'  onClick={toggleExpand}>
        {expanded ? 'Read less' : 'Read more'}
      </button>
    </div>
  );
};

export default Quote2;
