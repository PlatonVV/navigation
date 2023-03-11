import React from 'react'

export type PropsType = {
    heading: string
    pages: string
}
export const Content: React.FC<PropsType> = ({heading, pages, ...props}) => {
return (
    <>
        {heading}
        {pages}
    </>
)
}