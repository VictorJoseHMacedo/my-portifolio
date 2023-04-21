import React from 'react'
import Header from '../../components/Header/Header'
import Skills from '../../components/Skills/Skills'
import './index.scss';
import Projects from '../../components/Projects/Projects';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <div className='division-time'></div>
      <Skills />
      <Projects />
      <Footer />
    </>
  )
}

export default Home