import React, { FC, useState, InputHTMLAttributes } from "react";

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  subLabel?: string;
  helper?: string;
  validation?: string;
  number?: boolean;
}

const Button: FC<Props> = ({
  label,
  subLabel,
  helper,
  validation,
  placeholder,
  number,
  required,
  ...rest
}) => {
  const internalStyles = `
    label {
      font-family: -apple-system, system-ui, "Segoe UI", Roboto, Helvetica, Arial,
        sans-serif;
      display: block;
      color: grey;
    }
    
    p {
      font-family: -apple-system, system-ui, "Segoe UI", Roboto, Helvetica, Arial,
        sans-serif;
      margin: 0;
      font-style: italic;
      font-size: 0.7rem;
      color: grey;
    }
    
    .validation {
      color: red;
      font-weight: 500;
      font-style: normal;
    }
    
    abbr {
      color: red;
    }
    
    .text {
      font-family: -apple-system, system-ui, "Segoe UI", Roboto, Helvetica, Arial,
        sans-serif;
      padding: 7px;
      border-radius: 6px;
      font-size: 12px;
      background: #fbfbfb;
      border: 2px solid transparent;
      height: 2vh;
      width: 15vw;
      box-shadow: 0 0 0 1px #dddddd, 0 2px 4px 0 rgb(0 0 0 / 7%),
        0 1px 1.5px 0 rgb(0 0 0 / 5%);
      :focus {
        border: 2px solid #000;
        border-radius: 4px;
      }
      :-webkit-outer-spin-button,
      :-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
      [type="number"] {
        -moz-appearance: textfield;
      }
    }
  `;

  const [validate, setValidate] = useState<boolean>(false);

  const handleOnInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    number
      ? (e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, ""))
      : undefined;
    e.currentTarget.value !== "" ? setValidate(false) : undefined;
  };

  const handleOnBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value === "" ? setValidate(true) : setValidate(false);
  };
  return (
    <>
      <style>{internalStyles}</style>
      {label && (
        <label>
          {label}
          {required && <abbr>*</abbr>}
        </label>
      )}
      {subLabel && <p>{subLabel}</p>}
      <input
        type="text"
        placeholder={placeholder ? placeholder : label}
        className="text"
        onInput={handleOnInput}
        onBlur={handleOnBlur}
        {...rest}
      />
      {helper && <p>{helper}</p>}
      {(validation || validate) && required && (
        <p className="validation">{validation || "Input a " + label}</p>
      )}
    </>
  );
};

export default Button;
