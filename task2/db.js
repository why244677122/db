/**
 * Created by dllo on 17/8/8.
 */

var cheerio = require('cheerio');
var request = require('request');
var download = require('./download');


var options = {
    url: 'https://www.douban.com/',
    headers: {
        'Host': 'www.douban.com',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36'
    }
};


request.get(options, function (error, response, body) {
    var $ = cheerio.load(body);




    //上面4个图片
    var a = [];
    $(".mod .albums .pic>a>img ").each(function (index,element) {
        var b = {
            src:$(element).attr('data-origin'),
            text:index
        };
        a.push(b)
    });

    //文字
    $(".mod .albums ul li a:nth-child(2)").each(function (index,element) {
        a[index].text = $(element).text()
    });
    $(".mod .albums ul li .num").each(function (index,element) {
        a[index].text += $(element).text()
    });
    console.log(a)



});