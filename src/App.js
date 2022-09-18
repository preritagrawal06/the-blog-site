import Navbar from './navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './home';
import BlogDetails from './blog-details';
import CreateBlog from './createBlog';


function App() {
  
  return ( 
    <BrowserRouter>
      <div className="container">
        <Navbar/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path='/blog/:id' element={<BlogDetails/>}/>
            <Route path='/create' element={<CreateBlog/>}/>
          </Routes>
        </div>
        
      </div>
    </BrowserRouter>
  )
}

export default App;
