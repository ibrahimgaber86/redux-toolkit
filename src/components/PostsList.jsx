import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Post from "./Post";
import { getPosts, postActios } from "../redux/features/postSlice";

function UsersList() {
  const posts = useSelector((state) => state.posts.posts);
  const error = useSelector((state) => state.posts.error);
  const loading = useSelector((state) => state.posts.loading);

  return (
    (loading && (
      <h1 style={{ textAlign: "center", color: "red" }}>loading...</h1>
    )) ||
    (error && (
      <h1 style={{ textAlign: "center", color: "red" }}>{error}</h1>
    )) || (
      <Grid
        sx={{ px: 3, paddingTop: 2, paddingBottom: 6 }}
        container
        spacing={3}
      >
        {posts.map((post) => (
          <Grid key={post.id} item xs={12} sm={6} md={4} lg={3}>
            <Post key={post.id} post={post} />
          </Grid>
        ))}
      </Grid>
    )
  );
}

export default UsersList;
