function getFirstSelector(selector) {
  return document.querySelector(selector)
}
function nestedTarget() {
  return document.querySelector(selector).querySelectorAll('ul.ranked-list li')
  
}