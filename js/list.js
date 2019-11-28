//同人社区列表页
var comm = {
    commNav: function () {
        var navLi = $('.comm-nav>li')
        var contLi = $('.content-coll>li')
        var num = comm.GetQueryString('type') || 0;
        navLi.eq(num).addClass('active').siblings().removeClass('active')
        contLi.eq(num).addClass('active').siblings().removeClass('active')
        //url的type无内容时给弹窗
        if (contLi.eq(num).length === 0) {
            comm.TGDialogS('dialog')
            navLi.eq(0).addClass('active').siblings().removeClass('active')
            contLi.eq(0).addClass('active').siblings().removeClass('active')
            num = 0
        }
        //点击时逻辑
        navLi.each(function (index) {
            $(this).on('click', function () {
                $(this).addClass('active').siblings().removeClass('active')
                contLi.eq(index).addClass('active').siblings().removeClass('active')
                if (contLi.eq(index).length === 0) {
                    comm.TGDialogS('dialog')
                    navLi.eq(num).addClass('active').siblings().removeClass('active')
                } else {
                    num = index
                }
                //调用瀑布流函数，对每一项进行定位
                comm.warterfall("draw-ul", "item");
                comm.warterfall("cos-ul", "item2");
            })
        })
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
    // 最新最热切换
    tabHotNew: function () {
        var btnNew = $('.newest')
        var btnHot = $('.hottest')
        btnNew.on('click', function () {
            $(this).children('span').addClass('active')
            btnHot.children('span').removeClass('active')
        })
        btnHot.on('click', function () {
            $(this).children('span').addClass('active')
            btnNew.children('span').removeClass('active')
        })
    },
    warterfall: function (parent, box) { //瀑布流函数,该函数将图片定位到上一行高度最小图片下方,接数据,更新dom后,重新执行该函数
        //参数分别是父容器和item容器
        var oParent = document.getElementById(parent);
        var oBoxs = comm.getByClass(oParent, box);
        // var oBoxW = oBoxs[0].offsetWidth;
        var oBoxW = oBoxs[0].offsetWidth || 300;
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
                var index = comm.getMinhIndex(hArr, minH);
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
    //点赞
    clickGood: function () {
        var isclick = false
        //4个列表中的点赞类名都为good
        $('.good').on('click', function () {
            if (isclick) {
                $(this).children('a').addClass('heart-k').removeClass('heart-s')
                isclick = !isclick
            } else {
                $(this).children('a').addClass('heart-s').removeClass('heart-k')
                isclick = !isclick
            }
        })
    },
    drawLoadMore: function () {
        var drawData = [{
                imgurl: 'images/pic1.png',
                title: '童话系列扉页之夜莺与玫瑰',
                author: '白泽',
                num: '987',
                alt: '原画/壁纸'
            },
            {
                imgurl: 'images/pic2.png',
                title: '童话系列扉页之夜莺与玫瑰',
                author: '白泽',
                num: '986',
                alt: '原画/壁纸'
            },
            {
                imgurl: 'images/pic1.png',
                title: '童话系列扉页之夜莺与玫瑰',
                author: '白泽',
                num: '985',
                alt: '原画/壁纸'
            },
            {
                imgurl: 'images/pic2.png',
                title: '童话系列扉页之夜莺与玫瑰',
                author: '白泽',
                num: '984',
                alt: '原画/壁纸'
            }
        ]
        var oParent = $('#draw-ul');
        for (var i = 0; i < drawData.length; i++) {
            var tpl = "<li class='item' style='display:none'>" +
                "<div class='box-item'>" +
                "<a href='colleaguedetails.shtml?type=0' target='_blank'" +
                "onclick='PTTSendClick('link','draw" + i + "','" + drawData[i].alt + "');'>" +
                "<img src=" + drawData[i].imgurl + " alt='绘画' width='268' height='auto'>" +
                "</a>" +
                "<p class='title'>" + drawData[i].title + "</p>" +
                "<p class='author'>" + drawData[i].author + "</p>" +
                "<p class='good'><a href='javascript:;'" +
                "onclick='PTTSendClick('btn','drawheart" + i + "','点赞')'" +
                " class='heart-k'>点赞</a>" + drawData[i].num +
                "</p>" +
                "</div>" +
                "</li>"
            oParent.append(tpl)
        }
    },
    audioLoadMore: function () {
        var audioData = [{
                link: 'colleaguedetails.shtml?type=2',
                imgurl: 'images/video-pic1.png',
                title: '视频简介视频简介',
                num: '256'
            },
            {
                link: 'colleaguedetails.shtml?type=2',
                imgurl: 'images/video-pic1.png',
                title: '视频简介视频简介',
                num: '257'
            },
            {
                link: 'colleaguedetails.shtml?type=2',
                imgurl: 'images/video-pic1.png',
                title: '视频简介视频简介',
                num: '258'
            },
        ]
        var oParent = $('.box-audio ul');
        for (var i = 0; i < audioData.length; i++) {
            var tpl = ' <li class="item-audio" style="display:none"> '+
            ' <a href="'+ audioData[i].link +'" target="_blank" class="box-img" '+
            ' onclick="PTTSendClick("link","audio'+ i +'","动漫");"> '+
            ' <img src="'+ audioData[i].imgurl +'" alt="动漫" width="349px" '+
            ' height="198px;"> '+
            ' </a> '+
            ' <p class="introduce">' + audioData[i].title + '</p> '+
            ' <p class="good"><a href="javascript:;" '+
            ' onclick="PTTSendClick("link","audioheart' + i + '","点赞");" class="heart-k">点赞</a>'+ audioData[i].num+' '+
            ' </p> '+
            ' </li>'
            oParent.append(tpl)
        }
    },
    cosLoadMore: function () {
        var cosData = [{
                imgurl: 'images/pic1.png',
                title: '童话系列扉页之夜莺与玫瑰',
                author: '白泽',
                num: '987',
                alt: '视频/壁纸'
            },
            {
                imgurl: 'images/pic2.png',
                title: '童话系列扉页之夜莺与玫瑰',
                author: '白泽',
                num: '986',
                alt: '视频/壁纸'
            },
            {
                imgurl: 'images/pic1.png',
                title: '童话系列扉页之夜莺与玫瑰',
                author: '白泽',
                num: '985',
                alt: '视频/壁纸'
            },
            {
                imgurl: 'images/pic2.png',
                title: '童话系列扉页之夜莺与玫瑰',
                author: '白泽',
                num: '984',
                alt: '视频/壁纸'
            }
        ]
        var oParent = $('#cos-ul');
        for (var i = 0; i < cosData.length; i++) {
            var tpl = "<li class='item2' style='display:none'>" +
                "<div class='box-item'>" +
                "<a href='colleaguedetails.shtml?type=0' target='_blank'" +
                "onclick='PTTSendClick('link','draw" + i + "','" + cosData[i].alt + "');'>" +
                "<img src=" + cosData[i].imgurl + " alt='绘画' width='268' height='auto'>" +
                "</a>" +
                "<p class='title'>" + cosData[i].title + "</p>" +
                "<p class='author'>" + cosData[i].author + "</p>" +
                "<p class='good'><a href='javascript:;'" +
                "onclick='PTTSendClick('btn','drawheart" + i + "','点赞')'" +
                " class='heart-k'>点赞</a>" + cosData[i].num +
                "</p>" +
                "</div>" +
                "</li>"
            oParent.append(tpl)
        }
    },
    init: function () {
        this.commNav()
        this.tabHotNew()
        this.clickGood()
        this.warterfall("draw-ul", "item");
        this.warterfall("cos-ul", "item2");
    }
}
comm.init();

// 原画点击加载更多
$('.box-draw .loading').on('click', function () {
    comm.drawLoadMore()
    //给新的dom添加点赞点击事件
    comm.clickGood()
    //数据更新后调用瀑布流函数对每一项进行布局
    $('.box-draw .item').fadeIn(1000);
    comm.warterfall("draw-ul", "item");
    //每次加载完成后滚动条到底部
    $('.box-draw .force-overflow').stop().animate({
        scrollTop: $('.box-draw .force-overflow')[0].scrollHeight
    }, 1000)
})

//动画加载更多
$('.box-audio .loading').on('click', function () {
    comm.audioLoadMore()
    //给新的dom添加点赞点击事件
    comm.clickGood()
    $('.box-audio .item-audio').fadeIn(1000);
    //每次加载完成后滚动条到底部
    $('.box-audio .force-overflow').stop().animate({
        scrollTop: $('.box-audio .force-overflow')[0].scrollHeight
    }, 1000)
})

//视频壁纸点击加载更多
$('.box-cosplay .loading').on('click', function () {
    //加载数据
    comm.cosLoadMore()
    //给新的dom的点赞添加点击事件
    comm.clickGood()
    //数据更新后调用瀑布流函数对每一项进行布局
    $('.box-cosplay .item2').fadeIn(1000);
    comm.warterfall("cos-ul", "item2");
    //每次加载完成后滚动条到底部
    $('.box-cosplay .force-overflow').stop().animate({
        scrollTop: $('.box-cosplay .force-overflow')[0].scrollHeight
    }, 1000)
})