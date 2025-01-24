'use client'
import { redirect, useParams} from "next/navigation";
import { useEffect, useState } from "react";

const BlogDetails = () => {
    const {id} = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setPost(data);
        })
    }, [id])

    const handleGoHome = () => {
        redirect('/');
    }

    if (!post) {
        return <div className="p-10">Loading...</div>;
    }
    return (
        <div className="p-10">
            <h1 className="text-3xl font-semibold mb-4">{post.title}</h1>
            <p>{post.body}</p>
            <button onClick={handleGoHome} className="bg-sky-700 text-white py-1 px-3 mt-5">Go Back to Home</button>
        </div>
    );
};

export default BlogDetails;