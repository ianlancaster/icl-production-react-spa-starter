import stringHash from 'string-hash'
import checkCssProp from './checkCssProp'

// TODO: memoize all the things

const createReactAnimation = keyframes => {
  if (!document.styleSheets[0]) {
    const head = document.head || document.getElementsByTagName('head')[0]
    const style = document.createElement('style')
    style.type = 'text/css'
    head.appendChild(style)
  }

  const encodedName = 'a' + stringHash(keyframes)
  const styleSheet = document.styleSheets[document.styleSheets.length - 1]

  const insertAnimation = () => {
    if (checkCssProp('-webkit-animation')) {
      styleSheet.insertRule(`
        @-webkit-keyframes ${encodedName} {
          ${keyframes}
        }
      `, styleSheet.cssRules.length)
    }

    if (checkCssProp('-moz-animation')) {
      styleSheet.insertRule(`
        @-moz-keyframes ${encodedName} {
          ${keyframes}
        }
      `, styleSheet.cssRules.length)
    }

    if (checkCssProp('-o-animation')) {
      styleSheet.insertRule(`
        @-o-keyframes ${encodedName} {
          ${keyframes}
        }
      `, styleSheet.cssRules.length)
    }

    if (checkCssProp('-ms-animation')) {
      styleSheet.insertRule(`
        @-ms-keyframes ${encodedName} {
          ${keyframes}
        }
      `, styleSheet.cssRules.length)
    }

    if (checkCssProp('animation')) {
      styleSheet.insertRule(`
        @keyframes ${encodedName} {
          ${keyframes}
        }
      `, styleSheet.cssRules.length)
    }
  }

  if (document.animationRegistry) {
    if (!document.animationRegistry.find(hash => hash === encodedName)) {
      document.animationRegistry.push(encodedName)
      insertAnimation()
    }
  } else {
    document.animationRegistry = [ encodedName ]
    insertAnimation()
  }

  return encodedName
}

export default createReactAnimation
