var i18nData = {
  zh_CN: {
    shoppingFor: "我想买...",
    cart: '购物车'
  },
  en: {
    shoppingFor: "I'm shopping for...",
    cart: 'Cart'
  }
};

var use = function(lang) {
  switch (lang) {
    case 'en':
    case 'en_US':
      return i18nData.en;
      break;
    case 'zh_CN':
      return i18nData.zh_CN;
    default:
      return i18nData.en;
      break;
  }
};

module.exports = {
  use: use
};
