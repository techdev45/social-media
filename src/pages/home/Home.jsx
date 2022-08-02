import React from "react";
import PostSide from "../../components/postSide/PostSide";
import ProfileSide from "../../components/profile/ProfileSide";
import RightSide from "../../components/rightSide/RightSide";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <ProfileSide />
      <PostSide />
      <RightSide />
    </div>
  );
};

export default Home;
