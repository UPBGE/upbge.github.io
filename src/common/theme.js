import { useEffect, useState } from 'react'

const DARK_MODE_KEY = 'upbge.website.dark_mode'

class ModeChangeEvent extends CustomEvent {
  constructor(darkModeEnabled) {
    super('modeChange', {
      detail: {
        darkModeEnabled: darkModeEnabled,
      },
    })
  }

  get darkModeEnabled() {
    return this.detail.darkModeEnabled
  }
}

class ModeManager extends EventTarget {
  constructor() {
    super()

    const eventTarget = document.createTextNode(null)

    this.addEventListener = eventTarget.addEventListener
    this.removeEventListener = eventTarget.removeEventListener
    this.dispatchEvent = eventTarget.dispatchEvent
  }

  get prefersDarkMode() {
    return matchMedia('(prefers-color-scheme: dark)').matches
  }

  get enabled() {
    return JSON.parse(localStorage.getItem(DARK_MODE_KEY)) === true
  }

  set enabled(value) {
    const changed = this.enabled !== value

    localStorage.setItem(DARK_MODE_KEY, JSON.stringify(value === true))

    if (changed) {
      this.dispatchEvent(new ModeChangeEvent(value))
    }
  }
}

const DarkMode = new ModeManager()

export const useDarkModeChange = () => {
  const [darkModeEnabled, setDarkModeEnabled] = useState(DarkMode.enabled)

  useEffect(() => {
    const handler = (e) => setDarkModeEnabled(e.darkModeEnabled)

    DarkMode.addEventListener('modeChange', handler)

    return () => DarkMode.removeEventListener('modeChange', handler)
  })

  return darkModeEnabled
}

export default DarkMode
