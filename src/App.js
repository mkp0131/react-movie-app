import React from 'react';
import axios from 'axios';
import Movie from './Movie';

class App extends React.PureComponent {
  state = {
    isLoading: true,
    movies: []
  }

  loadingHandler = () => {
    this.setState(() => {
      return {
        isLoading: false
      }
    })
  }

  getMovieList = async () => {
    const {
      status,
      data: {
        data: {
          movies
        }
      }
    } = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=raiting');
    if(status === 200) this.loadingHandler();
    this.setState(() => {
      return {
        movies: movies,
        isLoading: false,
      }
    })
  }

  componentDidMount() {
    this.getMovieList();
  }

  render() {
    const {isLoading, movies} = this.state;
    return (
      <section className="section">
          {isLoading ? (
            'Loading....'
          ) : (
            <div className="movies">
              {
                movies.map((movie) => (
                  <Movie key={movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} genres={movie.genres} />
                ))
              }
            </div>
          )}
      </section>
    )
  }
}

export default App;
