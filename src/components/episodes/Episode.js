import React from 'react'

const getParam = (item, param) => {
  const idObject = item.filter((element) => {
      // console.log(element.name)
      return element.name === param
  })
  return idObject[0].elements[0].text
}

const trimDescription = (text) => {
  const arr = text.replace("<br>", "").split("<br>")
  return arr[0]
}

const Track = (props) => {
  console.log("props! ", props)

  return (
    <div className="card mb-4 shadow-sm">
      <div className="card-body">
        <h5>{getParam(props.episode, "title")}</h5>
        <p>{trimDescription(getParam(props.episode, "description"))}</p>
      </div>
    </div>
  )
}

export default Track