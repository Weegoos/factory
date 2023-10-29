let input_name = document.querySelector('.input_name')
let input_cost = document.querySelector('.input_cost')
let start = document.querySelector('.start')
let add_btn = document.querySelector('.add_btn')

let change_local = sessionStorage.getItem('change')
let change_parse = JSON.parse(change_local)

add_btn.onclick = function () {
    sessionStorage.setItem('change', input_cost.value)
    location.reload()
}

