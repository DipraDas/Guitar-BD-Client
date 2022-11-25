import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Routes/Routes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className='app'>
      <RouterProvider router={router} />
      {/* <ToastContainer /> */}
      <Toaster />
    </div>
  );
}

export default App;
