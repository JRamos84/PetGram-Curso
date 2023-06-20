import React from 'react'
import { PhotoCardWithQuery } from '../../container/PhotoCardWithQuery'
import { useParams } from 'react-router-dom';
import { Layaout } from '../../Layaout';
export default  () => {
  const { id } = useParams()
  console.log('au',id)

  return (
    <Layaout title={`Fotografía ${id}`}>
    <PhotoCardWithQuery id={id}/>
    </Layaout>

  )
}

