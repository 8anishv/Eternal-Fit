import { useState } from 'react'

import Hero from './components/Hero'
import Generator from './components/Generator'
import Workout from './components/Workout'
import { generateWorkout } from './utils/functions'

function App() {

  const [workout, setWorkout] = useState(null)
  const [poison, setpoison] = useState("individual");
  const [muscles, setmuscles] = useState([]);
  const [goals, setgoals] = useState("strength_power")

  function updateWorkout(){

    if(muscles.length < 1){
      return
    }
    let newWorkout = generateWorkout({poison , muscles , goals})
    console.log(newWorkout)
    setWorkout(newWorkout)

    window.location.href = "#workout"
  }

  return (
    <main className='min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base'>

      <Hero />
      <Generator 
      poison={poison}
      setpoison={setpoison}
      muscles={muscles}
      setmuscles={setmuscles}
      goals={goals}
      setgoals={setgoals}
      updateWorkout={updateWorkout}
      />
      {workout && (<Workout workout={workout} />)}
    </main>

  )
}

export default App
