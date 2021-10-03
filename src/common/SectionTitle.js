import PropTypes from 'prop-types'
import tw from 'tailwind-styled-components'

const Heading = tw.h2`font-display font-bold text-gray-800 text-2xl mb-2`

const SectionTitle = ({ children, ...rest }) => {
  return <Heading {...rest}>{children}</Heading>
}

SectionTitle.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
}

export default SectionTitle
