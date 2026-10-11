export function about() {
    const aboutHours = document.createElement('div');
    aboutHours.classList.add('hours');

    const hoursH3 = document.createElement('h3');
    hoursH3.textContent = 'Hours of Operation';

    const hoursDetail = document.createElement('div');
    hoursDetail.classList.add('hours-details');

    const hoursP1 = document.createElement('p');
    hoursP1.textContent = 'Monday – Thursday: 12:00 PM – 10:00 PM';

    const hoursP2 = document.createElement('p');
    hoursP2.textContent = 'Friday – Sunday: 12:00 PM – 11:00 PM';

    hoursDetail.append(hoursP1, hoursP2);

    const location = document.createElement('div');
    location.classList.add('location');

    const locationH3 = document.createElement('h3');
    locationH3.textContent = 'Location';

    const locationP = document.createElement('p');
    locationP.textContent = '123 Grillmaster Lane, Foodie District, NY 10001';

    location.append(locationH3, locationP);
    aboutHours.append(hoursH3, hoursDetail, location);

    return aboutHours;
}