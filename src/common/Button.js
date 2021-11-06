import PropTypes from 'prop-types'
import { HashLink } from 'react-router-hash-link'

const classes =
  'px-10 py-3 rounded font-semibold bg-upbge text-white border ' +
  'border-transparent hover:bg-transparent m-1 hover:text-upbge hover:border-upbge'

const Button = ({ to, className, children, ...rest }) => {
  if (to) {
    return (
      <HashLink className={`${classes} ${className}`} to={to} {...rest}>
        {children}
      </HashLink>
    )
  } else {
    return (
      <a className={`${classes} ${className}`} {...rest}>
        {children}
      </a>
    )
  }
}

Button.propTypes = {
  to: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.any,
}

export default Button
