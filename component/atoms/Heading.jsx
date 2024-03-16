import PropTypes from "prop-types";

const Heading = ({ level, children }) => {
  const HeadingTag = `h${level}`;

  const getHeadingStyles = (level) => {
    switch (level) {
      case "1":
        return "text-[36px] font-medium  text-customGray ";
      case "2":
        return "text-[32px] text-medium text-gray-800 ";
      case "3":
        return "text-[24px] text-medium text-gray-700 ";
      case "4":
        return "text-[20px] text-medium text-gray-700 ";
      case "5":
        return "text-[18px] text-medium text-gray-700 ";
      case "6":
        return "text-[15px] text-medium text-gray-900 text-opacity-80";
      default:
        return "text-lg";
    }
  };

  const headingStyles = getHeadingStyles(level);

  return <HeadingTag className={headingStyles}>{children}</HeadingTag>;
};

Heading.propTypes = {
  level: PropTypes.oneOf(["1", "2", "3", "4", "5", "6"]).isRequired,
};

export default Heading;
