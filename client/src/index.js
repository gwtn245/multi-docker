import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.listen(3000, err => {
    console.log('Listening');
  });
