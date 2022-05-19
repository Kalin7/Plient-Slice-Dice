const parentElement = document.querySelector('.employee-testamony');
const child = [...parentElement.querySelectorAll('.employee-testamony--container')];


async function carusel (interval) {
    return await interval(child);
};

async function caruselInterval (element) {

    return setInterval(() => {

        changeVisibility(element);

    }, 5000);
};

changeElement(child);
async function changeElement (element) {
    
    element.forEach((ele) => {
        let button;
        ele.addEventListener('click', (ev) => {
            if (ev.target.tagName == 'BUTTON') {

                button = ev.target;
                button.style.backgroundColor = 'gray';
                let id = Number((ev.target.getAttribute('id')).split('-').pop()) - 1;
               
                changeVisibility(element, id); 
                sortElement(element);
            };

            button.style.backgroundColor = 'black'
        });
        
    });
    await carusel(caruselInterval);
   
};

function changeVisibility (element, elementNumber) {

    let currentElement;
    elementNumber ? currentElement = element.splice(elementNumber, 1) : currentElement = element.splice(0, 1)
    currentElement[0].style.display = 'block';

    element.forEach((ele) => {
        ele.style.display = 'none';
        
    });

    element.push(currentElement[0]);
};


function sortElement(element) {
    
    return element.sort((a, b) => {
        
        let numA = Number(a.getAttribute('id').split('-').pop());
        let numB = Number(b.getAttribute('id').split('-').pop());
        return numA < numB ? -1 : 1
    });
};
