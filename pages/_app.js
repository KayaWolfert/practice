import { GlobalStyle } from "../styles";
import { fruitarray } from "@/lib/data";
import useLocalStorageState from "use-local-storage-state";


const initialFruits = fruitarray; 
export default function App({ Component, pageProps }) {
  
  const [fruits, setFruits] = useLocalStorageState("fruits", {
    defaultValue: initialFruits,
  });



function handleAddFruit(newFruit) {
console.log(newFruit);
setFruits([{ ...newFruit}, ...fruits]);
}

  return (


    <>
      <GlobalStyle />
      <Component {...pageProps} handleAddFruit={handleAddFruit} fruits={fruits}/>
    </>
  );
  }
