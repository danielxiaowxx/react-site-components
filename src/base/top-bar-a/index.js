var React = require('react');
var _ = require('lodash');
var i18n = require('./i18n');

var TopBarA = React.createClass({

  // ========================== lifecycle ========================== //

  propTypes: {
    // 组件固定入参 - 所有组件都需要提供该属性
    lang: React.PropTypes.oneOf(['en', 'zh_CN']),

    // 组件特定入参 - 不同的组件需要的属性是不同的
    homeUrl: React.PropTypes.string,
    registerUrl: React.PropTypes.string,
    loginUrl: React.PropTypes.string,
    welcomeMsg: React.PropTypes.string

    // 事件
  },

  getDefaultProps: function() {
    return {
      // 组件固定入参 - 所有组件都需要提供该属性
      lang: 'en',

      // 组件特定入参 - 不同的组件需要的属性是不同的
      homeUrl: 'http://www.globalmarket.com',
      registerUrl: 'http://www.globalmarket.com/register.html?locale=en',
      loginUrl: 'http://www.globalmarket.com/signin.html',
      welcomeMsg: 'Welcome to GlobalMarket.com'

      // 事件
    }
  },

  // ========================== everything-else ========================== //


  // ========================== render ========================== //

  render: function() {

    var i18nData = i18n.use(this.props.lang);

    return (
      <div className="top-bar-a">
        <div className="container">
          <div className="topbar-login">
            <i className="icon-home">
              <a href={this.props.homeUrl}/>
            </i>
            {this.props.welcomeMsg}
            <a href={this.props.registerUrl} target="_blank">[{i18nData.joinFree}]</a>{i18nData.or}
            <a href={this.props.loginUrl} target="_blank"
               className="login">[{i18nData.signIn}]</a>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = TopBarA;
