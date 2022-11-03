import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const CustomLink = styled(NavLink)(({ theme }) => {
  return {
    textDecoration: "none",
    display: "inline-block",
    fontSize: "1.8rem",
    fontWeight: "600",
    position: "relative",
    transition: "200ms all ease-in-out",
    color: theme.colors.tertiary.main,
    "&:link, &:visited": {
      opacity: 0.7,
    },
    "&:hover, &:active, &.active": {
      opacity: 1,
    },
    "&::after": {
      opacity: 0,
      position: "absolute",
      content: "''",
      left: "50%",
      top: "28px",
      transform: "translateX(-50%)",
      display: "inline-block",
      height: "5px",
      width: "5px",
      borderRadius: "50%",
      backgroundColor: "red",
      transition: "200ms opacity ease-in-out",
    },
    "&:hover::after, &:active::after, &.active::after": {
      opacity: 1,
    },
  };
});

export default function Link({ href, children }) {
  return <CustomLink to={href}>{children}</CustomLink>;
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node,
};
