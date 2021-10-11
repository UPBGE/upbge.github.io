export function isRelative(url) {
  return (
    !url.startsWith('#') && !url.startsWith('www.') && url.indexOf('://') === -1
  )
}

export function sanitise(url) {
  if (url.endsWith('/')) {
    url = url + '/index.html'
  }

  if (url.startsWith('www.')) {
    url = 'http://' + url
  }

  const build = (remaining, done = []) => {
    if (remaining.length === 0) {
      return done
    }

    const segment = remaining.shift()

    if (segment === '..') {
      done.pop()

      return build(remaining, done)
    }

    done.push(segment)

    return build(remaining, done)
  }

  return build(url.split('/')).join('/')
}
