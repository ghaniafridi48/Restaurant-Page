export function menu(){

    const products = [
        {   
            image: 'https://images.unsplash.com/photo-1713742000867-404a4a32dd72?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
            name: 'STEAK 1',
            price: '$12',
            description: 'bbq steak best selling product',
        },
        {   
            image: 'https://images.unsplash.com/photo-1713742000867-404a4a32dd72?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
            name: 'STEAK 2',
            price: '$12',
            description: 'bbq steak best selling product',
        },
        {   
            image: 'https://images.unsplash.com/photo-1713742000867-404a4a32dd72?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
            name: 'STEAK 3',
            price: '$12',
            description: 'bbq steak best selling product',
        },
    ];

    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu');
    
    const menuHeading = document.createElement('h1');
    menuHeading.textContent = 'SMOKE HOUSE MENU';

    const menuCards = document.createElement('div');
    menuCards.classList.add('cards');

    menuDiv.append(menuHeading, menuCards);

    products.forEach((product)=>{
        const menuSingleCard = document.createElement('div');
        menuSingleCard.classList.add('card');

        const menuCardImage = document.createElement('img');
        menuCardImage.src = product.image;
        menuCardImage.alt = product.name;

        const cardDescription = document.createElement('div');
        cardDescription.classList.add('card-description');

        const cardDescriptionHeadingFood = document.createElement('h3');
        cardDescriptionHeadingFood.textContent = product.name;

        const cardDescriptionHeadingPrice = document.createElement('h5');
        cardDescriptionHeadingPrice.textContent = product.price; 
        
        const cardDescriptionPara = document.createElement('p');
        cardDescriptionPara.textContent = product.description;
    
        cardDescription.append(cardDescriptionHeadingFood, cardDescriptionHeadingPrice, cardDescriptionPara);
        menuSingleCard.append(menuCardImage, cardDescription);
        menuCards.append(menuSingleCard);
    });

    return menuDiv;
}
