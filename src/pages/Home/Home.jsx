import { useEffect, useState } from "react"
import { BottomSection } from "../../components/BottomSection/BottomSection"
import { HeadSection } from "../../components/HeadSection/HeadSection"
import { MainSection } from "../../components/MainSection/MainSection"
import { SubFooter } from "../../components/SubFooter/SubFooter"
import { SubSection } from "../../components/SubSection/SubSection"


export const Home = () => {


  return (
    <div className="home-section grid-col-full">
      <HeadSection />
      <SubSection />
      <MainSection />
      <BottomSection />
      <SubFooter />
    </div>
  )
}
