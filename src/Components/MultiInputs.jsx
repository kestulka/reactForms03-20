import React, { useState } from "react";
 
const MultiInputs = () => {
  const [forma, setForma] = useState({
    name: "",
    email: "",
    message: "",
  });
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForma((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Hello ${forma.name}, your email ${forma.email} is registered. Thanks for you message ${forma.message}`
    );
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={forma.name}
          onChange={handleChange}
          name="name"
        />
        <input
          type="email"
          value={forma.email}
          onChange={handleChange}
          name="email"
        />
        <textarea
          value={forma.message}
          onChange={handleChange}
          name="message"
        ></textarea>
 
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MultiInputs