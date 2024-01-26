import React, { useState } from 'react';
import './ResponsiveComponent.css';
import Form from './form';
import bgimage from "./image 1.png";


const ResponsiveComponent = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);


  const updateMedia = () => {
    setIsDesktop(window.innerWidth > 768);
  };

  window.addEventListener('resize', updateMedia);

  return (
   
    <div className={`container ${isDesktop ? 'desktop' : 'mobile'}`}>
        <div className='container-blue'></div>
        <div className='container-white'>
      <div className="left-section">
        {/* <div type="img" src={bgimage} className='imgsrc'  alt='An Image'></div> */}
      {/* style={{backgroundImage: `url(${image})`,backgroundRepeat:"no-repeat",backgroundSize:"contain" }} */}
        <h1>Sample Heading</h1>
        <ul>
          <li>1. Lorem ipsum dolor sit amet consectetur</li>
          <li>2. Adipisicing elit tempore dolorem</li>
          <li>3. Laborum distinctio incidunt quae voluptas tempore dolorem</li>
        </ul>
      </div>
      <div className="right-section">
        {/* <h1>Mobile Sample heading</h1> */}
        {/* <ul>
          <li>Lowmipurt dolor sit amet coachtur</li>
          <li>Adipikc sM hrpee</li>
          <li>Laborat</li>
        </ul> */}
        {/* <button onClick={() => document.getElementById('password-form').style.display = 'block'}>Create an account</button> */}
        <h1>Create an Account</h1>
        <Form/>
       
      </div>
      </div>
    </div>
  );
};

export default ResponsiveComponent;