import { useState, useEffect } from 'react'
import styled from 'styled-components'

const TYPE_COLORS: Record<string, string> = {
  fire: '#FDDFDF',
  grass: '#DEFDE0',
  electric: '#FCF7DE',
  water: '#DEF3FD',
  ground: '#f4e7da',
  rock: '#d5d5d4',
  fairy: '#fceaff',
  poison: '#e6cef0',
  bug: '#f8d5a3',
  dragon: '#97b3e6',
  psychic: '#eaeda1',
  flying: '#F5F5F5',
  fighting: '#E6E0D4',
  normal: '#F5F5F5',
  ice: '#d8f0f0',
  ghost: '#c7b6db',
  dark: '#c9c1b6',
  steel: '#c9c9c9'
}

interface PokemonData {
  id: number
  name: string
  types: string[]
  image: string
}

const PokemonCard = styled.div<{ $bgColor: string }>`
  background: ${({ $bgColor }) => $bgColor};
  border-radius: 16px;
  padding: 20px;
  text-align: center;
  width: 160px;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`

const POKEMON_COUNT = 150

const Pokedex = () => {
  const [pokemon, setPokemon] = useState<PokemonData[]>([])

  useEffect(() => {
    const fetchPokemon = async () => {
      const promises = Array.from({ length: POKEMON_COUNT }, (_, i) =>
        fetch(`https://pokeapi.co/api/v2/pokemon/${i + 1}`)
          .then((res) => res.json())
          .then((data) => ({
            id: data.id,
            name: data.name,
            types: data.types.map(
              (t: { type: { name: string } }) => t.type.name
            ),
            image: data.sprites.front_default
          }))
      )
      const results = await Promise.all(promises)
      setPokemon(results.sort((a, b) => a.id - b.id))
    }
    fetchPokemon()
  }, [])

  return (
    <div className='min-h-screen bg-[#eff3f7] p-8'>
      <h1 className='text-center text-3xl font-bold mb-8'>Pokedex</h1>
      <div className='flex flex-wrap justify-center gap-4 max-w-6xl mx-auto'>
        {pokemon.map((p) => {
          const mainType = p.types[0]
          const bgColor = TYPE_COLORS[mainType] || '#F5F5F5'
          return (
            <PokemonCard key={p.id} $bgColor={bgColor}>
              <img src={p.image} alt={p.name} className='w-[100px] h-[100px]' />
              <p className='text-gray-500 text-xs mb-1'>
                #{String(p.id).padStart(3, '0')}
              </p>
              <h3 className='capitalize font-bold text-sm'>{p.name}</h3>
              <small className='text-gray-500 capitalize text-xs'>
                {p.types.join(' / ')}
              </small>
            </PokemonCard>
          )
        })}
      </div>
    </div>
  )
}

export default Pokedex
