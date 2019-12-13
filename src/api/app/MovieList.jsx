import React  from 'react';
import { MovieService } from '../MovieService';
import { Link} from 'react-router-dom';

export class MovieList extends React.Component {

    state = {
        movies: [],
        
    }

    movieService = new MovieService();

    componentDidMount() {
       
        this.movieService.getMovies().then(movies => this.setState({ movies }));

        // this.movieService.getMovies().then(movies=>this.setState({movies}));
    }

    render() {
        return (
            <>
              
                <div>
                <button type="button" className="btn btn-success my-4 ml-2 px-2 text-center"><Link to="/movie/addNew">Add a new movie entry</Link></button>
                </div>

                <h2 className="mt-4 badge badge-secondary" >Here are all the movies we have</h2>
                
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Genre</th>
                            <th scope="col">Year</th>
                            <th scope="col">Country</th>
                            <th scope="col">Actors</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.state.movies.map((movie, i) => (
                            <tr key={i} id={i}>
                                <td><Link to = {`/movie/${movie.id}`}>{movie.movieTitle!==null?movie.movieTitle: "N/A"}</Link></td>
                                <td >{movie.genre !== null ? movie.genre : 'N/A'}</td>
                                <td> {movie.actors !== null ? movie.actors : 'N/A'} </td>
                                <td> {movie.country !== null ? movie.country : 'N/A'} </td>
                                <td> {movie.actors !== null ? movie.actors : 'N/A'} </td>
                            </tr>
                        ))
                        }


                    </tbody>

                </table>
            </>
        )
    }
}