import './App.css';
import ComponentD from './components/ComponentD';
import { UserProvider, SecondNameProvider } from './components/Context';
// import HoverCounter from './components/HoverCounter';
// import ClickCounter from './components/ClickCounter';
// import ErrorBoundary from './components/ErrorBoundary';
// import FRInputParent from './components/FRInputParent';
// import Hero from './components/Hero';
// import PortalsDemo from './components/PortalsDemo';
// import RefsDemo from './components/RefsDemo';
// import ParentComponent from './components/ParentComponent';
// import Lists from './components/Lists';
// import FormHandling from './components/FormHandling';
// import PureComp from './components/PureComp';
// import logo from './logo.svg';
// import Header from './components/Header';
// import ParentComponent from './components/ParentComponent';

function App() {
  return (
    <div className="App">
      <SecondNameProvider value="Kamau">
        <UserProvider value="Paul">
          <ComponentD />
        </UserProvider>
      </SecondNameProvider>
    </div>
  );
}

export default App;
