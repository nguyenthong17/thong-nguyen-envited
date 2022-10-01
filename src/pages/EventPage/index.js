import React, { useEffect } from "react";
// import { useLocation } from "react-router-dom";

import styles from "./index.module.css";

function EventPage({ title }) {
  // const { state } = useLocation();

  useEffect(() => {
    document.title = title;
  });
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.detail}>
          <div className={styles.title}>
            <h1>Birthday Bash</h1>
            <p>
              Hosted by <b>Elysia</b>
            </p>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img
            src={
              "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/17d6299f-f287-469c-a403-b8ab9d75aa62/Birthday_cake.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221001T042727Z&X-Amz-Expires=86400&X-Amz-Signature=a0994a52c4a58f153b4b6939774296b6520bf793bf886a2c4c3684f911724755&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Birthday%2520cake.png%22&x-id=GetObject"
            }
            alt="event-pic"
          />
        </div>
      </div>
    </div>
  );
}

export default EventPage;
