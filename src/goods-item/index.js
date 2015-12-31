/**
 * Created by danielxiao on 15/12/31.
 */

var React = require('react');
var ItemDetail = require('./item-details');
var ItemPhotos = require('./item-photos');

var GoodsItem = React.createClass({
  render: function() {
    return (
      <div>
        <ItemDetail />
        <ItemPhotos />
      </div>
    )
  }
});

module.exports = GoodsItem;
