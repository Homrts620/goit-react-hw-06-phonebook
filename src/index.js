import { App } from 'components/App';
import { store } from 'components/redux/store';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);