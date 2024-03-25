// ListingButton.js
import React, { useState } from 'react';
import Button from '../atoms/Button';
import TabContent from '../organisms/TabContent';

function ListingButton() {
  const [activeTab, setActiveTab] = useState('buy');

  return (
    <div className='flex w-[600px] shadow-md transform rotate-y-1 rounded-tr-[25px]'>
      <Button
        variant={activeTab === 'buy' ? 'active' : ''}
        onClick={() => setActiveTab('buy')}
      >
        Buy
      </Button>
      <Button
        variant={activeTab === 'sell' ? 'active' : ''}
        onClick={() => setActiveTab('sell')}
      >
        Sell
      </Button>
      <Button
        variant={activeTab === 'source' ? 'active' : ''}
        onClick={() => setActiveTab('source')}
      >
        Sources
      </Button>
      <Button
        variant={activeTab === 'consign' ? 'active' : ''}
        onClick={() => setActiveTab('consign')}
      >
        Consign
      </Button>
      <div className="tab-content">
        <TabContent activeTab={activeTab} />
      </div>
    </div>
  );
}

export default ListingButton;
