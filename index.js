function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  const target = document.querySelector('div.target')
  return target;
}

function deepestChild() {
  let grandNode = document.querySelector('grand-node')
  let l = grandNode.length;
  let i = 0
    while (i = 0, i < l) {
      grandNode.children;
    }
}

function increaseRankBy(n) {
  const list = document.querySelectorAll('ul.ranked-list li')
  for (var i = 0, l = list.length; i < l; i++) {
    parseInt(list[i].innerHTML)
    let value = list[i].innerHTML
    list[i].innerHTML = (value + n).toString();
    debugger
  }
}
