// HTML elements
const searchInput = document.querySelector('.search__input');
const searchButton = document.querySelector('.search__button');
let ui = new UI();

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
                ui.showAlert('We could not find the entered User! try again...', 'alert alert-danger');
            } else {
                // Fetch user's repositories
                fetch(`https://api.github.com/users/${userText}/repos`)
                .then(result => {
                    if(!result.ok) {
                        throw new Error(`Failed to fetch repositories: ${result.statusText}`)
                    }
                    return result.json()
                })
                .then(repos => {
                    ui.showProfile(data, repos); // Pass the 'repos' data here
                })
                .catch(error => {
                    console.error('Error fetching repositories:', error);
                    ui.showProfile(data, []); // Pass an empty array in case of an error
                })
            }
        })
        .catch(error => {
            console.error("Error fetching user data:", error);
        })
    } else {
        // Clear Profile
        ui.clearProfile();
    }
})