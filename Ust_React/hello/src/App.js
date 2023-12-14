import logo from './logo.svg';
import './App.css';
import Message from './components/message/Message';
import UserDetails from './components/user/UserDetails';

function App() {
  return (
    <div className="App">
      <h1>UST Global</h1>
      <Message msg='Hello shafna'/>
      <UserDetails username='shafna' age='26'/>

    </div>
  );
}

export default App;
