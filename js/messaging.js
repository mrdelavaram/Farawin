// const contactSearchBtn=document.querySelector(".contact-search");
// let modal=document.querySelector(".contact-search-modal")
// const addContactBtn=document.querySelector(".add-contact");
// const searchCloseBtn=document.querySelector(".close");
// const title=document.querySelector(".title");
// contactSearchBtn.onclick = function() {
//     modal.style.display = "flex";
//     modal.style.justifyContent="space-around";
//     title.style.display="none";
//     contactSearchBtn.style.display="none";
//     addContactBtn.style.display="none";
//   }
  
//   searchCloseBtn.onclick = function() {
//     modal.style.display = "none";
//     title.style.display="block";
//     contactSearchBtn.style.display="inline-block";
//     addContactBtn.style.display="inline-block";
//   }
  

 const inputElem=document.querySelector('#inputMessage')
 const btnSend=document.querySelector('.sendBtn')
 const allMessage=document.querySelector('.messages')
 const formMessage=document.querySelector(".formMessage")



function newAddMessage(){

let newDiv=document.createElement('div')
newDiv.className=("right box-shadow");
let newDiv2=document.createElement('div')
newDiv2.className=("fill-context");
let newPElem=document.createElement('p')

newPElem.innerHTML=inputElem.value;
newDiv.appendChild(newPElem)
allMessage.appendChild(newDiv)
allMessage.appendChild(newDiv2)
inputElem.value='';

 
}


btnSend.addEventListener('click',newAddMessage)

