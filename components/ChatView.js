import React from 'react'

const ChatView = ({result, onFetch}) => {
    console.log(onFetch)
    console.log(result)
    onFetch("dogg")
    console.log(result)
    return (
      <div>
        hello
        { result }
      </div>
    )
}

export default ChatView
