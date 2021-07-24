import React from "react"
import axios from "axios"
import Movie from "../components/Movie"
import "./Home.css"
class App extends React.Component{
  state = {
    isLoading : true,
    movies : []
  }
  getMovies = async () => {
    const {data:{data:{movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating")
    this.setState({movies, isLoading:false})
  }
  componentDidMount() {
    this.getMovies();
  }

  render(){
    const {isLoading,movies} = this.state
    return (
    <section class="base">
      {isLoading ? <div className="movie_loading"><span>"Loading"</span></div> : 
      
        movies.map(movies => {
        return <div className="movie__container">
          <Movie key = {movies.id} id = {movies.id} title = {movies.title} year = {movies.year} poster = {movies.medium_cover_image} summary = {movies.summary} rating = {movies.rating} genres={movies.genres}/>
        </div>
        })}
    </section>
    )

  }
}


export default App;
