updateView();
function updateView() {
  let html = /*HTML*/ `
  <div>
  <input onchange="model.viewState.saveText=this.value" type="text"/>
  <button onclick="addToList()">Legg til</button>
  <div>${listFunction()}</div>
  </div>
  `;
  app.innerHTML = html;
}

function addToList() {
  model.data.list.push(model.viewState.saveText);
  console.log(model.data.list);
  updateView();
}

function listFunction() {
  let html = "";
  for (let i = 0; i < model.data.list.length; i++) {
    html += /*HTML*/ `
    <div>
      <span>${model.data.list[i]}</span>
      <button onclick="model.data.list.splice(${[i]},1)">Fjern</button>
    </div>
  `;
    console.log([i]);
  }
  return html;
}
