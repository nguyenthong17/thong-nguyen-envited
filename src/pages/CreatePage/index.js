import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../shared/Button";
import styles from "./index.module.css";

function CreatePage({ title }) {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    evName: "",
    hostName: "",
    stTime: "",
    stDate: "",
    endTime: "",
    endDate: "",
    location: "",
    photo: "",
  });

  const changeHandler = (e, key) => {
    setInput((prevState) => {
      return { ...prevState, [key]: e.target.value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    navigate("/event", { state: { event: input } });
  };

  useEffect(() => {
    document.title = title;
  });

  return (
    <div className={styles.root}>
      <h1 className={styles.heading}>Create your event</h1>
      <form className={styles.form} onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Event Name"
          onChange={(e) => changeHandler(e, "evName")}
          value={input.evName}
        />
        <input
          type="text"
          placeholder="Host Name"
          onChange={(e) => changeHandler(e, "hostName")}
          value={input.hostName}
        />
        <label>Starting time/date:</label>
        <div className={styles.time}>
          <input
            type="time"
            onChange={(e) => changeHandler(e, "stTime")}
            value={input.stTime}
          />
          <input
            type="date"
            onChange={(e) => changeHandler(e, "stDate")}
            value={input.stDate}
          />
        </div>
        <label>End time/date:</label>
        <div className={styles.time}>
          <input
            type="time"
            onChange={(e) => changeHandler(e, "endTime")}
            value={input.endTime}
          />
          <input
            type="date"
            onChange={(e) => changeHandler(e, "endDate")}
            value={input.endDate}
          />
        </div>
        <input
          type="text"
          placeholder="Location"
          onChange={(e) => changeHandler(e, "location")}
          value={input.location}
        />
        <input
          type="text"
          placeholder="Event Photo URL"
          onChange={(e) => changeHandler(e, "photo")}
          value={input.photo}
        />
        <Button buttonClass={styles.button}>Submit</Button>
      </form>
    </div>
  );
}

export default CreatePage;
