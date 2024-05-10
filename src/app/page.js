import Gone from './api';
import logger from '../../logger';
import nextConfig from '../../next.config.cjs';





const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTQ2MTI2M2ZmMzFhMGQ5ZjYzYTNjMjYzNGM4MzgxNSIsInN1YiI6IjY1YWMxNTQ4ZjI2M2JhMDBhZDg0MTBmMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FdZIljZbFmb2i6pWPRyuFqOfbVqeDsJpGZnZo_2Umkg',
  },
  cache: 'no-cache',

  
};

const mostPopular = async () => {
  const e = await fetch(url, options)

  const pass = await e.json()
  var c = pass.results
  var id = pass.results
  var d = c[0].poster_path
  var first_name = "https://image.tmdb.org/t/p/w200"; 
  var name=first_name.concat(c)
  var title = c[0].title
  var titleRender = c.map((c) => c.title)

  var overview = c.map((c) => c.overview)

  var connet = c.map((c) =>  first_name.concat (c.poster_path))
  var idEd = c.map((c) =>  c.id)

  var array = [connet, idEd, titleRender, overview]

  return array

}

mostPopular()

const vrl = 'https://api.themoviedb.org/3/movie/572802/videos?language=en-US';
const vions = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTQ2MTI2M2ZmMzFhMGQ5ZjYzYTNjMjYzNGM4MzgxNSIsInN1YiI6IjY1YWMxNTQ4ZjI2M2JhMDBhZDg0MTBmMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FdZIljZbFmb2i6pWPRyuFqOfbVqeDsJpGZnZo_2Umkg'
  }
};






export default async function  Home  (req, res) {
  logger.info('made it')

  

 var cool = await mostPopular()
 const bet = 'book'
 const pet = 'https://image.tmdb.org/t/p/w200/7lTnXOy0iNtBAdRP3TZvaKJ77F6.jpg'

  return (<div >
    <Gone image={cool[0]} code={cool[1]} titles={cool[2]} summa={cool[3]} />
  </div>);
}

