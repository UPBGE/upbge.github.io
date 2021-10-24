import { useEffect, useState } from 'react'

const DARK_MODE_KEY = 'upbge.website.dark_mode'

class ModeChangeEvent {
  constructor(darkModeEnabled) {
    this.detail = {
      darkModeEnabled: darkModeEnabled,
    }
  }

  get type() {
    return 'modeChange'
  }

  get darkModeEnabled() {
    return this.detail.darkModeEnabled
  }
}

class ModeManager {
  constructor() {
    this._listeners = []
  }

  get prefersDarkMode() {
    return matchMedia('(prefers-color-scheme: dark)').matches
  }

  get enabled() {
    const value = JSON.parse(localStorage.getItem(DARK_MODE_KEY))
    return value !== null ? value : this.prefersDarkMode
  }

  set enabled(value) {
    const changed = this.enabled !== value

    localStorage.setItem(DARK_MODE_KEY, JSON.stringify(value === true))

    if (changed) {
      const event = new ModeChangeEvent(value)

      this._listeners.forEach((l) => l(event))
    }
  }

  addEventListener(listener) {
    if (this._listeners.indexOf(listener) === -1) {
      this._listeners.push(listener)
    }
  }

  removeEventListener(listener) {
    this._listeners = this._listeners.filter((l) => l !== listener)
  }
}

const DarkMode = new ModeManager()

export const useDarkModeChange = () => {
  const [darkModeEnabled, setDarkModeEnabled] = useState(DarkMode.enabled)

  useEffect(() => {
    const handler = (e) => setDarkModeEnabled(e.darkModeEnabled)

    DarkMode.addEventListener(handler)

    return () => DarkMode.removeEventListener(handler)
  })

  return darkModeEnabled
}

export default DarkMode
