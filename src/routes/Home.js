import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import "./Home.css";

class Home extends React.PureComponent {
  state = {
    isLoading: true,
    movies: []
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
    if(status === 200) {
			this.setState(() => {
				return {
					movies: movies,
					isLoading: false,
				}
			})
		}
  }

  componentDidMount() {
    this.getMovieList();
  }

  render() {
    const {isLoading, movies} = this.state;
    return (
      <section className="section">
          {isLoading ? (
						<div className="loading-spinner">
							<div className="sk-double-bounce">
								<div className="sk-child sk-double-bounce1"></div>
								<div className="sk-child sk-double-bounce2"></div>
							</div>
							<div className="loading-spinner__txt">Loading....</div>
						</div>
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

export default Home;
