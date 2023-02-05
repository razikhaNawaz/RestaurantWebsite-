import React, { useMemo } from 'react';

import classes from './DemoList.module.css';

const DesList = (props) => {

  const { items } = props;
  const sortedList = useMemo(() => {
    return items.sort((a, b) =>b-a);
    
  }, [items]);
 
 
  return (
    <div className={classes.list}>
      <h2>{props.title}</h2>
      <ul>
        
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
       
      </ul>
    </div>
  );
};

export default React.memo(DesList);