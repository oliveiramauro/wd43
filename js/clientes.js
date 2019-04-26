var username = document.querySelector('#name')
var usermail = document.querySelector('#email')
var user = [{ 'name': 'Mauro', 'email': 'm@uol.com.br' }]
var buttonAddClient = document.querySelector('#buttonAdd')
var clientList = document.querySelector('.list_users')
new function() {
    clientList.innerHTML = addClient();
}

buttonAddClient.addEventListener('click', function(formEvent) {
    formEvent.preventDefault()
    user.push({ 'name': username.value, 'email': usermail.value })
    console.log('Cliente adicionado')
    clientList.innerHTML = addClient()
})

function addClient() {
    let body = []
    for (let index = 0; index < user.length; index++) {
        body.push(`
                    <tr>
                        <td>${user[index].name}</td>
                        <td>${user[index].email}</td>
                    </tr>
                `)
    }
    return body.join('')
}