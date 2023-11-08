import React, { FC, InputHTMLAttributes, useState } from "react";

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  subLabel?: string;
  helper?: string;
  validation?: string;
  decimal?: number;
}

const CurrencyField: FC<Props> = ({
  label,
  subLabel,
  helper,
  validation,
  placeholder,
  required,
  decimal = 2,
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
  const [value, setValue] = useState<string>("");

  const formatCurrency = (value: string) => {
    const parts = value.split(".");
    if (value !== "" && parts.length === 1) {
      return `${parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
    } else if (value !== "" && parts.length === 2) {
      return `${parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")}.${parts[1]}`;
    }
    return "";
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.currentTarget.value.replace(/[^\d.]/g, "");
    const dotCount = inputValue.split(".").length - 1;
    if (dotCount > 1) {
      inputValue = inputValue.substring(0, inputValue.lastIndexOf("."));
    }
    const parts = inputValue.split(".");
    if (decimal === parts[1]?.length - 1) {
      setValue(value);
    } else {
      setValue(inputValue);
    }
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
        value={formatCurrency(value)}
        onInput={handleInputChange}
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

export default CurrencyField;
