import { Button } from './modules';


function App() {
  return (
    <div className="flex justify-between p-10">
      <Button >Add to cart</Button>
      <Button type="secondary" >Add to cart</Button>
      <Button type="outlined" >Add to cart</Button>
      <Button type="outlined-rounded" >Add to cart</Button>
    </div>
  );
}

export default App;
