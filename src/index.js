document.addEventListener("DOMContentLoaded", () => {
  // your code here 
  document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault()
    console.log(event)
    let input = document.getElementById('new-task-description').value
    let li = document.createElement('li')
    li.textContent=input
    document.querySelector('#tasks').appendChild(li)
    document.querySelector('form').reset()

//handle delete form
let deleteButton= document.createElement('button')
  li.appendChild(deleteButton)
  deleteButton.textContent = "x"
  document.querySelector('form').reset()
  function addEventListenerToButton(){
    deleteButton.addEventListener('click', function(e){
      e.target.parentNode.remove()
    })
    
  }
  addEventListenerToButton() 

})
  
});