import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const Marquee = ({ texts = [], interval = 1000 }) => {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(false)
  const [state, setState] = useState(0)

  const States = [
    () => setVisible(true),
    () => setVisible(false),
    () => {
      setIndex(texts.length > index + 1 ? index + 1 : 0)
      setVisible(true)
    },
  ]

  useEffect(() => {
    const nextState = () => {
      States[state]()
      setState(States.length > state + 1 ? state + 1 : 0)
    }

    const id = setInterval(nextState, interval)

    return () => clearInterval(id)
  })

  return (
    <span
      className={`transition duration-200 ease-in-out ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}>
      {texts[index]}
    </span>
  )
}

Marquee.propTypes = {
  texts: PropTypes.arrayOf(PropTypes.string).isRequired,
  interval: PropTypes.number,
}

export default Marquee
