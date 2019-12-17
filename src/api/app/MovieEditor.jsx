import React from 'react';
import { Link, Redirect} from 'react-router-dom';
import {Movie} from '../app/model/Movie';
import { MovieService } from '../MovieService';

export class MovieEditor extends React.Component {
    state = {
        movieTitle: '',
        genre: '',
        movieYear: '',
        country: '',
        actors: ''
    }

    movieService = new MovieService();
    movie = new Movie();

    onSubmit(){
        this.state.movieTitle =null? this.props.movie.movieTitle:this.state.movieTitle;
        this.state.genre =null? this.props.movie.genre:this.state.genre;
        this.state.movieYear =null? this.props.movie.movieYear:this.state.moveYear;
        this.state.country = null? this.props.movie.country:this.state.country ;
        this.state.actors = null? this.props.movie.actors:this.state.actors;

        this.movie.movieTitle = this.state.movieTitle;
        this.movie.genre = this.state.genre;
        this.movie.movieYear = this.state.movieYear;
        this.movie.country = this.state.country;
        this.movie.actors = this.state.actors;

        this.movieService.updateMovie(this.props.movie.id, this.movie);

        var onSaveComplete = () => this.setState( {
            redirect:true
    });

    //this.setState({movieTitle:'', genre:'', movieYear:'',country:'',actors:''});
    }

    render() {
        return <>
             {this.state.redirect ? <Redirect to={`/movie/${this.props.movie.id}`}/> : null} 
            <h2 className="mx-2 my-4 px-2 text-center">Edit this movie!</h2>
            <form className="mx-2 px-2">
                <label htmlFor="movieTitle" className="my-3">Update the movie title</label>
                <input type="text" className="form-control" id="movieTitle"
                    value={this.state.movieTitle}
                    onChange={e => this.setState({ movieTitle: e.target.value })}
                    placeholder= {this.props.movie.movieTitle} />


                <label htmlFor="movieActors" className="my-3">Type in the actors</label>
                <input type="text" className="form-control" id="actors"
                    value={this.state.actors}
                    onChange={e => this.setState({ actors: e.target.value })}
                    placeholder= {this.props.movie.actors} />

                <label htmlFor="movieCountry" className="my-3">Type in the countries/country that produce the movie</label>
                <input type="text" className="form-control" id="country"
                    value={this.state.country}
                    onChange={e => this.setState({ country: e.target.value })}
                    placeholder= {this.props.movie.country} />

                <div className="col-12 d-flex my-3">
                    <div className="col-6">
                        <label htmlFor="genre">Choose a genre</label>
                        <select className="form-control genre"
                            value={this.movie.genre}
                            onChange={e => this.setState({ genre: e.target.value })}>
                            <option value="others">Others</option>
                            <option value="Adventure">Adventure</option>
                            <option value="Drama">Drama</option>
                            <option value="SciFi">Sci-Fi</option>
                            <option value="Action">Action</option>
                            <option value="Fantasy">Fantasy</option>

                        </select>
                    </div>

                    <div className="col-6">
                        <label htmlFor="movieYear">Type in the movie year</label>
                        <input type="number" className="form-control" id="movieYear"
                            value={this.state.movieYear}
                            // oninvalid= {this.setCustomValidity('needs to be an number')}
                            onChange={e => this.setState({ movieYear: e.target.value })}
                            placeholder={this.props.movie.movieYear} />

                    </div>
                </div>

                <div className="text-center">
                        <button
                            className="btn btn-primary"
                            onClick={e => this.onSubmit()}>
                            Submit
	                </button>
                    </div>

            </form>

        </>
    }
}
