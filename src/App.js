import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Routes>
            {/* key is given in every element because, if not given the news component will render only one once and second time it will  not render bcoz it has been rendered, so just to make each element unique we have put key in each element  */}
            <Route path="/" element={<News pageSize={9} key="general" country='in' category='general' />}></Route>
            <Route path="/business" element={<News pageSize={9} key="business" country='in' category='business' />}></Route>
            <Route path="/science" element={<News pageSize={9} key="science" country='in' category='science' />}></Route>
            <Route path="/sports" element={<News pageSize={9} key="sports" country='in' category='sports' />}></Route>
            <Route path="/entertainment" element={<News pageSize={9} key="entertainment" country='in' category='entertainment' />}></Route>
            <Route path="/health" element={<News pageSize={9} key="health" country='in' category='health' />}></Route>
            <Route path="/technology" element={<News pageSize={9} key="technology" country='in' category='technology' />}></Route>
          </Routes>
        </Router>
      </>
    )
  }
}
