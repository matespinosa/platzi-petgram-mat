import React from 'react';
import { Anchor, Image } from './styles'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1585251309844-3eec340559ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'

export const Category = ( { cover = DEFAULT_IMAGE, path, emoji = '?' } ) => (
  <Anchor href={path}>
    <Image src={cover} alt=""/>
    {emoji}
  </Anchor>
)
