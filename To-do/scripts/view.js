updateView();
function updateView() {
  let html = /*HTML*/ `
  <p>test</p>
  <input type="text" onchange=""/>
  <button onclick="addToList()">Legg til</button>
  `;
  app.innerHTML = html;
}

function showList() {
  let html = "";
  for (let i = 0; i < model.data.list.length; i++) {}
}
