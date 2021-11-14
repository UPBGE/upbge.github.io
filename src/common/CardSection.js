import PropTypes from 'prop-types'
import { GridSection, GridSectionTitleCentered } from './Section'

import { HashLink } from 'react-router-hash-link'
import tw from 'tailwind-styled-components'

const CardContent = tw(GridSection)`h-full`

const CardSection = ({ to, title, image, className, children }) => {
  let titleComp

  if (to.startsWith('http')) {
    titleComp = (
      <a href={to} target={'_blank'} rel='noreferrer'>
        {title}
      </a>
    )
  } else {
    titleComp = <HashLink to={to}> {title} </HashLink>
  }

  return (
    <div className={`transform -rotate-6 ${className}`}>
      <div
        className={
          'bg-gradient-to-r from-orange-650 to-orange-450 rounded-lg h-full'
        }>
        <div className={'shadow-lg transform rotate-6 h-full'}>
          <CardContent>
            <div className={'flex flex-col items-center space-y-2 h-full'}>
              <GridSectionTitleCentered>{titleComp}</GridSectionTitleCentered>

              <img src={image} alt={'Section icon'} />

              <p align='center' className={'py-4'}>
                {children}
              </p>
            </div>
          </CardContent>
        </div>
      </div>
    </div>
  )
}

CardSection.propTypes = {
  to: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.any,
}

export default CardSection
