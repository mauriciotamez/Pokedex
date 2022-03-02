import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import PokemonCard from './PokemonCard'
import pokeball from '../img/pokeball.png'
import poke_bg_gray from '../img/poke_bg_gray.png'
import { Link } from 'react-router-dom'

const Pokedex = () => {
  const name = useSelector((state) => state.name)
  const [pokemons, setPokemons] = useState([])
  const [types, setTypes] = useState([])
  const [page, setPage] = useState(1)

  // Our main request to get all the pokemons available --------------------------------------------------------------------------------------------------------
  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon?offset=1&limit=1200 ')
      .then((res) => {
        setPokemons(res.data.results)
      })
  }, [])

  // Our request to the types endpoint, to further match it on our select function and return given type pokemons ----------------------------------------------
  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/type').then((res) => {
      setTypes(res.data.results)
    })
  }, [])

  // Our function to execute on the onChange select, it receives the url with the type of pokemon selected and make a custom axios request to it, if the--------
  // option selected is All Pokemons it makes a request to that endpoint ( Else snippet ) ----------------------------------------------------------------------
  const getTypePokemons = (url) => {
    if (url) {
      axios.get(`${url}`).then((res) => {
        setPokemons(res.data.pokemon)
        console.log(pokemons)
        setPage(1)
      })
    } else {
      axios
        .get('https://pokeapi.co/api/v2/pokemon?offset=1&limit=1200')
        .then((res) => {
          setPokemons(res.data.results)
          setPage(1)
        })
    }
  }

  // Pagination ----------------------------------------------------------------------------------------------------------------------------------------------
  const pokemonsperPage = 20
  const lastPokemonIndex = page * pokemonsperPage
  const firstPokemonIndex = lastPokemonIndex - pokemonsperPage
  const paginatePokemons = pokemons.slice(firstPokemonIndex, lastPokemonIndex)
  const totalPages = Math.ceil(pokemons.length / pokemonsperPage)
  const pagesNumber = []

  for (let i = 1; i <= totalPages; i++) {
    pagesNumber.push(i)
  }

  // ---------------------------------------------------------------------------------------------------------------------------------------------------------
  return (
    <section className='p-10 lg:px-24 xl:pr-32 xl:pl-8 2xl:pr-36 2xl:pl-20'>
      <nav>
        <h1 className='font-head font-bold text-7xl md:text-8xl 2xl:text-9xl inline'>
          Pokedex
        </h1>
        <img className='w-60 inline pb-14    ' src={pokeball} alt='' />

        <h2 className='font-head text-4xl 2xl:text-5xl'>
          Welcome to the pokedex {name}, enjoy your stay.
        </h2>
        <select
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block 
        w-40 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
        dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-10'
          onChange={(e) => getTypePokemons(e.target.value)}
        >
          <option value=''> All pokemons</option>
          {types.map((type) => (
            <option key={type.url} value={type.url}>
              {type.name}
            </option>
          ))}
        </select>
        <div className='absolute'>
          <img
            className=' animate-[spin_3s_linear_infinite] 2xl:fill-red   hidden 2xl:inline 2xl:w-[50rem]
          2xl:fixed 2xl:left-[72rem] 2xl:ml-48 2xl:bottom-[35rem]
          overflow-x-hidden overflow-y-auto'
            src={poke_bg_gray}
            alt=''
          />
        </div>
      </nav>

      <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-y-10 gap-x-24  my-14'>
        {paginatePokemons?.map((pokemon) => (
          <Link
            to={`/pokedex/${
              pokemon.name ? pokemon.name : pokemon?.pokemon?.name
            }`}
            key={pokemon.url ? pokemon.url : pokemon?.pokemon?.url}
          >
            <PokemonCard
              url={pokemon.url ? pokemon.url : pokemon?.pokemon?.url}
            />
          </Link>
        ))}
      </div>
      <div className=''>
        <span className='    flex justify-center pt-10 '>
          {' '}
          {page} / {totalPages}{' '}
        </span>

        <div className='flex flex-col items-center'>
          <div className='inline-flex mt-2 xs:mt-0'>
            {page !== 1 && (
              <button
                onClick={() => setPage(page - 1)}
                className='py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-l 
            hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
              >
                Prev
              </button>
            )}

            {page !== totalPages && (
              <button
                onClick={() => setPage(page + 1)}
                className='py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-r border-0 border-l 
            border-gray-700 hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 
            dark:hover:text-white'
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pokedex
