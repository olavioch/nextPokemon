import Image from "next/image"
import styles from "../../styles/Card.module.css"
import { Router, useRouter } from "next/router"

export default function Pokemon({pokemon}){
    const router = useRouter()
    
    if(router.isFallback){
        return<h1>loading...</h1>
    }
    
    return(
        <div className={styles.pokemonPage}>
            <h1>{pokemon.name}</h1>
            <Image
                src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
                width='300'
                height='300'
                alt={pokemon.name}
            />
            <div className={styles.cardItems}>
                <div>
                    <h3>Tipo</h3>
                    {pokemon.types.map((item, index)=>(
                        <div key={index}>{item.type.name}</div>
                    ))}
                </div>
                <div>
                    <h4>altura</h4>
                    <p>{pokemon.height * 10} cm</p>
                </div>
                <div>
                    <h4>peso</h4>
                    <p>{pokemon.weight / 10} kg</p>
                </div>
            </div>
        </div>
    )
}

export const getStaticPaths = async() => {
    const maxPokemons = 251
    const api = 'https://pokeapi.co/api/v2/pokemon/'
    const res = await fetch(`${api}/?limit=${maxPokemons}`)
    const data = await res.json()

    //params
    const paths = data.results.map((pokemon, index)=>{
        return {
            params: {pokemonId: (index+1).toString()}
        }
    })

    return {
        paths,
        fallback: true
    }
}

export const getStaticProps = async(context) => {
    const id = context.params.pokemonId
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data= await res.json()

    return{
        props: {pokemon:data}
    }
}