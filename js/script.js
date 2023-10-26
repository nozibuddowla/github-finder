// HTML elements
const searchInput = document.querySelector('.search__input');
const searchButton = document.querySelector('.search__button');
let ui = new UI();

async function performSearch() {
    let userText = searchInput.value;
    if (userText !== '') {
        try {
            // Fetch user data
            const userDataResponse = await fetch(`https://api.github.com/users/${userText}`);
            const userData = await userDataResponse.json();

            if (userData.message === 'Not Found') {
                // Show Alert
                ui.showAlert('We could not find the entered User! try again...', 'alert alert-danger');
            } else {
                // Fetch user's repositories
                const userReposResponse = await fetch(`https://api.github.com/users/${userText}/repos`);

                if (!userReposResponse.ok) {
                    throw new Error(`Failed to fetch repositories: ${userReposResponse.statusText}`);
                }
                const userRepos = await userReposResponse.json();

                ui.showProfile(userData, userRepos);
            }
        } catch (error) {
            console.error('Error fetching repositories:', error);
            ui.showProfile(data, []); // Pass an empty array in case of an error
        }
        searchInput.value = '';
    } else {
        // Clear Profile
        ui.clearProfile();
    }
}

function searchOnEnter(event) {
    if (event.key === 'Enter') {
        performSearch(); // Trigger the search when Enter key is pressed
        console.log(performSearch);
    }
}

// Event Listeners
searchButton.addEventListener('click', performSearch);
