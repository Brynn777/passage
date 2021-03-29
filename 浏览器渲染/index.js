function ano() {
  let root = document.getElementById('app');
  let old = document.getElementById('p');
  let newNode = document.createElement('div');
  newNode.innerText = '新文字';
  root.replaceChild(newNode, old);
}
ano();
