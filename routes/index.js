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

// crawl.testone(224831, 'attach');

// crawl.getCSVSeperated(5, 10, 'attach');
// crawl.getImgs('attach_3_7.csv', 'attach');
// crawl.failedImgDown('attach');


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

module.exports = router;
