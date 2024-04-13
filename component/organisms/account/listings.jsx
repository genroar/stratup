import React, { useEffect } from "react";
import DataTable from 'datatables.net-dt';
import 'datatables.net-responsive-dt';
import $ from 'jquery'; 

function Listings() {
    useEffect(() => {
        $('#myTable').DataTable();
    }, []); 
    return (
        <>
            <table id="myTable" class="display">
    <thead>
        <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
            <th>Column 4</th>
            <th>Column 5</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>sRow 1 Data 1</td>
            <td>Row 1 Data 2</td>
            <td>Row 1 Data 2</td>
            <td>Row 1 Data 2</td>
            <td>Row 1 Data 2</td>
        </tr>
        <tr>
            <td>Row 2 Data 1</td>
            <td>Row 2 Data 2</td>
            <td>Row 2 Data 2</td>
            <td>Row 2 Data 2</td>
            <td>Row 2 s Data 2</td>
        </tr>
        <tr>
            <td>Row 2 Data 1</td>
            <td>Row 2 Data 2</td>
            <td>Row 2 Data 2</td>
            <td>Row 2 Data 2</td>
            <td>Row 2 s Data 2</td>
        </tr>
        <tr>
            <td>Row 2 Data 1</td>
            <td>Row 2 Data 2</td>
            <td>Row 2 Data 2</td>
            <td>Row 2 Data 2</td>
            <td>Row 2 s Data 2</td>
        </tr>
        <tr>
            <td>Row 2 Data 1</td>
            <td>Row 2 Data 2</td>
            <td>Row 2 Data 2</td>
            <td>Row 2 Data 2</td>
            <td>Row 2 s Data 2</td>
        </tr>
        <tr>
            <td>Row 2 Data 1</td>
            <td>Row 2 Data 2</td>
            <td>Row 2 Data 2</td>
            <td>Row 2 Data 2</td>
            <td>Row 2 s Data 2</td>
        </tr>
        <tr>
            <td>Row 2 Data 1</td>
            <td>Row 2 Data 2</td>
            <td>Row 2 Data 2</td>
            <td>Row 2 Data 2</td>
            <td>Row 2 s Data 2</td>
        </tr>
        <tr>
            <td>Row 2 Data 1</td>
            <td>Row 2 Data 2</td>
            <td>Row 2 Data 2</td>
            <td>Row 2 Data 2</td>
            <td>Row 2 s Data 2</td>
        </tr>
        <tr>
            <td>Row 2 Data 1</td>
            <td>Row 2 Data 2</td>
            <td>Row 2 Data 2</td>
            <td>Row 2 Data 2</td>
            <td>Row 2 s Data 2</td>
        </tr>
        <tr>
            <td>Row 2 Data 1</td>
            <td>Row 2 Data 2</td>
            <td>Row 2 Data 2</td>
            <td>Row 2 Data 2</td>
            <td>Row 2 s Data 2</td>
        </tr>
        <tr>
            <td>Row 2 Data 1</td>
            <td>Row 2 Data 2</td>
            <td>Row 2 Data 2</td>
            <td>Row 2 Data 2</td>
            <td>Row 2 s Data 2</td>
        </tr>
        <tr>
            <td>Row 2 Data 1</td>
            <td>Row 2 Data 2</td>
            <td>Row 2 Data 2</td>
            <td>Row 2 Data 2</td>
            <td>Row 2 s Data 2</td>
        </tr>
        <tr>
            <td>Row 2 Data 1</td>
            <td>Row 2 Data 2</td>
            <td>Row 2 Data 2</td>
            <td>Row 2 Data 2</td>
            <td>Row 2 s Data 2</td>
        </tr>
        <tr>
            <td>Row 2 Data 1</td>
            <td>Row 2 Data 2</td>
            <td>Row 2 Data 2</td>
            <td>Row 2 Data 2</td>
            <td>Row 2 s Data 2</td>
        </tr>
        <tr>
            <td>Row 2 Data 1</td>
            <td>Row 2 Data 2</td>
            <td>Row 2 Data 2</td>
            <td>Row 2 Data 2</td>
            <td>Row 2 s Data 2</td>
        </tr>
        <tr>
            <td>Row 2 Data 1</td>
            <td>Row 2 Data 2</td>
            <td>Row 2 Data 2</td>
            <td>Row 2 Data 2</td>
            <td>Row 2 s Data 2</td>
        </tr>
        <tr>
            <td>Row 2 Data 1</td>
            <td>Row 2 Data 2</td>
            <td>Row 2 Data 2</td>
            <td>Row 2 Data 2</td>
            <td>Row 2 s Data 2</td>
        </tr>
        <tr>
            <td>sss Row 2 Data 1</td>
            <td>Row 2 Data 2</td>
            <td>Row 2 Data 2</td>
            <td>Row 2 Data 2</td>
            <td>Row 2 s Data 2</td>
        </tr>
        
        
        
    </tbody>
</table>
        </>  
    );
}

export default Listings;
