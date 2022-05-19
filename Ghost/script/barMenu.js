
document.getElementById("bars").addEventListener('click', (ev) => {
    ev.preventDefault();
    
    const menu = ev.target.parentNode.parentNode.querySelector(".bars-menu")
    const navList = ev.target.parentNode.querySelectorAll(".navbar-list--item");
    let isCreated = isElementCreated(menu);
    
    if (!isCreated) {
        menu.appendChild(createElementCopy(navList));
    }

    window.addEventListener('resize', () => {
        if (window.screen.width > 430) {
            menu.style.display = "none";
        }
    })
    
    menu.style.display == "block" ? menu.style.display = "none" : menu.style.display = "block";
});

function isElementCreated(element) {
    return element.hasChildNodes();
}

function createElementCopy(element) {

    let list = document.createElement("ul");
    list.className = "bars-list";

    Object.values(element).forEach((e) => {
        let listItem = document.createElement("li");
        listItem.className = "bars-list--item";
        
        let aItem = document.createElement("a");
        aItem.textContent = content;

        aItem.textContent = e.firstChild.textContent;

        listItem.appendChild(aItem);
        list.appendChild(listItem);

    });
    
    return list;
        
}


