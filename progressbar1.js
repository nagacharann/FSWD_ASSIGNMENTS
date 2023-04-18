/*
const todo = [{
    text: string,
    completed: boolean | false,
    id: string
}]
*/

const todoContainer = document.querySelector('ul');
const input = document.querySelector('input');
const content = document.querySelector('#content');
const progressBar = document.querySelector('progress')

const contentHeight = content.clientHeight

document.addEventListener('scroll',(event)=>{
    const scroll = window.scrollY
    const percentage = scroll / (contentHeight - window.innerHeight)
    console.log(percentage*100)
    progressBar.value = (percentage*100).toFixed(0)
    
})