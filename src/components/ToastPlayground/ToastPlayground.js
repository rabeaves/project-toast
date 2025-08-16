import React from "react";

import Button from "../Button";
import Toast from "../Toast";
import useToggle from "../../hooks/use-toggle";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [messageText, setMessageText] = React.useState("");
  const [variantType, setVariantType] = React.useState(VARIANT_OPTIONS[0]);
  const [isShown, setIsShown] = React.useState(false);

  function handleDismiss() {
    setIsShown(false);
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {isShown && (
        <Toast variant={variantType} handleDismiss={handleDismiss}>
          {messageText}
        </Toast>
      )}

      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={messageText}
              onChange={(event) => setMessageText(event.target.value)}
            ></textarea>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((x) => {
              const id = `variant-${x}`;
              return (
                <label key={x} htmlFor={id}>
                  <input
                    id={id}
                    type="radio"
                    name="variant"
                    value={x}
                    checked={x === variantType}
                    onChange={(event) => setVariantType(event.target.value)}
                  />
                  {x}
                </label>
              );
            })}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button onClick={() => setIsShown(true)}>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
