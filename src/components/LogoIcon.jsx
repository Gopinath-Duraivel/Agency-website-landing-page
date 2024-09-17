import { useMemo } from "react";
import PropTypes from "prop-types";
import logo from '../assets/gd-logo.png';

const LogoIcon = ({ className = "",  propWidth, propHeight }) => {
  const logoIconStyle = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
    };
  }, [propWidth, propHeight]);

  return (
    <img
      className={`w-[90px]  object-cover ${className}`}
      alt=""
      src={logo}
      style={logoIconStyle}
    />
  );
};

LogoIcon.propTypes = {
  className: PropTypes.string,
  /** Style props */
  propWidth: PropTypes.any,
  propHeight: PropTypes.any,
};

export default LogoIcon;
