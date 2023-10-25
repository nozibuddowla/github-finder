// HTML elements
const searchInput = document.querySelector('.search__input');
const searchButton = document.querySelector('.search__button');

// Event Listeners
searchButton.addEventListener('click', (e) => {
    let userText = searchInput.value;
    if (userText !== '') {
        // Fetch API
        fetch(`https://api.github.com/users/${userText}`)
        .then(result => result.json())
        .then(data => {
            console.log(data);
            if (data.message === 'Not Found') {
                // Show Alert
                
            } else {
                // Show Profile
            }
        })
    } else {
        // Clear Profile
    }
})