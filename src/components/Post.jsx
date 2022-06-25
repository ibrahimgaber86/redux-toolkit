import React from "react";
import { Card, CardHeader, CardContent, Typography } from "@mui/material";

/*
{
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  */
function Post({ post }) {
  const { title, body } = post;
  return (
    <Card elevation={6}>
      <CardHeader subheader={title} />
      <CardContent>
        <Typography>{body}</Typography>
      </CardContent>
    </Card>
  );
}

export default Post;
