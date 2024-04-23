import React from 'react';
import WatchModel from '../atoms/WatchModel';
import Modelhead from '../atoms/Modelhead';
import { LiaLessThanSolid } from 'react-icons/lia';
import Other from '../atoms/Other';
import { RxCross1 } from "react-icons/rx";

function Modelmeterial({onSelectMaterial, onSelectType}) {
  const handleMaterialSeclet = (material) => {
    onSelectMaterial(material)
  }

  return (
  <div className="flex flex-col  items-center justify-center">
      <div className='flex flex-col items-center justify-center'>
          <div className='flex flex-col gap-[20px] w-[730px]'>
    <div className='flex justify-center'>
    <Modelhead
      onclick={onSelectType}
        icon={<LiaLessThanSolid />}
        heading='Case material'
        description='What year is your watch?'
        subDescription='Select an option below'
      />
    </div>
      <div className='w-[730px] flex flex-wrap flex-row gap-[10px]'>
        <button onClick={() => handleMaterialSeclet('materiral 1')} ><WatchModel text='Steel' /></button>
        <button onClick={() => handleMaterialSeclet('materiral 2')}><WatchModel text='Yellow Gold' /></button>
        <button onClick={() => handleMaterialSeclet('materiral 3')}><WatchModel text='White Gold' /></button>
        <button onClick={() => handleMaterialSeclet('materiral 4')}><WatchModel text='Rose Gold' /></button>
        <button onClick={() => handleMaterialSeclet('materiral 5')}><WatchModel text='Two Tone' /></button>
        <button onClick={() => handleMaterialSeclet('materiral 6')}><WatchModel text='Titanium' /></button>
        <button onClick={() => handleMaterialSeclet('materiral 7')}><WatchModel text='Carbon' /></button>
        <button onClick={() => handleMaterialSeclet('materiral 8')}><WatchModel text='Platinum' /></button>
      </div>
      <div className='flex items-center justify-center'><Other parent='Other'/></div>
    </div>
    </div>
  </div>
  );
}

export default Modelmeterial;
