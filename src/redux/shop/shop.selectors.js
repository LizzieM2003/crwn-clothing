import { createSelector } from 'reselect';



const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

// manipulate object in reducer into array of objects
export const selectCollectionForPreview = createSelector(
  [selectShopCollections],
  collections => Object.values(collections)
)

export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectShopCollections],
    collections => collections[collectionUrlParam]
      
  );
