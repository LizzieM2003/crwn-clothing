import React, { Component } from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import { SHOP_DATA } from '../../data/shop.data';
import './shop.styles.scss';

class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    const { collections } = this.state;
    const collectionPreviews = collections.map(c => (
      <CollectionPreview key={c.id} {...c} />
    ));
    return (
      <div className="shop-page">
        <h1>Collections</h1>
        {collectionPreviews}
      </div>
    );
  }
}

export default ShopPage;
