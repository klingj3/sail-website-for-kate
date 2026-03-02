import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import GlobalStyles from 'styles/GlobalStyles';

import Header from 'components/Header';
import Hero from 'components/Hero';
import Sails from 'components/Sails';
import Testimonials from 'components/Testimonials';
import Gallery from 'components/Gallery';
import About from 'components/About';
import PrivateChartersSection from 'components/PrivateChartersSection';
import Contact from 'components/Contact';
import Footer from 'components/Footer';
import WaveDivider from 'components/WaveDivider';
import PrivateChartersPage from 'pages/PrivateCharters';
import BachelorettePage from 'pages/Bachelorette';
import FAQPage from 'pages/FAQ';

// Section order: Hero → Sails → Testimonials → Gallery → About → Private Charters → Contact
const HomePage: React.FC = () => (
  <>
    <Header transparent />
    <main>
      <Hero />

      <Sails />

      {/* Wave: lightBlue → navy */}
      <WaveDivider
        topColor={theme.colors.lightBlue}
        bottomColor={theme.colors.navy}
        variant="gentle"
      />

      <Testimonials />

      {/* Wave: navy → white */}
      <WaveDivider
        topColor={theme.colors.navy}
        bottomColor={theme.colors.white}
        variant="gentle"
      />

      <Gallery />

      {/* Wave: white → white */}
      <WaveDivider
        topColor={theme.colors.white}
        bottomColor={theme.colors.white}
        variant="gentle"
      />

      <About />

      <PrivateChartersSection />

      {/* Wave: navy → offWhite */}
      <WaveDivider
        topColor={theme.colors.navy}
        bottomColor={theme.colors.offWhite}
        variant="gentle"
      />

      <Contact />
    </main>

    <Footer />
  </>
);

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/private-charters" element={<PrivateChartersPage />} />
      <Route path="/bachelorette" element={<BachelorettePage />} />
      <Route path="/faq" element={<FAQPage />} />
    </Routes>
  </ThemeProvider>
);

export default App;
