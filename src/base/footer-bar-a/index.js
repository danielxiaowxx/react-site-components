var React = require('react');
var _ = require('lodash');
var i18n = require('./i18n');

var FooterBarA = React.createClass({

  // ========================== lifecycle ========================== //

  propTypes: {
    // 组件固定入参 - 所有组件都需要提供该属性
    lang: React.PropTypes.oneOf(['en', 'zh_CN']),

    // 组件特定入参 - 不同的组件需要的属性是不同的

    // 事件
  },

  getDefaultProps: function() {
    return {
      // 组件固定入参 - 所有组件都需要提供该属性
      lang: 'en',

      // 组件特定入参 - 不同的组件需要的属性是不同的

      // 事件
    }
  },

  getInitialState: function() {
    return {
      showMore: false
    }
  },

  // ========================== everything-else ========================== //

  handleViewMoreClick: function() {
    this.setState({
      showMore: !this.state.showMore
    });
    console.log(this.state.showMore);
  },

  // ========================== render ========================== //

  render: function() {

    var i18nData = i18n.use(this.props.lang);

    return (
      <footer className="footer-bar-a">
        <div className="footer">
          <div className="footer-nav container">
            <div className="inner">
              <ul>
                <li className="caption">Categories</li>
                <li><a target="_blank" href="http://www.globalmarket.com/products.html">Product Categories</a></li>
                <li><a target="_blank" href="http://www.globalmarket.com/manufacturers.html">Manufacturers Categories</a></li>
                <li><a target="_blank" href="http://www.globalmarket.com/buying-leads.html">Buying Leads</a></li>
                <li><a target="_blank" href="http://www.globalmarket.com/new-products/latest.html">Feature Products</a></li>
                <li><a target="_blank" href="http://www.globalmarket.com/new-manufacturers/latest.html">Feature Manufacturers</a></li>
              </ul>
              <ul>
                <li className="caption">GMC Center</li>
                <li><a target="_blank" href="http://www.globalmarket.com/gmc.html">GMC Center</a></li>
                <li><a target="_blank" href="http://www.globalmarket.com/gmc/introduction.html">GMC Introduction</a></li>
                <li><a target="_blank" href="http://www.globalmarket.com/gmc/standards.html">GMC Benchmarks</a></li>
                <li><a target="_blank" href="http://www.globalmarket.com/gmc/auditing.html">Auditing Process</a></li>
                <li><a target="_blank" href="http://innovation.globalmarket.com/">Innovation China</a></li>
              </ul>
              <ul>
                <li className="caption">Information</li>
                <li><a target="_blank" href="http://www.globalmarket.com/special.html">Promotional Products</a></li>
                <li><a target="_blank" href="http://www.globalmarket.com/sourcingtips.html">Sourcing Tips</a></li>
                <li><a target="_blank" href="http://www.globalmarket.com/exhibition.html">Exhibition Tour</a></li>
                <li><a target="_blank" href="http://www.globalmarket.com/story/index.html">Success Stories</a></li>
                <li><a target="_blank" href="http://companies.globalmarket.com/">Companies Directory</a></li>
              </ul>
              <ul>
                <li className="caption">Service &amp; Tools</li>
                <li><a target="_blank" href="http://order.globalmarket.com" rel="nofollow">GMC Order</a></li>
                <li><a target="_blank" href="http://like.globalmarket.com/" rel="nofollow">GMC Like</a></li>
                <li><a target="_blank" href="http://www.globalmarket.com/buyer/pa.html" rel="nofollow">Product Express</a></li>
                <li><a target="_blank" href="http://www.globalmarket.com/sourcing-service/sourcing-consultants.html" rel="nofollow">SourcingConsultants</a></li>
                <li><a target="_blank" href="http://www.globalmarket.com/sourcing-service/online-meeting.html" rel="nofollow">SourcingService</a>
                </li>
              </ul>
              <ul>
                <li className="caption">About Us</li>
                <li><a target="_blank" href="http://www.globalmarket.com/about/index.html" rel="nofollow">Company Introduction</a></li>
                <li><a target="_blank" href="http://www.globalmarket.com/about/globalpartners.html" rel="nofollow">Global Partners</a></li>
                <li><a target="_blank" href="http://investor.globalmarket.com/" rel="nofollow">Investor Relations</a></li>
                <li><a target="_blank" href="http://www.globalmarket.com/about/presscenter.html" rel="nofollow">Press Center</a></li>
                <li><a target="_blank" href="http://www.globalmarket.com/about/contact.html" rel="nofollow">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div className="link">
            <div className="inner container">
              <div className="section">
                <span>Language Option:</span>
                <a target="_blank" href="http://portuguese.globalmarket.com">Português</a><b>|</b>
                <a target="_blank" href="http://russian.globalmarket.com">Русский</a><b>|</b>
                <a target="_blank" href="http: japanese.globalmarket.com">日本語</a><b>|</b>
                <a target="_blank" href="http://korean.globalmarket.com">한국어</a><b>|</b>
                <a target="_blank" href="http://french.globalmarket.com">Français</a><b>|</b>
                <a target="_blank" href="http://spanish.globalmarket.com">Español</a><b>|</b>
                <a target="_blank" href="http://german.globalmarket.com">Deutsch</a><b>|</b>
                <a target="_blank" href="http://arabic.globalmarket.com">اللغةالعربية</a>
                <div className="side">
                  <a target="_blank" href="http://m.globalmarket.com?desktop=false">Mobile Site</a>
                </div>
              </div>
              <div className="section">
                <a target="_blank" href="http://mail.globalmarket.com/" rel="nofollow">EmailService</a><b>|</b>
                <a target="_blank" href="http://career.globalmarket.com/" rel="nofollow">Career</a><b>|</b>
                <a target="_blank" href="http: www.globalmarket.com hot-products.html">Hot Searches</a><b>|</b>
                <a target="_blank" href="http://www.globalmarket.com/china-manufacturer.html">China Manufacturers</a><b>|</b>
                <a target="_blank" href="http: www.globalmarket.com site-map.html">Site Map</a><b>|</b>
                <a target="_blank" href="http://investor.globalmarket.com/">InvestorRelations</a><b>|</b>
                <a target="_blank" href="http://www.globalmarket.com/nichemarket.html">Nichemarket</a><b>|</b>
                <a target="_blank" href="http://china.globalmarket.com" rel="nofollow">GMC 中国站</a>
                <div className="side">
                  <span>GlobalMarket Group:</span>
                  <a target="_blank" href="http://www.globalmarket.com" rel="nofollow">GlobalMarket.com</a><b>|</b>
                  <a target="_blank" href="http://www.tradeeasy.com">Tradeeasy.com</a><b>|</b>
                  <a target="_blank" href="http: www.b2s.com">B2S.com</a>
                </div>
              </div>
              <div className="section">
                <a target="_blank" href="http://www.globalmarket.com/ppc.html" rel="nofollow">Privacy Policy</a><b>|</b>
                <a target="_blank" href="http://www.globalmarket.com/terms-of-use.html" rel="nofollow">Terms of Use</a><b>|</b>
                <span>
                  <a target="_blank" href="http://www.miitbeian.gov.cn" rel="nofollow">粤ICP备09182444 粤B2-20080111</a>
                </span>
                <div className="side">Copyright © GlobalMarket Group All Rights Reserved <b>|</b>
                  <a rel="nofollow" href="#bottom-tips"
                     onClick={this.handleViewMoreClick} id="btn-toggle-bottom-tips">
                    <span>View More</span>
                    <i/>
                  </a>
                </div>
              </div>
              <div id="bottom-tips">
                {
                  this.state.showMore ? (
                    <div className="inner">Any unauthorized reproduction of any content herein is strictly
                      prohibited.Global Market Group shall not be responsible nor liable for any liability relating to,
                      arising out of or in connection with any defects of products offered or otherwise provided by third
                      party suppliers listed on this website.Any unauthorized reproduction of any content herein is strictly
                      prohibited.
                    </div>
                  ) : ''
                }
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }

});

module.exports = FooterBarA;
