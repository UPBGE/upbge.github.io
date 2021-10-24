import React, { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { createPopper } from '@popperjs/core'

const Dropdown = ({ label, children, ...rest }) => {
  const [instance, setInstance] = useState()

  const anchorRef = React.createRef()
  const menuRef = React.createRef()

  const open = useCallback(() => {
    // noinspection JSCheckFunctionSignatures
    const popper = createPopper(anchorRef.current, menuRef.current, {
      placement: 'bottom-start',
    })

    setInstance(popper)
  }, [anchorRef, menuRef])

  const close = useCallback(
    (e) => {
      e?.preventDefault()
      e?.stopPropagation()

      instance?.destroy()

      setInstance(null)
    },
    [instance]
  )

  const onClick = useCallback(
    (e) => {
      e.preventDefault()
      e.stopPropagation()

      instance ? close() : open()
    },
    [instance, close, open]
  )

  const Button = React.cloneElement(label, {
    onClick: onClick,
  })

  useEffect(() => {
    document.addEventListener('click', close)

    return () => document.removeEventListener('click', close)
  }, [close])

  return (
    <>
      <div ref={anchorRef}>{Button}</div>

      <div className={`absolute ${instance ? 'block' : 'hidden '}`} {...rest}>
        <div
          ref={menuRef}
          className={
            'z-50 bg-gray-100 dark:bg-gray-950 dark:text-white flex flex-col space-y-4 ' +
            'px-6 py-4 rounded shadow-lg whitespace-nowrap text-sm'
          }>
          {children}
        </div>
      </div>
    </>
  )
}

Dropdown.propTypes = {
  label: PropTypes.element.isRequired,
  children: PropTypes.any,
}

export default Dropdown
