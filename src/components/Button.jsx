import React from 'react'

export default function Button(props) {
    const {text , func} = props
  return (
    <button onClick={func} className='px-8 py-4 rounded-md border-[2px] border-blue-400 border-solid bg-slate-950 blueShadow duration-200 mx-auto'>
                <p>{text}</p>
             </button>
  )
}
