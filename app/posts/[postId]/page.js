import React from 'react';

const page = async ({ params }) => {
    const res = await fetch(
        `http://jsonplaceholder.typicode.com/posts/${params.postId}`,
        {cache: 'no-store'}
    );
    const data = await res.json();

    return (
        <>
            <div>Seeing post with id {params.postId}</div>
            <div>Post title: {data.title}</div>
        </>
    );
}

export default page;