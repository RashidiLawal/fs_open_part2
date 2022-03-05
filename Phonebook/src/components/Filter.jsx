import React from 'react';

const Filter = ({setQuery, query}) => {
  return <div>
            
            filter shown with <input type="search" placeholder='Search' value={query} onChange={e =>setQuery(e.target.value)}/>

         </div>;
};

export default Filter;
