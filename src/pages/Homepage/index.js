import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../shared/Button";
import styles from "./index.module.css";

function Homepage({ title }) {
  const navigate = useNavigate();

  const clickHandler = (e) => {
    e.preventDefault();
    navigate("/create");
  };

  useEffect(() => {
    document.title = title;
  });
  return (
    <div className={styles.root}>
      <div className={styles.imageDesktop}>
        <img
          src={
            "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ea95af2d-7f06-4f25-859c-9069519053a7/Landing_page_image.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221001T042726Z&X-Amz-Expires=86400&X-Amz-Signature=841e39d06e626b78dc3e0d9fbc893e286cdc1c238c14a6626bbb3794480f5ca8&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Landing%2520page%2520image.svg%22&x-id=GetObject"
          }
          alt="landing-page"
        />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.headingContainer}>
          <div className={styles.heading}>
            <h1>Imagine if</h1>
            <h1>Snapchat</h1>
            <h1>had events.</h1>
          </div>
          <div className={styles.paragraph}>
            <p>
              Easily host and share events with your friends across any social
              media.
            </p>
          </div>
        </div>

        <div className={styles.imageSmall}>
          <img
            src={
              "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ea95af2d-7f06-4f25-859c-9069519053a7/Landing_page_image.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221001T042726Z&X-Amz-Expires=86400&X-Amz-Signature=841e39d06e626b78dc3e0d9fbc893e286cdc1c238c14a6626bbb3794480f5ca8&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Landing%2520page%2520image.svg%22&x-id=GetObject"
            }
            alt="landing-page"
          />
        </div>

        <div>
          <Button buttonClass={styles.button} onClick={clickHandler}>
            🎉 Create my event
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
