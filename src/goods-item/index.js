/**
 * Created by danielxiao on 15/12/31.
 */

var React = require('react');
var ItemDetail = require('./details');
var ItemPhotos = require('./photos');

var GoodsItem = React.createClass({
  render: function() {
    return (
      <div className="goods-item">
        <ItemDetail />
        <ItemPhotos />
      </div>
    )
  }
});

module.exports = GoodsItem;
