class UI {
    constructor(){
        this.profile = document.querySelector('#profile');
    }

    showProfile(user, repos) {
        this.clearAlert();
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${user.avatar_url}" alt="${user.name}" class="img-fluid mb-2">
                        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
                    </div>

                    <div class="col-md-9">
                        <span class="badge round-pill text-bg-primary">public Repositry: ${user.public_repos}</span>
                        <span class="badge round-pill text-bg-secondary">Public Gists: ${user.public_gists}</span>
                        <span class="badge round-pill text-bg-success">Followers: ${user.followers}</span>
                        <span class="badge round-pill text-bg-info">Following: ${user.following}</span>
                        <br></br>
                        <ul class="list-group">
                            <li class="list-group-item card-text">Company: ${user.company}</li>
                            <li class="list-group-item card-text">Website/Blog: ${user.blog}</li>
                            <li class="list-group-item card-text">Locations: ${user.location}</li>
                            <li class="list-group-item card-text">Member Since: ${user.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class="page-heading mb-3">Latest Repositories</h3>
            <div id='repos' class="row row-cols-1 row-cols-3 g-4">

            </div>
        `;
        this.showRepos(repos);
    }

    showRepos(repos) {
        let output = '';
        console.log(output);
        if (Array.isArray(repos)) {
            repos.forEach(repo => {
                output += `
                <div class='col'>
                    <div class='card'>
                        <div class="card-body mb-2">
                            <h5 class='card-title'>
                                <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                            </h5>
                            <span class="badge round-pill text-bg-primary">Stars: ${repo.stargazers_count}</span>
                            <span class="badge round-pill text-bg-secondary">Watchers: ${repo.watchers_count}</span>
                            <span class="badge round-pill text-bg-success">Forks: ${repo.forks_count}</span>
                            <ul class="list-group">
                                <li class="list-group-item card-text">Description: ${repo.description}</li>
                                <li class="list-group-item card-text">Language: ${repo.language}</li>
                                <li class="list-group-item card-text">Last Update: ${String(repo.updated_at).substring(0, 10)}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                `
            });
            document.querySelector('#repos').innerHTML = output;
        }
        
    }

    clearProfile() {
        this.profile.innerHTML = '';
    }

    showAlert(message, className) {
        this.clearAlert();
        this.clearProfile();
        const div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.searchContainer');
        const search = document.querySelector('.search');
        container.insertBefore(div, search);

        // Automatically clear the alert and input field after 3 seconds
        setTimeout(() => {
            this.clearAlert();
            searchInput.value = '';
        }, 3000); // Adjust the delay (in milliseconds) as needed
    }

    clearAlert() {
        let currentAlert = document.querySelector('.alert');
        if (currentAlert) {
            currentAlert.remove();
        }
    }
}