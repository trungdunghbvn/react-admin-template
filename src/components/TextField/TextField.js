import React, { useRef } from "react";
import "./TextField.scss";

export function TextField({ label, type, onChange, value }) {
  const inputEl = useRef(value);

  const changeTextField = () => {
    onChange(inputEl.current.value);
  };

  return (
    <div className="TextField">
      {label && (
        <div className="TextField__Label">
          <span>{label}</span>
        </div>
      )}

      <div className="TextField__Connected">
        <input
          ref={inputEl}
          type={type || "text"}
          value={value || ""}
          onChange={changeTextField}
        />
      </div>
    </div>
  );
}
