const refreshCSS = () => {
    let links = document.getElementsByTagName('link');
    for (let i = 0; i < links.length; i++) {
        if (links[i].getAttribute('rel') == 'stylesheet') {
            let href = links[i].getAttribute('href')
                                    .split('?')[0];
              
            let newHref = href + '?version=' 
                        + new Date().getMilliseconds();
              
            links[i].setAttribute('href', newHref);
        }
    }
}

const getQuotes = (quantity = 3) => {
    fetch(`https://thesimpsonsquoteapi.glitch.me/quotes?count=${quantity}`)
    .then(res => {return res.json()})
    .then(response => {
        response.forEach(quote => {
            const content = `
            <div class="row">
            <div class="col-md-6">
            <img class="media" src="${quote.image}" />
            </div>
            <div class="col-md-6">
                <h2>
                    ${quote.character}
                </h2>
                <p>
                    ${quote.quote}
                </p>
            </div>
        </div>`;
            document.getElementById('container').innerHTML += content;
        });
        refreshCSS();
    })
    .catch(error => {
        alert('Ocurrio un problema. '+error);
    })
}

const button = document.getElementById('button');
button.addEventListener('click', (e) => { getQuotes() });