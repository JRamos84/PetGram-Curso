import React from 'react'
import { gql, useMutation } from '@apollo/client';


const LIKE_PHOTO = gql`
mutation likePhoto($input: LikePhoto!) {
  likePhoto(input: $input) {
    id,
    liked,
    likes
  }
}
`

const useToggleLikeMutation = () => {
  const [like_photo,{data,loading,error}] = useMutation(LIKE_PHOTO)

return {like_photo, data, loading, error}
}

export default useToggleLikeMutation