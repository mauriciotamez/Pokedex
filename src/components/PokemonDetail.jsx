import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import {
  Bug,
  Dark,
  Dragon,
  Fire,
  Normal,
  Water,
  Fighting,
  Poison,
  Rock,
  Ghost,
  Steel,
  Psychic,
  Ice,
  Ground,
  Grass,
  Flying
} from '../img'
import { getFirstType, getSecondType } from '../utils/getTypesImg'

const PokemonDetail = () => {
  const { name } = useParams()
  const [pokemon, setPokemon] = useState()
  const dispatch = useDispatch()

  // Get pokemon based on the name provided
  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then((res) => {
      dispatch({ type: 'SET_POKEMON', payload: res.data })
      setPokemon(res.data)
    })
  }, [])

  // TODO > need to refactor the code below into a switch and store it into utils

  return (
    <div
      className={
        pokemon?.types?.[0].type.name === 'gras s'
          ? ' h-screen bg-[#78C850]'
          : pokemon?.types?.[0].type.name === 'fire'
          ? ' h-screen bg-[#F08030]'
          : pokemon?.types?.[0].type.name === 'normal'
          ? ' h-screen bg-[#A8A878]'
          : pokemon?.types?.[0].type.name === 'water'
          ? ' h-screen bg-[#6890F0]'
          : pokemon?.types?.[0].type.name === 'bug'
          ? '  h-screen bg-[#A8B820]'
          : pokemon?.types?.[0].type.name === 'fighting'
          ? ' h-screen bg-[#C03028]'
          : pokemon?.types?.[0].type.name === 'electric'
          ? ' h-screen bg-[#F8D030]'
          : pokemon?.types?.[0].type.name === 'poison'
          ? ' h-screen bg-[#A040A0]'
          : pokemon?.types?.[0].type.name === 'rock'
          ? ' h-screen bg-[#B8A038]'
          : pokemon?.types?.[0].type.name === 'ghost'
          ? ' h-screen bg-[#705898]'
          : pokemon?.types?.[0].type.name === 'steel'
          ? ' h-screen bg-[#B8B8D0]'
          : pokemon?.types?.[0].type.name === 'psychic'
          ? ' h-screen bg-[#F85888]'
          : pokemon?.types?.[0].type.name === 'ice'
          ? ' h-screen bg-sky-300'
          : pokemon?.types?.[0].type.name === 'dragon'
          ? ' h-screen bg-[#7038F8]'
          : pokemon?.types?.[0].type.name === 'fairy'
          ? ' h-screen bg-[#EE99AC]'
          : pokemon?.types?.[0].type.name === 'ground'
          ? ' h-screen bg-[#E0C068]'
          : pokemon?.types?.[0].type.name === 'dark'
          ? ' h-screen bg-[#705848]'
          : ' h-screen bg-zinc-900'
      }
    >
      <div className='pt-5 '>
        <h1
          className='font-head font-semibold text-4xl md:text-6xl text-white text-center relative top-20 right-0 2xl:top-1 2xl:text-lg
                2xl:right-[45rem]'
        >
          {name.toUpperCase()}
        </h1>
        <span className='font-head text-4xl text-white relative left-8  bottom-8 '>
          #{pokemon?.id}
        </span>
      </div>
      <img
        className='w-72  2xl:w-[33rem] 2xl:top-[1rem] md:w-[22rem]  relative left-14 md:mx-40  lg:mx-[18rem] xl:left-[12rem] xl:top-[2rem]
            2xl:left-[10rem]   top-20 md:top-1 z-10'
        src={pokemon?.sprites.other.home.front_default}
        alt=''
      />
      <div className='pt-32 px-20  md:mx-20 lg:pl-[28rem] xl:pl-[37rem] 2xl:pl-[70rem] 2xl:bottom-[25rem] relative   '>
        <div className=' flex left-5 md:relative md:left-32 lg:-left-[8rem] 2xl:top-32 2xl:left-[5rem]   '>
          {pokemon?.types?.[0] && (
            <div className=' flex bg-white rounded-full mx-1 p-2 opacity-90 shadow-lg relative left-10'>
              {getFirstType(pokemon?.types?.[0]?.type?.name)}
            </div>
          )}
          {pokemon?.types?.[1] && (
            <div className=' flex bg-white rounded-full mx-1 p-2 opacity-90 shadow-lg relative left-10'>
              {getSecondType(pokemon?.types?.[1]?.type?.name)}
            </div>
          )}
        </div>
        <div className=' hidden 2xl:block font-medium font-head text-4xl text-white relative top-36 left-[8rem] '>
          BASE STATS
        </div>
        <div className=' relative mr-10 md:relative md:top-1 md:mx-[7rem] lg:right-[20rem]  2xl:flex   2xl:top-40 2xl:left-[1rem] 2xl:border-l '>
          <div
            className='font-mono 2xl:whitespace-nowrap font-bold text-xl  top-40 2xl:top-[10.8rem] py-3 px-4 mt-3 bg-white rounded-xl ml-5 opacity-75 w-52
                    lg:w-[23rem] lg:right-20 2xl:w-[7rem]  2xl:text-sm  text-center h-12'
          >
            XP: {pokemon?.base_experience}
          </div>
          <div
            className='font-mono font-bold text-xl top-40 py-3 px-4 mt-3 bg-white rounded-xl ml-5 opacity-75 w-52
                    lg:w-[23rem] lg:right-20 2xl:w-[7rem]  2xl:text-sm  text-center h-12'
          >
            HP:{pokemon?.stats?.[0].base_stat}
          </div>
          <div
            className='font-mono font-bold text-xl  top-40 py-3 px-4 mt-3 bg-white rounded-xl ml-5 opacity-75 w-52
                    lg:w-[23rem] lg:right-20 2xl:w-[7rem]  2xl:text-sm text-center h-12'
          >
            Attack:{pokemon?.stats?.[1].base_stat}
          </div>
          <div
            className=' hidden 2xl:block font-mono font-bold text-xl top-40 py-3 px-4 mt-3 bg-white rounded-xl ml-5 opacity-75 w-52
                    lg:w-[23rem] lg:right-20 2xl:w-[7rem]   2xl:text-sm text-center h-12'
          >
            Defense:{pokemon?.stats?.[2].base_stat}
          </div>
        </div>
      </div>
      <span className=' hidden 2xl:block font-black text-[200px] fixed bottom-64 left-20 opacity-20 z-0'>
        {name}
      </span>
    </div>
  )
}

export default PokemonDetail
