class User{
    constructor(nickname, avatar, gender, location, dob, online = null){
        this.nickname = nickname,
        this.avatar = avatar,
        this.gender = gender,
        this.location = location,
        this.dob = dob,
        this.online = online
    }

    render(root, mode = 'sm'){

        let div = document.createElement('div');
            div.className = `user-${mode}`;
        let img = document.createElement('img');
            img.src = this.avatar;

        if(this.online != null)
        {
            let onlineIndicator = document.createElement('div');
            if(this.online)
                onlineIndicator.className = 'onlineIndicator online';
            else onlineIndicator.className = 'onlineIndicator offline';

            div.appendChild(onlineIndicator);
        }

            div.appendChild(img);

            if(mode == 'md')
            {
                let h2 = document.createElement('h2');
                    h2.innerText = this.nickname;
                div.appendChild(h2);
            }

            if(mode == 'lg')
            {
                let location = document.createElement('span');
                let gender = document.createElement('span');
                let dob = document.createElement('span');
                let h2 = document.createElement('h2');
                    h2.innerText = this.nickname;
                    location.innerText = `Location: ${this.location}`;
                    location.className = 'location-span';
                    gender.innerText = `Gender: ${this.gender}`;
                    gender.className = 'gender-span';
                    dob.innerText = `Date of birth: ${this.dob}`;
                    dob.className = 'dob-span';

                    div.appendChild(h2);
                    div.appendChild(location);
                    div.appendChild(gender);
                    div.appendChild(dob);
                    
            }

            root.appendChild(div);
    }
}





