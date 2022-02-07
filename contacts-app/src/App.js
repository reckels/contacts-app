import './App.css';
import AddContact from './AddContact';
import Contacts from './Contacts';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Contacts
        </p>
      </header>
      <div>
        <AddContact/>
      </div>
      <div>
        <Contacts/>
      </div>
    </div>
  );
}

export default App;
