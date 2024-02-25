import { EmptyContainer, EmptyTitle } from './EmptyFavorites.styled';

export const EmptyFavorites = () => {
  return (
    <EmptyContainer>
      <EmptyTitle>
        Unfortunately, you haven't added any car to your favorites yet.
      </EmptyTitle>
    </EmptyContainer>
  );
};
