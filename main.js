var input = document.getElementById('input')
var create_button = document.getElementById('create_button')
var todo_list = document.getElementById('todo_list')

var createTodo = () => {
    if (!input.value.trim()) return alert('Напиши что-нибудь')

    var div = document.createElement('div')
    var text = document.createElement('h3')
    div.setAttribute('class', 'block_text')
    text.innerHTML = input.value

    div.append(text)
    todo_list.append(div)
    input.value = ''
    var div_delete = document.createElement('div')
    var div_edit = document.createElement('div')
    div_delete.setAttribute('class', 'delete_button')
    div_edit.setAttribute('class', 'edit_button')
    div.append(div_delete)
    div.append(div_edit)
    var text_delete = document.createElement('h3')
    var text_edit = document.createElement('h3')
    div_delete.append(text_delete)
    div_edit.append(text_edit)
    text_delete.innerHTML = 'Delete'
    text_edit.innerHTML = 'Edit'

    div_delete.addEventListener('click', function() {
        div.remove()});

    div_edit.addEventListener('click', function(){
        var editWindow = prompt('Текст для изменения')
        text.innerHTML = editWindow
    })

}

create_button.addEventListener('click', createTodo)
input.addEventListener('keydown', e => {
    if (e.key === 'Enter')    createTodo()
})

