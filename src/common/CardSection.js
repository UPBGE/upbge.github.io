import PropTypes from 'prop-types'
import { GridSection, GridSectionTitleCentered } from './Section'

import { HashLink } from 'react-router-hash-link'
import tw from 'tailwind-styled-components'

const CardContent = tw(GridSection)`h-full`

const CardSection = ({
  to,
  title,
  image,
  className,
  children,
  external,
  hashtag,
}) => {
  let titleComp, imageComp, externalComp, hashtagComp

  if (to.startsWith('http')) {
    titleComp = (
      <a href={to} target={'_blank'} rel='noreferrer'>
        {title}
      </a>
    )
    imageComp = (
      <a href={to} target={'_blank'} rel='noreferrer'>
        <img src={image} alt={'Section icon'} />
      </a>
    )
  } else {
    titleComp = <HashLink to={to}> {title} </HashLink>
    imageComp = (
      <HashLink to={to}>
        <img src={image} alt={'Section icon'} />
      </HashLink>
    )
  }

  if (external && external.startsWith('http')) {
    externalComp = (
      <small>
        <a href={external} target={'_blank'} rel='noreferrer'>
          (external link)
        </a>
      </small>
    )
  }

  if (hashtag && hashtag.startsWith('http')) {
    hashtagComp = (
      <small>
        <a href={hashtag} target={'_blank'} rel='noreferrer'>
          (hashtag link)
        </a>
      </small>
    )
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
              {imageComp}
              <p align='center' className={'py-0'}>
                {externalComp}
              </p>
              <p align='center' className={'py-0'}>
                {hashtagComp}
              </p>
              <p align='center' className={'py-2'}>
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
  external: PropTypes.string,
  hashtag: PropTypes.string,
}

export default CardSection
