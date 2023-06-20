import { useQuery, gql } from "@apollo/client";
import React from 'react'

export const WithPhotos = (WrappedComponent)=>{
  return ({categoryId})=>{
   // console.log(categoryId)
    const withPhotos = gql`
    query getPhotos($categoryId: ID){ 
      photos(categoryId: $categoryId){
          id
          categoryId
          src
          likes
          userId
          liked
      }
   }
  `;
    const { loading, error, data } = useQuery(withPhotos,{
      variables:{categoryId}
    })
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
  // console.log('aqui',data)

    return <WrappedComponent {...data}/>
  }
}