import { AddStore, Filter, Table } from "../components";

const stores = [{
  Id: 1,
  name: "Dan store",
  isSpecial: true,
  openTime: 9.00,
  closeTime: 20.00,
  distanceToDelivery: 5,
},{
  Id: 2,
  name: "Aslan store",
  isSpecial: false,
  openTime: 9.00,
  closeTime: 20.00,
  distanceToDelivery: 2,
},{
  Id: 3,
  name: "Ilyas store",
  isSpecial: true,
  openTime: 9.00,
  closeTime: 20.00,
  distanceToDelivery: 5,
}]



function App() {
  return (
    <div className="App">
      <AddStore />
      <Filter />
      <Table stores={stores}/>
    </div>
  );
}

export default App;
