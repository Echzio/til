import { render } from 'react-dom';
import App from '@/app';
import './style.css';

const Root: React.FunctionComponent = () => (
  <>
    <h1>root component</h1>
    <App />
  </>
);

render(<Root />, document.getElementById('app'));
