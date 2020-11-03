function capitalize(str){
    return str[0].toUpperCase() + str.substr(1);
}

let errorText = '';

function loadComponent(comp){

    let link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = `src/${comp}/${comp}.css`;

        link.onerror = function(){
            errorText += `ERROR: Does not exist ${this.href}\n`;
        }

        document.head.appendChild(link);

    let script = document.createElement('script');
        script.src = `src/${comp}/${capitalize(comp)}.js`; 
        
        script.onerror = function(){
            errorText += `ERROR: Does not exist ${this.src}\n`;
        }

        document.body.appendChild(script);

};


// loadComponent('user');
loadComponent('user');


setTimeout(() => {
    if(errorText)
        alert(errorText);
}, 2000);
