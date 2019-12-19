import {MovieListPage} from './movie_list_page_model';
import { RequestLogger } from 'testcafe';

fixture(`movie List`)
.page('http://localhost:3001')

const movieListModel = new MovieListPage();
const addMovieURL = 'http://localhost:3000/api/movie/add?movieTitle=myMovie&genre=others&country=USA&movieYear=2019&actors=me';

const logger = RequestLogger({ addMovieURL, method: 'post' }, {
    logResponseHeaders: false,
    logResponseBody:    false
});

test('should display the header', async t => {
    await t.expect(movieListModel.title.textContent).eql('GET MOVIES');
    //await movieListModel.clickAddButton();
    await t.click(movieListModel.addButton);
    await t.expect(movieListModel.addMovieTitle.textContent).eql('Add a new movie!');
    await movieListModel.typeMovieTitle("myMovie");
    await t.expect(movieListModel.movieTitle.value).eql('myMovie');
    await movieListModel.typeCountry("myCountry");
    await t.expect(movieListModel.country.value).eql('myCountry');
    await movieListModel.typeActors("me");
    await t.expect(movieListModel.actors.value).eql('me');
    await movieListModel.selectGenre("others");
    await t.expect(movieListModel.genre.value).eql('others');
    await movieListModel.typeMovieYear('2019');
    await t.expect(movieListModel.movieYear.value).eql('2019');

});

