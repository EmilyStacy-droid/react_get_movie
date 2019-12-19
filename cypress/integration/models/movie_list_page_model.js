export class MovieListPage{
    
    constructor(){

    }

    visit(){
        cy.visit('/movie/addNew');

    }

    // getHyperLink(){
    //     cy.get('#movieTitle');
    // }

    getFormTitle(){
        cy.get('#movieTitle');
    }

    getFormCountry(){
        cy.get('#country');
    }

    getFormActors(){
        cy.get('#actors');
    }

    getFormGenres(){
        cy.get('.genre');
    }

    getFormYears(){
        cy.get('#movieYear');
    }
    
}