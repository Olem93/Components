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

function listFunction() {
  let html = "";

  for (let i = 0; i < model.data.list.length; i++) {
    html += /*HTML*/ `
    <div>
      <span>${model.data.list[i]}</span>
      <button onclick="removeItem(${[i]})">Fjern</button>
    </div>
  `;
    console.log([i]);
  }
  return html;
}
