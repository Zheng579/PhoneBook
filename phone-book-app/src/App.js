import './App.css';
import ContactList from './phonebook/contactList';
import EditContacts from './phonebook/addContact';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Phone Contacts</h1>
        <nav>
          <Link to="/">Contact List</Link>&nbsp;|&nbsp;
          <Link to="/Add">Add Contacts</Link>
        </nav>
        <Routes>
          <Route path="/" element={<ContactList />} />
          <Route path="/Add" element={<EditContacts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;