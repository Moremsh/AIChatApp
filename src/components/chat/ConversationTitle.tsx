import React from 'react'

interface ConversationTitleProp{
  title : string 
}

const ConversationTitle = ({title} : ConversationTitleProp) => {
  return (
    <h1 className='text-lg font-semibold'>
      {title}
    </h1>
  )
}

export default ConversationTitle
