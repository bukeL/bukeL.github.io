 var app = new Vue({
     el: '.wrap-comm',
     data: function () {
         return {
             navName: ['原画/壁纸', '音乐', '动漫', '视频/壁纸', '其他'],
             drawArr: [],
             VideoArr: [],
             animateArr: [],
             page: 1,
             page1: 1,
             page2: 1,
             isDrawLoadBtn: true,
             isVideoLoadBtn: true,
             isAnimateLoadBtn: true,
             url: '//localhost:3000'
         }
     },
     methods: {
         commNav: function () {
             var navLi = $('.comm-nav>li')
             var contLi = $('.content-coll>li')
             var num = this.GetQueryString('type') || 0;
             var that = this
             navLi.eq(num).addClass('active').siblings().removeClass('active')
             contLi.eq(num).addClass('active').siblings().removeClass('active')
             //url的type无内容时给弹窗
             if (contLi.eq(num).length === 0) {
                 this.TGDialogS('dialog')
                 navLi.eq(0).addClass('active').siblings().removeClass('active')
                 contLi.eq(0).addClass('active').siblings().removeClass('active')
                 num = 0
             }
             //点击时逻辑
             navLi.each(function (index) {
                 $(this).on('click', function () {
                     $(this).addClass('active').siblings().removeClass('active')
                     contLi.eq(index).addClass('active').siblings().removeClass(
                         'active')
                     if (contLi.eq(index).length === 0) {
                         that.TGDialogS('dialog')
                         navLi.eq(num).addClass('active').siblings().removeClass(
                             'active')
                     } else {
                         num = index
                     }
                     //调用瀑布流函数，对每一项进行定位
                     that.warterfall("draw-ul", "item");
                     that.warterfall("cos-ul", "item2");
                 })
             })
         },
         warterfall: function (parent, box) { //瀑布流函数,该函数将图片定位到上一行高度最小图片下方,接数据,更新dom后,重新执行该函数
             //参数分别是父容器和item容器
             var oParent = document.getElementById(parent);
             var oBoxs = this.getByClass(oParent, box);
             // var oBoxW = oBoxs[0].offsetWidth;
             var oBoxW = 300;
             // 4列
             var cols = 4;
             //设置mian的宽度
             // oParent.style.cssText = 'width:' + oBoxW * cols + 'px;margin:0 auto';
             var hArr = [];
             for (var i = 0; i < oBoxs.length; i++) {
                 if (i < cols) {
                     // 将前cols张图片的宽度记录到hArr数组中(第一行的高度)
                     hArr.push(oBoxs[i].offsetHeight);
                     // console.log(hArr)
                 } else { //从第二行开始就开始找最小的高度了，决定带插入图片该插入到哪里
                     // 找到高度最小的值
                     var minH = Math.min.apply(null, hArr);
                     var index = this.getMinhIndex(hArr, minH);
                     // 设置最小高度的图片的style为绝对定位，并设置top和left
                     oBoxs[i].style.position = 'absolute';
                     oBoxs[i].style.top = minH + 'px';
                     oBoxs[i].style.left = oBoxW * index + 'px';
                     hArr[index] += oBoxs[i].offsetHeight;
                 }
             }
         },
         //根据class获取元素
         getByClass: function (parent, clsName) {
             var boxArr = []; //用来存储获取到的所有class为box的元素
             var oElements = parent.getElementsByTagName("*");
             for (var i = 0; i < oElements.length; i++) {
                 if (oElements[i].className == clsName) {
                     boxArr.push(oElements[i]);
                 }
             }
             return boxArr;
         },
         //获取Arr数组中最小值的下标值
         getMinhIndex: function (arr, val) {
             for (var i in arr) {
                 if (arr[i] == val) {
                     return i;
                 }
             }
         },
         TGDialogS: function (e) {
             // 利用milo库引入dialog组件
             need("biz.dialog", function (Dialog) {
                 Dialog.show({
                     id: e,
                     bgcolor: '#000', //弹出“遮罩”的颜色，格式为"#FF6600"，可修改，默认为"#fff"
                     opacity: 70 //弹出“遮罩”的透明度，格式为｛10-100｝，可选
                 });
             });
         },
         closeDialog: function () {
             // 利用milo库引入dialog组件
             need("biz.dialog", function (Dialog) {
                 Dialog.hide();
             });
         },
         GetQueryString: function (name) {
             var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
             var r = window.location.search.substr(1).match(reg);
             // console.log(window.location.search)
             if (r != null) return unescape(r[2]);
             return null;
         },
         //点赞
         clickGood: function (el) {
             var isclick = false
             //4个列表中的点赞类名都为good
             $(el).on('click', function () {
                 var goodId = $(this).attr('data-id')
                 if (isclick) {
                     $(this).children('a').addClass('heart-k').removeClass('heart-s')
                     isclick = !isclick
                 } else {
                     $(this).children('a').addClass('heart-s').removeClass('heart-k')
                     isclick = !isclick
                 }
             })
         },
         loadfillDraw: function (page) {
             var that = this
             var url = this.url + '/api/allDraw?page=' + page
             $.ajax({
                 type: "get",
                 async: true,
                 url: url,
                 success: function (result) {
                     if (page == 1) {
                         that.drawArr = result.data.msg
                         //nextTick 获取数据加载完后的dom结构
                     } else {
                         //判断后台返回是否为空
                         if (result.data.msg.length == 0) {
                             that.isDrawLoadBtn = false
                         } else {
                             that.drawArr = that.drawArr.concat(result.data.msg)
                         }
                     }
                     that.$nextTick(function () {
                         this.warterfall("draw-ul", "item")
                         this.clickGood('.item .good')
                     })
                 }
             });
         },
         loadDrawMore: function () {
             this.page++
             this.loadfillDraw(this.page)
             $('.box-draw .force-overflow').stop().animate({
                 scrollTop: $('.box-draw .force-overflow')[0].scrollHeight
             }, 1000)
         },
         loadfillVideo: function (page1) {
             var that = this
             var url = this.url + '/api/allVideo?page=' + page1
             $.ajax({
                 type: "get",
                 async: true,
                 url: url,
                 success: function (result) {
                     if (page1 == 1) {
                         that.VideoArr = result.data.msg
                     } else {
                         //判断后台返回是否为空
                         console.log(result.data.msg)
                         if (result.data.msg.length == 0) {
                             that.isVideoLoadBtn = false
                         } else {
                             that.VideoArr = that.VideoArr.concat(result.data.msg)
                         }
                     }
                     that.$nextTick(function () {
                         this.warterfall("cos-ul", "item2")
                         this.clickGood('.item2 .good')
                     })
                 }
             });
         },
         loadVideoMore: function () {
             this.page1++
             this.loadfillVideo(this.page1)
             $('.box-cosplay .force-overflow').stop().animate({
                 scrollTop: $('.box-cosplay .force-overflow')[0].scrollHeight
             }, 1000)
         },
         loadfillAnimate: function (page2) {
             var that = this
             var url = this.url + '/api/allAnimation?page=' + page2
             $.ajax({
                 type: "get",
                 async: true,
                 url: url,
                 success: function (result) {
                     if (page2 == 1) {
                         that.animateArr = result.data.msg
                     } else {
                         //判断后台返回是否为空
                         console.log(result.data.msg)
                         if (result.data.msg.length == 0) {
                             that.isAnimateLoadBtn = false
                         } else {
                             that.animateArr = that.animateArr.concat(result.data.msg)
                         }
                     }
                     that.$nextTick(function () {
                        this.clickGood('.item-audio .good')
                    })
                 }
             });
         },
         loadAnimateMore: function () {
             this.page2++
             this.loadfillAnimate(this.page2)
             $('.box-audio .force-overflow').stop().animate({
                 scrollTop: $('.box-audio .force-overflow')[0].scrollHeight
             }, 1000)
         }
     },
     mounted: function () {
         this.commNav()
         this.loadfillDraw(this.page)
         this.loadfillVideo(this.page1)
         this.loadfillAnimate(this.page1)
     },
     updated: function () {
         //  this.warterfall("draw-ul", "item")
         //  this.warterfall("cos-ul", "item2")
     }
 })