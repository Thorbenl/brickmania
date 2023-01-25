import './App.css'
import {DataTable} from "./components/DataTable";
import {Routes as Switch, Route, BrowserRouter} from 'react-router-dom';
import {HistoryTable} from "./components/HistoryTable";
import {ReactQueryProvider} from "./providers/ReactQueryProvider";


function App() {
  return (
    <div className="App">
      <ReactQueryProvider>
        <DataTable/>
      </ReactQueryProvider>
    </div>
  )
}

export default App
