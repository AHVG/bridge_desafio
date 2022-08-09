import './index.css';
import Header from "./components/layout/Header.js"
import Content from './components/Content';
import 'react-app-polyfill/stable'


function App() {
  return (
    <div className="App">
      <Header />
      <Content />
    </div>
  );
}

export default App;
