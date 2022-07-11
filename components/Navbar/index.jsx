import Link from "next/link"

export default function Navbar(){
    return(
    <> 
        <nav>
            <Link href="/aula"><a>Aula</a></Link>    
            <Link href="/aula/about"><a>about</a></Link>
            <Link href="/aula/categoria"><a>categoria</a></Link>
            <Link href="/aula/todos"><a>todos</a></Link>
        </nav>
        <nav>
            <Link href="/"><a>Project Pokemon</a></Link>    
        </nav>
    </>   
    ) 
}