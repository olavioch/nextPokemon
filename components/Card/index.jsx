import Image from "next/image"
import styles from "../../styles/Card.module.css"
import Link from "next/link"

export default function Card({pokemon}){
    return(
        <div className={styles.card}>
            <Image
                src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
                width='120'
                height='120'
                alt={pokemon.name}
                
            />
            <h3>{pokemon.name}</h3>
            <Link href={`/pokemon/${pokemon.id}`}><a className={styles.link}>Detalhes</a></Link>
        </div>
    )
}