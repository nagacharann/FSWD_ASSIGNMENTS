const body = document.querySelector('body')

const toggletheme = () =>{
    if(body.classList.contains('dark')) {
        body.classList.remove('dark')
        body.classList.add('light')
    }else{
        body.classList.remove('light')
        body.classList.add('dark')
    }
  console.log('toggling theme')

  var id =document.getElementsByName("button")[0].id;
  if(id==1){
      document.getElementById("text").innerHTML = "THEME:Dark"
      document.getElementsByName("button")[0].id=0;
  }else{
    
      document.getElementById("text").innerHTML = "THEME:Light"
      document.getElementsByName("button")[0].id=1;
  }
}



const headingObject = document.getElementById('heading')

headingObject.innerHTML = 'HELLO WORLD'
headingObject.style = 'color:orange'

const listObject = document.getElementById('List')
const arr = ['element1','element2','element3','element4','element5']

arr.forEach((element) =>{
    const li = document.createElement('li')
    listObject.appendChild(li)
    li.innerHTML= element
})

const listElement = document.getElementsByClassName('list-ele')
console.log(listObject)
console.log(listElement)

const LIst = document.querySelectorAll('.list-ele')
console.log(LIst)

const LIst1 = document.querySelectorAll('#List')
console.log(LIst1)