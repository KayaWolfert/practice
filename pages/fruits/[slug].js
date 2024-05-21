import { fruitarray } from "@/lib/data";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import RenderSection1 from "@/components/first-section";
import RenderSection2 from "@/components/second-section";
import useLocalStorageState from "use-local-storage-state";

export default function RenderFruitPages() {
  const router = useRouter();
  const { slug } = router.query;

  const fruitIndex = fruitarray.findIndex(
    ({ slug }) => slug === router.query.slug
  );

  const fruit = fruitarray[fruitIndex];

  if (!fruit) {
    return null;
  }

  const { title, description, icon, color } = fruit;

  
  const [count, setCount] = useState(1);
  const [foodView, setFoodView] = useState([`${icon}`]);

  function handleAddItem(icon) {
    setFoodView([...foodView, icon]);
  }

  function handleIncrease() {
    setCount(count < 10 ? count + 1 : count);

    if (count < 10) {
      handleAddItem(icon);
    }
  }

  function handleDecrease() {
    setCount(count > 0 ? count - 1 : count);
    const updatedFoodView = [...foodView];
    updatedFoodView.pop();
    setFoodView(updatedFoodView);
  }

  return (
    <>
      <RenderSection1 fruit={fruit}></RenderSection1>

      <StyledDivider />

      <RenderSection2
        count={count}
        foodView={foodView}
        increase={handleIncrease}
        decrease={handleDecrease}
        fruit={fruit}
      ></RenderSection2>

      <Link href="/"> back home </Link>
    </>
  );
}

const StyledDivider = styled.hr`
    width: 90%;
    margin-top: 20px;
    margin-bottom: 40px;
  `;