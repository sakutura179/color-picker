import React from 'react';
import ReactDOM from 'react-dom';
import 'boxicons';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ColorProvider } from './store';
import GlobalStyle from './Components/GlobalStyle';


ReactDOM.render(
	<React.StrictMode>
		<ColorProvider>
			<GlobalStyle>
				<App />
			</GlobalStyle>
		</ColorProvider>
	</React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
