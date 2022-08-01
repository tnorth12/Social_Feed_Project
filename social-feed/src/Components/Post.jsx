import React, { useState, useEffect } from 'react';
import { Chart } from "react-google-charts";
import './Post.css'


const Post = (props) => {

    const [post, setPost] = useState([]);

    useEffect(() => {
        let tempPost = props.parentEntries.map(entry => {
            return [entry.date, entry.name, entry.comment];


        });
        setPost(tempPost);       

    }, [props.parentEntries])
    console.log(props.parentEntries);
    return ( 
        <Chart
        chartType="Table"
        data={[["Date", "Name", "Comment"], ...post]}
        width="100%"
        height="400px"
        options={{legend: {position: 'bottom'}}}
        legendToggle
      /> 
     );
}
 
export default Post;