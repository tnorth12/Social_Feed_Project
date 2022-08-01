import './DisplayPosts.css'


const DisplayPosts = (props) => {
    return (
        <table className='blog'>
                       
            <thead>
            {props.parentEntries.map((entry) => {
                return (
                <thead>
                    <tr>{entry.date}</tr>
                    <tr>{entry.name}</tr>
                    <tr>{entry.comment}</tr>
                </thead>
                );
            })}
            </thead>
      </table>   
      );
}
 
export default DisplayPosts;