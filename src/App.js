import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { updateReduxVal } from './slices/sampleSlice';
import { useNewPokemonByNameMutation } from './service/pokemon';
import { useEffect } from 'react';

function App() {
  //accessing store value from sampleSlice
  const reduxState = useSelector((state) => state.sampleSlice.reduxVal)

  //mutation method
  let [newPokemonByName, { isLoading, data, error }] = useNewPokemonByNameMutation()

  //query method
  // let { data, error, isLoading, } = useGetPokemonByNameQuery(val)

  useEffect(() => {
    //calling api initially when the component is loaded to load the initial data
    newPokemonByName(0)
  }, [])  

  //assigning our dispatcher hook, so it can later be used on inner functions instead only in components
  const dispatch = useDispatch();

  const handleChangeReduxVal = ({ target: { value } }) => {
    //updating redux value using dispatch hook and update function defined inside our reducer.
    dispatch(updateReduxVal(value));
  }

  const handleChangeSelect = ({ target: { value } }) => {
    //we call the api for new select value
    newPokemonByName(value)
  }

  return (
    <div className="App">
      {/* sample input to demonstrate redux flow */}
      <input
        value={reduxState || ""}
        onChange={handleChangeReduxVal}
        className='input-app'
      />
      <p>Redux Value: {reduxState}</p>
      <select
        onChange={handleChangeSelect}
      >
        {[0, 20, 40, 60].map((val) => <option key={val} value={val}>{val}</option>)}
      </select>
      {
        error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          data.results.map((data, i) => <div key={i}> <p>{data.name}</p>
            {/* <img src={data.sprites.front_shiny} alt={data.species.name} /> */}
          </div>)
        ) : null
      }
    </div>
  );
}

export default App;
