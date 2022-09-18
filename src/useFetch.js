import { useEffect, useState } from "react";
import {db} from './firebase-config';
import {collection, getDocs} from 'firebase/firestore';


const useFetch = ()=>{
    const [blogs, setBlogs] = useState(null);
    const blogCollectionRef = collection(db,'blogs');
    
    useEffect(()=>{
        const getBlogs = async () => {
            const data = await getDocs(blogCollectionRef);
            
            setBlogs(data.docs.map((doc)=>({...doc.data(),id: doc.id})));
        }

        getBlogs();
    }, []);
    return {blogs}
}
export default useFetch;