function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  const target = document.querySelector('div.target')
  return target;
}

function deepestChild() {
  let grandNode = document.querySelector('#grand-node')
    while (grandNode.children) {
      let dc = grandNode.querySelector('div')
      return dc
      debugger
    }
}

function increaseRankBy(n) {
  const list = document.querySelectorAll('ul.ranked-list li')
  for (var i = 0, l = list.length; i < l; i++) {
    let value = parseInt(list[i].innerHTML, 10)
    list[i].innerHTML = (value + n).toString();
  }
}
