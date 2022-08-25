import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import '../styles/globals.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Item, NavBar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ApolloProvider } from '@apollo/client';
import lib from '../lib/apollo'
import Head from 'next/head';
import { Header } from '../components/Header';


function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  })
  return (
    <>
      
    <div>
      <Header/>
      <ApolloProvider client={lib}>
        <NavBar>
          <Item icon="Home" path="/"/>
          <Item icon="Posts" path="/posts" />
          <Item icon="Sobre" path="/about" />
        </NavBar>
        <Component {...pageProps} />
        <Footer />
      </ApolloProvider>
    </div>
    </>
    
  )
  
}

export default MyApp
