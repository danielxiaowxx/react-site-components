/**
 * Created by danielxiao on 15/12/31.
 */

var React = require('react');
var ProductCardA = require('./product-card-a');

var Promotion = React.createClass({
  render: function() {
    return (
      <div className="promotion">
        <ProductCardA />
      </div>
    )
  }
});

module.exports = Promotion;
