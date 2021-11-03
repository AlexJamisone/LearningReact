import React from 'react';

import PostListItem from '../post-list-item';
import '../post-list/post-list.css';

const PostList = ({posts}) => {

    const elemets = posts.map((item) => {
        const {id, ...itemProps} = item;

        return (
            <li key={id} className="list-group-item">
                <PostListItem {...itemProps}/>
            </li>
        )
    });

    return (
        <ul className="app-list list-group">
            {elemets}
        </ul>
    )
}

export default PostList;
