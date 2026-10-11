export function intro(){

    const introDiv = document.createElement('div');
    introDiv.classList.add('intro');
    
    const introHeader = document.createElement('h1');
    introHeader.textContent = 'BBQ SmokeHouse';
    introDiv.appendChild(introHeader);
    
    const introPara = document.createElement('p');
    introPara.textContent = 'Welcome to BBQ SmokeHouse. We keep things simple: fresh ingredients, precise seasoning, and open open-flame grilling. Our kitchen focuses on doing the classics exactly right.';
    introDiv.appendChild(introPara);

    return introDiv;

}