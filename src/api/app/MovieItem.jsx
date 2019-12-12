import React from 'react';
import { MovieService } from '../MovieService';
import { Link} from 'react-router-dom';

export class MovieItem extends React.Component {
    state={
        movie:{}
    }
    movieService = new MovieService();

    componentDidMount() {
        let movieId = this.props.match.params.movieId;
        if (movieId) {
            this.movieService.getMovieById(movieId).then(movie => this.setState({ movie }))
        }
    }
    render() {
        if (!this.state.movie) {
            return (
                <div class="spinner-border text-secondary" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            )
        }
        return (

            <>
                <div className="container">
                    <div className="m-4 text-center">
                        <Link to="/movies">
                            <button type="button" class="btn btn-primary">Return to Home</button>
                        </Link>
                    </div>

                    <div className="card m-4">
                        <div className="card-body">
                            <h5 className="card-title">{this.state.movie.movieTitle!==null?this.state.movie.movieTitle: "N/A"}</h5>
                            <p className="card-text">{this.state.movie.genre!==null?this.state.movie.genre:"N/A"}</p>
                            <p className="card-text">{this.state.movie.movieYear!==null?this.state.movie.movieYear:"N/A"}</p>
                            <p className="card-text">{this.state.movie.actors!==null?this.state.movie.actors:"N/A"}</p>
                            

                        </div>
                    </div>


                </div>
            </>
        )

    }

}