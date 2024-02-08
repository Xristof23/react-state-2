import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [holidayName, setHolidayName] = useState("Horrorween");
  const [holidayDate, setHolidayDate] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    const formElements = event.target.elements;
    setHolidayDate(holidayDate);
    setHolidayName(holidayName);
    // form.reset()
  }

  return (
    <div className="container">
      <h1>Favourite Holiday Data Storage</h1>
      <h2 id="favourite-holiday">Please tell us your favourite holiday!</h2>
      <form
        className="form"
        aria-labelledby="favourite-holiday"
        onSubmit={handleSubmit}
      >
        <label htmlFor="holiday">My Favourite Holiday: </label>
        <input
          id="holiday"
          type="text"
          name="holiday"
          placeholder="e.g. Christmas"
          value={holidayName}
          onChange={(event) => setHolidayName(event.target.value)}
        />
        <label htmlFor="date">Date: </label>
        <input
          id="date"
          type="date"
          name="date"
          value={holidayDate}
          onChange={(event) => setHolidayDate(event.target.value)}
        />
        <button type="submit" className="form__submit-button">
          Submit
        </button>
      </form>
      <h2>Output of Submitted Data:</h2>
      <p>
        Favourite Holiday: <span className="output">{holidayName}</span>
      </p>
      <p>
        Date: <span className="output">{holidayDate}</span>
      </p>
    </div>
  );
}
