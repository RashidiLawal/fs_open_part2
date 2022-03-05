import React from 'react';
import Part from './Part';

const Content = ({parts}) => {
  return <div>
    {
      parts.map((part, partIndex)=> <Part key={partIndex} part={part.name} exercises={part.exercises}/>)
    }
          
     
         </div>;
};

export default Content;
