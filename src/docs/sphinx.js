import ReactDOM from 'react-dom'
import { Parser, ProcessNodeDefinitions } from 'html-to-react'
import { isRelative, sanitise } from '../common/url'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { ExternalLinkIcon, LinkIcon } from '@heroicons/react/outline'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import python from 'react-syntax-highlighter/dist/esm/languages/prism/python'
import { xonokai } from 'react-syntax-highlighter/dist/esm/styles/prism'

const parser = new Parser()
const domParser = new DOMParser()

SyntaxHighlighter.registerLanguage('python', python)

class NodeProcessor {
  // eslint-disable-next-line no-unused-vars
  shouldProcessNode(node) {
    return true
  }

  // eslint-disable-next-line no-unused-vars
  processNode(node, children, index) {}
}

class URLProcessor extends NodeProcessor {
  constructor(url, path) {
    super()

    this.url = url
    this.path = path
  }

  get tagName() {
    return undefined
  }

  get attrName() {
    return undefined
  }

  getUrl(node) {
    const path = node.attribs[this.attrName]

    if (path.startsWith('#') || !isRelative(path)) {
      return sanitise(path)
    }

    const url = [
      this.url.substring(0, this.url.length - this.path.length - 1),
      path === '#' ? 'index.html' : path,
    ].join('/')

    return sanitise(url)
  }

  // eslint-disable-next-line no-unused-vars
  isValid(url) {
    return true
  }

  shouldProcessNode(node) {
    return (
      node.name === this.tagName &&
      node.attribs[this.attrName] &&
      this.isValid(node.attribs[this.attrName])
    )
  }
}

class LinkProcessor extends URLProcessor {
  get tagName() {
    return 'a'
  }

  get attrName() {
    return 'href'
  }

  // eslint-disable-next-line no-unused-vars
  processNode(node, children, index) {
    const url = this.getUrl(node)

    let content = children

    if (isRelative(url)) {
      return (
        <Link key={`link-${index}`} to={url}>
          {content}
        </Link>
      )
    } else if (url.startsWith('#')) {
      if (
        children.length === 1 &&
        (children[0] === '¶' || children[0] === '')
      ) {
        content = (
          <LinkIcon
            key={`link-${index}`}
            className={'h-4 ml-1 inline opacity-0 hover:opacity-100'}
          />
        )
      }
      return (
        <HashLink
          key={`link-${index}`}
          to={this.url + url}
          smooth
          title={node.attribs['title']}>
          {content}
        </HashLink>
      )
    }

    return (
      <a key={`link-${index}`} href={url} target={'_blank'} rel='noreferrer'>
        {content}
        <ExternalLinkIcon className={'h-4 ml-1 inline'} />
      </a>
    )
  }
}

class ImageProcessor extends URLProcessor {
  get tagName() {
    return 'img'
  }

  get attrName() {
    return 'src'
  }

  isValid(url) {
    return isRelative(url)
  }

  // eslint-disable-next-line no-unused-vars
  processNode(node, children, index) {
    return (
      <img
        key={`img-${index}`}
        src={this.getUrl(node)}
        alt={node.attribs['alt']}
      />
    )
  }
}

class CodeBlockProcessor extends URLProcessor {
  shouldProcessNode(node) {
    return (
      node.attribs &&
      node.attribs['class'] &&
      (node.attribs['class'].indexOf('highlight-python') !== -1 ||
        node.attribs['class'].indexOf('highlight-default') !== -1)
    )
  }

  // eslint-disable-next-line no-unused-vars
  processNode(node, children, index) {
    const definitions = new ProcessNodeDefinitions()

    const container = document.createElement('div')
    const code = ReactDOM.render(
      definitions.processDefaultNode(node, children, index),
      container
    ).textContent.trim()

    return (
      <SyntaxHighlighter
        key={`codeblock-${index}`}
        language='python'
        style={xonokai}
        className={'my-2'}
        showLineNumbers={true}>
        {code}
      </SyntaxHighlighter>
    )
  }
}

class DefaultProcessor extends NodeProcessor {
  definitions = new ProcessNodeDefinitions()

  processNode(node, children, index) {
    return this.definitions.processDefaultNode(node, children, index)
  }
}

const NodeProcessors = [
  LinkProcessor,
  ImageProcessor,
  CodeBlockProcessor,
  DefaultProcessor,
]

function parse(html, url, path) {
  const doc = domParser.parseFromString(html, 'text/html')
  const source = doc.querySelector('body')

  const container = source.querySelector('div.wy-grid-for-nav')
  const instructions = NodeProcessors.map((cls) => new cls(url, path))

  const isValidNode = (node) => node.name !== 'script'

  const navTree = parser.parseWithInstructions(
    container.children.item(0).innerHTML,
    isValidNode,
    instructions
  )
  const contentTree = parser.parseWithInstructions(
    container.children.item(1).innerHTML,
    isValidNode,
    instructions
  )

  return { navTree, contentTree }
}

export default parse
