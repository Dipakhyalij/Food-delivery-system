import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/navbar/Header/Header'
import ExploreMenu from '../../components/navbar/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
export const Home = () => {
  const [category,setCategory]= useState("All");
  return (
    <div>
        <Header />
        <ExploreMenu category={category} setCategory={setCategory} />
        <FoodDisplay category={category} />
    </div>
  )
}
