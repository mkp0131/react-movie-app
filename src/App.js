import React from 'react';
import Button from './Button';
import axios from 'axios';

class App extends React.PureComponent {
  state = {
    isLoading: true,
    movie: []
  }

  loadingHandler = () => {
    this.setState(() => {
      return {
        isLoading: false
      }
    })
  }

  getMovieList = async () => {
    const movieList = await axios.get('https://yts.mx/api/v2/list_movies.json');
    if(movieList.status === 200) this.loadingHandler();
    console.log('', movieList);
  }

  componentDidMount() {
    this.getMovieList();
  }


  render() {
    const {isLoading} = this.state;
    return (
      <div>
        <div>
          {isLoading ? 'Loading....' : 'Ready'}
        </div>
        <Button onClick={this.loadingHandler}/>
      </div>
    )
  }
}

export default App;
