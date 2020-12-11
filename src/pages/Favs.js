import React, { Fragment } from 'react'
import { FavsWithQuery } from '../container/FavsWithQuery'

export const Favs = ({ favs = [] }) => {
  return <Fragment>
    <h1>Favs</h1>
    <FavsWithQuery />
  </Fragment>
}
