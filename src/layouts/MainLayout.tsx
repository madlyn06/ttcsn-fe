import React from 'react'
import Footer from 'src/components/Footer'
import Header from 'src/components/Header'
import Search from 'src/components/Search'
interface Props {
  children: React.ReactNode
}
const MainLayout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      <Search />
      {children}
      <Footer />
    </div>
  )
}

export default MainLayout
