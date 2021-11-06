import tw from 'tailwind-styled-components'
import PropTypes from 'prop-types'

const Div = tw.div`px-6 md:px-12`

const Content = ({ className, children, ...rest }) => {
  return (
    <Div className={className} {...rest}>
      {children}
    </Div>
  )
}

Content.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
}

export default Content
