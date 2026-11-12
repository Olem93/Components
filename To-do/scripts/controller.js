function addToList() {
  if (model.viewState.saveText === "") return;
  model.data.list.push(model.viewState.saveText);
  console.log(model.data.list);
  updateView();
  model.viewState.saveText = "";
}

function removeItem(index) {
  console.log(index);
  model.data.list.splice(index, 1);
  updateView();
}
