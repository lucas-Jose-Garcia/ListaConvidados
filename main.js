let guest = [
    {id:1, name: "Pedro Santana"},
    {id:2, name: "Carlos Vieria"},
    {id:3, name: "André Monteiro"},
    {id:4, name: "Victor Neto"}
]

function ListUpdate() {
    const elList = document.querySelector("#GuestList")
    elList.innerHTML = ""
    guest.forEach((e, index) => {
        elList.innerHTML += `<li>${e.name}<a onclick="RemoveGuest(${index})">Excluir</a></li>`
    })
}

function AddGuest() {
    const elGuestName = document.querySelector("#GuestName").value

    guest.push({id: guest[guest.length-1].id + 1, name: elGuestName})
    ListUpdate()
}

function RemoveGuest(id) {

}


ListUpdate()