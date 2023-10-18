const inputElement=document.getElementById('form-control1')
const createBtn=document.getElementById('create')
const listElement=document.getElementById('list')

const notes = [
    {
    title: 'записать блок про массивы',
    completed: false,
    },
    {
    title: 'рассказать теорию объектов',
    completed: true,
    },
]

//const note = ['записать блок про массивы','рассказать теорию объектов']

function render() {
    listElement.innerHTML =''
    if (notes.length === 0) {
        listElement.innerHTML = '<p> Нет элементов </p>'
    }
    for (let i=0; i < notes.length; i++) {
        listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i], i))
    }
}
render ()

listElement.onclick=function (event) {
    if (event.target.dataset.index) {
        const index = parseInt(event.target.dataset.index)
        const type = event.target.dataset.type

        if (type === 'toggle') {
        notes[index].completed = !notes[index].completed
        } else if (type==='remove') {
        notes.splice(index, 1)
        }
        render()
    }
}
function getNoteTemplate(notes, index) {
    let number=`
    <li class="table">
    <span class="text" style="${notes.completed ? 'text-decoration-line: line-through;' : ''}">${notes.title}</span>
    <button class="btn1" style="${notes.completed ? 'background: green' : 'color: green'}" data-index="${index}" data-type="toggle">&check;</button>
    <button class="btn2" data-index="${index}" data-type="remove">&times;</button>
    </li>
     `
    return(number)
}


createBtn.onclick=function() {
    if (inputElement.value.length === 0) {
        return
    }
    const newNote= {
        title: inputElement.value,
        completed: false,
    }
    notes.push(newNote)
/*listElement.insertAdjacentHTML('beforeend', 
getNoteTemplate(newNote))*/
render()
inputElement.value = ''
}

// if (document.documentElement.clientWidth < 1000) {
//     `
//     <style>
//   .span {
//     color: 000000;
//   }
// </style>
//      `
// }
