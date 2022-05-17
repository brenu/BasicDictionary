import logo from './logo.svg';
import './App.css';
import AppRoutes from './routes';

function App() {
  return (
    <div className="container">
      <div className="background-image"></div>
      <div className="content">
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;
