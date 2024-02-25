import { Helmet } from 'react-helmet';
import { StyledContainer } from './CatalogPage.styled';
import FilterMenu from 'components/FilterMenu/FilterMenu';
import { CarsList } from 'components/CarsList/CarsList';
import { LoadMoreBtn } from 'components/LoadMoreBtn/LoadMoreBtn';
import { useSelector } from 'react-redux';
import { selectFavorites } from '../redux/selectors';
import { EmptyFavorites } from 'components/EmptyFavorites/EmptyFavorites';

export default function FavoritePage() {
  const favorites = useSelector(selectFavorites);
  const shouldRenderLoadMoreBtn =
    favorites.length % 12 !== 0 && favorites.length === 0;

  return (
    <>
      <Helmet>
        <title>Favorite</title>
      </Helmet>
      <StyledContainer>
        <FilterMenu />
        {favorites.length === 0 ? (
          <EmptyFavorites />
        ) : (
          <CarsList cars={favorites} />
        )}
        {shouldRenderLoadMoreBtn && <LoadMoreBtn />}
      </StyledContainer>
    </>
  );
}
