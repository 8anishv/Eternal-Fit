import React, { useState } from 'react'
import SectionWrapper from './SectionWrapper'
import { SCHEMES, WORKOUTS } from '../utils/All-workouts';
import Button from './Button';

export default function Generator(props) {

    const [showModal , setshowModal] = useState(false);
    const {muscles , setmuscles , poison , setpoison , goals ,setgoals , updateWorkout} = props;


    function toggleModal(){
        setshowModal(!showModal);
    }

    

    function updateMuscles(MuscleGroup){

        if(muscles.includes(MuscleGroup)){
            setmuscles(muscles.filter(val => val!== MuscleGroup))
            return 
            
    
        }

        if(muscles.length > 3){
            return
        }

        if(poison != "individual"){
            setmuscles([MuscleGroup])
            setshowModal(false)
            return
        }

        

        setmuscles([...muscles , MuscleGroup])

        if(muscles.length === 2){
            setshowModal(false)
        }
        
    }

    function Header(props){
      const {index , title , description} = props;
      return (
        <div className='flex flex-col gap-4'>
            <div className='flex items-centre justify-center gap-2'>
                <p className='text-4xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-400 font-semibold'>
                    {index}</p>
                <h4 className='text-xl font-semibold sm:text-2xl md:text-3xl'>
                    {title}</h4>
            </div>
            <p className='text-sm sm:text-base mx-auto'>{description}</p>
            
        </div>
      )
    }
  return (
    <div>
        <SectionWrapper id={"generate"} header={"Generate your Workout"}  title={["It's " , "Huge" ,  "O'clock"]}   >
            <Header index={"01"} title={"Pick your Poison"} description={"Select the workout you wish to endure."}/>
            <div className='grid  grid-cols-2 sm:grid-cols-4 gap-4 my-5'>
                {Object.keys(WORKOUTS).map((type, typeIndex)=>{
                    return(
                        <button onClick={()=>{
                            setmuscles([])
                            setpoison(type)
                        }} key={typeIndex} className={'bg-slate-950 border border-blue-400 py-3 rounded-lg duration-600 hover:border-blue-600 '
                         + (type === poison ? "border-blue-600" : "border-blue-400")}>
                           <p className='capitalize'>
                           {type.replaceAll("_" , " ")}
                            </p> 
                        </button>
                    )
                })}
            </div>
            <Header index={"02"} title={"Lock on Targets"} description={"Select the muscles judged for annihilation"}/>
            <div className='bg-slate-950 p-3 border border-solid border-blue-400 rounded-lg flex flex-col '>
                <button  onClick={toggleModal}className={'relative flex items-center justify-center' }>
                    <p className='capitalize'>{ muscles.length === 0 ? "Select  muscle groups" : muscles.join(" ")}</p>
                    <i className="fa-solid  absolute right-3 top-1/2 -translate-y-1/2 fa-caret-down "></i>
                </button>
                {showModal && (
                    <div className='flex flex-col p-3'>
                        {(poison === "individual" ? WORKOUTS[poison] : Object.keys(WORKOUTS[poison])).map((muscleGroup, muscleGroupIndex)=>{
                            return (
                                  <button  onClick={()=>{
                                    updateMuscles(muscleGroup)
                                  }} key={muscleGroupIndex} className={'hover:text-blue-200 '  + (muscles.includes(muscleGroup) ? "text-blue-400" :" ")}>
                                    <p className='uppercase'>{muscleGroup.replaceAll("_" , " ")}</p>
                                  </button>
                            )
                        })}
                    </div>
                )}
            </div>
            <Header index={"03"} title={"Become Jagguernaut"} description={"Select your ultimate objective."}/>
            <div className='grid  grid-cols-1 sm:grid-cols-3 gap-2 '>
                {Object.keys(SCHEMES).map((schemes, schemesIndex)=>{
                    return(
                        <button onClick={()=>{
                            setgoals(schemes)
                        }} key={schemesIndex} className={'bg-slate-950 border border-blue-400 py-3 rounded-lg duration-600 hover:border-blue-600 '
                         + (schemes === goals ? "border-blue-600" : "border-blue-400")}>
                           <p className='capitalize'>
                           {schemes.replaceAll("_" , " ")}
                            </p> 
                        </button>
                    )
                })}
            </div>
          <Button func={updateWorkout} text={"Formulate"}></Button>
        </SectionWrapper>
    </div>
  )
}
