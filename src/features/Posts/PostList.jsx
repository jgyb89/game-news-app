import React from 'react';
import Posts from './Posts';
import postsData from './postsData';

const PostList = () => {
  return (
    <div className="post-list">
      {postsData.map((post) => (
        <Posts
          key={post.id}
          profile={post.profile}
          title={post.title}
          username={post.username}
          image={post.image}
          description={post.description}
        />
      ))}
    </div>
  );
};

export default PostList;