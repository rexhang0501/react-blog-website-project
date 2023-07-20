import BlogList from './BlogList';
import { useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch';

const Home = () => {
    const {data: blogs, isLoading, errorMessage, setData} = useFetch("http://localhost:8000/blogs");
    const [ marioBlogsPresent, setMarioBlogsPresent ] = useState(true);
    const handleDelete = (id) => {
        setData(blogs.filter((blog)=>{
            return blog.id !== id;
        }));
    };

    useEffect(()=>{
        if(blogs){
            const marioBlogs = blogs.filter((blog)=>{
                return blog.author === "mario";
            });

            if(marioBlogs.length === 0){
                setMarioBlogsPresent(false);
            }
        }
    }, [blogs]);

    //Displaying Component using forEach
    //let element = [];
    //blogs.forEach((blog)=>{
    //    element.push(<h1>{blog.title}</h1>)
    //});

    //Displaying Component using map inside JSX template

    return (
        <div className="home">
            <h1>Homepage</h1>
            <span>{errorMessage}</span>
            {isLoading && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>}
            {marioBlogsPresent && blogs && <BlogList blogs={blogs.filter((blog)=>{
                return blog.author === "mario"
            })}
            title="Mario's Blog"
            handleDelete={handleDelete}/>}
        </div>
    );
}

export default Home;