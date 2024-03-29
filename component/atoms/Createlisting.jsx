import { useState, useEffect, useRef } from 'react';

const Createlisting = ({ child, parent }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const dropdownRef = useRef(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div className="">
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="w-[450px] h-[40px] relative rounded-[40px] border border-gray-300 justify-between px-[20px] shadow-sm items-center flex bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          {selectedItem || child}
          <div>
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              onClick={(e) => {
                e.stopPropagation(); // Prevents the button from closing the dropdown
                setIsOpen(!isOpen);
              }}
            >
              <path
                fillRule="evenodd"
                d="M10 12l-8-8 1.5-1.5L10 9.25l6.5-6.75L18 4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-[450px] rounded-md bg-white ring-1 ring-black ring-opacity-5 z-10"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1" role="none">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
              onClick={() => handleItemClick(child)}
            >
              {child}
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
              onClick={() => handleItemClick('PKR')}
            >
              PKR
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
              onClick={() => handleItemClick('US Dollar')}
            >
              US Dollar
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Createlisting;
