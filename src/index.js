import './style.css';
import { intro } from "./intro.js";
import { menu } from "./menu.js"; 
import { about } from "./about.js"; 
import { contact } from "./contact.js"


    const content = document.getElementById('content');
    content.appendChild(intro());
    content.appendChild(about());
    

    const navbar = document.querySelector('nav');

    navbar.addEventListener("click", (e) => {
        if(e.target.tagName == "BUTTON"){
            content.innerHTML = "";
        }
        if (e.target.id === "homeBtn") {
            content.appendChild(intro());
            content.appendChild(about());
        } 
        else if (e.target.id === "menuBtn") {
            content.appendChild(menu());
        } 
        else if (e.target.id === "contactBtn") {
            content.appendChild(contact());
        }

    });



