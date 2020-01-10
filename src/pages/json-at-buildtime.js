import React from "react"
import JSONData from "../../data/commitments.json"

const JSONbuildtime = () => (
  <div style={{ maxWidth: `960px`, margin: `1.45rem` }}>
    <h1>Hello World from JSON at buildtime</h1>
    <h1>{JSONData.title}</h1>
    <ul>
      {JSONData.commitments.map((data, index) => {
        return <li key={`content_item_${index}`}>{data.commitment}</li>
      })}
    </ul>
  </div>
)
export default JSONbuildtime
