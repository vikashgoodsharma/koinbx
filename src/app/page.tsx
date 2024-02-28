'use client'
import {get, ref} from 'firebase/database';
import {database} from '../app/firebaseConfig';
import { useEffect, useState } from 'react';
import { LIST_NAME, TABLE_CONSTANTS, icons } from './constants';
import { FilterCurrencySymbol, FilterImage } from './utils';


export default function Home() {
  const [koinBxTableData, setKoinBxTableData]= useState([]);
  const [currentActiveList, setCurrentActiveList]= useState(LIST_NAME.hotlist.key);

 
  useEffect(()=>{
  const koinbxDataRef= ref(database, "koinbxdata");
  // koinbxdata is key which will be referenced and the balue assigned to it will be returned

  // from below function we are checking if data exists with an asynchronus function and then returns the value
  get(koinbxDataRef).then((snapshot)=>{
    if(snapshot.exists()){
      setKoinBxTableData(snapshot.val());
  // storing data from firebase into state by using useState hook
    }
  })
  })

  

  return (
   <div className="h-full w-full bg-white pb-48">
      <h1 className="text-center font-bold text-[24px] md:text-[36px] py-4 md:py-16">Catch Your Next Trading Opportunity</h1>
      
      {/* Hot List and New List Tab Bar section start, we can switch between hot and new list from here */}
      <div className='bg-gray-100 mx-[3%] md:mx-[5%] xl:mx-[10%] flex px-[5%]'>
        <div onClick={()=>setCurrentActiveList(LIST_NAME.hotlist.key)} className={`${currentActiveList == LIST_NAME.hotlist.key ? 'border-[#008000] text-[#008000] border-b-4' : ''} w-[90px] py-[15px] md:py-[30px] text-center font-bold`}>
        {LIST_NAME.hotlist.name}
        </div>
        <div onClick={()=>setCurrentActiveList(LIST_NAME.newlist.key)} className={`${currentActiveList == LIST_NAME.newlist.key ? 'border-[#008000] text-[#008000] border-b-4' : ''} w-[90px] py-[15px] md:py-[30px] text-center font-bold ml-[30px]`}>
        {LIST_NAME.newlist.name}
        </div>
      </div>
      {/*  */}

      {/* table starts */}
      {/* table headings are fetched from TABLE_CONSTANTS that is stored in constants.ts file */}
      <div className="relative overflow-x-scroll px-[3%] md:px-[5%] xl:px-[10%]">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-400 ">
                  <tr>
                      <th scope="col" className="px-6 py-3">
                      {TABLE_CONSTANTS.trendingPairs}
                      </th>
                      <th scope="col" className="px-6 py-3">
                      {TABLE_CONSTANTS.lastPrice}
                      </th>
                      <th scope="col" className="px-6 py-3">
                      {TABLE_CONSTANTS.hoursChange}
                      </th>
                      <th scope="col" className="px-6 py-3 hidden md:table-cell">
                      {TABLE_CONSTANTS.perDayChart}
                      </th>
                      <th scope="col" className="px-6 py-3 hidden md:table-cell">
                      {TABLE_CONSTANTS.trade}
                      </th>
                  </tr>
              </thead>
              <tbody>
                {/* mapping the table data according to the current active list, i.e. Hot list */}
                {koinBxTableData?.[currentActiveList]?.map((tableRowItem, tableRowIndex)=>{
                  return(
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={tableRowIndex}>
                      <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <div className='flex space-x-2 '>
                          {/* This filterimage function is stored in utils file as it is a utility function and it can be used at many places. this function maps to the list and return the currency image */}
                          <img src={FilterImage(tableRowItem[TABLE_CONSTANTS.trendingPairs], icons)} className='h-[40px] self-center '/>
                        <p className='self-center'>{tableRowItem[TABLE_CONSTANTS.trendingPairs]}</p>
                          </div> 
                      </td>
                      <td className="px-6 py-4">
                        {/* Filter currency symbol function returns dollar or ruppee symbol according to data */}
                         {FilterCurrencySymbol(tableRowItem[TABLE_CONSTANTS.trendingPairs])} {tableRowItem[TABLE_CONSTANTS.lastPrice]}
                      </td>
                      <td className="px-6 py-4">
                          {tableRowItem[TABLE_CONSTANTS.hoursChange]}
                      </td> 
                      <td className="px-6 py-4 hidden md:table-cell">
                        {tableRowItem[TABLE_CONSTANTS.graph] == "up" ? 
                        <img src="assets/UpGraph.svg" className=' w-[75px]'/>:
                        <img src="assets/DownGraph.svg" className=' w-[75px]'/>
                        }
                      </td>

                      <td className="px-6 py-4 hidden md:table-cell">
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
      {/*  */}

   </div>
  );
}
