// this is utils file created for storing utility functions, we can reuse these functions anywhere in the project by importing them

export const FilterImage=(iconIdentifier:string, icons:Array)=>{
    let val = "";
    icons.find((iconItem:any)=>{
      if(iconItem.name == iconIdentifier) {
        val = iconItem.url
      }
    })
    return val;
  }
{/* This filterimage function is stored in utils file as it is a utility function and it can be used at many places. this function maps to the list and return the currency image */}



export const FilterCurrencySymbol=(currenyName:string)=>{
    if(currenyName.includes('INR')){
      return '₹ '
    } else return "$ "
  }
{/* Filter currency symbol function returns dollar or ruppee symbol according to data */}
