import React, { FC, InputHTMLAttributes } from "react";

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {}

const Button: FC<Props> = ({ ...rest }) => {
  const internalStyles = `
    .btn {
      border: 0.1;
      border-radius: 12px;
      color: grey;
      cursor: pointer;
      display: inline-block;
      font-family: -apple-system, system-ui, "Segoe UI", Roboto, Helvetica, Arial,
        sans-serif;
      font-size: 16px;
      font-weight: 500;
      line-height: 2.5;
      outline: transparent;
      padding: 0 1rem;
      text-align: center;
      text-decoration: none;
      transition: box-shadow 0.2s ease-in-out;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
      white-space: nowrap;
      min-width: 8rem;
    }
    .btn:focus {
      box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5),
        -0.125rem -0.125rem 1rem rgba(115, 95, 95, 0.5),
        0.125rem 0.125rem 1rem rgba(95, 90, 90, 0.5);
    }
    .btn:hover {
      box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5),
        -0.125rem -0.125rem 1rem rgba(115, 95, 95, 0.5),
        0.125rem 0.125rem 1rem rgba(95, 90, 90, 0.5);
    }
    
    .btn-primary {
      background: linear-gradient(to bottom right, #ef4765, #ff9a5a);
      color: #ffffff;
      border: 0;
    }
    .btn-primary:focus {
      box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5),
        -0.125rem -0.125rem 1rem rgba(239, 71, 101, 0.5),
        0.125rem 0.125rem 1rem rgba(255, 154, 90, 0.5);
    }
    .btn-primary:hover {
      box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5),
        -0.125rem -0.125rem 1rem rgba(239, 71, 101, 0.5),
        0.125rem 0.125rem 1rem rgba(255, 154, 90, 0.5);
    }
    
    .btn-success {
      background: linear-gradient(to bottom right, green, lightgreen);
      color: #ffffff;
      border: 0;
    }
    .btn-success:focus {
      box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5),
        -0.125rem -0.125rem 1rem rgba(80, 165, 100, 0.5),
        0.125rem 0.125rem 1rem rgba(100, 200, 200, 0.5);
    }
    .btn-success:hover {
      box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5),
        -0.125rem -0.125rem 1rem rgba(80, 165, 100, 0.5),
        0.125rem 0.125rem 1rem rgba(100, 200, 200, 0.5);
    }
    
    .btn-warning {
      background: linear-gradient(to bottom right, goldenrod, gold);
      color: #000000;
      border: 0;
    }
    .btn-warning:focus {
      box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5),
        -0.125rem -0.125rem 1rem rgba(130, 150, 30, 0.5),
        0.125rem 0.125rem 1rem rgba(245, 245, 45, 0.5);
    }
    .btn-warning:hover {
      box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5),
        -0.125rem -0.125rem 1rem rgba(130, 150, 30, 0.5),
        0.125rem 0.125rem 1rem rgba(245, 245, 45, 0.5);
    }
    
    .btn-danger {
      background: linear-gradient(to bottom right, maroon, red);
      color: #ffffff;
      border: 0;
    }
    .btn-danger:focus {
      box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5),
        -0.125rem -0.125rem 1rem rgba(255, 48, 48, 0.5),
        0.125rem 0.125rem 1rem rgba(235, 95, 95, 0.5);
    }
    .btn-danger:hover {
      box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5),
        -0.125rem -0.125rem 1rem rgba(255, 48, 48, 0.5),
        0.125rem 0.125rem 1rem rgba(235, 95, 95, 0.5);
    }
    
    .btn-dark {
      background: linear-gradient(to bottom right, rgb(0, 0, 0), rgb(65, 65, 65));
      color: #ffffff;
      border: 0;
    }
    .btn-dark:focus {
      box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5),
        -0.125rem -0.125rem 1rem rgba(0, 0, 0, 0.5),
        0.125rem 0.125rem 1rem rgba(45, 45, 45, 0.5);
    }
    .btn-dark:hover {
      box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5),
        -0.125rem -0.125rem 1rem rgba(0, 0, 0, 0.5),
        0.125rem 0.125rem 1rem rgba(45, 45, 45, 0.5);
    }
    
    .btn-light {
      background: linear-gradient(
        to bottom right,
        rgb(210, 210, 210),
        rgb(255, 255, 255)
      );
      color: #000000;
      border: 0;
    }
    .btn-light:focus {
      box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5),
        -0.125rem -0.125rem 1rem rgb(188, 188, 188),
        0.125rem 0.125rem 1rem rgba(255, 255, 255, 0.5);
    }
    .btn-light:hover {
      box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5),
        -0.125rem -0.125rem 1rem rgb(188, 188, 188),
        0.125rem 0.125rem 1rem rgba(255, 255, 255, 0.5);
    }
  `;

  return (
    <>
      <style>{internalStyles}</style>
      <input type="button" className="btn" {...rest} />
    </>
  );
};

export default Button;
