import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CourseList from './components/courseListComponent';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<CourseList />, document.getElementById('root'));
registerServiceWorker();
