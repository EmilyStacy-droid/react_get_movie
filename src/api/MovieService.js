import axios from 'axios';
export class MovieService{
    url = "http://localhost:3000/api/movies";
    secondURL= "http://localhost:3000/api/movie";

    getMovies(){
            return new Promise((resolve, reject) => {
                axios.get(`${this.url}`)
                .then(x=> resolve(x.data) )
                .catch(x => {
                    alert(x);
                    reject();
                })
            }
    
    
            )
        
    }


    getMovieById(id){
        return new Promise((resolve, reject) => {
            axios.get(`${this.secondURL}/${id}`)
                .then(x => resolve(x.data))
                .catch(x=> {alert(x); reject()});
        })
    }

    postNewMovie(title, genr, year, coty, ators){

        return new Promise((resolve,reject)=>{
       axios.post(`${this.secondURL}/add?movieTitle=${title}&genre=${genr}&country=${coty}&movieYear=${year}&actors=${ators}`
           
        ).then(x => resolve(x.data))
          .catch(x => {alert(x); reject()})
    }
        )

    }
    
}