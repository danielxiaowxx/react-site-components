/**
 * Created by danielxiao on 15/12/31.
 */

var React = require('react');
var ProductCard1 = require('./product-card-1');

var Promotion = React.createClass({
  render: function() {
    return (
      <div className="promotion">
        <ProductCard1 />
      </div>
    )
  }
});

module.exports = Promotion;
