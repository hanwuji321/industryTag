/*
 * @Author: zqm
 * @Date: 2018-12-12 14:01:06
 * @Last Modified by:   zqm
 * @Last Modified time: 2018-12-12 14:01:06
 */
import React, { Component } from 'react';
import { Radio,Button,message,Checkbox,Input  } from 'antd';
import {_addLableInternetUser,_url,back} from '../api/Api.jsx';
import { Requires } from '../api/NewRequire.jsx';
const RadioGroup = Radio.Group;
const CheckboxGroup = Checkbox.Group;
// 获取url后的参数
  function GetRequest(){
     const url = window.location.href;
     let str = url.split("?")[1]
     let strs = str.split("&")
     let strs1 = strs[0].split("=")[1]
     let strs2 = strs[1].split("=")[1]
     let arr={};
     arr.token = strs1
     arr.source = strs2
     return arr;
  }

const options = [
  { label: 'APP store', value: 's3_1_APPstore' },
  { label: '豌豆荚', value: 's3_2_wandoujia' },
  { label: '腾讯应用宝', value: 's3_3_txyingyongbao' },
  { label: '百度手机助手', value: 's3_4_bdshoujizhushou' },
  { label: '谷歌市场', value: 's3_5_gugeshichang' },
  { label: '360应用平台', value: 's3_6_360yingyongpingtai' },
  { label: '安卓市场', value: 's3_7_anzhuoshichang' },
  { label: '小米应用商店', value: 's3_8_xiaomiyingyongshangdian' },
  { label: '魅族商店', value: 's3_9_meizushangdian' },
  { label: 'OPPO软件商店', value: 's3_10_opporuanjianshangdian' },
  { label: '搜狗手机助手', value: 's3_11_sougoushoujizhushou' },
  { label: 'PP助手安卓商店', value: 's3_12_ppzhushouanzhuoshangdian' },
  { label: '91助手', value: 's3_13_91zhushou' },
  { label: '其他，请注明', value: 's3_other' },
];
const options4 =[
  { label: '百度手机卫士（安卓优化大师）', value: 's4_1_baidudshoujiweishi' },
  { label: '腾讯手机管家', value: 's4_2_tengxunshoujiguanjia' },
  { label: '360手机卫士', value: 's4_3_360shoujiweishi' },
  { label: 'QQ安全中心', value: 's4_4_qqanquanzhongxin' },
  // { label: '我没用过地图安全（手机管家）类手机APP', value: 's4_6_notuse' },
  { label: '其他，请注明', value: 's4_other' },
]
const options5 =[
  { label: '百度地图', value: 's5_1_baidu' },
  { label: '高德地图', value: 's5_2_gaode' },
  { label: '腾讯地图', value: 's5_3_tengxun' },
  { label: '谷歌地图', value: 's5_4_google' },
  { label: '搜狗地图', value: 's5_5_sougou' },
  { label: '凯立德导航', value: 's5_6_kailide' },
  { label: '苹果地图', value: 's5_7_apple' },
  // { label: '我没用过地图导航类手机APP', value: 's5_9_notuse' },
  { label: '其他，请注明', value: 's5_other' },
]
const options6 =[
  { label: 'safari', value: 's6_1_safari' },
  { label: '百度浏览器', value: 's6_2_baidu' },
  { label: 'QQ浏览器', value: 's6_3_qq' },
  { label: 'UC浏览器', value: 's6_4_uc' },
  { label: '360手机浏览器', value: 's6_5_360' },
  { label: '搜狗浏览器', value: 's6_6_sougou' },
  { label: '猎豹浏览器', value: 's6_7_liebao' },
  { label: '其他，请注明', value: 's6_other' },
]
const options7 =[
  { label: '网易新闻', value: 's7_1_wangyixinwen' },
  { label: '搜狐新闻', value: 's7_2_souhuxinwen' },
  { label: '今日头条', value: 's7_3_jinritoutiao' },
  { label: '腾讯新闻', value: 's7_4_tengxunxinwen' },
  { label: '一点资讯', value: 's7_5_yidianzixun' },
  { label: '新浪新闻', value: 's7_6_xinlangxinwen' },
  { label: '凤凰新闻', value: 's7_7_fenghuangxinwen' },
  { label: 'UC头条', value: 's7_8_uctoutiao' },
  { label: '百度新闻', value: 's7_9_baiduxinwen' },
  { label: '央视新闻', value: 's7_10_yangshixinwen' },
  // { label: '我没用过新闻类手机APP', value: 's7_12_notuse' },
  { label: '其他，请注明', value: 's7_other' },
]
const options8 =[
  { label: '华为阅读', value: 's8_1_huaweiyuedu' },
  { label: '京东阅读', value: 's8_2_jingdongyuedu' },
  { label: 'QQ阅读', value: 's8_3_qqyuedu' },
  { label: '书旗小说', value: 's8_4_shuqiyuedu' },
  { label: '掌阅iReader', value: 's8_5_ireader' },
  { label: '咪咕阅读', value: 's8_6_miguyuedu' },
  { label: '多看阅读', value: 's8_7_duokanyuedu' },
  { label: '天翼阅读', value: 's8_8_tianyiyuedu' },
  { label: '宜搜小说', value: 's8_9_yisouxiaoshuo' },
  { label: '畅读', value: 's8_10_changdu' },
  { label: '快读免费小说', value: 's8_11_kuaiduxiaoshuo' },
  { label: '爱阅读', value: 's8_12_aiyuedu' },
  { label: '开卷小说', value: 's8_13_kaijuanxiaoshuo' },
  { label: '网易云阅读', value: 's8_14_wangyiyunyuedu' },
  { label: '微信阅读', value: 's8_15_weixindushu' },
  // { label: '我没用过阅读类手机APP', value: 's8_16_notuse' },
  { label: '其他，请注明', value: 's8_other' },
]
const options9 =[
  { label: '网易云音乐', value: 's9_1_wangyiyun' },
  { label: '酷我音乐', value: 's9_2_kuwo' },
  { label: '酷狗音乐', value: 's9_3_kugou' },
  { label: '百度音乐', value: 's9_4_baidu' },
  { label: '虾米音乐', value: 's9_5_xiami' },
  { label: '豆瓣FM', value: 's9_6_doubanfm' },
  { label: '天天动听', value: 's9_7_tiantiandongting' },
  { label: 'QQ音乐', value: 's9_8_qqyinyue' },
  { label: '苹果音乐', value: 's9_9_apple' },
  // { label: '我没用过音乐类手机APP', value: 's9_11_notuse' },
  { label: '其他，请注明', value: 's9_other' },
]
const options10 =[
  { label: '百度视频', value: 's10_1_baidu' },
  { label: 'PP视频（原PPTv聚力视频）', value: 's10_2_ppshipin' },
  { label: '爱奇艺PPs', value: 's10_3_aiqiyi' },
  { label: '腾讯视频', value: 's10_4_tengxun' },
  { label: '暴风影音', value: 's10_5_baofengyingyin' },
  { label: '搜狐视频', value: 's10_6_souhu' },
  { label: '优酷视频', value: 's10_7_youku' },
  { label: '芒果Tv', value: 's10_8_mangguotv' },
  { label: '土豆', value: 's10_9_tudou' },
  { label: '风行视频', value: 's10_10_fengxin' },
  { label: '乐视视频', value: 's10_12_leshi' },
  // { label: '我没用过视频类手机APP', value: 's10_14_notuse' },
  { label: '其他，请注明', value: 's10_other' },
]
const options11 =[
  { label: '有道词典', value: 's11_1_youdao' },
  { label: '百度翻译', value: 's11_2_baidu' },
  { label: '谷歌翻译', value: 's11_3_google' },
  { label: '欧路词典', value: 's11_4_oulu' },
  { label: '必应词典', value: 's11_5_biying' },
  { label: '金山词霸', value: 's11_6_jinshan' },
  { label: '沪江小D', value: 's11_7_lujiangxiaod' },
  { label: '牛津词典', value: 's11_8_niujin' },
  // { label: '我没用过翻译类手机APP', value: 's11_10_notuses' },
  { label: '其他，请注明', value: 's11_other' },
]
const options12 =[
  { label: '淘宝', value: 's12_1_taobao' },
  { label: '天猫', value: 's12_2_tianmao' },
  { label: '京东', value: 's12_3_jingdong' },
  { label: '一号店', value: 's12_4_yihaodian' },
  { label: '苏宁易购', value: 's12_5_suningyigou' },
  { label: '国美', value: 's12_6_guomei' },
  { label: '亚马逊', value: 's12_7_yamaxun' },
  { label: '咸鱼', value: 's12_8_xianyu' },
  { label: '美丽说', value: 's12_9_meilishuo' },
  { label: '蘑菇街', value: 's12_10_mogujie' },
  { label: '拼多多', value: 's12_11_pinduoduo' },
  { label: '小红书', value: 's12_12_xiaohongshu' },
  { label: '返利网', value: 's12_13_fanliwang' },
  // { label: '我没用过电商类手机APP', value: 's12_15_notuse' },
  { label: '其他，请注明', value: 's12_other' },
]
const options13 =[
  { label: '饿了么', value: 's13_1_eleme' },
  { label: '美团外卖', value: 's13_2_meituan' },
  { label: '百度外卖', value: 's13_3_baidu' },
  { label: '回家吃饭', value: 's13_4_huijiachifan' },
  { label: '口碑外卖', value: 's13_5_koubei' },
  { label: '到家美食会', value: 's13_6_daojiameishihui' },
  { label: '拼豆夜宵', value: 's13_7_pindouyexiao' },
  // { label: '我没用过外卖类手机APP', value: 's13_9_notuse' },
  { label: '其他，请注明', value: 's13_other' },
]
const options14 =[
  { label: '携程', value: 's14_1_xiecheng' },
  { label: '去哪儿', value: 's14_2_quna' },
  { label: '同程旅游', value: 's14_3_tongchenglvyou' },
  { label: '途牛', value: 's14_4_tuniu' },
  { label: '艺龙旅行', value: 's14_5_yilonglvxing' },
  { label: '阿里旅行-去啊', value: 's14_6_alilvxing' },
  { label: '驴妈妈旅游', value: 's14_7_lvmamalvyou' },
  { label: '百度旅行', value: 's14_8_baidulvxing' },
  { label: '穷游', value: 's14_9_qiongyou' },
  { label: '蚂蜂窝', value: 's14_10_mafengwo' },
  { label: '飞猪', value: 's14_11_feizhu' },
  // { label: '我没用过旅行类手机APP', value: 's14_13_notuse' },
  { label: '其他，请注明', value: 's14_other' },
]
const options15 =[
  { label: '铜板街', value: 's15_1_tongbanjie' },
  { label: '蚂蚁金服', value: 's15_2_mayijinfu' },
  { label: '陆金所', value: 's15_3_lujinsuo' },
  { label: '支付宝', value: 's15_4_zhifubao' },
  { label: '同花顺', value: 's15_5_tonghuashum' },
  { label: '大智慧', value: 's15_6_dazhihui' },
  { label: '自选股', value: 's15_7_zixuangu' },
  { label: '东方财经网', value: 's15_8_dongfangcaijing' },
  { label: '雪球', value: 's15_9_xueqiu' },
  { label: '益盟操盘手', value: 's15_10_yimengcaopanshou' },
  { label: '股票雷达', value: 's15_11_gupiaoleida' },
  { label: '公牛炒股票', value: 's15_12_gongniuchaogupiao' },
  { label: '新浪财经', value: 's15_13_xinlangcaijing' },
  { label: '和讯财经', value: 's15_14_hexuncaijing' },
  // { label: '我没用过理财类手机APP', value: 's15_16_notuse' },
  { label: '其他，请注明', value: 's15_other' },
]
const options16 =[
  { label: '摩拜', value: 's16_1_mobai' },
  { label: 'ofo', value: 's16_2_ofo' },
  // { label: '我没用过共享单车类手机APP', value: 's16_4_notuse' },
  { label: '其他，请注明', value: 's16_other' },
]
const options17 =[
  { label: 'QQ', value: 's17_1_qq' },
  { label: '微信', value: 's17_2_weixin' },
  { label: '微博', value: 's17_3_weibo' },
  { label: '陌陌', value: 's17_4_momo' },
  { label: 'YY', value: 's17_5_yy' },
  { label: '易信', value: 's17_6_yixin' },
  { label: '脉脉', value: 's17_7_maimai' },
  { label: '其他，请注明', value: 's17_other' },
]
const options18 =[
  { label: '美团', value: 's18_1_meituan' },
  { label: '大众点评', value: 's18_2_dazhongdianping' },
  { label: '窝窝团', value: 's18_3_wowotuan' },
  { label: '糯米团', value: 's18_4_nuomituan' },
  { label: '拉手网', value: 's18_5_lashuowang' },
  { label: '高朋网', value: 's18_6_gaopengwang' },
  { label: '团800', value: 's18_7_tuan800' },
  { label: '淘打折', value: 's18_8_taodazhe' },
  { label: '聚划算', value: 's18_9_juhuasuan' },
  { label: '百度团购', value: 's18_10_baidutuangou' },
  // { label: '我没用过团购类手机APP', value: 's18_12_notuse' },
  { label: '其他，请注明', value: 's18_other' },
]
class Index extends Component {
    state = {
       s1_phone_numbers:'',//同时使用几部手机
       s1_phone_numbers_code:'',//同时使用几部手机

       s2_phone_os:'',
       s2_phone_os_code:'',

       s3v1:[],
       s3v1s:'none',
       s3v1other:'',
       s4v1:[],
       s4v1s:'none',
       s4v1other:'',
       s5v1:[],
       s5v1s:'none',
       s5v1other:'',
       s6v1:[],
       s6v1s:'none',
       s6v1other:'',
       s7v1:[],
       s7v1s:'none',
       s7v1other:'',
       s8v1:[],
       s8v1s:'none',
       s8v1other:'',
       s9v1:[],
       s9v1s:'none',
       s9v1other:'',
       s10v1:[],
       s10v1s:'none',
       s10v1other:'',
       s11v1:[],
       s11v1s:'none',
       s11v1other:'',
       s12v1:[],
       s12v1s:'none',
       s12v1other:'',
       s13v1:[],
       s13v1s:'none',
       s13v1other:'',
       s14v1:[],
       s14v1s:'none',
       s14v1other:'',
       s15v1:[],
       s15v1s:'none',
       s15v1other:'',
       s16v1:[],
       s16v1s:'none',
       s16v1other:'',
       s17v1:[],
       s17v1s:'none',
       s17v1other:'',
       s18v1:[],
       s18v1s:'none',
       s18v1other:'',

       // topic1:'none',
       topic1:'block',
       topic2:'none',
       topic3:'none',
       topic4:'none',
       topic5:'none',
       topic6:'none',
       topic7:'none',
       topic8:'none',
       topic9:'none',
       topic10:'none',
       topic11:'none',
       topic12:'none',
       topic13:'none',
       topic14:'none',
       topic15:'none',
       topic16:'none',
       topic17:'none',
       topic18:'none',
       topic3Height:false,

       token:'',
    };
    componentDidMount() {};
    arrtoobj = (arr,obj,sv)=>{
      var narr=[];
      for(var i=0;i<obj.length;i++){
        for(var j=0;j<arr.length;j++){
          var nobj={};
          if(arr[j] === obj[i].value){
              nobj.key = obj[i].value;
              nobj.value = '1'
              narr.push(nobj)
            if(arr[j].split('_')[arr[j].split('_').length-1] === 'other'){
              // this.setState({sv:'block'})
            }else{
              // this.setState({sv:'none'})
            }
          }
        }
      }
      return narr
    }
    maps = (sv,svother,other)=>{
      const data = sv.map((item,index)=>{
          if(item.key === other){
            item.value = svother
          }
          return item
      })
      return data
    }
    // 第一题
      s1_phone_numbers = (e) => {
        let s1_phone_numbers;
        if(e.target.value==='1'){
          s1_phone_numbers = '1部'
        }else if(e.target.value==='2'){
          s1_phone_numbers = '2部'
        }else if(e.target.value==='3'){
          s1_phone_numbers = '3部及以上'
        }
        this.setState({
          s1_phone_numbers_code: e.target.value,
          s1_phone_numbers:s1_phone_numbers,
        });
      }
      handlenext1=()=>{
        const {s1_phone_numbers,s1_phone_numbers_code}=this.state
        if(s1_phone_numbers===""||s1_phone_numbers_code === ''){
          message.error('请选择您目前同时使用几部手机？',3)
        }else{
          this.setState({
            topic1:'none',
            topic2:'block',
          })
        }
      }
    // 第二题
      s2_phone_os = (e) => {
        let s2_phone_os;
        if(e.target.value==='1'){
          s2_phone_os = '苹果'
        }else if(e.target.value==='2'){
          s2_phone_os = '安卓'
        }
        this.setState({
          s2_phone_os_code: e.target.value,
          s2_phone_os:s2_phone_os,
        });
      }
      handlenext2=()=>{
        const {s2_phone_os,s2_phone_os_code}=this.state
        if(s2_phone_os===""||s2_phone_os_code === ''){
          message.error('请选择您主要使用的手机系统？',3)
        }else{
          this.setState({
            topic2:'none',
            topic3:'block',
          })
        }
      }
    // 多选题
      sv=(options,sv,svs,value)=>{
        if(sv === 's3v1'){
          this.setState({s3v1:this.arrtoobj(value,options,svs)})
        }
        if(sv === 's4v1'){
          this.setState({s4v1:this.arrtoobj(value,options,svs)})
        }
        if(sv === 's5v1'){
          this.setState({s5v1:this.arrtoobj(value,options,svs)})
        }
        if(sv === 's6v1'){
          this.setState({s6v1:this.arrtoobj(value,options,svs)})
        }
        if(sv === 's7v1'){
          this.setState({s7v1:this.arrtoobj(value,options,svs)})
        }
        if(sv === 's8v1'){
          this.setState({s8v1:this.arrtoobj(value,options,svs)})
        }
        if(sv === 's9v1'){
          this.setState({s9v1:this.arrtoobj(value,options,svs)})
        }
        if(sv === 's10v1'){
          this.setState({s10v1:this.arrtoobj(value,options,svs)})
        }if(sv === 's11v1'){
          this.setState({s11v1:this.arrtoobj(value,options,svs)})
        }
        if(sv === 's12v1'){
          this.setState({s12v1:this.arrtoobj(value,options,svs)})
        }
        if(sv === 's13v1'){
          this.setState({s13v1:this.arrtoobj(value,options,svs)})
        }
        if(sv === 's14v1'){
          this.setState({s14v1:this.arrtoobj(value,options,svs)})
        }
        if(sv === 's15v1'){
          this.setState({s15v1:this.arrtoobj(value,options,svs)})
        }
        if(sv === 's16v1'){
          this.setState({s16v1:this.arrtoobj(value,options,svs)})
        }
        if(sv === 's17v1'){
          this.setState({s17v1:this.arrtoobj(value,options,svs)})
        }
        if(sv === 's18v1'){
          this.setState({s18v1:this.arrtoobj(value,options,svs)})
        }
      }
      handlenext=(v)=>{
        if(v==='v3'){
          const {s3v1}=this.state
          if(s3v1.length === 0){
            message.error('请选择您的软件下载平台？',3)
          }else{
            this.setState({
              topic3:'none',
              topic4:'block',
            })
          }
        }else if(v==='v4'){
          const {s4v1}=this.state
          if(s4v1.length === 0){
            message.error('请选择您目前手机安装的安全（手机管家）APP？',3)
          }else{
            this.setState({
              topic4:'none',
              topic5:'block',
            })
          }
        }else if(v==='v5'){
          const {s5v1}=this.state
          if(s5v1.length === 0){
            message.error('请选择您经常使用的地图类APP？',3)
          }else{
            this.setState({
              topic5:'none',
              topic6:'block',
            })
          }
        }else if(v==='v6'){
          const {s6v1}=this.state
          if(s6v1.length === 0){
            message.error('请选择您目前手机安装的浏览器？',3)
          }else{
            this.setState({
              topic6:'none',
              topic7:'block',
            })
          }
        }else if(v==='v7'){
          const {s7v1}=this.state
          if(s7v1.length === 0){
            message.error('请选择您目前手机安装的资讯类APP？',3)
          }else{
            this.setState({
              topic7:'none',
              topic8:'block',
            })
          }
        }else if(v==='v8'){
          const {s8v1}=this.state
          if(s8v1.length === 0){
            message.error('请选择您目前手机安装的阅读类APP？',3)
          }else{
            this.setState({
              topic8:'none',
              topic9:'block',
            })
          }
        }else if(v==='v9'){
          const {s9v1}=this.state
          if(s9v1.length === 0){
            message.error('请选择您目前手机安装的音乐APP？',3)
          }else{
            this.setState({
              topic9:'none',
              topic10:'block',
            })
          }
        }else if(v==='v10'){
          const {s10v1}=this.state
          if(s10v1.length === 0){
            message.error('请选择您目前手机安装的视频APP？',3)
          }else{
            this.setState({
              topic10:'none',
              topic11:'block',
            })
          }
        }else if(v==='v11'){
          const {s11v1}=this.state
          if(s11v1.length === 0){
            message.error('请选择您目前手机安装的翻译APP？',3)
          }else{
            this.setState({
              topic11:'none',
              topic12:'block',
            })
          }
        }else if(v==='v12'){
          const {s12v1}=this.state
          if(s12v1.length === 0){
            message.error('请选择您目前手机安装的网购APP？',3)
          }else{
            this.setState({
              topic12:'none',
              topic13:'block',
            })
          }
        }else if(v==='v13'){
          const {s13v1}=this.state
          if(s13v1.length === 0){
            message.error('请选择您目前手机安装的外卖类APP？',3)
          }else{
            this.setState({
              topic13:'none',
              topic14:'block',
            })
          }
        }else if(v==='v14'){
          const {s14v1}=this.state
          if(s14v1.length === 0){
            message.error('请选择您目前手机安装的旅行类APP？',3)
          }else{
            this.setState({
              topic14:'none',
              topic15:'block',
            })
          }
        }else if(v==='v15'){
          const {s15v1}=this.state
          if(s15v1.length === 0){
            message.error('请选择您目前手机安装的金融理财类APP？',3)
          }else{
            this.setState({
              topic15:'none',
              topic16:'block',
            })
          }
        }else if(v==='v16'){
          const {s16v1}=this.state
          if(s16v1.length === 0){
            message.error('请选择您目前手机安装的共享单车类APP？',3)
          }else{
            this.setState({
              topic16:'none',
              topic17:'block',
            })
          }
        }else if(v==='v17'){
          const {s17v1}=this.state
          if(s17v1.length === 0){
            message.error('请选择您目前手机安装的社交类APP是？',3)
          }else{
            this.setState({
              topic17:'none',
              topic18:'block',
            })
          }
        }else if(v==='v18'){
          const {s18v1}=this.state
          if(s18v1.length === 0){
            message.error('请选择您目前手机安装的团购类APP是？',3)
          }else{
            this.setState({
              topic18:'none',
              topic19:'block',
            })
          }
        }
      }
    handlenextsave=()=>{
        const {s18v1,s17v1,s16v1,s15v1,s14v1,s13v1,s12v1,s11v1,s10v1,s9v1,s8v1,s7v1,s6v1,s5v1,s4v1,s3v1,s2v1,s1v1,
              s3v1other,s4v1other,s5v1other,s6v1other,s7v1other,s8v1other,s9v1other,s10v1other,s11v1other,s12v1other
              ,s13v1other,s14v1other,s15v1other,s16v1other,s17v1other,s18v1other,s191other,
              s2_phone_os_code,s2_phone_os,s1_phone_numbers_code,s1_phone_numbers}=this.state
          if(s18v1.length === 0){
            message.error('请选择您目前手机安装的团购类APP是？',3)
          }else{
            const s3v1s = this.maps(s3v1,s3v1other,'s3_other')
            const s4v1s = this.maps(s4v1,s4v1other,'s4_other')
            const s5v1s = this.maps(s5v1,s5v1other,'s5_other')
            const s6v1s = this.maps(s6v1,s6v1other,'s6_other')
            const s7v1s = this.maps(s7v1,s7v1other,'s7_other')
            const s8v1s = this.maps(s8v1,s8v1other,'s8_other')
            const s9v1s = this.maps(s9v1,s9v1other,'s9_other')
            const s10v1s = this.maps(s10v1,s10v1other,'s10_other')
            const s11v1s = this.maps(s11v1,s11v1other,'s11_other')
            const s12v1s = this.maps(s12v1,s12v1other,'s12_other')
            const s13v1s = this.maps(s13v1,s13v1other,'s13_other')
            const s14v1s = this.maps(s14v1,s14v1other,'s14_other')
            const s15v1s = this.maps(s15v1,s15v1other,'s15_other')
            const s16v1s = this.maps(s16v1,s16v1other,'s16_other')
            const s17v1s = this.maps(s17v1,s17v1other,'s17_other')
            const s18v1s = this.maps(s18v1,s18v1other,'s18_other')
            let data={
              s1_phone_numbers:s1_phone_numbers,//同时使用几部手机
              s1_phone_numbers_code:s1_phone_numbers_code,//同时使用几部手机
              s2_phone_os:s2_phone_os,
              s2_phone_os_code:s2_phone_os_code,
              s3v1:s3v1s,
              s4v1:s4v1s,
              s5v1:s5v1s,
              s6v1:s6v1s,
              s7v1:s7v1s,
              s8v1:s8v1s,
              s9v1:s9v1s,
              s10v1:s10v1s,
              s11v1:s11v1s,
              s12v1:s12v1s,
              s13v1:s13v1s,
              s14v1:s14v1s,
              s15v1:s15v1s,
              s16v1:s16v1s,
              s17v1:s17v1s,
              s18v1:s18v1s,
              token:GetRequest().token
            }
            Requires(_addLableInternetUser,data).then((json)=>{
              back(GetRequest().source,json)
            });
          }
      }

