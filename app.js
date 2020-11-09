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
loadComponent('search');


window.onload = function(){
    if(errorText)
        alert(errorText);
    console.log('App.js onload work.');
    // let max = new User('Max', 'img/max.jpg', 'M', 'China', '10/01/1999', true);
    // max.render('lg'); 

    // let anna = new User('Anna', 'img/anna.jpg', 'F', 'America', '05/15/1992', false);
    // anna.render('lg');
    generateFakeUser();

    let search = new Search('Search user...');
    search.render();
}