import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const BlogDetails = () => {
    const {id} = useParams();
    const {data: blog, isLoading, errorMessage, setData} = useFetch("http://localhost:8000/blogs/" + id);

    return(
        <div className="blog-details">
            <h2>Blog Details {id}</h2>
            { isLoading && <div> Loading... </div>}
            { errorMessage && <div> {errorMessage} </div>}
            {blog && 
                <article>
                    <h2> {blog.title} </h2>
                    {blog.body}
                    <p>Written By: {blog.author}</p>
                </article>
            }
        </div>
    );
};

export default BlogDetails;