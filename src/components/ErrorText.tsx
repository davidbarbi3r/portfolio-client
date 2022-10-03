import React from 'react'

type Props = {
    error: string;
}

function ErrorText({error}: Props) {
    if (error === "") return null
  
    return (
    <span>{error}</span>
  )
}

export default ErrorText