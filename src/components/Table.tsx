{/* Here header is converted into a component and being called in the layout file */}
import { TABLE_CONSTANTS, icons } from '@/app/constants';
import { FilterCurrencySymbol, FilterImage } from '@/app/utils';
// all the components will be created in components folder
import React from 'react';
 {/* table starts */}
      {/* table headings are fetched from TABLE_CONSTANTS that is stored in constants.ts file */}

const Table = ({koinBxTableData, currentActiveList}) => {
  return (
  
      <div className="relative overflow-x-scroll px-[3%] md:px-[5%] xl:px-[10%]">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-400 ">
                  <tr>
                      <th scope="col" className="px-2 md:px-6  py-3">
                      {TABLE_CONSTANTS.trendingPairs}
                      </th>
                      <th scope="col" className="px-2 md:px-6  py-3">
                      {TABLE_CONSTANTS.lastPrice}
                      </th>
                      <th scope="col" className="px-2 md:px-6  py-3">
                      {TABLE_CONSTANTS.hoursChange}
                      </th>
                      <th scope="col" className="px-2 md:px-6  py-3 hidden md:table-cell">
                      {TABLE_CONSTANTS.perDayChart}
                      </th>
                      <th scope="col" className="px-2 md:px-6  py-3 hidden md:table-cell">
                      {TABLE_CONSTANTS.trade}
                      </th>
                  </tr>
              </thead>
              <tbody>
                {/* mapping the table data according to the current active list, i.e. Hot list */}
                {koinBxTableData?.[currentActiveList]?.map((tableRowItem, tableRowIndex)=>{
                  return(
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={tableRowIndex}>
                      <td scope="row" className="px-2 md:px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <div className='flex space-x-2 '>
                          {/* This filterimage function is stored in utils file as it is a utility function and it can be used at many places. this function maps to the list and return the currency image */}
                          <img src={FilterImage(tableRowItem[TABLE_CONSTANTS.trendingPairs], icons)} className='h-[40px] self-center '/>
                        <p className='self-center'>{tableRowItem[TABLE_CONSTANTS.trendingPairs]}</p>
                          </div> 
                      </td>
                      <td className="px-2 md:px-6  py-4">
                        {/* Filter currency symbol function returns dollar or ruppee symbol according to data */}
                         {FilterCurrencySymbol(tableRowItem[TABLE_CONSTANTS.trendingPairs])} {tableRowItem[TABLE_CONSTANTS.lastPrice]}
                      </td>
                      <td className="px-2 md:px-6  py-4">
                          {tableRowItem[TABLE_CONSTANTS.hoursChange]}
                      </td> 
                      <td className="px-2 md:px-6  py-4 hidden md:table-cell">
                        {tableRowItem[TABLE_CONSTANTS.graph] == "up" ? 
                        <img src="assets/UpGraph.svg" className=' w-[75px]'/>:
                        <img src="assets/DownGraph.svg" className=' w-[75px]'/>
                        }
                      </td>

                      <td className="px-2 md:px-6  py-4 hidden md:table-cell">
                      <button className="bg-transparent hover:bg-[#1fa62d] font-semibold hover:text-white py-2 px-4 border border-[#1fa62d] hover:border-transparent rounded-full">
                        Trade
                      </button>
                      </td>
                  </tr>
                  )
                })}
                  
                
              </tbody>
          </table>
      </div>
  );
};

export default Table;
