import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const NameInput = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [name, setName] = useState('')

  const submit = (e) => {
    e.preventDefault()
    navigate('/pokedex')
    dispatch({ type: 'SET_NAME', payload: name })
  }

  // useEffect(() => {
  //     document.querySelector('body').style.backgroundColor = '#98ceff';
  //  }, []);

  return (
    <div className=' flex justify-center items-center h-screen pb-56  '>
      <form onSubmit={submit}>
        <label className=''>
          <h1 className='text-5xl font-head'>What's your name trainer </h1>
          <input
            className='appearance-none rounded p-1 mt-10 mr-20'
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default NameInput
