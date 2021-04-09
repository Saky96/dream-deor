import React from 'react';
import 'style.css';
import 'tailwindcss/dist/base.css';
import AnimationRevealPage from 'helpers/AnimationRevealPage';
import Hero from 'components/hero/BackgroundAsImage';
import About from 'components/features/TwoColSingleFeatureWithStats2.js';
import MainFeature2 from 'components/features/TwoColWithTwoFeaturesAndButtons.js';
import Portfolio from 'components/cards/PortfolioTwoCardsWithImage';
import Team from 'components/cards/ProfileThreeColGrid';
import ContactUsForm from 'components/forms/TwoColContactUsWithIllustration.js';
import Footer from 'components/footers/MiniCenteredFooter.js';
import Blog from 'components/blogs/ThreeColSimpleWithImageAndDashedBorder.js';

const Example = () => {
  return (
    <AnimationRevealPage disabled>
      <Hero />
      <About />
      <Portfolio />
      <Team />
      {/* <Blog /> */}
      <ContactUsForm />
      <Footer />
    </AnimationRevealPage>
  );
};

export default Example;
