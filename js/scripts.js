function newItem() {
  let li = $("<li></li>");
  let inputValue = $("#input").val();
  let ul = $('#list');
  li.append(inputValue);
  if (inputValue === "") {
    alert('You must enter a value');
  } else {
    
    ul.append(li);
  }
  
    // li.addClass(".delete");

  li.on("dblclick", crossOut);

  function crossOut() {
    li.toggleClass("strike");
  }

  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.addClass('crossOutButton');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);
  

  crossOutButton.on("click", deleteListItem);
  function deleteListItem() {
    li.addClass("delete");
  }

  ul.sortable();
}
