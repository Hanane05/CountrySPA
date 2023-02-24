import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params){
        super(params)
        this.setTitle("Viewing country infos")
    }

    async getHtml() {
       
        const nu  = Number(this.params.id)

        async function getData(url){
            const response = await fetch(url)
            return response.json()
        }

        const data = await getData('/static/js/views/countries.json')

        const country = data[nu-1]

        return `
        <h1>`+country.name+`</h1>
        <ul> 
        <li><strong>Capital:</strong> `+country.capital+`</li>
        <li><strong>Code téléphonique:</strong> `+country.callingCodes+`</li>
        <li><strong>Code alpha3:</strong> `+country.alpha3Code+`</li>
        <li><strong>Region:</strong> `+country.region+`</li>
        </ul>
        <p><a href='/countries' data-link>Retour</a></p>
        `;
    }
}