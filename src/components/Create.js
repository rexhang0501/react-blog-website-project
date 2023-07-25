import { useState } from "react";
import { useHistory } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("yoshi");
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        setIsLoading(true);
        fetch("http://localhost:8000/blogs/", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            alert("New Blog Added");
            setIsLoading(false);
            history.push("/react-blog-website-project");
        });
    };

    return (
        <div className="create">
            {isLoading && <div>Loading...</div>}

            <h1>Add New Blog</h1>
            <form onSubmit={(e)=>{
                handleSubmit(e);
            }}>
                <label>Blog Title: </label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e)=>{
                        setTitle(e.target.value);
                }}/>
                <label>Blog Body: </label>
                <textarea
                    required
                    value={body}
                    onChange={(e)=>{
                        setBody(e.target.value);
                }}/>
                <label>Authour: </label>
                <select
                    value={author}
                    onChange={(e)=>{
                        setAuthor(e.target.value);
                    }}>
                    <option value="mario">Mario</option>
                    <option value="luigi">Luigi</option>
                    <option value="yoshi">Yoshi</option>
                </select>
                {!isLoading && 
                <button>
                    Add Blog
                </button>}
                {isLoading && 
                <button disabled>
                    Adding Blog...
                </button>}
            </form>
        </div>
    );
};

export default Create;