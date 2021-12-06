import React from 'react';
import Form from './components/Form';
import JsQuiz from './components/JsQuiz';
import ReactQuiz from './components/ReactQuiz';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/js-quiz" element={<JsQuiz />} />
        <Route path="/react-quiz" element={<ReactQuiz />} />
      </Routes>
    </Router>
  );
}

export default App;
