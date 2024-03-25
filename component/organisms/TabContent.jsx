// TabContent.js
import React from 'react';
import Rolex from '../molecules/Rolex';
import Source from './Source';
import Listing from './Listing';

const TabContent = ({ activeTab }) => {
  return (
    <div>
      {activeTab === 'buy' && (
        <Listing/>
)}
      {activeTab === 'sell' && (
        <Rolex/>
      )}
      {activeTab === 'source' && (
        <Source/>

)}
      {activeTab === 'consign' && (
        <Rolex/>
      )}
    </div>
  );
};

export default TabContent;
