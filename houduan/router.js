var express = require('express')
var upload = require('./multer/multer.js')
// var json = require('./api/categories.js')
var db = require('./api/mysql.js')
// console.log(json)
var router = express.Router()
var path = require('path')
// console.log(json)
//所有分类

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
router.get('/api/allDraw',function (req, res) {
	var sql = 'select * from draw_list'
	db.query(sql,function(error, results, fields){
		normalErrBack(error)
		var page = parseInt(req.query.page) || 1
		,size = parseInt(req.query.size) || 1
		,total = results.length
		,totalpage = Math.ceil(total/size)
		var resObj = {
			message: 'success',
			status: 0,
			from: '',
			data: {
				page,
				size,
				total,
				totalpage,
				msg:results
			}
		}
		res.json(resObj)
	})
})

module.exports = router
