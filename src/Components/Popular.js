import { useState } from "react"


const key = "e35bc2b";
const API_URL = `https://www.omdbapi.com/?apikey=${key}`;

const Popular = () => {

  const [selectYear, setSelectYear] = useState('2021');
  const [imdbRate, setImdbRate] = useState('7.5');
  const [popularSection,setPopularSection]= useState([]);


  const handleSubmit=(e)=>{
    e.preventDefault();
    alert(`${imdbRate} & ${selectYear}`)

    fetch(`${API_URL}&y=${selectYear}&imdbRating=${imdbRate}`)
    .then(response=>{
      return response.json();
    })
    .then(data=>{
      console.log(data);
      setPopularSection(data);
    })
    .catch(err=>{
      console.log(err.message);
    })
  }


  return (
    <>
      <div className='popular'>
        <form onSubmit={handleSubmit}>
          <h1>Top 10 Movies</h1><br />
          <label>Type a IMDB Rating: <input
            type="text"
            value={imdbRate}
            onChange={e => { setImdbRate(e.target.value) }}
          /></label><br /><br />
          <label htmlFor="year">Year: </label>
          <select value={selectYear} id="year" onChange={(e) => { setSelectYear(e.target.value) }}>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
          </select><br /><br />
          <button>Submit</button>
        </form>
      </div>

      <div className="section">
        {popularSection && popularSection.length>0 ? ( 
          popularSection.map((p)=>(
          <h1>{p.Title}</h1>
        ))) : 
        ( <p>{console.log('No movies Found!')}</p>)
      }
      </div>
    </>
  )
}

export default Popular