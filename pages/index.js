import React from 'react';
import Home from '@/component/templates/Home';
import Account from './account';
import CardSubmit from '@/component/organisms/CardSubmit';
import Header2 from '@/component/organisms/Header2';
import Footer2 from '@/component/organisms/Footer2';


function Index() {
  return (
    <div>
      <div>
        <Header2 />
        <Home />
        <Footer2 />
      </div>
    </div>
  );
}

export default Index;
