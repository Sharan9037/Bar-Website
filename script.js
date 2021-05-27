const menu = document.getElementById("menushow")

const menuCard = document.getElementById('menu-card')

const cross = document.getElementById("crosscross")

const contact = document.getElementById("contact")

const contactCard = document.getElementById("contact-card")

const sendMsg = document.getElementById("send-msg")


contact.addEventListener("click", function(){
    contactCard.style.display = "block"
    contactCard.style.transform = "scale(1.0)"
    menuCard.style.display = "none"

})


cross.addEventListener("click", function(){
    menuCard.style.display = "none"
})

menu.addEventListener("click", function(){
    console.log("clicked")
    menuCard.style.display = "block"
    menuCard.style.transform = "scale(1.0)"
    contactCard.style.display = "none"
})

sendMsg.addEventListener("click", function(){
    contactCard.style.display = "none"
})