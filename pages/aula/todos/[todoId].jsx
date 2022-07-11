import Link from "next/link"

export default function Todo({todo}){

    return(
        <>
            <Link href="/todos" style={{textAlign :'center'}}><a>Voltar</a></Link>
            <h1>Recebendo o item numero {todo.id}</h1>
            <p>
                links para paginas de comentarios
                <Link href={`/todos/${todo.id}/comments/1`}><a>comentario 1</a></Link>
                <Link href={`/todos/${todo.id}/comments/2`}><a>comentario 2</a></Link>
                <Link href={`/todos/${todo.id}/comments/3`}><a>comentario 3</a></Link>
            </p>
        </>
    )
}

export async function getStaticProps(context){
    const {params} = context

    const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.todoId}`)
    const todo = await data.json()
    
    return {
        props:{todo}
    }
}

export async function getStaticPaths(){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/')
    const data = await response.json()
    const paths = data.map(todo =>{
        return {
            params:{
                todoId:`${todo.id}`
            }
        }
    })
    return {paths, fallback: false}
}