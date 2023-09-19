import React from 'react';
import { Button } from './modules';
import { AnchorButton } from './modules';
import { Icon } from './modules';


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
      <Button variant="green" rounded={'rounded'}>Add to cart</Button>
      <AnchorButton variant="white-green">Electronics</AnchorButton>
      <AnchorButton variant="gray-green" upperCase={true}>Home</AnchorButton>
      <Button variant="dark" disabled={true} rightIcon={<Icon variant="heart" left={true} />}>Add to cart</Button>
      <Button custom={'bg-dark-800 w-12 text-[26px] text-white rounded'}>
        <Icon variant="gear"/>
      </Button>
      <Button variant="gray" isLoading={isLoading} leftIcon={<Icon variant="gear" right={true} />} onClick={clickHandler} rounded={true} >Add to cart</Button>
      <Button variant="gray-blue" rightIcon={<Icon variant="gear" left={true}/>} rounded={'rounded'} >Add to cart</Button>
      <Button variant="blue" disabled={true} >Add to cart</Button>
      <Button variant="dark-blue" >Add to cart</Button>
      <Button variant="gray-blue" rounded={'half-rounded'}>Add to cart</Button>
      <Button variant='gray-green' rounded={'circle'} size='small'>
        <Icon variant="search"/>
      </Button>
      <Button variant='gray-blue' rounded='rounded' size='small'>
        <Icon variant="heart" />
      </Button>
      <Button variant='gray-blue' rounded='circle' size='small'>
        <Icon variant="grid" />
      </Button>
    </div >
  );
}

export default App;
