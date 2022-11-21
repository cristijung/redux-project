import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <>
    <header className='top'>Meu primeiro Redux</header>
    <div className='View-content'>
      <h3>Tópicos do Redux</h3>
      <ul className='text'>
        <li>React Redux</li>
        <li>Store</li>
        <li>Reducers</li>
      </ul>
      <Counter />


    </div>
    </>
  );
}

export default App;
