import React, { useState, useCallback, useMemo } from 'react';

import './App.css';
import DemoList from './components/UI/Button/Demo/DemoList';
import DesList from './components/UI/Button/Demo/DesList';
import Button from './components/UI/Button/Button';

function App() {
  const [listTitle, setListTitle] = useState('My List');
  const [order, setOrder]=useState('change to descending order');
  
 
  
  const changeTitleHandler = useCallback(() => {
    setListTitle('ascending');
  }, []);
  const changeHandler = useCallback(() => {
    setOrder('descending');
  }, [])
  

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);
  
  
 return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      <DesList title={order} items={listItems}/>
      <Button onClick={changeHandler}>Change to descending order</Button>
      
    </div>
  );
}

export default App;
