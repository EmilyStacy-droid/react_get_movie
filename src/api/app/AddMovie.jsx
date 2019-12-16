import React from 'react';
import { MovieService } from '../MovieService';
import { Link, Redirect} from 'react-router-dom';

export class AddMovie extends React.Component {
    state = {
        movieTitle: '',
        genre: '',
        movieYear: '',
        country: '',
        actors: '',
        isCompleted:false
    }

    movieService = new MovieService();

    onSubmit() {
        
        this.movieService.postNewMovie(this.state.movieTitle, this.state.genre, this.state.movieYear, this.state.country, this.state.actors);

        this.state.isCompleted = true;

        this.setState({movieTitle:'', genre:'', movieYear:'',country:'',actors:'', isCompleted:false});

        var onSaveComplete = () => this.setState( {
           redirect:true
     });

       
        
    }

   
    // setCustomValidity(input){
    //     alert(input);
    // }

    render() {
        return (
           
            <> 
               {this.state.redirect ? <Redirect to='movies'/> : null}  
                    <div className="m-4 text-center">
                        <Link to="/movies">
                            <button type="button" className="btn btn-primary">Return to Home</button>
                        </Link>
                    </div>
                <h2 className="mx-2 my-4 px-2 text-center">Add a new movie!</h2>
                {this.state.isCompleted?<div>Your movie is submitted!</div>: null}

                <form className="mx-2 px-2">
                    <label htmlFor="movieTitle" className="my-3">Type in the movie title</label>
                    <input type="text" className="form-control" id="movieTitle"
                        value={this.state.movieTitle}
                        onChange={e => this.setState({ movieTitle: e.target.value })}
                        placeholder="Enter movie title" />

                    <label htmlFor="movieCountry" className="my-3">Type in the countries/country that produce the movie</label>
                    <input type="text" className="form-control" id="country"
                        value={this.state.country}
                        onChange={e => this.setState({ country: e.target.value })}
                        placeholder="Enter country" />


                      <label htmlFor="movieActors" className="my-3">Type in the actors</label>
                    <input type="text" className="form-control" id="actors"
                        value={this.state.actors}
                        onChange={e => this.setState({ actors: e.target.value })}
                        placeholder="Enter actors" />   

                    <div className="col-12 d-flex my-3">
                        <div className="col-6">
                            <label htmlFor="genre">Choose a genre</label>
                            <select className="form-control genre"
                                value={this.state.genre}
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
                                placeholder="Enter Year" />

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
        )
    }
}