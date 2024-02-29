'use client'
import {get, ref} from 'firebase/database';
import {database} from '../app/firebaseConfig';
import { useEffect, useState } from 'react';
import { LIST_NAME, TABLE_CONSTANTS, icons } from './constants';
import { FilterCurrencySymbol, FilterImage } from './utils';
import Table from '@/components/Table';


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

      {/* created table component in components folder so that it can be reused in the project */}
      <Table koinBxTableData={koinBxTableData} currentActiveList={currentActiveList}/>
   {/*  */}
   </div>
  );
}
