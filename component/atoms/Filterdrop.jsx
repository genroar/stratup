import PropTypes from "prop-types";
import { useState } from 'react';

const Filterdrop = ({ parent, child, style }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <div className="flex flex-row ">
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className={`w-[400px] h-[40px] flex items-center justify-between ${style}`}
          id="menu-button"
          aria-expanded={isOpen ? "true" : "false"}
          aria-haspopup="true"
        >
          <span className="text-[20px] text-medium">{selectedItem || parent}</span>
          <svg
            className="w-5 mt-4 h-5 ml-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 12l-8-8 1.5-1.5L10 9.25l6.5-6.75L18 4z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right  right-0 mt-2 w-[300px] bg-white ring-1 relative ring-black ring-opacity-5"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1" role="none">
            <a
              href="#"
              className="block px-4 py-2 w-[300px] text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
              onClick={() => handleItemClick(child)}
            >
              {child}
            </a>
            {/* Add more items here as needed */}
          </div>
        </div>
      )}
    </div>
  );
};

Filterdrop.propTypes = {
  parent: PropTypes.string.isRequired,
  child: PropTypes.string.isRequired,
  style: PropTypes.string, // Add style prop type
};

export default Filterdrop;
