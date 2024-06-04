import FruitForm from "@/components/Form";
import useLocalStorageState from "use-local-storage-state";
import { fruitarray } from "@/lib/data";
import { introduction } from "@/lib/data";
import Link from "next/link";

 


export default function FruitPage({fruits, handleAddFruit}) {



  
  return (
    <>
      <h1> Fruits,Fruits,Fruits </h1>
      <p> {introduction}</p>
      <ul>
        {fruits.map((fruit) => {
          return (
            <li key={fruit.slug}>
              <Link href={`/fruits/${fruit.slug}`}>{fruit.title}</Link>
            </li>
          );
        })}
      </ul>
      <FruitForm onSubmit={handleAddFruit} />
    </>
  );
}
