import { useNavigate, useParams } from "react-router-dom";
import {doc, getDoc, deleteDoc} from 'firebase/firestore';
import {db} from './firebase-config';
import { useState } from "react";

const BlogDetails = () => {

    const [blogInfo, setBlogInfo] = useState(null);
    const {id} = useParams();
    const blogDoc = doc(db,'blogs',id);
    const navigate = useNavigate();
    getDoc(blogDoc)
        .then((doc)=>{
            setBlogInfo(doc.data());
        })
    
    return (
        <div className="blog-detail">
            <h2> {blogInfo && blogInfo.title} </h2>
            <h4>Written By: {blogInfo && blogInfo.author}</h4>
            <p>{blogInfo && blogInfo.body}</p>
            <button onClick={async ()=>{
                await deleteDoc(blogDoc);
                navigate('/');
            }}>Delete</button>
        </div>   
     );
}
 
export default BlogDetails;