import React from 'react';
import Home from '@/component/templates/Home';
import Account from './dashboard';
import CardSubmit from '@/component/organisms/CardSubmit';
import Header2 from '@/component/organisms/Header2';
import Footer2 from '@/component/organisms/Footer2';
import Blog from '@/component/organisms/BLog';
function Index() {
  return (
    <div>
      <div>
        <Header2 />
        <Home />
        <Footer2 />
        {/* <Blog/> */}
      </div>
    </div>
  );
}

export default Index;
