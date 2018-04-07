export default cssProp => {
  return window.getComputedStyle(
    document.getElementsByTagName('html')[0], null
  ).getPropertyValue(cssProp)
}
