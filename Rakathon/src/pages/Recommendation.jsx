import React from 'react';
// import { ChartsHeader } from '../components';


const Recommendation = () => {
   
  return (
     <div className="m-4 md:m-10 mt-24 p-10 bg-white  dark:bg-secondary-dark-bg bg rounded-3xl">
      <div className="form">
        <center>
     {/* <form>
       <div className="input-container">
         <label>Enter Product Name : </label>
         <input type="text" name="uname" required  />
         {renderErrorMessage("uname")} */}
       {/* </div> */}
       <div class="shadow flex">
        <input class="w-full rounded p-2" type="text" placeholder="Search..." />
        <button class=" w-auto flex justify-end items-center text-blue p-2 hover:text-blue-light">
            <i class="material-icons" style={{}}>search</i>
        </button>
   </div>
     {/* </form> */} 
     </center>
   </div>
      

  </div>
  );
};


export default Recommendation;