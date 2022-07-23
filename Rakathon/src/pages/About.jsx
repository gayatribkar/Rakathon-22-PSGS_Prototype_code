
import React from 'react';
 


import { Header } from '../components';

// eslint-disable-next-line react/destructuring-assignment


const About = () => {

  return (
    <div>
  <div className="m-2 md:m-12 mt-24  md:p-10 bg-white rounded-3xl">
    <Header category="About" title="Rakathon" />
      <div className="text-center">
      <div className="flex flex-wrap justify-center">
      
      
      <figure class="md:flex rounded-xl p-8 ">

    <blockquote>
      <p class=" pr-8">
      Being a global company, Rakuten’s mission is to contribute to society by creating value through innovation and entrepreneurship. Therefore Rakathon ’22 is the perfect stage for the entrepreneurs of tomorrow.
      </p>
      <br/>
      <p class="pr-8">
      Rakathon 2022, a 24hrs hackathon competition by Rakuten, is a platform for software professionals, industry experts, freelancers, and budding engineers with the brightest and most innovative minds to develop practical solutions to the real-world problems. Rakathon – a portmanteau of Rakuten and hackathon – echoes Rakuten’s commitment to give back to the world by fostering innovation and an entrepreneurship mindset.
      </p>
      <br/>
      <p class="pr-8">If you believe innovation is the mandate to disrupt the old and tired ways to better the way people live and work in the future, this codefest is tailored for you.</p>
    </blockquote>
  
    <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://rcorpinstorage.blob.core.windows.net/prod/2022/06/event-card-banner.jpg" alt="..." className="shadow rounded-full max-w-full h-auto align-middle border-none" width="30%"  />
  <div class="pt-3 md:p-1 text-center  ">
  </div>
</figure>

</div>
      
    </div>
   </div>

   <div className="m-2 md:m-12 mt-24  md:p-10 bg-white rounded-3xl">
    <Header category="About" title="Our Team" />
      <div className="text-center">
      <div className="flex flex-wrap justify-center">
      
      
      <figure class="md:flex rounded-xl p-8 ">

    <blockquote>
   
      <br/>
      <p class="pr-8">
      We are a group of 4 Engineering students interested in Data Science and Machine Learning. At #psgs, we are fascinated by the idea of finding meaning from data. We are proficient at solving problems using data science. Building big data collection and analytics capabilities to uncover customer, product, and operational insights. Analyzing data sources and proposing solutions to strategic planning problems on a one-time or periodic basis. Providing data-driven decision support. Developing analytics models and insights for customer- or employee-facing applications to drive efficiency or revenue.
      </p>
      <br/>
      <p class="pr-8"></p>
    </blockquote>
    <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://rcorpinstorage.blob.core.windows.net/prod/2022/05/pc2.png" alt="..." className="shadow rounded-full max-w-full h-auto align-middle border-none" width="30%"  />

  <div class="pt-3 md:p-1 text-center  ">
  </div>
</figure>

</div>
      
    </div>
   </div>
    </div>
  );
};

export default About;
