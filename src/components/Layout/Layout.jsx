import { Outlet } from 'react-router-dom'
import {TopBar} from '../TopBar/TopBar'
import { MainContent } from '../MainContent/MainContent'


export function Layout() {
  

  return (
    <>
      <MainContent >
        <TopBar />
        <Outlet />
      </MainContent>
    </>
  )
}

