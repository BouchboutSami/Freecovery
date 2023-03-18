import { React, useState } from "react";
import SinglePost from "./SinglePost";

const Posts = () => {
  const [nbPosts, setnbPosts] = useState(1);
  return (
    <div className="w-3/5 flex flex-col items-center gap-10">
      <h2 className="text-5xl font-SofiaBold border-b-4 pb-1 border-yellowIWD">
        Posts
      </h2>
      <SinglePost />
      <SinglePost />
      <SinglePost />
      <button className="text-yellowIWD text-2xl underline">
        See more posts
      </button>
    </div>
  );
};

export default Posts;
