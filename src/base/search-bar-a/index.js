var React = require('react');
var _ = require('lodash');
var i18n = require('./i18n');

var SearchBarA = React.createClass({

  // ========================== lifecycle ========================== //

  propTypes: {
    // 组件固定入参 - 所有组件都需要提供该属性
    lang: React.PropTypes.oneOf(['en', 'zh_CN']),

    // 组件特定入参 - 不同的组件需要的属性是不同的
    homeUrl: React.PropTypes.string,
    cartUrl: React.PropTypes.string,
    logoUrl: React.PropTypes.string,
    cartNumber: React.PropTypes.number

    // 事件
  },

  getDefaultProps: function() {
    return {
      // 组件固定入参 - 所有组件都需要提供该属性
      lang: 'en',

      // 组件特定入参 - 不同的组件需要的属性是不同的
      homeUrl: 'http://www.globalmarket.com',
      cartUrl: 'http://www.globalmarket.com/gmportal/order/trade/cart.gm',
      logoUrl: 'http://order.globalmarket.com/buyer/assets/images/gmorder-logo.png',
      cartNumber: 1

      // 事件
    }
  },

  // ========================== everything-else ========================== //


  // ========================== render ========================== //

  render: function() {

    var i18nData = i18n.use(this.props.lang);

    return (
      <div className="search-bar-a">
        <header className="header-bar-wrapper container">
          <div className="header-bar-content">
            <a href={this.props.homeUrl} className="header-bar-logo">
              <img src={this.props.logoUrl}/>
            </a>
            <form className="header-bar-search-wrapper">
              <div>
                <input type="text" className="header-search"
                       placeholder={i18nData.shoppingFor} />
                <input type="submit" className="header-submit"
                       value="" />
              </div>
            </form>
            <div className="header-bar-shopping-cart-wrapper">
              <a className="header-bar-shopping-cart" href={this.props.cartUrl}>
                <b className="data-cart-count">{this.props.cartNumber}</b>
                {i18nData.cart}
              </a>
            </div>
          </div>
        </header>
      </div>
    );
  }

});

module.exports = SearchBarA;
