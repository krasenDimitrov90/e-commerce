import React from 'react';
import { Button } from './modules';
import { SearchIcon, HeartIcon, GearIcon } from './modules';


function App() {

  const icon = <i className="fa-solid fa-gear"></i>;
  const [isLoading, setIsLoading] = React.useState(false);

  const clickHandler = React.useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000)
  });

  return (
    <div className="flex justify-between p-10">
      <Button variant="green" rounded={'rounded'} disabled={true}>Add to cart</Button>
      <Button variant="dark" disabled={true} rightIcon={<HeartIcon right={true} />}>Add to cart</Button>
      <Button custom={'bg-dark-800 w-12 text-[26px] text-white rounded'}>
        <GearIcon />
      </Button>
      <Button variant="gray" isLoading={isLoading} leftIcon={<GearIcon left={true} />} onClick={clickHandler} rounded={true} >Add to cart</Button>
      <Button variant="gray-blue" icon={icon} left={true} rounded={'rounded'} >Add to cart</Button>
      <Button variant="blue" disabled={true} >Add to cart</Button>
      <Button variant="dark-blue" >Add to cart</Button>
      <Button variant="gray-blue" rounded={'half-rounded'}>Add to cart</Button>
      <Button variant='gray-green' rounded={'circle'} size='small'>
        <SearchIcon />
      </Button>
      <Button variant='gray-blue' rounded='rounded' size='small'>
        <HeartIcon />
      </Button>
    </div >
  );
}

export default App;
