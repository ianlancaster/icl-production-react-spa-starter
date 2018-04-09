export default (cssProp: string): boolean => {
  return !!window.getComputedStyle(
    document.getElementsByTagName('html')[0], null
  ).getPropertyValue(cssProp)
}
