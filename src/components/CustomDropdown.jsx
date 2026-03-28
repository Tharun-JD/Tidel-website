import React, { useState, useRef, useEffect } from 'react';

const CustomDropdown = ({ options, placeholder, value, onChange, className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value || '');
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelect = (optionValue) => {
    setSelectedValue(optionValue);
    setIsOpen(false);
    if (onChange) {
      onChange(optionValue);
    }
  };

  const selectedOption = options.find(opt => opt.value === selectedValue);

  return (
    <div className={`custom-dropdown ${className}`} ref={dropdownRef}>
      <button
        type="button"
        className={`dropdown-trigger ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={selectedOption ? 'selected' : 'placeholder'}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <svg className="dropdown-icon" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="dropdown-menu">
          {options.map((option, index) => (
            <button
              key={option.value}
              type="button"
              className={`dropdown-option ${selectedValue === option.value ? 'selected' : ''}`}
              onClick={() => handleSelect(option.value)}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
