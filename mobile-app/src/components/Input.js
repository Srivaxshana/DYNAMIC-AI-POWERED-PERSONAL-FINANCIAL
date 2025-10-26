import React from 'react';
import './Input.css';

const Input = ({ 
  label, 
  type = 'text', 
  placeholder, 
  value, 
  onChange, 
  name,
  showPasswordToggle = false,
  onTogglePassword
}) => {
  return (
    <div className="input-wrapper">
      {label && <label className="input-label">{label}</label>}
      <div className="input-container">
        <input
          type={type}
          className="input-field"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
          required
        />
        {showPasswordToggle && (
          <button
            type="button"
            className="password-toggle"
            onClick={onTogglePassword}
            aria-label="Toggle password visibility"
          >
            {type === 'password' ? '👁️' : '🙈'}
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;