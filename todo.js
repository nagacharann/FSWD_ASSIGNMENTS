/*
const todo = [{
    text: string,
    completed: boolean | false,
    id: string
}]
*/
const todoContainer = document.querySelector('ul')
const input = document.querySelector('input')
const addbutton = document.querySelector('#add')
const editbutton= document.querySelector('#edit')
const body = document.querySelector('body')
editbutton.style="display:none"

const todos = []
let idofelementtoedit = null;





const showEdit=(id)=>{
    console.log(id)
    const element = todos.find((todo)=>todo.id==id)
    input.value=element.Text
    
    addbutton.style="visibility:hidden"
    editbutton.style="visibility:inline"
    idofelementtoedit=id;
}




const renderList= ()=>{
    todoContainer.innerHTML=''
    todos.forEach((todo)=>{
       
        const li =document.createElement('li')
        const deletebutton = document.createElement('button')
        const editbutton = document.createElement('button')

        deletebutton.addEventListener('click',(e)=>{
            li.remove()
            const id = todo.id
            const index= todos.findIndex((todo)=>todo.id==id)
            todos.splice(index,1)

        })
        editbutton.addEventListener('click',(e)=>{
          showEdit(todo.id)

        })
        deletebutton.innerHTML = 'delete'
        editbutton.innerHTML = 'edit'
        li.innerHTML=`
        ${todo.Text}
        `
        li.appendChild(deletebutton)
        li.appendChild(editbutton)
        todoContainer.appendChild(li)
    })
}


const handleAdd = (e)=>{
    const itemtoadd=input.value
    if(itemtoadd!==null && itemtoadd!==''){
        todos.push({
            Text:itemtoadd,
            completed:false,
            id:Date.now()
        })
        input.value=""
        renderList()
        return
    }else{
        window.alert('empty item cant be added')
    }  
};

const handleEdit = (e)=>{
     const newvalue=input.value
     const element = todos.find((todo)=> todo.id === idofelementtoedit);
     element.Text= newvalue
   
     renderList()
     addbutton.style="visibility:inline"
    editbutton.style="visibility:hidden"
     input.value=""


}

addbutton.addEventListener('click',handleAdd)
editbutton.addEventListener('click',handleEdit)















