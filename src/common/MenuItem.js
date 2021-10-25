import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

const scrollToTop = () => scrollTo(0, 0)

const MenuItem = ({ children, to, exact, ...rest }) => {
  return (
    <NavLink
      to={to}
      activeClassName={'text-upbge font-semibold'}
      exact={exact}
      onClick={scrollToTop}
      {...rest}>
      {children}
    </NavLink>
  )
}

MenuItem.propTypes = {
  children: PropTypes.any,
  to: PropTypes.string.isRequired,
  exact: PropTypes.bool,
}

export default MenuItem
