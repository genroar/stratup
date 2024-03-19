import PropTypes from "prop-types";

const Button = ({ href, children, variant }) => {
  let buttonStyle = "";

  switch (variant) {
    case "primary":
      buttonStyle =
        "bg-buttonGray flex justify-center items-center h-[41px] text-center w-[360px] rounded-[20px] py-[7px] curser-pointer text-[15px] font-medium text-white";
      break;
    case "secondary":
      buttonStyle =
        "bg-white h-[41px] border-2 border-buttonGray text-center w-[360px] rounded-[20px] py-[7px]  text-[15px] font-medium  text-buttonGray";
      break;
    case "success":
      buttonStyle =
        "bg-buttonGray h-[40px]  text-center w-[120px] rounded-[40px] py-[7px]  text-[15px] font-medium text-white";
      break;
    case "danger":
      buttonStyle =
        "bg-white h-[40px] text-center w-[83px] rounded-[40px] py-[5px] text-[15px] font-medium  text-buttonGray";
      break;
    case "tl-radius":
      buttonStyle =
        "bg-buttonGray h-[50px] border-[1px]  text-center w-[150px] rounded-tl-[25px] flex items-center justify-center text-[20px] font-medium text-white";
      break;
    case "tr-radius":
      buttonStyle =
        "bg-white  h-[50px] border-2  text-center w-[150px] rounded-tr-[25px] flex items-center justify-center  text-[20px] font-medium text-buttonGray";
      break;
    case "rectangle":
      buttonStyle =
        "bg-white h-[50px] border-2 border-black border-opacity-10 text-center w-[150px]  flex items-center justify-center  text-[20px] font-medium text-buttonGray";
      break;
    case "oval":
      buttonStyle =
        "bg-white h-[40px] border-2 border-black border-opacity-10 text-center w-[150px] rounded-[40px]  pt-[6px] text-[16px] font-normal  text-buttonGray";
      break;
    case "high-oval":
      buttonStyle =
        "bg-buttonGray h-[60px] text-center w-[150px]  flex justify-center items-center text-[20px] font-normal text-white rounded-[40px]";
      break;
    case "rectangle-2":
      buttonStyle =
        "bg-gray-100 h-[60px]  text-center w-[160px]  pt-[16px] text-[20px] font-normal text-buttonGray";
      break;
    case "rectangle-3":
      buttonStyle =
        "bg-gray-100 h-[60px]  text-center w-[201px] rounded-br-[25px] rounded-tr-[25px]  pt-[16px] text-[20px] font-normal text-buttonGray";
      break;
    case "rectangle-4":
      buttonStyle =
        "bg-gray-100 h-[60px]  text-center w-[212px]   pt-[16px] text-[20px] font-normal text-buttonGray";
      break;
    case "rectangle":
      buttonStyle =
        "bg-white h-[60px] border-2 text-center w-[201px]  pt-[16px] text-buttonGray";
      break;
    case "white-oval":
      buttonStyle =
        "bg-white h-[40px]  text-center w-[120px] rounded-[40px] py-[5px] border-2 border-buttonGray  text-buttonGray ";
      break;
      a;
    case "contact":
      buttonStyle =
        "bg-buttonGray h-[40px]  text-center w-[140px] rounded-[40px] py-[7px]  text-white";
      break;
    case "submit":
      buttonStyle =
        "bg-buttonGray h-[41px] text-center w-[235px] text-[16px] font-medium rounded-[20px] py-[7px] curser-pointer text-white";
      break;
  }

  return (
    <a className={buttonStyle} href={href}>
      {children}
    </a>
  );
};

Button.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default Button;
