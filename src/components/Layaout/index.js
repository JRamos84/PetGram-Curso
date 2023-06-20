import React from 'react'

import {Div, Title, Subtitle} from './styles'
import { Helmet } from 'react-helmet'

export const Layaout = ({children, title, subtitle})=>{
    return (
        <>
        <Helmet>
            {title && <title>{title} | Petgram 🐱 </title>}
            {subtitle && <meta name='description' content={subtitle}/>}

        </Helmet>
        <Div>
            {title && <Title>{title}</Title>}
            {subtitle && <Subtitle>{subtitle}</Subtitle>}
            {children}
        </Div>
        </>
    )
}