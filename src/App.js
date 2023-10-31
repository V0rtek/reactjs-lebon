import ContactTable from './ContactTable.js';
import SearchBar from './SearchBar.js';
// Checké le tutoriel github du prof.

/**
 * .
 * @return {HTML}
 */
function App() {
  return (
    <div>
      <h1>Filterable React List</h1>
      <SearchBar />
      <ContactTable/>
    </div>
  );
}

export default App;
