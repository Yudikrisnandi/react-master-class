import React from "react"
import PropTypes from "prop-types"
import "../styles/Button.css"

const Button = ({ variant, text, action, load }) => {
  return(
    <button className={`btn btn-${variant}`} onClick={action}>
      {load ? "loding...": text}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  action: PropTypes.func
}

export default Button;

