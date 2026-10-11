export function contact() {
    const contactInfo = [
        { type: "Email", value: "hello@smokehouse.com" },
        { type: "Phone", value: "+1 (555) 123-4567" }
    ];

    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contact-page');

    const heading = document.createElement('h1');
    heading.textContent = 'CONTACT US';
    contactDiv.appendChild(heading);

    contactInfo.forEach((info) => {
        const itemPara = document.createElement('p');

        const typeLabel = document.createElement('strong');
        typeLabel.textContent = `${info.type}: `;

        const valueText = document.createTextNode(info.value);

        itemPara.append(typeLabel, valueText);
        contactDiv.appendChild(itemPara);
    });

    return contactDiv;
}
