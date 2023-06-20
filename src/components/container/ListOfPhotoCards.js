import React from 'react'
import { WithPhotos } from "../hoc/withPhotos"
import { ListOfPhotoCardsComponent } from "../ListOfPhotoCards"

export const ListOfPhotoCards = WithPhotos(ListOfPhotoCardsComponent)
