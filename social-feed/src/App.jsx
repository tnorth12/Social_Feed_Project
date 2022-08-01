
import React, { useState } from 'react';
// import DisplayPosts from './Components/DisplayPosts';
import CreatePost from './Components/CreatePost';
import Post from './Components/Post';
import './app.css';
import LikeButton from './Components/LikeButton';

function App() {

  const [entries, setEntries] = useState([{date: [], name: 'Alec Winston', comment: 'What a wonderful day for coffee!'}])

  function addNewEntry(entry){
    let tempEntries = [...entries, entry];
    setEntries(tempEntries);
  }

  return (
    <div className='container-fluid'>
      <div className='row'>
        <h3 style={{margin: '1em'}}>Social Feed Blog</h3>
        <div className='col-md-6'>
          <div className='border-box'>
          <CreatePost addNewEntry={addNewEntry} />          
          </div>
          <div className='border-box'>      
          <Post parentEntries={entries} />  
            <div classname='LikeButton'>
            <LikeButton parentEntries={entries} />
            </div>
          </div>
          
        </div>        
                          
      </div>
    </div>
  );
}

export default App;