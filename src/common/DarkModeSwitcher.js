import { useCallback } from 'react'
import { MoonIcon, SunIcon } from '@heroicons/react/solid'
import DarkMode, { useDarkModeChange } from './theme'

const ModeSwitcher = ({ ...rest }) => {
  const darkMode = useDarkModeChange()

  const onClick = useCallback(() => (DarkMode.enabled = !DarkMode.enabled), [])

  return (
    <button
      className={'text-white'}
      onClick={onClick}
      {...rest}
      title={'Toggle dark mode'}>
      <MoonIcon className={`${darkMode ? 'hidden' : 'h-5'}`} />
      <SunIcon className={`${darkMode ? 'h-5' : 'hidden'}`} />
    </button>
  )
}

export default ModeSwitcher
