import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectCollectionForPreview } from '../../redux/shop/shop.selectors';
import CollectionPreview from '../collection-preview/collection-preview.component';
import './collections-overview.styles.scss';

const CollectionsOverview = ({ collections }) => {
    const collectionPreviews = collections.map(c => (
    <CollectionPreview key={c.id} {...c} />
  ));
    return (
        <div className="collections-overview">{collectionPreviews} </div>
    )

}
const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);