class Search
{
    constructor(placeholder = 'Placeholder...')
    {
        this.placeholder = placeholder,
        this.genderList = ['No selected', 'Male', 'Female', 'Another']
    }

    render(root = document.body)
    {
        let div = document.createElement('div');
            div.classList.add('search');

        let input = document.createElement('input');
            input.id = 'userName';
            input.placeholder = this.placeholder;

        let selectGenderBlock = document.createElement('select');
            selectGenderBlock.classList.add('select-gender');
            this.genderList.forEach(gender => {
                let option = document.createElement('option');
                    option.value = gender.toLowerCase();
                    option.text = gender;
                    selectGenderBlock.appendChild(option);
            });

        let checkOnlineBlock = document.createElement('div');
            checkOnlineBlock.classList.add('check-online');

            let onlineSpan = document.createElement('span');
                onlineSpan.innerText = 'Online required?';

            let onlineCheckbox = document.createElement('input');
                onlineCheckbox.type = 'checkbox';

            checkOnlineBlock.appendChild(onlineSpan);
            checkOnlineBlock.appendChild(onlineCheckbox);

        let userCountryCode = document.createElement('input');
            userCountryCode.placeholder = 'Select contry (CODE)';
            userCountryCode.classList.add('userCountryCode');
            userCountryCode.maxLength = '3';


        let searchButton = document.createElement('button');
            searchButton.classList.add('searchButton');
            searchButton.innerText = 'Search users';



        let resultBlock = document.createElement('div');
            resultBlock.classList.add('resultBlock');

            div.appendChild(input);
            div.appendChild(selectGenderBlock);
            div.appendChild(checkOnlineBlock);
            div.appendChild(userCountryCode);
            div.appendChild(searchButton);
            div.appendChild(resultBlock);
            root.appendChild(div);

            searchButton.addEventListener('click', this.onSearch);

    }

    onSearch(e)
    {
        console.log('%cEnter in onSearch function', 'color: green');
        let resultBlock = document.querySelector('.resultBlock');
            resultBlock.innerHTML = '';

        let nameInput = document.querySelector('#userName');
        let selectGender = document.querySelector('.select-gender');
        let isOnline = document.querySelector('.check-online input');
        let countryCode = document.querySelector('.userCountryCode');
        console.log('%cCreated all variales', 'color: green');
        
        // for(let i = 0; i < users.length; i++)
        // // if result block not null
        // {
        //     if(users[i].nickname.toLowerCase().startsWith(e.target.value.toLowerCase()) && e.target.value.length >= 1)
        //     {
        //         let p = document.createElement('p');
        //             p.innerText = users[i].nickname;

                
        //         resultBlock.appendChild(p);
        //     }

        // }

            users
                .filter( user => user.nickname.toLowerCase().startsWith(nameInput.value.toLowerCase()) ) // Name search
                .filter( user => { // gender search
                    if(selectGender.value == 'No selected'){
                        if(selectGender.value != 'another')   
                        {
                          if(user.gender.toLowerCase() == selectGender.value)
                          {
                            console.log(`Male or female: ${user.nickname} - ${user.gender}`);
                            return true;
                          }
                        }else{
                          if(user.gender.toLowerCase() != 'male' && user.gender.toLowerCase() != 'female')
                          {
                            console.log(`Male or female: ${user.nickname} - ${user.gender}`);
                            return true;
                          }
                      }  
                    }else{
                        return true;
                    }       
                })
                .filter(user => {
                    if(isOnline.checked){
                        if(user.online)
                        {
                            console.log(`${user.nickname} is online`);
                            return true
                        }else{
                            return false;
                        }
                    }else{
                        return true;
                    }
                })
                .filter(user => {
                    if(countryCode.value.length >= 1){
                        console.log('Contry code length > 1');
                        if(user.location.toLowerCase() == countryCode.value.toLowerCase()){
                            console.log(`Input value: ${countryCode.value}`);
                            console.log(`User loc: ${user.location}`);
                            return true;
                        }else {
                            console.log('Не подошёл код страны');
                            return false;
                        }  
                    }else{
                        console.log('Contry code length < 1');
                        return true;
                    }
                })
                .forEach( user => {
                    let p = document.createElement('p');
                    p.innerText = user.nickname;
                    resultBlock.appendChild(p);
                    console.log('%cEnter in forEach', 'color: green');

                });

        }
    }

