import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params){
        super(params)
        this.setTitle("Countries")
    }

    async getHtml() {
        async function getData(url){
            const response = await fetch(url)
            return response.json()
        }

        const data = await getData('/static/js/views/countries.json')
        let listCountries = "<ul>"
        for(let i in data){
            let j = parseInt(i) + 1;
            listCountries += "<li><a href='/country-view/"+j+"' data-link>"+data[i]['name']+"</a></li>"
        }
        listCountries +="</ul>"

        return `
        <h1>Countries</h1>
        `+listCountries;
    }
}