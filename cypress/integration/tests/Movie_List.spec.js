///<reference types = "cypress" />
import {MovieListPage} from '../models/movie_list_page_model';
const movieListPage;
describe(`account_list`,()=> {
    before()
    beforeEach(function(){
        movieListPage = new movieListPage();
        movieListPage.visit();

    }
    )
    afterEach()
    after()


    it(`should load`, ()=> {
        cy.visit('/');
        cy.get('#title').contains(`GET MOVIES`);
    }

    );

}


);


describe(`add_movie`, ()=> {

    it(`should add movie`, () => {
        MovieListPage.visit();
        MovieListPage.getFormTitle.type('myMovie');
        cy.get('#country').type('USA');
        cy.get('#actors').type('me');
        cy.get('.genre').select('others');
        cy.get('#movieYear').type(2019);
        cy.get('[data-cy=addMovieForm]').submit();
        cy.request({method:'POST',url:'http://localhost:3000/api/movie/add?movieTitle=myMovie&genre=others&country=USA&movieYear=2019&actors=me'});
        cy.visit('/');
        cy.get('[data-cy="listHead"]').contains('myMovie');


    })

})