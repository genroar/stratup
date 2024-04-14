import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { AiFillMessage } from "react-icons/ai";
import { FaPen } from "react-icons/fa";
import DataTable from 'datatables.net-dt';
import 'datatables.net-responsive-dt';
import $ from 'jquery';
import '../../../app/globals.css'

function Listings() {

    const [activeTab, setActiveTab] = useState(null);
    const [isButtonVisible, setIsButtonVisible] = useState(true);
  
    const handleTabChange = (tabName) => {
      setActiveTab(tabName);
      setIsButtonVisible(false); 
    };
  
    const toggleNotificationButton = () => {
      setActiveTab(null); 
      setIsButtonVisible(true); 
    };

    useEffect(() => {
        $('#myTable').DataTable();
    }, []);
    return (
        <>
            <div></div>
            <table id="myTable" class="display">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th> Brand</th>
                        <th> Model </th>
                        <th> Price </th>
                        <th> Diameter </th>
                        <th> Material </th>
                        <th> Message </th>
                        <th> Status </th>
                        <th> Actions </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src="/assits/assits/image/lis.png" alt="listing image" /></td>
                        <td>Rolex</td>
                        <td>Daytona</td>
                        <td>1200 AED</td>
                        <td>28mm</td>
                        <td>Steel</td>
                        <td>
                            <div className="w-[49px] h-[26px] bg-buttonGray bg-opacity-20 items-center py-[4px] justify-between flex rounded-[20px] px-[8px] " > <AiFillMessage className="text-buttonGray" /> 12 </div>
                        </td>
                        <td>
                            <div className="bg-listGreen bg-opacity-10 flex items-center justify-center text-listGreen rounded-[10px] font-semibold  w-[90px] " >Available</div>
                        </td>
                        <td className="flex" >
                            <div className="bg-penbg bg-opacity-20 px-[3px] py-[6px] rounded-full" ><FaPen className="text-pen" /></div>
                            <div className="bg-del bg-opacity-10 px-[3px] py-[6px] rounded-full"><MdDelete className="text-del" /></div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default Listings;
