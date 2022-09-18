import useFetch from './useFetch';
import BlogList from './blogList';

const Home = () => {
    const {blogs} = useFetch();
    
    return ( 
        <div className="home">
            {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
        </div>
     );
}
 
export default Home;