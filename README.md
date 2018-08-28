# jqselect

在前端环节，自动对表单里面的`<select>`的data-value属性和`<option value="..."></option>`进行匹配，显示当前的select对应的值。这样可以避免在后台源码中大量使用判断逻辑，大幅减少后台的低效重复工作量。

## 用法

第1步, 引入jquery和jquery.jqselect.js

```html
<script src="/path/to/jquery.min.js"></script>
<script src="/path/to/jquery.jqselect.js"></script>
```

第2步, 在页面的select标签上设置好`data-value`属性

```html
<select name="foo" class="your_class" data-value="opt3">
  <option value="opt1">选项1</option>
  <option value="opt2">选项2</option>
  <option value="opt3">选项3</option>
  <option value="opt4">选项4</option>
</select>
```

第3步, 在`<script></script>`中调用

```html
<script>
  $(".your_class").jqselect();
</script>
```
