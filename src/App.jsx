import { Container, Grid } from '@mui/material';

import { useEffect, useState } from 'react';
import About from './components/About';
import Codes from './components/Codes';
import Experience from './components/Experience';
import Header from './components/Header';
import Profile from './components/Profile';
import Services from './components/Services';
import Skills from './components/Skills';

function App() {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsFixed(scrollPosition >= window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {!isFixed && <Header />}
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item md={4} sm={12}>
            <Profile isFixed={isFixed} />
          </Grid>
          <Grid item md={8} sm={12}>
            <div className="content-wrap" style={{ marginTop: isFixed ? '100vh' : '0px' }}>
              <About />
              <Experience />
              <Services />
              <Skills />
              <Codes />
              <div style={{ height: 50 }}></div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </>

  )
}

export default App
