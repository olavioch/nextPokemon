import Link from "next/link"
import styles from "../../../styles/Todos.module.css"

export default function Todos({todos}){
    return(
        <>
            <h1>Tarefas para fazer</h1>
            <ul>
                {todos.map(item =>(
                    <div key={item.id} style={{display: "flex", justifyContent: "center"}}>
                        <li>{item.title}</li>
                        <Link href={`/aula/todos/${item.id}`}><a className={styles.a}> Ver mais</a></Link>
                    </div>
                ))}
            </ul>
        </>
    )
}

export async function getStaticProps(){
    const data = await fetch('https://jsonplaceholder.typicode.com/todos')
    const todos = await data.json()

    return{
        props: {todos}
    }
}