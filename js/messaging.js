const contactSearchBtn=document.querySelector(".contact-search");
let modal=document.querySelector(".contact-search-modal")
const addContactBtn=document.querySelector(".add-contact");
const searchCloseBtn=document.querySelector(".close");
const title=document.querySelector(".title");
contactSearchBtn.onclick = function() {
    modal.style.display = "flex";
    modal.style.justifyContent="space-around";
    title.style.display="none";
    contactSearchBtn.style.display="none";
    addContactBtn.style.display="none";
  }
  
  searchCloseBtn.onclick = function() {
    modal.style.display = "none";
    title.style.display="block";
    contactSearchBtn.style.display="inline-block";
    addContactBtn.style.display="inline-block";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  //iutggvkjgiugkuguligihg