import {db} from './firebase-config';
import { addDoc, collection } from 'firebase/firestore';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const CreateBlog = () => {

    const blogCollectionRef = collection(db, 'blogs');
    const [newTitle, setNewTitle] = useState('');
    const [newAuthor, setNewAuthor] = useState('');
    const [newBlog, setNewBlog] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e)=>{
        e.preventDefault();
        await addDoc(blogCollectionRef, {title: newTitle, author: newAuthor, body: newBlog}) 
        navigate('/');
    }

    return ( 
        <form className="createBlog" onSubmit={handleSubmit}>
            <label>Title...</label>
            <input required type="text" placeholder="Enter Title...." onChange={(e)=>{setNewTitle(e.target.value)}}/>
            <label>Author...</label>
            <input required type="text" placeholder="Enter Author..." onChange={(e)=>{setNewAuthor(e.target.value)}}/>
            <label>Blog...</label>
            <textarea required placeholder="Write your thoughts..." onChange={(e)=>{setNewBlog(e.target.value)}}></textarea>
            <button>Submit</button>
            
        </form>
     );
}
 
export default CreateBlog;