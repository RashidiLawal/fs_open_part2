import React from 'react';

const Total = ({exercises}) => {
    
        return <div>
              
                  <b>Total of {exercises.reduce((acc,cur) => cur + acc,0)} exercises </b>
              
               </div>;
};

export default Total;
