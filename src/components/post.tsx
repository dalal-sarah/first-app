import React from 'react'
import styled from 'styled-components';

const PostBody = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-bottom: 1.5%;
  margin-top: 1.5%;
`
const PostC = styled(PostBody)`
  box-shadow: 0 0 3px rgb(12, 8, 192);
  border-radius: 5px;
  width: 50%;
`
const PostTitle = styled.h2`
  display: flex;
  width: 100%;
  color: blue;
  flex-direction: column;
 box-shadow:0px 0.5px 1px rgb(12, 8, 192);
  margin: 0 auto;
`
export type IPost = {
  id: number;
  title: string;
  body: string;
}
export type PostProps = {
  post: IPost;
  // getPostById: (e: any, id: number) => IPost;
}
export const Post: React.FC<PostProps> = (props : PostProps) => {
  return (
    <PostC key={props.post.id}
      // onClick={(e) => { props.getPostById(e, props.post.id) }}
    >
        <PostTitle>{props.post.title}</PostTitle>
        <PostBody> {props.post.body}</PostBody>
      </PostC>
  )
}