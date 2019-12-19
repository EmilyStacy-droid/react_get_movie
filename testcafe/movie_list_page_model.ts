import {Selector,t} from 'testcafe';

export class MovieListPage{
    title:Selector;
    country: Selector;
    addButton: Selector;
    actors: Selector;
    movieTitle:Selector;
    genre:Selector;
    addMovieTitle:Selector;
    movieYear:Selector;



    constructor(){
        this.title = Selector('#title');
        //this.addButton = Selector('#addbutton[ui-sref="/movie/addNew"]');
        this.addButton = Selector('#addbutton');
        this.country = Selector('#country');
        this.movieTitle = Selector('#movieTitle');
        this.actors = Selector('#actors');
        this.genre = Selector('.genre');
        this.addMovieTitle=Selector('#addMovieHeader');
        this.movieYear = Selector('#movieYear');


    }

     async clickAddButton(){
       await t.click(this.addButton);
    }

     async typeMovieTitle(input:string){
        await t.typeText(this.movieTitle, input);
    }

    async typeCountry(input:string){
        await t.typeText(this.country, input);
    }

    async typeActors(input:string){
        await t.typeText(this.actors, input);
    }

    async selectGenre(input:string) {
        await this.genre.find(input);
    }

    async typeMovieYear(input:string){
        await t.typeText(this.movieYear, input);
    }
    
}


// it(`should add movie`, () => {
//     MovieListPage.visit();
//     MovieListPage.getFormTitle.type('myMovie');
//     cy.get('#country').type('USA');
//     cy.get('#actors').type('me');
//     cy.get('.genre').select('others');
//     cy.get('#movieYear').type(2019);
//     cy.get('[data-cy=addMovieForm]').submit();
//     cy.request({method:'POST',url:'http://localhost:3000/api/movie/add?movieTitle=myMovie&genre=others&country=USA&movieYear=2019&actors=me'});
//     cy.visit('/');
//     cy.get('[data-cy="listHead"]').contains('myMovie');


// })