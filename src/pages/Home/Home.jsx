import React from 'react'
import DisciplinesBar from '../../components/Disciplines/Disciplines'
import HeaderHome from '../../components/HeaderHome/HeaderHome'
import LeClub from '../../components/LeClub/LeClub'
import ScoreBar from '../../components/ScoreBar/ScoreBar'
import Blog from '../../components/Post/Blog'
import { Taggable } from '../../components/taggable/taggable'

export default function Home() {
  return (
    <div className="home">
        <HeaderHome/>
        <ScoreBar/>
        <LeClub/>
        <DisciplinesBar/>
        <Blog/> 
        <Taggable />
    </div>
  )
}
