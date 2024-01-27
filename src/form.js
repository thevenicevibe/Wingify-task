import React, { useState } from "react";
import "./ResponsiveComponent.css";

const Form = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [agency, setAgency] = useState(false);
  const [individual, setIndividual] = useState(false);
  const [UserErr, setUserError] = useState(false);
  const [showError, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // submit form data here
  };

  return (
   
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Create an account</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)} required
      />
        {UserErr ? <span>Please fill valid Username</span> : ""}

      <label htmlFor="password">Choose a password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)} required
      />
       {UserErr ? <span>Please fill valid Username</span> : ""}

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
      <label htmlFor="agency">Agency</label>
      <input
        type="radio"
        id="agency"
        checked={agency}
        onChange={(e) => setAgency(e.target.checked)}
      />
      <label htmlFor="individual">individual</label>
      <input
        type="radio"
        id="agency"
        checked={individual}
        onChange={(e) => setIndividual(e.target.checked)}
      />
      </div>
      {/* <label htmlFor="agency">Agency</label>
      <input
        type="checkbox"
        id="agency"
        checked={agency}
        onChange={(e) => setAgency(e.target.checked)}
      />
      <label htmlFor="individual">individual</label>
      <input
        type="checkbox"
        id="agency"
        checked={agency}
        onChange={(e) => setAgency(e.target.checked)}
      /> */}

      <button type="submit">Submit</button>
    
    </form>
    
  );
    
};

export default Form;
