import React, { useState} from 'react';





const CreatePost = (props) => {

    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [date, setDate] = useState('Date')

    function handleSubmit(event){
        event.preventDefault();
        
        const newEntry = {
            name: name,
            comment: comment 
        };
        props.addNewEntry(newEntry);
    }


    return ( 
        <form onSubmit={handleSubmit} className='form-control'>
            <div className='form-group'>
                <label>Date</label>
                <input type='date' className='form-control' value={date} onChange={(event) => setDate(event.target.date)} />
            </div>
            <div className='form-group'>
                <label>Name</label>
                <input type='text' className='form-control' value={name} onChange={(event) => setName(event.target.value)} />
            </div>
            <div className='form-group'>
                <label>Comment</label>
                <input type='text' className='form-control' value={comment} onChange={(event) => setComment (event.target.value)} />
            </div>            
            <button type='submit' className="btn btn-primary" style={{'margin-top': '1em'}}>Post</button>
            



        
        </form>
     );
}
 
export default CreatePost;