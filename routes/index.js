var express = require('express');
var router = express.Router();
var request = require('request');
var cheerio = require('cheerio');
var Iconv = require('iconv').Iconv;
// EUC-KR -> UTF-8
var iconv = new Iconv('EUC-KR//TRANSLIT//IGNORE', 'UTF-8//TRANSLIT//IGNORE');
var async = require('async');
var utf8 = require('utf8');
var fs = require('fs');
var json2csv = require('json2csv');
var img_down = require('image-downloader');
var url = require('url');
var sortBy = require('sort-by');
var crawl = require('crawlingmodule');


/**
 * 카테고리 리스트
 * 어태치먼트 - attach
 * 굴삭기부속 - gulsak
 * 믹서트럭 - mixertruck
 * 지게차5톤이하 - zigyechar5
 * 지게차6톤이상 - zigyechar6
 */


/*

 229991
 229994
 230013
 230022
 230053
 */

// crawl.onePage(230098, 'attach');
// crawl.getCSVSeperated(1, 6, 'attach');
crawl.getImgs('attach/'+'attach_failed_3_14.csv', 'attach');
var failed =[
    230315,
    230381
];
// crawl.failedImgDown(failed,'attach');


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

module.exports = router;
