import { fruitarray } from "@/lib/data";
import { introduction } from "@/lib/data";
import Link from "next/link";
export default function fruits(){
return <> 
<h1> Fruits,Fruits,Fruits </h1>
<p> {introduction}</p>
<ul> 
{fruitarray.map((fruit) => {
    return (
        <li key={fruit.slug}> 
        <Link href={`/fruits/${fruit.slug}`}> 
        {fruit.title}
        </Link>
         </li>
    )
})}
</ul>
</>
}