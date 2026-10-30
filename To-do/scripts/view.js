updateView();
function updateView() {
  let html = /*HTML*/ `
  <p>test</p>
  <input type="text" onchange="addToList()"/>
  <!--<button onclick="addToList()">Legg til</button>-->
  `;
  app.innerHTML = html;
}

// function showList() {
//   let html = "";
//   for (let i = 0; i < model.data.list.title.length; i++) {}
// }

function addToList() {
  //lager et notat med teksten i inputfelt
  let comment = model.data.list.title.length;
  if (comment === )
}