    render() {
       const radiostyle = {
          display: 'block',
          height: '45px',
          lineHeight: '45px',
          borderBottom:'1px solid #efeff4',
          color:'#353535',
          fontsize:'16px',
          paddingLeft:'10px',
          width:'100%',
        };
        const {topic1,topic2,topic3,topic4,topic5,topic6,topic7,topic8,topic9,topic10,topic11,topic12,topic13,topic14,topic15,topic16,topic17,topic18}=this.state
        const displays = {display:'inline-block',width:'80%',marginLeft:'40px'}
        return (
            <div className="internetcCnt">
                <h3 className="echo-title">互联网习惯:</h3>
                <div className="topic topic1" style={{display:topic1}}>
                    <p>请问您目前同时使用几部手机？</p>
                    <div className="topicCont topicContR">
                        <RadioGroup onChange={this.s1_phone_numbers} style={{width:'100%'}}>
                            <Radio style={radiostyle} value={'1'}> 1部</Radio>
                            <Radio style={radiostyle} value={'2'}> 2部</Radio>
                            <Radio style={radiostyle} value={'3'}> 3部及以上</Radio>
                        </RadioGroup>
                    </div>
                    <Button type="primary" className="next next1" size="large" onClick={this.handlenext1}>下一步</Button>
                </div>
                <div className="topic topic2" style={{display:topic2}}>
                    <p>您主要使用的手机系统是？</p>
                    <div className="topicCont topicContR">
                        <RadioGroup onChange={this.s2_phone_os}  style={{width:'100%'}}>
                            <Radio style={radiostyle} value={'1'}> 苹果</Radio>
                            <Radio style={radiostyle} value={'2'}> 安卓</Radio>
                        </RadioGroup>
                    </div>
                    <Button type="primary" className="next next2" size="large" onClick={this.handlenext2}>下一步</Button>
                </div>
                <div className="topic topic3" id="topic3" style={{display:topic3}}>
                    <p>请选择您目前手机安装的软件下载平台（应用分发软件）是？</p>
                    <div className="topicCont">
                        <CheckboxGroup options={options} onChange={this.sv.bind(this,options,'s3v1','s3v1s')} style={{padding:'15px 0 4px'}}/>
                        <Input style={displays} onChange={this.s3v1other}/>
                    </div>
                    <div className="nextPar">
                      <Button type="primary" className="next next3"  size="large" onClick={this.handlenext.bind(this,'v3')}>下一步</Button>
                    </div>
                </div>
                <div className="topic topic4" id="topic4" style={{display:topic4}}>
                    <p>请选择您目前手机安装的安全（手机管家）APP是？</p>
                    <div className="topicCont">
                        <CheckboxGroup options={options4} onChange={this.sv.bind(this,options4,'s4v1','s4v1s')} style={{padding:'15px 0 4px'}}/>
                        <Input style={displays} onChange={this.s4v1other}/>
                    </div>
                    <div className="nextPar">
                      <Button type="primary" className="next next4"  size="large" onClick={this.handlenext.bind(this,'v4')}>下一步</Button>
                    </div>
                </div>
                <div className="topic topic5" id="topic5" style={{display:topic5}}>
                    <p>请选择您经常使用的地图类APP是？</p>
                    <div className="topicCont">
                        <CheckboxGroup options={options5} onChange={this.sv.bind(this,options5,'s5v1','s5v1s')} style={{padding:'15px 0 4px'}}/>
                        <Input style={displays} onChange={this.s5v1other}/>
                    </div>
                    <div className="nextPar">
                      <Button type="primary" className="next next5"  size="large" onClick={this.handlenext.bind(this,'v5')}>下一步</Button>
                    </div>
                </div>
                <div className="topic topic6" id="topic6" style={{display:topic6}}>
                    <p>请选择您目前手机安装的浏览器是？</p>
                    <div className="topicCont">
                        <CheckboxGroup options={options6} onChange={this.sv.bind(this,options6,'s6v1','s6v1s')} style={{padding:'15px 0 4px'}}/>
                        <Input style={displays} onChange={this.s6v1other}/>
                    </div>
                    <div className="nextPar">
                      <Button type="primary" className="next next6"  size="large" onClick={this.handlenext.bind(this,'v6')}>下一步</Button>
                    </div>
                </div>
                <div className="topic topic7" id="topic7" style={{display:topic7}}>
                    <p>请选择您目前手机安装的资讯类APP是？</p>
                    <div className="topicCont">
                        <CheckboxGroup options={options7} onChange={this.sv.bind(this,options7,'s7v1','s7v1s')} style={{padding:'15px 0 4px'}}/>
                        <Input style={displays} onChange={this.s7v1other}/>
                    </div>
                    <div className="nextPar">
                      <Button type="primary" className="next next7"  size="large" onClick={this.handlenext.bind(this,'v7')}>下一步</Button>
                    </div>
                </div>
                <div className="topic topic8" id="topic8" style={{display:topic8}}>
                    <p>请选择您目前手机安装的阅读类APP是？</p>
                    <div className="topicCont">
                        <CheckboxGroup options={options8} onChange={this.sv.bind(this,options8,'s8v1','s8v1s')} style={{padding:'15px 0 4px'}}/>
                        <Input style={displays} onChange={this.s8v1other}/>
                    </div>
                    <div className="nextPar">
                      <Button type="primary" className="next next8"  size="large" onClick={this.handlenext.bind(this,'v8')}>下一步</Button>
                    </div>
                </div>
                <div className="topic topic9" id="topic9" style={{display:topic9}}>
                    <p>请选择您目前手机安装的音乐APP是？</p>
                    <div className="topicCont">
                        <CheckboxGroup options={options9} onChange={this.sv.bind(this,options9,'s9v1','s9v1s')} style={{padding:'15px 0 4px'}}/>
                        <Input style={displays} onChange={this.s9v1other}/>
                    </div>
                    <div className="nextPar">
                      <Button type="primary" className="next next9"  size="large" onClick={this.handlenext.bind(this,'v9')}>下一步</Button>
                    </div>
                </div>
                <div className="topic topic10" id="topic10" style={{display:topic10}}>
                    <p>请选择您目前手机安装的视频APP是？</p>
                    <div className="topicCont">
                        <CheckboxGroup options={options10} onChange={this.sv.bind(this,options10,'s10v1','s10v1s')} style={{padding:'15px 0 4px'}}/>
                        <Input style={displays} onChange={this.s10v1other}/>
                    </div>
                    <div className="nextPar">
                      <Button type="primary" className="next next10"  size="large" onClick={this.handlenext.bind(this,'v10')}>下一步</Button>
                    </div>
                </div>
                <div className="topic topic11" id="topic11" style={{display:topic11}}>
                    <p>请选择您目前手机安装的翻译APP是？</p>
                    <div className="topicCont">
                        <CheckboxGroup options={options11} onChange={this.sv.bind(this,options11,'s11v1','s11v1s')} style={{padding:'15px 0 4px'}}/>
                        <Input style={displays} onChange={this.s11v1other}/>
                    </div>
                    <div className="nextPar">
                      <Button type="primary" className="next next11"  size="large" onClick={this.handlenext.bind(this,'v11')}>下一步</Button>
                    </div>
                </div>
                <div className="topic topic12" id="topic12" style={{display:topic12}}>
                    <p>请选择您目前手机安装的网购APP是？</p>
                    <div className="topicCont">
                        <CheckboxGroup options={options12} onChange={this.sv.bind(this,options12,'s12v1','s12v1s')} style={{padding:'15px 0 4px'}}/>
                        <Input style={displays} onChange={this.s12v1other}/>
                    </div>
                    <div className="nextPar">
                      <Button type="primary" className="next next12"  size="large" onClick={this.handlenext.bind(this,'v12')}>下一步</Button>
                    </div>
                </div>
                <div className="topic topic13" id="topic13" style={{display:topic13}}>
                    <p>请选择您目前手机安装的外卖类APP是？</p>
                    <div className="topicCont">
                        <CheckboxGroup options={options13} onChange={this.sv.bind(this,options13,'s13v1','s13v1s')} style={{padding:'15px 0 4px'}}/>
                        <Input style={displays} onChange={this.s13v1other}/>
                    </div>
                    <div className="nextPar">
                      <Button type="primary" className="next next13"  size="large" onClick={this.handlenext.bind(this,'v13')}>下一步</Button>
                    </div>
                </div>
                <div className="topic topic14" id="topic14" style={{display:topic14}}>
                    <p>请选择您目前手机安装的旅行类APP是？</p>
                    <div className="topicCont">
                        <CheckboxGroup options={options14} onChange={this.sv.bind(this,options14,'s14v1','s14v1s')} style={{padding:'15px 0 4px'}}/>
                        <Input style={displays} onChange={this.s14v1other}/>
                    </div>
                    <div className="nextPar">
                      <Button type="primary" className="next next14"  size="large" onClick={this.handlenext.bind(this,'v14')}>下一步</Button>
                    </div>
                </div>
                <div className="topic topic15" id="topic15" style={{display:topic15}}>
                    <p>请选择您目前手机安装的金融理财类APP是？</p>
                    <div className="topicCont">
                        <CheckboxGroup options={options15} onChange={this.sv.bind(this,options15,'s15v1','s15v1s')} style={{padding:'15px 0 4px'}}/>
                        <Input style={displays} onChange={this.s15v1other}/>
                    </div>
                    <div className="nextPar">
                      <Button type="primary" className="next next15"  size="large" onClick={this.handlenext.bind(this,'v15')}>下一步</Button>
                    </div>
                </div>
                <div className="topic topic16" id="topic16" style={{display:topic16}}>
                    <p>请选择您目前手机安装的共享单车类APP是？</p>
                    <div className="topicCont">
                        <CheckboxGroup options={options16} onChange={this.sv.bind(this,options16,'s16v1','s16v1s')} style={{padding:'15px 0 4px'}}/>
                        <Input style={displays} onChange={this.s16v1other}/>
                    </div>
                    <div className="nextPar">
                      <Button type="primary" className="next next16"  size="large" onClick={this.handlenext.bind(this,'v16')}>下一步</Button>
                    </div>
                </div>
                <div className="topic topic17" id="topic17" style={{display:topic17}}>
                    <p>请选择您目前手机安装的社交类APP是？</p>
                    <div className="topicCont">
                        <CheckboxGroup options={options17} onChange={this.sv.bind(this,options17,'s17v1','s17v1s')} style={{padding:'15px 0 4px'}}/>
                        <Input style={displays} onChange={this.s17v1other}/>
                    </div>
                    <div className="nextPar">
                      <Button type="primary" className="next next17"  size="large" onClick={this.handlenext.bind(this,'v17')}>下一步</Button>
                    </div>
                </div>
                <div className="topic topic18" id="topic18" style={{display:topic18}}>
                    <p>请选择您目前手机安装的团购类APP是？</p>
                    <div className="topicCont">
                        <CheckboxGroup options={options18} onChange={this.sv.bind(this,options18,'s18v1','s18v1s')} style={{padding:'15px 0 4px'}}/>
                        <Input style={displays} onChange={this.s18v1other}/>
                    </div>
                    <div className="nextPar">
                      <Button type="primary" className="next next18"  size="large" onClick={this.handlenextsave}>提交</Button>
                    </div>
                </div>

                <style>{`
                  .echo-title{
                    padding: 0px;
                    color: #ffa733;
                    font-size: 18px;
                  }
                  .internetcCnt{
                    width:100%;
                    background:#f5f5f9;
                    padding:20px 15px 0px;
                    text-align:left;
                    font-size:14px;
                    color:#888;
                  }
                  .topic{
                    position:relative;
                    height:100%;
                    overflow-y:auto;
                  }
                  .topicCont{
                    background:#fff;
                    margin-bottom:120px;
                    padding-bottom:18px;
                  }
                  .topicContR{
                    padding-bottom:0px;
                  }
                  .nextPar{
                    position:fixed;
                    left:0%;
                    bottom:0px;
                    height:80px;
                    width:100%;
                    background-color: #f5f5f9;
                  }
                  .next{
                    position:fixed;
                    left:5%;
                    bottom:20px;
                    width:90%;
                    background-color: #ffa733;
                    border-color: #ffa733;
                  }
                  .topicCont .ant-radio-inner:after {
                    background-color: #ffa733;
                  }
                  .topicCont .ant-radio-checked .ant-radio-inner {
                      border-color: #ffa733;
                  }
                  .topicCont .ant-radio-wrapper:hover .ant-radio .ant-radio-inner, .ant-radio:hover .ant-radio-inner, .ant-radio-focused .ant-radio-inner {
                       border-color: #ffa733;
                  }
                   .ant-btn-primary:hover, .ant-btn-primary:focus {
                      color: #fff;
                      background-color: #ffa733;
                      border-color: #ffa733;
                  }
                  .topicCont .ant-btn:hover,.topicCont .ant-btn:focus,.topicCont .ant-btn:active,.topicCont .ant-btn.active{
                    color: #fff;
                      background-color: #ffa733;
                      border-color: #ffa733;
                  }
                  .ant-checkbox-checked .ant-checkbox-inner, .ant-checkbox-indeterminate .ant-checkbox-inner {
                      background-color: #ffa733;
                      border-color: #ffa733;
                  }
                  .ant-checkbox-wrapper:hover .ant-checkbox-inner, .ant-checkbox:hover .ant-checkbox-inner, .ant-checkbox-input:focus + .ant-checkbox-inner {
                      border-color: #ffa733;
                  }
                  .ant-checkbox-group-item {
                      display: block;
                      margin-right: 8px;
                      padding:3px 0 3px 16px;
                  }
                `}</style>
            </div>
        )
    }
      s3v1other=(e)=>{
        this.setState({s3v1other:e.target.value})
      }
      s4v1other=(e)=>{
        this.setState({s4v1other:e.target.value})
      }
      s5v1other=(e)=>{
        this.setState({s5v1other:e.target.value})
      }
      s6v1other=(e)=>{
        this.setState({s6v1other:e.target.value})
      }
      s7v1other=(e)=>{
        this.setState({s7v1other:e.target.value})
      }
      s8v1other=(e)=>{
        this.setState({s8v1other:e.target.value})
      }
      s9v1other=(e)=>{
        this.setState({s9v1other:e.target.value})
      }
      s10v1other=(e)=>{
        this.setState({s10v1other:e.target.value})
      }
      s11v1other=(e)=>{
        this.setState({s11v1other:e.target.value})
      }
      s12v1other=(e)=>{
        this.setState({s12v1other:e.target.value})
      }
      s13v1other=(e)=>{
        this.setState({s13v1other:e.target.value})
      }
      s14v1other=(e)=>{
        this.setState({s14v1other:e.target.value})
      }
      s15v1other=(e)=>{
        this.setState({s15v1other:e.target.value})
      }
      s16v1other=(e)=>{
        this.setState({s16v1other:e.target.value})
      }
      s17v1other=(e)=>{
        this.setState({s17v1other:e.target.value})
      }
      s18v1other=(e)=>{
        this.setState({s18v1other:e.target.value})
      }
}

export default Index;
