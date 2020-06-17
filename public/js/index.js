console.log('working!!')

const form1 = document.querySelector('form')
const input1 = document.querySelector('input')
const nameArea = document.querySelector('#name-area')

form1.addEventListener('submit', (e)=> {
    e.preventDefault();
    const value1 = input1.value
    nameArea.textContent = value1;
})