import React, { useState } from 'react';
import Button from '../atoms/Button';
import Listing from './Listing';
import Rolex from '../molecules/Rolex';
import Source from './Source';

function ListingButton() {
  const [activeTab, setActiveTab] = useState('buy'); // Default active tab is 'buy'

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className='flex w-[600px] shadow-md transform rotate-y-1 rounded-tr-[25px]'>
      <Button
        variant={activeTab === 'buy' ? 'tl-radius active' : 'tl-radius'}
        onClick={() => handleTabClick('buy')}
      >
        Buy
      </Button>
      <Button
        variant={activeTab === 'sell' ? 'rectangle active' : 'rectangle'}
        onClick={() => handleTabClick('sell')}
      >
        Sell
      </Button>
      <Button
        variant={activeTab === 'source' ? 'rectangle active' : 'rectangle'}
        onClick={() => handleTabClick('source')}
      >
        Sources
      </Button>
      <Button
        variant={activeTab === 'consign' ? 'tr-radius active' : 'tr-radius'}
        onClick={() => handleTabClick('consign')}
      >
        Consign
      </Button>
      <div className="tab-content">
        {/* Render different tab content based on the active tab */}
        {activeTab === 'buy' && <Listing title="listing" />}
        {activeTab === 'sell' && <Rolex title="Sell Tab" />}
        {activeTab === 'source' && <Source title="Source Tab" />}
        {activeTab === 'consign' && <Rolex title="Consign Tab" />}
      </div>
    </div>
  );
}

export default ListingButton;
