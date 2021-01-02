import React from 'react'
import './Blog.css';

const Blog = (props) => {
    return <div className="blog-wrap">
        <img src="https://placeimg.com/640/480/nature" alt=""/>
        <p><h2>{props.Tanggal}</h2></p>
        <p><b>{props.Judul}</b></p>
        <p><b>{props.Penulis}</b></p>
    </div>
}

export default Blog;