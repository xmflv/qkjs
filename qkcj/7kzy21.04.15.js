;
var dcys = {
    
     'bizh': {
        'head': '官方直链',
        'tips': '<font color="red">采集全部资源请把独立资源播放器配置了</font>',
        'rows': [ {
            'name': '全部资源',
            'rema': '直链',
            'apis': 'https://zy.7kjx.com/api.xml',
            'tips': '<span class="layui-badge layui-bg-green">国内节点</span>',
            
        }]
    },
	    'bigs': {
        'head': '独立资源',
        'tips': '请先点播放配置',
        'rows': [{
            'flag': 'qq',
            'name': '腾讯视频',
            'rema': '直链',
            'apis': 'https://zy.7kjx.com/qkqq.xml',
            'tips': '<span class="layui-badge layui-bg-green">国内节点</span>',
            'coll': '腾腾视频,qkqq,999999,1'
        }, {
            'flag': 'youku',
            'name': '优酷视频',
            'rema': '直链',
            'apis': 'https://zy.7kjx.com/qkyk.xml',
            'tips': '<span class="layui-badge layui-bg-green">国内节点</span>',
            'coll': '酷酷视频,qkyk,99998,1'
        }, {
            'flag': 'qiyi',
            'name': '奇艺视频',
            'rema': '直链',
            'apis': 'https://zy.7kjx.com/qkqy.xml',
            'tips': '<span class="layui-badge layui-bg-green">国内节点</span>',
            'coll': '奇奇视频,7Kqy,99997,1'
        }, {
            'flag': 'mgtv',
            'name': '芒果视频',
            'rema': '直链',
            'apis': 'https://zy.7kjx.com/qkmg.xml',
            'tips': '<span class="layui-badge layui-bg-green">国内节点</span>',
            'coll': '果果视频,qkmg,99996,1'
        }]
    },
    'm3u8': {
        'head': '切片资源专区',
        'tips': '<span style="font-size:6px;"><font color="red" class="dplayer">推荐采集本专区，全部m3u8直链地址，自建播放器可避免第三方解析接口加载广告或者流量劫持</font></span>',
        'rows': [
        {
            'flag': 'mahua',
            'name': '麻花资源网',
            'rema': 'M3U8',
            'apis': 'https://www.mhapi123.com/inc/api.php',
            'tips': '<span class="layui-badge layui-bg-green">国外节点</span>',
            'coll': '麻花云播,mahuam3u8,99986,1'
        }]
    },
     'news': {
        'head': '影视资讯专区',
        'tips': '影视新闻、明星八卦、文章等资讯',
        'rows': [{
            'flag': '7K',
            'name': '7K资源网',
            'rema': '影视资讯',
            'apis': 'https://zy.7kjx.com/zx.json',
            'tips': '<span class="layui-badge layui-bg-green">国内节点</span>',
            'coll': '最新资源采集插件,mkm3u8,99991,1'
        }]
    },
  'star': {
        'head': '明星资源专区',
        'tips': '<font color="red">采集前，先在系统，采集参数配置，演员采集设置，数据状态设置为“已审”</font>',
        'rows': [{
            'flag': '7k',
            'name': '7K资源',
            'rema': '明星资料库',
            'apis': 'https://zy.7kjx.com/mx.json',
            'tips': '<span class="layui-badge layui-bg-green">国内节点</span>',
            'coll': '最新资源采集插件,mkm3u8,99990,1'
        }]
    },
};
document.write('<script type="text/javascript" src="//js.users.51.la/21111301.js"></script>');