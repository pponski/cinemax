import {useState,useEffect} from 'react';
import axios from 'axios';
import Nav from "../components/Nav"
import Results from "../components/Results"
import {data} from '../utils/data';



const Home = ({results}) => {

  const [sectionTitle, setSectionTitle] = useState('Trending');
  const [genres, setGenres] = useState([]);

    useEffect(async () => {
        const request = await axios('https://api.themoviedb.org/3/genre/movie/list?api_key=326474e2aa5ef168c4353d49397599bf&language=en-US')
        setGenres(request.data.genres);
    }, []);


  return (
    <>
      <Nav sectionTitle={sectionTitle} setSectionTitle={setSectionTitle}/>
      <div className="max-w-6xl mx-auto">
        <p
          className="bg-blue-100 px-5 py-10 text-center font-bold text-3xl md:text-left md:text-5xl md:py-16 xl:text-6xl xl:px-0"
        >{sectionTitle !== 'Trending' ? sectionTitle.slice(5) : sectionTitle} Movies</p>
        <Results genres={genres} results={results}/>
      </div>
    </>
  )
}
export default Home;




export async function getServerSideProps(context){

  const genre = context.query.genre;

  const request = await fetch(`https://api.themoviedb.org/3${data[genre]?.url || data.fetchPopular.url}`)
  .then((res) => res.json());

  return {
      props: {
          results: request.results,
      }
  }
}