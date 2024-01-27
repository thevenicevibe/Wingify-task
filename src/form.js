import React, { useState } from "react";
import "./ResponsiveComponent.css";

const Form = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [agency, setAgency] = useState(false);
  const [individual, setIndividual] = useState(false);
  const [UserErr, setUserError] = useState(false);
  const [showError, setError] = useState({});

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const validateForm = () => {
    let newErrors = {};

    // Validate username
    if (!formData.username.trim()) {
      newErrors.username = 'Please fill the valid username';
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = 'Valid email is required';
    }

    // Validate password
    if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }

    setError(newErrors);

    // Return true if there are no errors
    return Object.keys(newErrors).length === 0;
  };
 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Process form data (submit to server, etc.)
      console.log('Form submitted:', formData);
    } else {
      console.log('Form has errors. Please correct them.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
   
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Create an account</label>
      <input
        type="text"
        id="username"
        value={FormData.username}
        onChange={handleChange}
        // (e) => setUsername(e.target.value)
      />
       {showError.username && <span style={{color:"red"}}>{showError.username}</span>}

      <label htmlFor="password">Choose a password</label>
      <input
        type="password"
        id="password"
        value={FormData.password}
        onChange={handleChange}
      />
       {showError.password && <span style={{color:"red"}}>{showError.password}</span>}

      <label htmlFor="dob">Date of birth (Optional)</label>
      <div className="dob-group">
        <div className="date">
        <label htmlFor="month">Date</label>
        <input type="date" id="dob" name="dob" />
        {UserErr ? <span>Please fill valid date</span> : ""}
        </div>
        <div className="month">
        <label htmlFor="month">Month</label>
        <input type="month" id="month" name="month" />
        </div>
        <div className="year">
        <label htmlFor="year">Year</label>
        <input type="number" id="year" name="year" min="1900" max="2022" />
        </div>
      </div>

      <label htmlFor="agency">Are you an agency individual?</label>
      <div className="checkbox-group">
      
      <input
        type="radio"
        id="agency"
        checked={agency}
        onChange={(e) => setAgency(e.target.checked)}
      />
      <label htmlFor="agency">Agency</label>
      <input
        type="radio"
        id="agency"
        checked={individual}
        onChange={(e) => setIndividual(e.target.checked)}
      />
       <label htmlFor="individual">individual</label>
      </div>
    

      <button type="submit">Submit</button>
    
    </form>
    
  );
    
};

export default Form;
