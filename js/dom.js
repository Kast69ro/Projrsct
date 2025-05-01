let mainBox = document.querySelector('.box')
let idx=null
let editDialog = document.querySelector('.editDialog')
let editForm = document.querySelector('.editForm')
let addDialog = document.querySelector('.addDialog')
let addForm = document.querySelector('.addForm')
let add = document.querySelector('.add')

function get(date){
    mainBox.innerHTML=''
    date.forEach(elem => {
        let box = document.createElement('div')
        box.classList.add('boxS')
        
        let h2 = document.createElement('h2')
        h2.textContent=elem.name

        let h4 = document.createElement('h4')
        h4.textContent=elem.info

        let div = document.createElement('div')

        let btnDel = document.createElement('button')
        btnDel.textContent='delete'

        btnDel.onclick=()=>{
            delUser(elem.id)
        }

        let btnEdit = document.createElement('button')
        btnEdit.textContent = 'Edit'

        btnEdit.onclick=()=>{
            editDialog.showModal()
            idx=elem.id
            editForm['name'].value = elem.name
            editForm['info'].value = elem.info
        }
        if(elem.status== true) h2.classList.add('true')
            else h2.classList.remove('true')

        let checkbox = document.createElement('input')
        checkbox.type='checkbox'
        checkbox.checked = elem.status

        checkbox.onclick=()=>{
            saveStatus(elem)
        }

        div.append(btnDel,btnEdit,checkbox)
        box.append(h2,h4,div)
        mainBox.append(box)

        
    });
}

export {get}
import { delUser,saveEdit,saveStatus,saveAdd } from "./api.js";

editForm.onsubmit=(event)=>{
    event.preventDefault()

    let user={
        id:idx,
        name:editForm['name'].value,
        info:editForm['info'].value,
        status:false
    }
    saveEdit(user)

}
add.onclick=()=>{
    addDialog.showModal()
}

addForm.onsubmit=(event)=>{
    event.preventDefault()
    let user={
        name:addForm['name'].value,
        info:addForm['info'].value,
    }
    saveAdd(user)
    addForm.reset()
    addDialog.close()

}

