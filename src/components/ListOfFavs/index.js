import React from 'react';
import { Grid, Image, Link } from './styles';
import PropType from 'prop-types';

export const ListOfFavs = ({ favs = [] }) => {
  return <Grid>
    {
      favs.map(fav => <Link key={fav.id} to={ `/detail/${fav.id}` }>
        <Image src={fav.src} />
      </Link>)
    }
  </Grid>
}


ListOfFavs.propTypes = {
  favs: PropType.arrayOf(
    PropType.shape({
      id: PropType.string.isRequired,
      src: PropType.string.isRequired
    })
  )
}
