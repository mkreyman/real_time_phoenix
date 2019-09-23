/***
 * Excerpted from "Real-Time Phoenix",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/sbsockets for more book information.
***/
const dom = {}

function getProductIds() {
  const products = document.getElementsByClassName('product-listing')
  return Array.from(products).map((el) => el.dataset.productId)
}

dom.getProductIds = getProductIds

export default dom

function replaceProductComingSoon(productId, sizeHtml) {
  const name = `product-soon-${productId}`
  const productSoonEls = document.getElementsByClassName(name)

  Array.from(productSoonEls).forEach((el) => {
    const parent = el.parentNode
    const tempDiv = document.createElement('div')
    tempDiv.innerHTML = sizeHtml
    parent.replaceChild(tempDiv.childNodes[0], el)
  })
}

dom.replaceProductComingSoon = replaceProductComingSoon

function updateItemLevel(itemId, level) {
  Array.from(document.getElementsByClassName('size-container__entry')).
    filter((el) => el.value == itemId).
    forEach((el) => {
      removeStockLevelClasses(el)
      el.classList.add(`size-container__entry--level-${level}`)
      el.disabled = level === "out"
    })
}

dom.updateItemLevel = updateItemLevel

function removeStockLevelClasses(el) {
  el.className.split(' ').
    filter((s) => s.startsWith("size-container__entry--level-")).
    forEach((name) => el.classList.remove(name))
}
