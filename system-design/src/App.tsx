import { useState, useEffect } from 'react'
import './App.css'

 interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: "Easy" | "Medium" | "Hard"; 
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  userId: number;
  image: string;
  rating: number;
  reviewCount: number;
  mealType: string[];
}

interface Cache {
  [key: string]: Recipe[];
}

function App() {
  const [results, setResults] = useState<Recipe[]>([])
  const [input, setInput] = useState('')
  const [showResults, setShowResults] = useState(false)
  const [cache,setCache] = useState<Cache>({})

  const fetchData = async () =>{
    if(cache[input]){
    console.log('CACHE RETURNED', input);
    setResults(cache[input])
    return;
    }
    try{
      const res =  await fetch(`https://dummyjson.com/recipes/search?q=${input}`)
      const data = await res.json();
      setResults(data?.recipes)
      setCache((prevCache)=>({...prevCache,
      [input]:data?.recipes
      }))
    }catch(error){
      console.error('Error fetching data:', error)
    }
  }

   useEffect(()=>{
    const timer = setTimeout(fetchData,300)
    return () => {clearTimeout(timer)}
  },[input])

      console.log(results)

  return (
    <>
      <h1>Autocomplete Search Bar</h1>
      <div>
        <input type='text'
        className='search-input'
         value={input}
          onChange={(e)=>setInput(e.target.value)}
          onFocus={()=>setShowResults(true)}
            onBlur={()=>setShowResults(false)}
            placeholder='search recipes...'
          />
        {showResults &&<div className='results-container'>
          {results.map((_data)=>{
            return(<span className='results' key={_data?.id}>{_data?.name}</span>)
          })}
        </div>}
      </div>
    </>
  )
}

export default App
