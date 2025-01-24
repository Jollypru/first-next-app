'use client'

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
        setPosts(data);
      })
  }, [])
  return (
    <div className="py-5">
      <h1 className="text-4xl text-center font-semibold mb-8">Blog Posts</h1>
      <ul className="px-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        {
          posts.map((post, index) => (
            <li key={post.id} className="hover:underline">
              <Link href={`/blog/${post.id}`}>{index + 1}. {post.title}</Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
}
