import { Component } from "react";

//it has a props called currentMovieObj which contains an obj with a movie details
class SingleMovie extends Component {
  render() {
    return (
      <div className="col-md-2">
        <img
          className="movie-cover"
          src={this.props.currentMovieObj.Poster}
          alt={this.props.currentMovieObj.Title}
        />
      </div>
    );
  }
}

export default SingleMovie;
