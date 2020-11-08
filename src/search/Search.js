class Search
{
    constructor(placeholder = 'Placeholder...')
    {
        this.placeholder = placeholder;
    }

    render(root = document.body)
    {
        let div = document.createElement('div');
            div.classList.add('search');
        let input = document.createElement('input');
            input.placeholder = this.placeholder;
        let resultBlock = document.createElement('div');
            resultBlock.classList.add('resultBlock');

            div.appendChild(input);
            div.appendChild(resultBlock);
            root.appendChild(div);

            input.addEventListener('input', this.onKeyDown);
            input.addEventListener('focusin', function(e){resultBlock.style.display = "block"});
            input.addEventListener('focusout', function(e){resultBlock.style.display = "none"});
    }

    onKeyDown(e){
        let resultBlock = document.querySelector('.resultBlock');
                resultBlock.innerHTML = ''
        
        for(let i = 0; i < users.length; i++)
        // if result block not null
        {
            if(users[i].nickname.toLowerCase().startsWith(e.target.value.toLowerCase()) && e.target.value.length >= 1)
            {
                let p = document.createElement('p');
                    p.innerText = users[i].nickname;

                
                resultBlock.appendChild(p);
            }
                         
        }
    }
}