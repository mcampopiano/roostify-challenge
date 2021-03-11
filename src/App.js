import logo from './logo.svg';
import './App.css';
import { ApplicationViews } from './components/ApplicationViews';
// The App function renders the ApplicationViews component, which determines which components to render
// based on the url
function App() {
  return (
    <ApplicationViews />
  );
}

export default App;
