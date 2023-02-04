import React from 'react'

function Row({ item }) {
  return (
    <tr>
    <td>{item.id}</td>
    <td>{item.first_name}</td>
    <td>{item.last_name}</td>
    <td>{item.email}</td>
    <td>{item.phone}</td>
  </tr>
  )
}

export default Row