class UI {
    constructor(){
        this.profile = document.querySelector('#profile');
    }

    showProfile(user) {
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${user.avatar_url}" alt="${user.name}" class="img-fluid mb-2">
                        <a href="${user.html_url}" target="_blank" class="btn bton-primary btn-block mb-4">View Profile</a>
                    </div>

                    <div class="col-md-9">
                        <span class="badge rounde-pill text-bg-primary">public Repositry: ${user.public_repos}</span>
                        <span class="badge rounde-pill text-bg-secondary">Public Gists: ${user.public_gists}</span>
                        <span class="badge rounde-pill text-bg-success">Followers: ${user.followers}</span>
                        <span class="badge rounde-pill text-bg-info">Following: ${user.following}</span>
                        <br></br>
                        <ul class="list-group">
                            <li class="list-group-item">Company: ${user.company}</li>
                            <li class="list-group-item">Website/Blog: ${user.blog}</li>
                            <li class="list-group-item">Locations: ${user.location}</li>
                            <li class="list-group-item">Member Since: ${user.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
        `;
    }
}