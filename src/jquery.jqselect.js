/**
 * jQuery SELECT元素扩展插件
 *
 * @author Macc Liu
 * @copyright (c) 2018 Zeupin.com.
 * @license MIT License (see https://github.com/zeupin/jqselect/blob/master/LICENSE)
 *
 */
(function ($) {

  'use strict';

  /**
   * 插件的主函数
   */
  $.fn.jqselect = function () {
    // 对需要使用就地编辑的元素逐个进行设置
    return this.each(function (idx, ele) {
      console.log(idx, ele);

      // 如果ele没有data-value属性, 则表示不需要做处理
      if (!ele.hasAttribute("data-value")) {
        return;
      };

      // 获取当前的data-value的值
      var v = ele.getAttribute("data-value").toString();

      // 寻找options中对应的option
      $(ele).val(v);
    });
  }

  /**
   * 缺省配置
   */
  $.fn.jqselect.defaults = {
    "setting1": true, // 配置1
    "setting2": 'xxx', // 配置2
  };
})(jQuery);