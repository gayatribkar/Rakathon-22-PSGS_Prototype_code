import React from 'react';
import { useStateContext } from '../contexts/ContextProvider';
import { Link } from 'react-router-dom';

const Visualisation = () => {
  const { currentMode } = useStateContext();

  return (
    <div>
      <div class="p-16 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-12">
    
      <Link to="/Chart1">
    <div class="rounded overflow-hidden shadow-lg bg-white">
      <img class="w-full" src="https://thumbs.dreamstime.com/b/self-management-concept-vector-illustration-personal-development-goals-achievement-career-growth-regulation-learning-155693889.jpg" alt="Mountain"  />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Individual product quantity percentage</div>
        <p class="text-gray-700 text-base">
          {/* we tried to find product quantity percentage */}
        </p>
      </div>
      

    </div>
    </Link>
    
    <Link to="/Chart2">
    <div class="rounded overflow-hidden shadow-lg bg-white">
      <img class="w-full" src="https://img.freepik.com/free-vector/data-inform-illustration-concept_114360-864.jpg?w=2000" alt="Forest" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Customer Country Count in Percentage</div>
        <p class="text-gray-700 text-base"></p>
      </div>
     
    </div>
    </Link>

    <Link to="/Chart3">
    <div class="rounded overflow-hidden shadow-lg bg-white">
    {/*  */}
      <img class="w-full" src="https://media.istockphoto.com/vectors/startup-team-with-laptops-analyzing-growth-chart-vector-id1289357584?b=1&k=20&m=1289357584&s=612x612&w=0&h=oMu9hsXiqR5HR42ShjYYMG1x9sbZMbOHOkD2UbNLAKk=" alt="Forest" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Montly Revenue from Dec. 2009 to Dec. 2011</div>
        <p class="text-gray-700 text-base"></p>
      </div>
      
     
    </div>
    </Link>

    <Link to="/Chart4">
    <div class="rounded overflow-hidden shadow-lg bg-white">
      <img class="w-full" src="https://img.freepik.com/free-vector/businessman-sets-goals-runs-up-graph-columns-success-time-self-management-self-regulation-learning-self-organization-course-concept-illustration_335657-2070.jpg?w=2000" alt="Forest" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Country Revenue in Percentage</div>
        <p class="text-gray-700 text-base"></p>
      </div>
      
     
    </div>
    </Link>
    
    <Link to="/Chart5">
    <div class="rounded overflow-hidden shadow-lg bg-white">
      <img class="w-full" src="https://media.istockphoto.com/vectors/running-towards-the-goal-business-vector-illustration-vector-id1203500733" alt="Forest" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Customers Recency in number of Days</div>
        <p class="text-gray-700 text-base"></p>
      </div>
      {/* https://www.allfinanceterms.com/wp-content/uploads/2021/09/business-growth-and-strategy-concept-illustration_53876-40421.jpg */}
     
    </div>
    </Link>

    <Link to="/Chart6">
    <div class="rounded overflow-hidden shadow-lg bg-white">
      <img class="w-full" src="https://img.freepik.com/free-vector/flat-hand-drawn-people-analyzing-growth-charts_52683-56218.jpg?w=2000" alt="Forest" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Customers with Purchase Frequency less than 1200</div>
        <p class="text-gray-700 text-base"></p>
      </div>
      {/* https://www.allfinanceterms.com/wp-content/uploads/2021/09/business-growth-and-strategy-concept-illustration_53876-40421.jpg */}
     
    </div>
    </Link>

    <Link to="/Chart7">
    <div class="rounded overflow-hidden shadow-lg bg-white">
      <img class="w-full" src="https://img.freepik.com/free-vector/man-woman-present-jobs-front-room-about-growth-company_1150-35052.jpg?w=2000" alt="Forest" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Scatter plot of Revenue verses Frequency</div>
        <p class="text-gray-700 text-base"></p>
      </div>
      
     
    </div>
    </Link>

    <Link to="/Chart8">
    <div class="rounded overflow-hidden shadow-lg bg-white">
      <img class="w-full" src="https://img.freepik.com/free-vector/people-analyzing-growth-charts_23-2148843029.jpg?w=2000" alt="Forest" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Scatter Plot of Revenue verses Recency</div>
        <p class="text-gray-700 text-base"></p>
      </div>
      
     
    </div>
    </Link>

    <Link to="/Chart9">
    <div class="rounded overflow-hidden shadow-lg bg-white">
      <img class="w-full" src="https://previews.123rf.com/images/unitonevector/unitonevector1908/unitonevector190800823/128682765-company-performance-report-vector-illustration-employees-listen-to-progress-report-bearded-man-shows.jpg" alt="Forest" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Scatter Plot of Revenue verses Frequency</div>
        <p class="text-gray-700 text-base"></p>
      </div>
      
     
    </div>
    </Link>
  </div>
</div>



      



  );
};

export default Visualisation;




