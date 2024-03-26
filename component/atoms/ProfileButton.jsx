import PropTypes from "prop-types";
import '../../app/globals.css'


const ProfileButton = ({ href, children, variant, onClick }) => {
  let buttonStyle = "";

  switch (variant) {
    case "primary":
      buttonStyle =
        "bg-white h-[70px] cursor-pointer  px-[30px] py-[10px]  text-center w-[320px] flex items-center gap-[20px] text-[20px] font-medium text-gray-900 text-opacity-60";
      break;
  }

  return (
    <a className={buttonStyle} onClick={onClick} href={href}>
      {children}
    </a>
  );
};

ProfileButton.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default ProfileButton;
