'use client'
import { useParams } from "next/navigation";
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
    return (
        <div className="p-10">
            <h1 className="text-3xl font-semibold mb-4">{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
};

export default BlogDetails;