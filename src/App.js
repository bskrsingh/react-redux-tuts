import logo from './logo.svg';
import './App.css';

import HomeContainers from './containers/HomeContainers';
import HeaderComponent from "./containers/HeaderContainer";

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <HomeContainers />
    </div>
  );
}

export default App;
