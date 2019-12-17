var express = require('express')
var upload = require('./multer/multer.js')
var db = require('./api/mysql.js')
var router = express.Router()
var path = require('path')

function normalErrBack(error) {
	if(error){
		console.log(error)
		var resObj = {
			message: 'faild',
			status: 1,
			from: '',
			data: {
				error
			}
		}
		res.json(resObj)
		return
	}
}
//原画壁纸列表
router.get('/api/allDraw',function (req, res) {
	var page = parseInt(req.query.page) || 1
	,size = parseInt(req.query.size) || 4
	,offset = 0
	if( page == 1) {
		size = 14
		offset = 0
	} else {
		size = parseInt(req.query.size) || 4
		offset = (page - 1)* size + 10
	}
	var sql = `select * from draw_list limit ${offset}, ${size};`
	db.query(sql,function(error, results, fields){
		normalErrBack(error)
		var resObj = {
			message: 'success',
			status: 0,
			from: '',
			data: {
				page,
				size,
				msg:results
			}
		}
		res.json(resObj)
	})
})
// 视频壁纸列表
router.get('/api/allVideo',function (req, res) {
	var page = parseInt(req.query.page) || 1
	,size = parseInt(req.query.size) || 4
	,offset = 0
	if( page == 1) {
		size = 14
		offset = 0
	} else {
		size = parseInt(req.query.size) || 4
		offset = (page - 1)* size + 10
	}
	var sql = `select * from video_list limit ${offset}, ${size};`
	db.query(sql,function(error, results, fields){
		normalErrBack(error)
		var resObj = {
			message: 'success',
			status: 0,
			from: '',
			data: {
				page,
				size,
				msg:results
			}
		}
		res.json(resObj)
	})
})
//动漫列表
router.get('/api/allAnimation',function (req, res) {
	var page = parseInt(req.query.page) || 1
	,size = parseInt(req.query.size) || 3
	,offset = 0
	if( page == 1) {
		size = 9
		offset = 0
	} else {
		size = parseInt(req.query.size) || 3
		offset = (page - 1)* size + 6
	}
	var sql = `select * from animation_list limit ${offset}, ${size};`
	db.query(sql,function(error, results, fields){
		normalErrBack(error)
		var resObj = {
			message: 'success',
			status: 0,
			from: '',
			data: {
				page,
				size,
				msg:results
			}
		}
		res.json(resObj)
	})
})
module.exports = router
