let list = $('#list');
let li = $('<li></li>');
list.append('li');

let inputValue = $('#input').val();
li.append(inputValue);


li.on('click', function () {
    li.addClass('.strike');
});

li.addClass('.delete');