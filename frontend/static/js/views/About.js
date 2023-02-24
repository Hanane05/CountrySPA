import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params){
        super(params)
        this.setTitle("About")
    }

    async getHtml() {
        return `
        <h1>Welcome to my SPA </h1>
        <p>Cette application est réalisée pour afficher la liste des pays du monde et donner quelques informations telle que la capital.</p>
        
        <p>
            <a href="/countries" data-link>Voir la liste des pays</a>
        </p>
        `;
    }
}