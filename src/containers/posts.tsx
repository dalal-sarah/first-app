import React from 'react'
import {  useQuery } from 'react-query';
import styled from 'styled-components';
import { getPosts } from "../services/axios"
import { Post } from '../components/post';
import { IPost } from "../components/post";
import { Loading } from "../components/loading"


export const Posts: React.FC<{}> = () => {
  const { data, isLoading, error } = useQuery<IPost[]>("posts", getPosts)
  
  const Div = styled.div`
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
`;

  return (
    <div>
      {
        error ? <Div> error </Div> :
          isLoading ? <Loading /> :
            <Div>
              {data?.map((post: IPost) => <Post post={post} />)}
            </Div>
      }
    </div>
  )
  
}