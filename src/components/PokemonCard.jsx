import axios from 'axios'
import React, { useEffect, useState } from 'react'
import fire from '../img/type_fire.png'
import grass from '../img/type_grass.png'
import water from '../img/type_water.png'
import normal from '../img/type_normal.png'
import flying from '../img/type_flying.png'
import poison from '../img/type_poison.png'
import bug from '../img/type_bug.png'
import fairy from '../img/type_fairy.png'
import dark from '../img/type_dark.png'
import dragon from '../img/type_dragon.png'
import ice from '../img/type_ice.png'
import psychic from '../img/type_psychic.png'
import electric from '../img/type_electric.png'
import steel from '../img/type_steel.png'
import ghost from '../img/type_ghost.png'
import rock from '../img/type_rock.png'
import ground from '../img/type_ground.png'
import fighting from '../img/type_fighting.png'

import poke_bg_gray from '../img/poke_bg_gray.png'

const PokemonCard = ({ url }) => {
  console.log(url)
  const [pokemon, setPokemon] = useState({})

  useEffect(() => {
    axios.get(`${url}`)
      .then(res => {
        setPokemon(res.data)
      })
  }, [])

  const getType = () => {
    switch (pokemon.types?.[0].type.name) {
      case 'grass':
        return 'card bg-[#78C850]'

      case 'fire':
        return 'card bg-[#F08030]'

      case 'normal':
        return 'card bg-[#A8A878]'

      case 'water':
        return 'card bg-[#6890F0]'

      case 'bug':
        return 'card bg-[#A8B820]'

      case 'fighting':
        return 'card bg-[#C03028]'

      case 'electric':
        return 'card bg-[#F8D030]'

      case 'poison':
        return 'card bg-[#A040A0]'

      case 'rock':
        return 'card bg-[#A040A0]'

      case 'ghost':
        return 'card bg-[#705898]'

      case 'steel':
        return 'card bg-[#B8B8D0]'

      case 'psychic':
        return 'card bg-[#F85888]'

      case 'ice':
        return 'card bg-sky-300'

      case 'dragon':
        return 'card bg-[#7038F8]'

      case 'fairy':
        return 'card bg-[#EE99AC]'

      case 'ground':
        return 'card bg-[#E0C068]'

      case 'dark':
        return 'card bg-[#705848]'

      default:
        return 'card bg-zinc-900'
    }
  }
  getType('grass')
  return (
  // Change the bg color of the card depending on the pokemon type -----------------------------------------------------------------------------------

    <div
      className={
                getType()
            }
    >
      {/* ---------------------------------------------------------------------------------------------------------------------------------------------- */}

      {/* Change the h1 color when needed to meet contrast rules -------------------------------------------------------------------------------------- */}
      <h1 className={pokemon.types?.[0].type.name === 'electric'
        ? 'font-head text-2xl text-gray-900 text-center mb-5  md:text-3xl lg:text-2xl'
        : pokemon.types?.[0].type.name === 'psychic'
          ? ' font-head text-2xl text-gray-900 text-center mb-5  md:text-3xl lg:text-2xl'
          : 'font-head text-4xl text-neutral-50 text-center mb-5  md:text-3xl lg:text-2xl'}
      >
        {pokemon.name?.slice(0, 10).toUpperCase()}
      </h1>

      <div>
        <div className={pokemon.types?.[0].type.name === 'electric'
          ? 'text-gray-900'
          : pokemon.types?.[0].type.name === 'psychic'
            ? 'text-gray-900'
            : 'text-neutral-50'}
        >
          {/* Set type img, depending on first type of pkmn------------------------------------------------------------------------------------------- */}
          {
                    pokemon.types?.[0].type.name === 'fire'
                      ? <img className='w-14 relative right-1' src={fire} alt='fire' />
                      : pokemon.types?.[0].type.name === 'grass'
                        ? <img className='w-16 relative right-2' src={grass} alt='fire' />
                        : pokemon.types?.[0].type.name === 'water'
                          ? <img className='w-14 relative right-1' src={water} alt='fire' />
                          : pokemon.types?.[0].type.name === 'normal'
                            ? <img className='w-14 relative right-1' src={normal} alt='fire' />
                            : pokemon.types?.[0].type.name === 'bug'
                              ? <img className='w-14 relative right-1' src={bug} alt='bug' />
                              : pokemon.types?.[0]?.type.name === 'poison'
                                ? <img className='w-16 relative right-2' src={poison} alt='poison' />
                                : pokemon.types?.[0]?.type.name === 'bug'
                                  ? <img className='w-16 relative right-2' src={bug} alt='bug' />
                                  : pokemon.types?.[0]?.type.name === 'fairy'
                                    ? <img className='w-16 relative right-2' src={fairy} alt='fairy' />
                                    : pokemon.types?.[0]?.type.name === 'dark'
                                      ? <img className='w-16 relative right-2' src={dark} alt='dark' />
                                      : pokemon.types?.[0]?.type.name === 'dragon'
                                        ? <img className='w-14 relative right-1' src={dragon} alt='dragon' />
                                        : pokemon.types?.[0]?.type.name === 'ice'
                                          ? <img className='w-14 relative right-1' src={ice} alt='ice' />
                                          : pokemon.types?.[0]?.type.name === 'psychic'
                                            ? <img className='w-16 relative right-2' src={psychic} alt='psychic' />
                                            : pokemon.types?.[0]?.type.name === 'electric'
                                              ? <img className='w-16 relative right-2' src={electric} alt='electric' />
                                              : pokemon.types?.[0]?.type.name === 'steel'
                                                ? <img className='w-16 relative right-2' src={steel} alt='steel' />
                                                : pokemon.types?.[0]?.type.name === 'ghost'
                                                  ? <img className='w-16 relative right-2' src={ghost} alt='ghost' />
                                                  : pokemon.types?.[0]?.type.name === 'rock'
                                                    ? <img className='w-14 relative right-1' src={rock} alt='rock' />
                                                    : pokemon.types?.[0]?.type.name === 'ground'
                                                      ? <img className='w-16 relative right-2' src={ground} alt='ground' />
                                                      : pokemon.types?.[0]?.type.name === 'fighting'
                                                        ? <img className='w-16 relative right-2' src={fighting} alt='fighting' />
                                                        : pokemon.types?.[0]?.type.name
                }
        </div>
        {/* ---------------------------------------------------------------------------------------------------------------------------------------- */}
        <div className={pokemon.types?.[0].type.name === 'electric'
          ? 'text-gray-900'
          : pokemon.types?.[0].type.name === 'psychic'
            ? 'text-gray-900'
            : 'text-neutral-50'}
        >
          {/* Set type img, depending on second type of pkmn------------------------------------------------------------------------------------------- */}
          {pokemon.types?.[1]?.type.name === 'flying'
            ? <img className='w-16 relative right-2' src={flying} alt='fire' />
            : pokemon.types?.[1]?.type.name === 'poison'
              ? <img className='w-16 relative right-2' src={poison} alt='poison' />
              : pokemon.types?.[1]?.type.name === 'bug'
                ? <img className='w-16 relative right-2' src={bug} alt='bug' />
                : pokemon.types?.[1]?.type.name === 'fairy'
                  ? <img className='w-16 relative right-2' src={fairy} alt='fairy' />
                  : pokemon.types?.[1]?.type.name === 'dark'
                    ? <img className='w-16 relative right-2' src={dark} alt='dark' />
                    : pokemon.types?.[1]?.type.name === 'dragon'
                      ? <img className='w-14 relative right-1' src={dragon} alt='dragon' />
                      : pokemon.types?.[1]?.type.name === 'ice'
                        ? <img className='w-16 relative right-2' src={ice} alt='ice' />
                        : pokemon.types?.[1]?.type.name === 'psychic'
                          ? <img className='w-16 relative right-2' src={psychic} alt='psychic' />
                          : pokemon.types?.[1]?.type.name === 'electric'
                            ? <img className='w-16 relative right-2' src={electric} alt='electric' />
                            : pokemon.types?.[1]?.type.name === 'steel'
                              ? <img className='w-16 relative right-2' src={steel} alt='steel' />
                              : pokemon.types?.[1]?.type.name === 'ghost'
                                ? <img className='w-16 relative right-2' src={ghost} alt='ghost' />
                                : pokemon.types?.[1]?.type.name === 'rock'
                                  ? <img className='w-14 relative right-1' src={rock} alt='rock' />
                                  : pokemon.types?.[1]?.type.name === 'ground'
                                    ? <img className='w-16 relative right-2' src={ground} alt='ground' />
                                    : pokemon.types?.[1]?.type.name === 'fighting'
                                      ? <img className='w-16 relative right-2' src={fighting} alt='fighting' />
                                      : pokemon.types?.[1]?.type.name}
        </div>
        <div className={pokemon.types?.[0].type.name === 'electric'
          ? 'text-gray-900'
          : pokemon.types?.[0].type.name === 'psychic'
            ? 'text-gray-900'
            : 'text-neutral-50'}
        > <b>{pokemon.stats?.[0].stat.name}</b> {pokemon.stats?.[0].base_stat}
        </div>
        <div className={pokemon.types?.[0].type.name === 'electric'
          ? 'text-gray-900'
          : pokemon.types?.[0].type.name === 'psychic'
            ? 'text-gray-900'
            : 'text-neutral-50'}
        > <b>{pokemon.stats?.[1].stat.name}</b> {pokemon.stats?.[1].base_stat}
        </div>
        <div className={pokemon.types?.[0].type.name === 'electric'
          ? 'text-gray-900'
          : pokemon.types?.[0].type.name === 'psychic'
            ? 'text-gray-900'
            : 'text-neutral-50'}
        > <b>{pokemon.stats?.[2].stat.name}</b> {pokemon.stats?.[2].base_stat}
        </div>
        <div className={pokemon.types?.[0].type.name === 'electric'
          ? 'text-gray-900'
          : pokemon.types?.[0].type.name === 'psychic'
            ? 'text-gray-900'
            : 'text-neutral-50'}
        > <b>{pokemon.stats?.[3].stat.name}</b> {pokemon.stats?.[3].base_stat}
        </div>
      </div>
      <img className='w-62 ml-92  top-1 absolute sm:w-48 sm:ml-24 sm:top-10 z-10' src={pokemon.sprites?.front_default} alt='' />
      <img className='absolute top-5 left-28 w-56  opacity-25 z-0' src={poke_bg_gray} />
    </div>
  )
}

export default PokemonCard
