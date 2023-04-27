/* eslint-disable import/unambiguous, import/no-commonjs */

module.exports = {
    rules: {
        'asset-type': '\'link\', \'style\', \'script\'等标签不需要设置默认的\'type\'属性',
        'attr-no-duplication': '标签不允许设置重复的属性名',
        'rule-attr-lowercase': '标签属性使用小写',
        'bool-attribute-value': '标签的布尔值可以省略',
        'button-name': '省略\'button\'标签的\'name\'属性',
        'button-type': '省略\'button\'标签的\'type\'属性',
        'charset': '建议设置\'<meta charset=""\'标签，并且放到\'head\'的第一个子元素',
        'css-in-head': '<link rel="stylesheet"> 或 <style>需要在\'head\'标签中引入',
        'doctype': '需要<!DOCTYPE html>声明，并且默认为 html5',
        'html-lang': '\'html\'标签需要设置\'lang\'属性',
        'id-class-ad-disabled': '\'id\',\'class\'属性值不允许包含\'ad-\'字符串，会被\'adblock\'等软件阻止',
        'ie-edge': '\'http-equiv\'需要设置为\'ID=Edge\', <meta http-equiv="X-UA-Compatible" content="IE=Edge">',
        'img-alt': '\'img\'标签需要设置\'alt\'属性',
        'img-src': '\'img\'标签的\'src\'属性不能为""，会导致额外的请求',
        'img-title': '\'img\'标签不允许设置\'title\'属性',
        'img-width-height': '\'img\'标签建议设置\'width\'和\'height\'属性，可以减少布局计算',
        'indent-char': '设置缩进',
        'lowercase-class-with-hyphen': '\'class\'属性应该设置为使用\'-\'连接的小写字母',
        'lowercase-id-with-hyphen': '\'id\'属性应该设置为使用\'-\'连接的小写字母',
        'nest': '使用正确的标签嵌套规则',
        'rel-stylesheet': '使用\'link\'标签引入css文件需要设置\'rel="stylesheet"\'',
        'script-content': '\'script\'标签需要使用JavaSript语言',
        'script-in-tail': '\'script\'标签需要放到\'body\'标签尾部',
        'self-close': '空标签(img, input等)不可省略结束符\'/\'',
        'spec-char-escape': '特殊字符("<",">")等展示的时候需要进行转义',
        'style-content': '\'style\'标签内容需要为\'css\'语言',
        'style-disabled': '建议不使用\'style\'标签，使用\'link\'标签引入css',
        'tag-pair': '标签需要成对出现',
        'tagname-lowercase': '标签名称需要使用小写字母',
        'title-required': '需要设置\'title\'标签，并且\'title\'标签放置在\'<meta charset=""\'之后',
        'unique-id': '页面中只允许一个\'id\'属性值',
        'no-duplication-id-and-name': '页面中只允许一个\'id\'属性值和\'name\'属性值',
        'viewport': '建议设置\'<meta name="viewport"\'属性',
        'label-for-input': '\'input\'标签需要有关联的\'label\'标签'
    }
};