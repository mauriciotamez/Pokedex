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
  Flying,
  Electric,
  Fairy
} from '../img'

export const getFirstType = (data) => {
  switch (data ? data : null) {
    case 'grass':
      return <img className='img' src={Grass} />

    case 'fire':
      return <img className='img' src={Fire} />

    case 'normal':
      return <img className='img' src={Normal} />

    case 'water':
      return <img className='img' src={Water} />

    case 'bug':
      return <img className='img' src={Bug} />

    case 'fighting':
      return <img className='img' src={Fighting} />

    case 'electric':
      return <img className='img' src={Electric} />

    case 'poison':
      return <img className='img' src={Poison} />

    case 'rock':
      return <img className='img' src={Rock} />

    case 'ghost':
      return <img className='img' src={Ghost} />

    case 'steel':
      return <img className='img' src={Steel} />

    case 'psychic':
      return <img className='img' src={Psychic} />

    case 'ice':
      return <img className='img' src={Ice} />

    case 'dragon':
      return <img className='img' src={Dragon} />

    case 'fairy':
      return <img className='img' src={Fairy} />

    case 'ground':
      return <img className='img' src={Ground} />

    case 'dark':
      return <img className='img' src={Dark} />

    case 'flying':
      return <img className='img' src={Flying} />

    default:
  }
}

export const getSecondType = (data) => {
  switch (data ? data : null) {
    case 'grass':
      return <img className='img' src={Grass} />

    case 'fire':
      return <img className='img' src={Fire} />

    case 'normal':
      return <img className='img' src={Normal} />

    case 'water':
      return <img className='img' src={Water} />

    case 'bug':
      return <img className='img' src={Bug} />

    case 'fighting':
      return <img className='img' src={Fighting} />

    case 'electric':
      return <img className='img' src={Electric} />

    case 'poison':
      return <img className='img' src={Poison} />

    case 'rock':
      return <img className='img' src={Rock} />

    case 'ghost':
      return <img className='img' src={Ghost} />

    case 'steel':
      return <img className='img' src={Steel} />

    case 'psychic':
      return <img className='img' src={Psychic} />

    case 'ice':
      return <img className='img' src={Ice} />

    case 'dragon':
      return <img className='img' src={Dragon} />

    case 'fairy':
      return <img className='img' src={Fairy} />

    case 'ground':
      return <img className='img' src={Ground} />

    case 'dark':
      return <img className='img' src={Dark} />

    case 'flying':
      return <img className='img' src={Flying} />

    default:
  }
}
