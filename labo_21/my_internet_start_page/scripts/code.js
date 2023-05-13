// Define web pages and their search URL patterns
const PAGES = {
    'g': 'https://www.google.com/search?q=',
    'y': 'https://www.youtube.com/results?search_query=',
    't': 'https://twitter.com/hashtag/',
    'i': 'https://www.instagram.com/explore/tags/'
};

// Define colors for each web page
const COLORS = {
    'Google': '#4289f4',
    'YouTube': '#FF0000',
    'Twitter': '#1DA1F2',
    'Instagram': '#E1306C'
};

// Get references to HTML elements
const searchInput = document.getElementById('search-input');
const goButton = document.getElementById('go-button');
const historyDiv = document.getElementById('history');

// Load search history from localStorage or create a new array
let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];

// Render search history
searchHistory.forEach((search) => {
    addSearchCard(search.title, search.text, search.url);
});

// Add event listener to Go! button
goButton.addEventListener('click', () => {
    const searchValue = searchInput.value.trim();

    // Check if search value is valid
    if (!searchValue.startsWith('/')) {
        alert('Invalid search command. Command must start with /');
        return;
    }

    const prefix = searchValue[1].toUpperCase();
    const query = searchValue.slice(3);

    // Check if prefix is valid
    if (!(prefix in PAGES)) {
        alert(`Unknown prefix ${prefix}.`);
        return;
    }

    // Construct search URL
    const url = PAGES[prefix] + encodeURIComponent(query);

    // Open search URL in new tab
    window.open(url, '_blank');

    // Add search to history
    addSearchToHistory(prefix, query, url);

    // Clear search input
    searchInput.value = '';
});

function addSearchToHistory(title, text, url) {
    // Create search object
    const search = { title, text, url };

    // Add search to search history
    searchHistory.push(search);

    // Save search history to localStorage
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));

    // Add search card to history
    addSearchCard(title, text, url);
}

function addSearchCard(title, text, url) {
    // Create card elements
    const card = document.createElement('div');
    const cardBody = document.createElement('div');
    const cardTitle = document.createElement('h5');
    const cardText = document.createElement('p');
    const cardLink = document.createElement('a');

    // Set card classes
    card.classList.add('col-12', 'col-md-6', 'col-lg-4', 'mb-4');
    cardBody.classList.add('card-body');
    cardTitle.classList.add('card-title');
    cardText.classList.add('card-text');
    cardLink.classList.add('btn', 'btn-primary');

    // Set card content
    cardTitle.textContent = title;
    cardText.textContent = text;
    cardLink.textContent = 'Go!';
    cardLink.href = url;
    cardLink.target = '_blank';

    // Set card color based on web page
    const color = COLORS[title];
    if (color) {
        card.style.backgroundColor = color;
        card.style.borderColor = color;
        cardTitle.style.color = 'white';
    }

    // Add elements to card and history div
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(cardLink);
    card.appendChild(cardBody);

    // set card background color based on web page
    if (PAGES === "/g") {
        card.classList.add("bg-google");
    } else if (PAGES === "/y") {
        card.classList.add("bg-youtube");
    } else if (PAGES === "/t") {
        card.classList.add("bg-twitter");
    } else if (PAGES === "/i") {
        card.classList.add("bg-instagram");
    }

    // prepend card to history
    const history = document.getElementById("history");
    history.insertBefore(card, history.firstChild);

    // add search to history array and local storage
    const search = {title, text, url};
    historyDiv.unshift(search);
    localStorage.setItem("historyArray", JSON.stringify(historyDiv));
}
