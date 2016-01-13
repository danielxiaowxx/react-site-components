/**
 * Created by danielxiao on 16/1/12.
 */

var i18nData = {
  zh_CN: {
    buyNow: '立即购买',
    moq: '最小购买量'
  },

  en: {
    buyNow: 'Buy Now',
    moq: 'MOQ'
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
