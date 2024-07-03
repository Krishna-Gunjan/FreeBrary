
function createCard(name, title, classType, profession, description, backgroundImage) {
    
    const cardContainer = document.getElementById('cardContainer');
    
    const card = document.createElement('div');
    card.className = 'card';
    
    const cardLeft = document.createElement('div');
    cardLeft.className = 'cardleft'; 
    cardLeft.style.backgroundImage = `url('${backgroundImage}')`;
    
    const cardLeftContent = document.createElement('div');
    cardLeftContent.className = 'cardleft-content';
    
    const h1 = document.createElement('h1');
    h1.textContent = name;
    
    const ul = document.createElement('ul');
    
    const liTitle = document.createElement('li');
    liTitle.innerHTML = `<strong><i>${title}</i></strong>`;
    const liClass = document.createElement('li');
    liClass.innerHTML = `<strong>Class:</strong> <i><b>${classType}</b></i>`;
    const liProfession = document.createElement('li');
    liProfession.innerHTML = `<strong>Profession:</strong> <i><b>${profession}</b></i>`;
    
    ul.appendChild(liTitle);
    ul.appendChild(liClass);
    ul.appendChild(liProfession);
    
    cardLeftContent.appendChild(h1);
    cardLeftContent.appendChild(ul);
    
    cardLeft.appendChild(cardLeftContent);
    
    const cardRight = document.createElement('div');
    cardRight.className = 'cardright'; 
    
    const p = document.createElement('p');
    p.textContent = description;

    cardRight.appendChild(p);
    
    card.appendChild(cardLeft);
    card.appendChild(cardRight);
    
    cardContainer.appendChild(card);
}

createCard(
    'Jake Thayne',
    'The Primal Hunter',
    'Path of the Heretic-Chosen',
    'Heretic-Chosen Alchemist of the Malefic Viper',
    'Jake Thayne is a rugged and enigmatic hunter, renowned for his unparalleled survival skills and deep knowledge of the wild. With a past shrouded in mystery, he navigates the treacherous landscapes with a keen eye and relentless determination, often finding himself embroiled in thrilling adventures where his cunning and resilience shine brightest.',
    'demo.jpg'
);
    