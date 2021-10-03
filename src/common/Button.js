import PropTypes from 'prop-types'
import tw from 'tailwind-styled-components'

const Link = tw.a`px-10 py-3 rounded font-semibold bg-upbge text-white border   
    border-transparent hover:bg-transparent m-1 hover:text-upbge hover:border-upbge`

const Button = ({ children, ...rest }) => {
  return <Link {...rest}>{children}</Link>
}

Button.propTypes = {
  children: PropTypes.any,
}

export default Button
