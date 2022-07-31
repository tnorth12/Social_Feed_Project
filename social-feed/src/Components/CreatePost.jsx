import React, { useState, useEffect } from 'react';

// import './AddEntryForm.css';

const CreatePost = (props) => {

    const [weight, setWeight] = useState(0);
    const [date, setDate] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newEntry = {
            weight: weight,
            date: date 
        };
        console.log(newEntry);
    }


    return ( 
        <form onSubmit={handleSubmit} className='form-grid'>
            <div className='form-group'>
                <label>Weight</label>
                <input type='number' className='form-control' value={weight} onChange={(event) => setWeight(parseFloat(event.target.value))} />
            </div>
            <div className='form-group'>
                <label>Date</label>
                <input type='date' className='form-control' value={date} onChange={(event) => setDate (event.target.value)} />
            </div>
            <button type='submit' className="btn btn-primary" style={{'margin-top': '1em'}}>Submit</button>


        
        </form>
     );
}
 
export default CreatePost;