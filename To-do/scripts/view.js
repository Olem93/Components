updateView();
function updateView() {
  let html = /*HTML*/ `
  <p>test</p>
  <input type="text"/>
  <button onclick="addToList()">Legg til</button>
  `;
  app.innerHTML = html;
}
