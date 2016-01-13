/**
 * Created by danielxiao on 15/12/31.
 */

var React = require('react');
var _ = require('lodash');
var i18n = require('./i18n');

var PromotionProductCardA = React.createClass({

  // ========================== lifecycle ========================== //

  propTypes: {
    // 组件固定入参 - 所有组件都需要提供该属性
    lang: React.PropTypes.oneOf(['en', 'zh_CN']),

    // 组件特定入参 - 不同的组件需要的属性是不同的
    productId          : React.PropTypes.number,
    productName        : React.PropTypes.string,
    productUrl         : React.PropTypes.string,
    productImg         : React.PropTypes.string,
    beforeDiscountPrice: React.PropTypes.number,
    afterDiscountPrice : React.PropTypes.number,
    moq                : React.PropTypes.number,
    unit               : React.PropTypes.string,
    sellingPoints      : React.PropTypes.array,
    currency           : React.PropTypes.oneOf(['USD', 'CNY']),

    // 事件
  },

  getDefaultProps: function() {
    return {
      // 组件固定入参 - 所有组件都需要提供该属性
      lang: 'en',

      // 组件特定入参 - 不同的组件需要的属性是不同的
      productId          : 0,
      productName        : '',
      productUrl         : '',
      productImg         : '',
      beforeDiscountPrice: 0,
      afterDiscountPrice : 0,
      moq                : 0,
      unit               : '',
      sellingPoints      : [],
      currency           : 'USD',

      // 事件
    }
  },

  // ========================== everything-else ========================== //

  // ========================== render ========================== //

  render: function() {

    var i18nData = i18n.use(this.props.lang);

    var currencySymbol;
    switch (this.props.currency) {
      case 'USD':
        currencySymbol = 'US $';
        break;
      case 'CNY':
        currencySymbol = 'CNY ￥'
    }

    return (
      <div className="product-card-a thumbnail">
        <i className="lot-saling">50%
          <small>OFF</small>
        </i>
        <a target="_blank" href={this.props.productUrl}>
          <img src={this.props.productImg} alt={this.props.productName}/>
        </a>
        <div className="caption">
          {/* 商品名称 */}
          <p className="product-name">
            <a target="_blank" href={this.props.productUrl}>{this.props.productName}</a>
          </p>

          {/* 商品折后价 */}
          <p><strong className="text-danger">{currencySymbol}{this.props.afterDiscountPrice}</strong>
            / {this.props.unit}</p>

          {/* 商品折前价 */}
          <p className="del"><span>{currencySymbol}{this.props.beforeDiscountPrice}</span> / {this.props.unit}</p>

          {/* 商品MOQ */}
          <p>{i18nData.moq}: {this.props.moq}</p>

          {/* 商品卖点 */}
          <span>
            {
              this.props.sellingPoints.map(function(item) {
                return <p key={item} title={item}>* {item}</p>
              })
            }
          </span>

          <br/>

          <p>
            <a href={this.props.productUrl} target="_blank"
               className="btn btn-danger btn-block btn-sm">
              {i18nData.buyNow}
            </a>
          </p>
        </div>
      </div>
    );
  }

});

module.exports = PromotionProductCardA;
