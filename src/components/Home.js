import BlogList from './BlogList';
import useFetch from '../hooks/useFetch';

const Home = () => {
    const {data: blogs, isLoading, errorMessage} = useFetch("http://localhost:8000/blogs");

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
            {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
            {blogs && <BlogList blogs={blogs.filter((blog)=>{
                return blog.author === "mario"
            })}
            title="Mario's Blog"/>}
        </div>
    );
}

export default Home;