let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

let inputValue = $('#input').val();
li.append(inputValue);


li.on('click', function () {
    li.addClass('.strike');
});

li.addClass('.delete');

li.on("click", function crossOut() {
    li.toggleClass("strike");
});

crossOutButton.on("click", deleteListItem);
  function deleteListItem(){
		li.addClass("delete")
	}