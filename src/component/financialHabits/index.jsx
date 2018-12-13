/*
 * @Author: zqm
 * @Date: 2018-12-12 14:01:21
 * @Last Modified by:   zqm
 * @Last Modified time: 2018-12-12 14:01:21
 */
import React, { Component } from 'react';
import { Radio,Button,message,Input,Cascader,Checkbox  } from 'antd';
import {_addLableFinancialUser,_url,back} from '../api/Api.jsx';
import { Requires } from '../api/NewRequire.jsx';
const RadioGroup = Radio.Group;
const CheckboxGroup = Checkbox.Group;
console.log(CheckboxGroup)
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

const options1 =[
  { label: '工商银行', value: 's1_1_icbc',num:'1' },
  { label: '建设银行', value: 's1_2_ccb',num:'2' },
  { label: '农业银行', value: 's1_3_abc',num:'3' },
  { label: '招商银行', value: 's1_4_cmbc',num:'4' },
  { label: '中国银行', value: 's1_5_bc',num:'5' },
  { label: '交通银行', value: 's1_6_boc',num:'6' },
  { label: '民生银行', value: 's1_7_ms',num:'7' },
  { label: '浦发银行', value: 's1_8_spdb',num:'8' },
  { label: '平安银行', value: 's1_9_pingan',num:'9' },
  { label: '华夏银行', value: 's1_10_hb',num:'10' },
  { label: '广发银行', value: 's1_11_gdb',num:'11' },
  { label: '中信银行', value: 's1_12_citic' ,num:'12'},
  { label: '兴业银行', value: 's1_13_cib',num:'13' },
  { label: '光大银行', value: 's1_14_ceb',num:'14' },
  { label: '中国邮政储蓄银行', value: 's1_15_yz',num:'15' },
  { label: '其他银行', value: 's1_16_qt',num:'16' },
]
const options3 =[
  { label: '蚂蚁金服（含支付宝）', value: 's3_1_myjf' },
  { label: '陆金所', value: 's3_2_ljs' },
  { label: '宜信', value: 's3_3_yx' },
  { label: '京东金融', value: 's3_4_jdjr' },
  { label: '微众银行', value: 's3_5_wzyh' },
  { label: '借贷宝', value: 's3_6_jdb' },
  { label: '万达网络金融', value: 's3_7_wdwljr' },
  { label: '苏宁金服', value: 's3_8_snjf' },
  { label: '百度金融', value: 's3_9_bdjr' },
  { label: '拉卡拉', value: 's3_10_lkl' },
  { label: '通联支付', value: 's3_11_ltzf' },
  { label: '360金控', value: 's3_12_360jk' },
  { label: '分期乐', value: 's3_13_fql' },
  { label: '点融网', value: 's3_14_djr' },
  { label: '网易金融', value: 's3_15_wyjr' },
  { label: '恒大金服', value: 's3_16_hdjf' },
  { label: '其他，请注明', value: 's3_17_other' },
]
const options4s = [
  {
    label: "不拥有任何贵宾卡", value: "s4v2_17_no"
  }
]
const options7 =[
  { label: '银行理财产品', value: 's7_1_financial_products' },
  { label: '基金、股票、债券等', value: 's7_2_fund' },
  { label: '保险', value: 's7_3_insurance' },
  { label: '贵金属业务', value: 's7_4_metals_business' },
  { label: '外汇买卖', value: 's7_5_forex' },
  { label: '第三方存管', value: 's7_6_third_party' },
  { label: 'P2P理财', value: 's7_7_p2p' },
]
const options7s =[
  { label: '以上均无', value: 's7_8_no' },
]
const options11 =[
  { label: '直接刷借记卡', value: 's11_1_debit_card' },
  { label: '直接刷信用卡', value: 's11_2_credit_card' },
  { label: '支付宝支付', value: 's11_3_zfb' },
  { label: '微信支付', value: 's11_4_wx' },
  { label: 'Apple Pay/samsung pay/pay pal/Huawei Pay等手机支付', value: 's11_5_phone_pay' },
  { label: '其他第三方支付工具（如：快钱/京东钱包/百度钱包)', value: 's11_6_third_party' },
  { label: '银联快捷支付', value: 's11_7_unionPay_fast' },
  { label: '银联扫码支付/银联钱包', value: 's11_8_unionPay_scancode' },
  { label: '现金', value: 's11_9_mony' },
  { label: '其他，请注明', value: 's11_10_other' },
]

class Index extends Component {
    state = {
           s1v1:[],
           s1v1s:'none',
           s1v1other:'1',
           s2_assets:'',
           s2_assets_code:'',
           s3v1:[],
           s3v1s:'none',
           s3v1other:'',
           s4v2:[],
           s4v1s:'none',
           s4v1other:'',
           s5_risk:'',
           s5_risk_code:'',
           s6_overhead:'',
           s6_overhead_code:'',
           s7v1:[],
           s7v1s:'none',
           s7v1other:'1',
           s8_credit_card:'',
           s8_credit_card_code:'',
           s8av1:[],
           s8av1s:'none',
           s8av1other:'1',
           s8b_commonly_used:'',
           s8b_commonly_used_code:'',
           s9_quota:'',
           s9_quota_code:'',
           s10_statement:'',
           s10_statement_code:'',
           s11v1:[],
           s11v1s:'none',
           s11v1other:'',
           s12_habit:'',
           s12_habit_code:'',
           s12_other:'',
       // topic1:'none',
           topic1:'block',
           topic2:'none',
           topic3:'none',
           topic4:'none',
           topic5:'none',
           topic6:'none',
           topic7:'none',
           topic8:'none',
           topic8a:'none',
           topic8b:'none',
           topic9:'none',
           topic10:'none',
           topic11:'none',
           topic12:'none',

           token:'',
           s1value:[],
           s8value:[],
           options2:[],
           options4:[],
           options8a:[],
           options8b:[],

           s4value1:[],
           s4value2:[],
           s7value1:[],
           s7value2:[],

    };
    componentDidMount() {};
    arrtoobj = (arr,obj,sv)=>{
      var narr=[];
      for(var i=0;i<obj.length;i++){
        for(var j=0;j<arr.length;j++){
          var nobj={};
          if(arr[j] === obj[i].value){
            if(sv==='s8av1s'){
                nobj.key = obj[i].value.replace("s4v2_","s8a_")
            }else{
                nobj.key = obj[i].value;
            }
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

    // s2
          s2_assets = (e) => {
                let s2_assets;
                if(e.target.value==='1'){
                  s2_assets = '工商银行'
                }else if(e.target.value==='2'){
                  s2_assets = '建设银行'
                }else if(e.target.value==='3'){
                  s2_assets = '农业银行'
                }else if(e.target.value==='4'){
                  s2_assets = '招商银行'
                }else if(e.target.value==='5'){
                  s2_assets = '中国银行'
                }else if(e.target.value==='6'){
                  s2_assets = '交通银行'
                }else if(e.target.value==='7'){
                  s2_assets = '民生银行'
                }else if(e.target.value==='8'){
                  s2_assets = '浦发银行'
                }else if(e.target.value==='9'){
                  s2_assets = '平安银行'
                }else if(e.target.value==='10'){
                  s2_assets = '华夏银行'
                }else if(e.target.value==='11'){
                  s2_assets = '广发银行'
                }else if(e.target.value==='12'){
                  s2_assets = '中信银行'
                }else if(e.target.value==='13'){
                  s2_assets = '兴业银行'
                }else if(e.target.value==='14'){
                  s2_assets = '光大银行'
                }else if(e.target.value==='15'){
                  s2_assets = '中国邮政储蓄银行'
                }else if(e.target.value==='16'){
                  s2_assets = '其他银行'
                }else if(e.target.value==='17'){
                  s2_assets = '每家银行放的资产都差不多'
                }
                this.setState({
                  s2_assets_code: e.target.value,
                  s2_assets:s2_assets,
                });
            }
          handlenext2=()=>{
                const {s2_assets,s2_assets_code}=this.state
                if(s2_assets===""||s2_assets_code===''){
                    message.error('请选择您在哪家银行存放的资产最多？',2)
                }else{
                  this.setState({
                    topic2:'none',
                    topic3:'block',
                  })
                }
          }
    // s5
        s5_risk = (e) => {
            let s5_risk;
            if(e.target.value==='1'){
              s5_risk = '以保值为主，不愿意承受风险 '
            }else if(e.target.value==='2'){
              s5_risk = '投资有风险，对一定程度风险愿意并能够接受 '
            }else if(e.target.value==='3'){
              s5_risk = '愿意承受较大风险，因为高风险就是高回报 '
            }else if(e.target.value==='4'){
              s5_risk = '不知道/拒答'
            }
            this.setState({
              s5_risk_code: e.target.value,
              s5_risk:s5_risk,
            });
        }
        handlenext5=()=>{
            const {s5_risk,s5_risk_code}=this.state
            if(s5_risk===""||s5_risk_code === ''){
              message.error('请选择描述符合您的情况？',2)
            }else{
                this.setState({
                    topic5:'none',
                    topic6:'block',
                })
            }
        }
    // s6
        s6_overhead = (e) => {
            let s6_overhead;
            if(e.target.value==='1'){
              s6_overhead = '消费为主（日常开销、购物消费、还贷等） '
            }else if(e.target.value==='2'){
              s6_overhead = '储蓄为主（活期、定期存款） '
            }else if(e.target.value==='3'){
              s6_overhead = '投资理财为主（买理财产品、基金、保险、股票等） '
            }else if(e.target.value==='4'){
              s6_overhead = '消费、储蓄、投资理财的比例差不多'
            }else if(e.target.value==='5'){
              s6_overhead = '交给家人支配，自己不太了解'
            }else if(e.target.value==='6'){
              s6_overhead = '不知道/拒答'
            }
            this.setState({
              s6_overhead_code: e.target.value,
              s6_overhead:s6_overhead,
            });
        }
        handlenext6=()=>{
            const {s6_overhead}=this.state
            if(s6_overhead===""){
              message.error('请选择您使用过的理财方式？',2)
            }else{
                this.setState({
                    topic6:'none',
                    topic7:'block',
                })
            }
        }
    // s8
        s8_credit_card = (e) => {
            let s8_credit_card;
            if(e.target.value==='1'){
              s8_credit_card = '有'
            }else if(e.target.value==='2'){
              s8_credit_card = '没有'
            }
            this.setState({
              s8_credit_card_code: e.target.value,
              s8_credit_card:s8_credit_card,
            });
        }
        handlenext8=()=>{
            const {s8_credit_card,s8_credit_card_code}=this.state
            if(s8_credit_card===""||s8_credit_card_code === ''){
              message.error('请选择您是否拥有信用卡？',2)
            }else{
                if(s8_credit_card_code === '2'){
                    this.setState({
                        topic8:'none',
                        topic10:'block',
                    })
                }else{
                    this.setState({
                        topic8:'none',
                        topic8a:'block',
                    })
                }

            }
        }
        // s8vother=(e)=>{ this.setState({s8_car_other:e.target.value,}) }
    // s8b
        s8b_commonly_used = (e) => {
            let s8b_commonly_used;
                if(e.target.value==='1'){
                  s8b_commonly_used = '工商银行'
                }else if(e.target.value==='2'){
                  s8b_commonly_used = '建设银行'
                }else if(e.target.value==='3'){
                  s8b_commonly_used = '农业银行'
                }else if(e.target.value==='4'){
                  s8b_commonly_used = '招商银行'
                }else if(e.target.value==='5'){
                  s8b_commonly_used = '中国银行'
                }else if(e.target.value==='6'){
                  s8b_commonly_used = '交通银行'
                }else if(e.target.value==='7'){
                  s8b_commonly_used = '民生银行'
                }else if(e.target.value==='8'){
                  s8b_commonly_used = '浦发银行'
                }else if(e.target.value==='9'){
                  s8b_commonly_used = '平安银行'
                }else if(e.target.value==='10'){
                  s8b_commonly_used = '华夏银行'
                }else if(e.target.value==='11'){
                  s8b_commonly_used = '广发银行'
                }else if(e.target.value==='12'){
                  s8b_commonly_used = '中信银行'
                }else if(e.target.value==='13'){
                  s8b_commonly_used = '兴业银行'
                }else if(e.target.value==='14'){
                  s8b_commonly_used = '光大银行'
                }else if(e.target.value==='15'){
                  s8b_commonly_used = '中国邮政储蓄银行'
                }else if(e.target.value==='16'){
                  s8b_commonly_used = '其他银行'
                }else if(e.target.value==='17'){
                  s8b_commonly_used = '每家银行放的资产都差不多'
                }
            this.setState({
              s8b_commonly_used_code: e.target.value,
              s8b_commonly_used:s8b_commonly_used,
            });
        }
        handlenext8b=()=>{
            const {s8b_commonly_used,s8b_commonly_used_code}=this.state
            if(s8b_commonly_used===""||s8b_commonly_used_code === ''){
              message.error('请选择您目前最常使用的信用卡是？',2)
            }else{
                this.setState({
                    topic8b:'none',
                    topic9:'block',
                })
            }
        }
    // s9
        s9_quota = (e) => {
            let s9_quota;
            if(e.target.value==='1'){
              s9_quota = '1000元以下'
            }else if(e.target.value==='2'){
              s9_quota = '1000~3000元'
            }else if(e.target.value==='3'){
              s9_quota = '3000~5000元'
            }else if(e.target.value==='4'){
              s9_quota = '5000~8000元'
            }else if(e.target.value==='5'){
              s9_quota = '8000~16000元'
            }else if(e.target.value==='6'){
              s9_quota = '16000~22000元'
            }else if(e.target.value==='7'){
              s9_quota = '22000~30000元'
            }else if(e.target.value==='8'){
              s9_quota = '30000~50000元'
            }else if(e.target.value==='9'){
              s9_quota = '50000~100000元'
            }else if(e.target.value==='10'){
              s9_quota = '100000元以上'
            }
            this.setState({
              s9_quota_code: e.target.value,
              s9_quota:s9_quota,
            });
        }
        handlenext9=()=>{
            const {s9_quota,s9_quota_code}=this.state
            if(s9_quota===""||s9_quota_code === ''){
              message.error('请选择您的信用卡可用额度在以下哪个范围？',2)
            }else{
                this.setState({
                    topic9:'none',
                    topic10:'block',
                })
            }
        }
    // s10
        s10_statement = (e) => {
            let s10_statement;
            if(e.target.value==='1'){
              s10_statement = '没有装任何手机银行APP'
            }else if(e.target.value==='2'){
              s10_statement = '装有手机银行，但不经常使用'
            }else if(e.target.value==='3'){
              s10_statement = '装有手机银行，经常使用手机银行APP办理业务'
            }
            this.setState({
              s10_statement_code: e.target.value,
              s10_statement:s10_statement,
            });
        }
        handlenext10=()=>{
            const {s10_statement,s10_statement_code}=this.state
            if(s10_statement===""||s10_statement_code === ''){
              message.error('请选择符合您的情况',2)
            }else{
                this.setState({
                    topic10:'none',
                    topic11:'block',
                })
            }
        }
    // s12
        s12_habit = (e) => {
            let s12_habit;
            if(e.target.value==='1'){
              s12_habit = '无论线上还是线下支付，我都优先使用信用卡'
            }else if(e.target.value==='2'){
              s12_habit = '大额我都会使用信用卡，小额我会使用第三方支付（支付宝/微信等）'
            }else if(e.target.value==='3'){
              s12_habit = '无论线上还是线下支付，我都优先使用第三方支付（支付宝/微信等）'
            }else if(e.target.value==='4'){
              s12_habit = '线上支付我会优先使用第三方支付（支付宝/微信等），线下支付我会优先使用信用卡'
            }else if(e.target.value==='5'){
              s12_habit = '其他，请注明'
            }
            this.setState({
              s12_habit_code: e.target.value,
              s12_habit:s12_habit,
            });
        }
        handlenext12=()=>{
            const {s12_habit,s12_habit_code}=this.state
            if(s12_habit===""||s12_habit_code === ''){
              message.error('请选择符合您目前的支付习惯',2)
            }else{
                this.handlenextsave()
            }
        }
        s12vother=(e)=>{ this.setState({s12_other:e.target.value,}) }
    // 多选题
      sv=(options,sv,svs,value)=>{
            if(sv === 's1v1'){
              this.setState({s1value:value,s1v1:this.arrtoobj(value,options,svs)})
            }
            if(sv === 's3v1'){
              this.setState({s3v1:this.arrtoobj(value,options,svs)})
            }
            if(sv === 's4v2'){
                this.setState({s4value1:value,s4value2:[]})
                this.setState({s4v2:this.arrtoobj(value,options,svs)})
            }
            if(sv === 's4v2s'){
              console.log(this.arrtoobj(value,options,svs))
                this.setState({s4value2:value,s4value1:[]})
                this.setState({s4v2:this.arrtoobj(value,options,svs)})
            }
            if(sv === 's7v1'){
              this.setState({s7value1:value,s7value2:[]})
              this.setState({s7v1:this.arrtoobj(value,options,svs)})
            }
            if(sv === 's7v1s'){
              this.setState({s7value2:value,s7value1:[]})
              this.setState({s7v1:this.arrtoobj(value,options,svs)})
            }
            if(sv === 's8av1'){
              this.setState({s8value:value,s8av1:this.arrtoobj(value,options,svs)})
            }
            if(sv === 's11v1'){
              this.setState({s11v1:this.arrtoobj(value,options,svs)})
            }
      }
      handlenext=(v)=>{
            if(v==='v1'){
              const {s1v1,s1value}=this.state
              if(s1v1.length === 0){
                message.error('请选择您目前拥有哪些银行的个人账户或产品？',2)
              }else{
                let options4=[];
                let arrs=[];
                options1.map((item,index)=>{
                    for(var i=0;i<s1value.length;i++){
                       if(item.value === s1value[i]){
                        arrs.push(item)
                        item.value = item.value.replace("s1_","s4v2_")
                        options4.push(item)
                       }
                    }
                })
                // const obj4={
                //     label: "不拥有任何贵宾卡", value: "s4v2_17_no"
                // }
                // options4.push(obj4);
                console.log(arrs)
                console.log(options4)
                this.setState({
                    options2:arrs,
                    options4:options4,
                    // options8a:arrs,
                    topic1:'none',
                    topic2:'block',
                })
              }
            }else if(v==='v3'){
              const {s3v1}=this.state
              if(s3v1.length === 0){
                message.error('请选择您是否有使用以下互联网金融公司相关理财产品和服务？',2)
              }else{
                this.setState({
                  topic3:'none',
                  topic4:'block',
                })
              }
            }else if(v==='v4'){
              const {s4v2}=this.state
              if(s4v2.length === 0){
                message.error('请选择您是否拥有以下这些银行贵宾卡？',2)
              }else{
                this.setState({
                  topic4:'none',
                  topic5:'block',
                })
              }
            }else if(v==='v7'){
              const {s7v1,s1value}=this.state
              if(s7v1.length === 0){
                message.error('请选择您在最近一年中，使用过的理财方式有？',2)
              }else{
                let arrs=[];
                this.state.options4.map((item,index)=>{
                    if(item.value!="s4v2_17_no"){
                        arrs.push(item)
                    }
                })

                this.setState({
                    options8a:arrs,
                    topic7:'none',
                    topic8:'block',
                })
              }
            }else if(v==='v8a'){
              const {s8av1,options8a,s8value}=this.state
              if(s8av1.length === 0){
                message.error('请选择您目前拥有哪些银行信用卡？',2)
              }else{
                let arrs=[];
                options8a.map((item,index)=>{
                    for(var i=0;i<s8value.length;i++){
                       if(item.value === s8value[i]){
                        arrs.push(item)
                       }
                    }
                })
                console.log(arrs)
                this.setState({
                  options8b:arrs,
                  topic8a:'none',
                  topic8b:'block',
                })
              }
            }else if(v==='v11'){
              const {s11v1}=this.state
              if(s11v1.length === 0){
                message.error('请选择您消费时，通常会选择使用哪些支付工具？',2)
              }else{
                this.setState({
                  topic11:'none',
                  topic12:'block',
                })
              }
            }
      }

      handlenextsave=()=>{
        const {s1v1,s1v1s,s1v1other,s2_assets,s2_assets_code,s3v1,s3v1s,s3v1other,s4v2,s4v1s,s4v1other,s5_risk,s5_risk_code,s6_overhead,s6_overhead_code,
           s7v1,s7v1s,s7v1other,s8_credit_card,s8_credit_card_code,s8av1,s8av1s,s8av1other,s8b_commonly_used,s8b_commonly_used_code,s9_quota,s9_quota_code,
           s10_statement,s10_statement_code,s11v1,s11v1s,s11v1other,s12_habit,s12_habit_code,s12_other,}=this.state

            const ns1v1s = this.maps(s1v1,s1v1other,"s1_other")
            const ns3v1s = this.maps(s3v1,s3v1other,"s3_17_other")
            const ns4v1s = this.maps(s4v2,s4v1other,"s4_12_other")
            const ns7v1s = this.maps(s7v1,s7v1other,"s7_12_other")
            const ns8av1s = this.maps(s8av1,s8av1other,"s8a_12_other")
            const ns11v1s = this.maps(s11v1,s11v1other,"s11_10_other")
            const data={
               s1v1:ns1v1s,
               s2_assets:s2_assets,
               s2_assets_code:s2_assets_code,
               s3v1:ns3v1s,
               s4v2:ns4v1s,
               s5_risk:s5_risk,
               s5_risk_code:s5_risk_code,
               s6_overhead:s6_overhead,
               s6_overhead_code:s6_overhead_code,
               s7v1:ns7v1s,
               s8_credit_card:s8_credit_card,
               s8_credit_card_code:s8_credit_card_code,
               s8av1:ns8av1s,
               s8b_commonly_used:s8b_commonly_used,
               s8b_commonly_used_code:s8b_commonly_used_code,
               s9_quota:s9_quota,
               s9_quota_code:s9_quota_code,
               s10_statement:s10_statement,
               s10_statement_code:s10_statement_code,
               s11v1:ns11v1s,
               s12_habit:s12_habit,
               s12_habit_code:s12_habit_code,
               s12_other:s12_other,
               token:GetRequest().token
            }
            // console.log(data)
            Requires(_addLableFinancialUser,data).then((json)=>{
                back(GetRequest().source,json)
            });
      }

    render() {
       const radiostyle = {
          display: 'block',
          whitespace: 'initial',
          borderBottom:'1px solid #efeff4',
          color:'#353535',
          fontsize:'16px',
          padding:'8px 10px',
          width:'100%',
        };
        const {topic1,topic2,topic3,topic3b,topic4,topic5,topic6,topic7,topic8,topic8a,topic8b,topic9,topic10,topic11,topic12}=this.state
        const displays = {display:'inline-block',width:'100px',marginLeft:'20px'}
        const displays2 = {display:'inline-block',width:'60%',marginLeft:'0px'}
        const opation2 = this.state.options2.map((item,index)=>{
            return <Radio style={radiostyle} value={item.num} key={index}> {item.label}</Radio>
        })
        const options8a = this.state.options8a
        const opation8b = this.state.options8b.map((item,index)=>{
            return <Radio style={radiostyle} value={item.num} key={index}> {item.label}</Radio>
        })
        const daan = this.state.s8b_commonly_used
        return (
            <div className="internetcCnt" >
                <h3 className="echo-title">金融习惯:</h3>
                <div className="topic topic1" style={{display:topic1}}>
                    <p>您目前拥有哪些银行的个人账户或产品（例如储蓄、信用卡、贷款、理财投资等）？</p>
                    <div className="topicCont">
                        <CheckboxGroup options={options1} onChange={this.sv.bind(this,options1,'s1v1','s1v1s')} style={{padding:'15px 0 4px'}}/>
                    </div>
                    <Button type="primary" className="next next1" size="large" onClick={this.handlenext.bind(this,'v1')}>下一步</Button>
                </div>
                <div className="topic topic2" style={{display:topic2}}>
                    <p>请问在您所使用的各家银行中，您在哪家银行存放的资产最多？</p>
                    <div className="topicCont topicContR">
                        <RadioGroup onChange={this.s2_assets} style={{width:'100%'}}>
                            {opation2}
                            <Radio style={radiostyle} value={'17'}> 每家银行放的资产都差不多</Radio>
                        </RadioGroup>
                    </div>
                    <div className="nextPar">
                      <Button type="primary" className="next next2" size="large" onClick={this.handlenext2}>下一步</Button>
                    </div>
                </div>
                <div className="topic topic3" id="topic3" style={{display:topic3}}>
                    <p>您是否有使用以下互联网金融公司相关理财产品和服务？</p>
                    <div className="topicCont">
                        <CheckboxGroup options={options3} onChange={this.sv.bind(this,options3,'s3v1','s3v1s')} style={{padding:'15px 0 4px'}}/>
                        <Input style={displays} onChange={this.s3v1other}/>
                    </div>
                    <div className="nextPar">
                      <Button type="primary" className="next next3"  size="large" onClick={this.handlenext.bind(this,'v3')}>下一步</Button>
                    </div>
                </div>
                <div className="topic topic4" id="topic4" style={{display:topic4}}>
                    <p>您是否拥有以下这些银行贵宾卡？</p>
                    <div className="topicCont">
                        <CheckboxGroup value={this.state.s4value1} options={this.state.options4}  onChange={this.sv.bind(this,this.state.options4,'s4v2','s4v1s')} style={{padding:'15px 0 4px'}}/><br/>
                        <CheckboxGroup value={this.state.s4value2} options={options4s}  onChange={this.sv.bind(this,options4s,'s4v2s','s4v1s')} style={{padding:'0'}}/>
                    </div>
                    <div className="nextPar">
                      <Button type="primary" className="next next4"  size="large" onClick={this.handlenext.bind(this,'v4')}>下一步</Button>
                    </div>
                </div>
                <div className="topic topic5" id="topic5" style={{display:topic5}}>
                    <p>请问对于投资风险，以下哪一项描述更符合您的情况？ </p>
                    <div className="topicCont topicContR">
                        <RadioGroup onChange={this.s5_risk} style={{width:'100%'}}>
                            <Radio style={radiostyle} value={'1'}> 以保值为主，不愿意承受风险 </Radio>
                            <Radio style={radiostyle} value={'2'}> 投资有风险，对一定程度风险愿意并能够接受</Radio>
                            <Radio style={radiostyle} value={'3'}> 愿意承受较大风险，因为高风险就是高回报</Radio>
                            <Radio style={radiostyle} value={'4'}> 不知道/拒答</Radio>
                        </RadioGroup>
                    </div>
                    <div className="nextPar">
                      <Button type="primary" className="next next5"  size="large" onClick={this.handlenext5}>下一步</Button>
                    </div>
                </div>
                <div className="topic topic6" id="topic6" style={{display:topic6}}>
                    <p>请问您平时如何支配您的收入？请从下列描述中选择最符合您的一项</p>
                    <div className="topicCont topicContR">
                         <RadioGroup onChange={this.s6_overhead} style={{width:'100%'}}>
                            <Radio style={radiostyle} value={'1'}> 消费为主（日常开销、购物消费、还贷等） </Radio>
                            <Radio style={radiostyle} value={'2'}> 储蓄为主（活期、定期存款）</Radio>
                            <Radio style={radiostyle} value={'3'}> 投资理财为主（买理财产品、基金、保险、股票等）</Radio>
                            <Radio style={radiostyle} value={'4'}> 消费、储蓄、投资理财的比例差不多</Radio>
                            <Radio style={radiostyle} value={'5'}> 交给家人支配，自己不太了解</Radio>
                            <Radio style={radiostyle} value={'6'}> 不知道/拒答</Radio>
                        </RadioGroup>
                    </div>
                    <div className="nextPar">
                      <Button type="primary" className="next next6"  size="large" onClick={this.handlenext6}>下一步</Button>
                    </div>
                </div>
                <div className="topic topic7" id="topic7" style={{display:topic7}}>
                    <p>以下选项中，您在最近一年中，使用过的理财方式有？</p>
                    <div className="topicCont">
                        <CheckboxGroup value={this.state.s7value1} options={options7} onChange={this.sv.bind(this,options7,'s7v1','s7v1s')} style={{padding:'15px 0 4px'}}/><br/>
                        <CheckboxGroup value={this.state.s7value2} options={options7s} onChange={this.sv.bind(this,options7s,'s7v1s','s7v1s')} style={{padding:'0'}}/>
                    </div>
                    <div className="nextPar">
                      <Button type="primary" className="next next7"  size="large" onClick={this.handlenext.bind(this,'v7')}>下一步</Button>
                    </div>
                </div>
                <div className="topic topic8" id="topic8" style={{display:topic8}}>
                    <p>您是否拥有信用卡？</p>
                    <div className="topicCont topicContR">
                        <RadioGroup onChange={this.s8_credit_card} style={{width:'100%'}}>
                            <Radio style={radiostyle} value={'1'}> 有</Radio>
                            <Radio style={radiostyle} value={'2'}> 没有</Radio>
                        </RadioGroup>
                    </div>
                    <div className="nextPar">
                      <Button type="primary" className="next next8"  size="large" onClick={this.handlenext8}>下一步</Button>
                    </div>
                </div>
                <div className="topic topic8a" id="topic8a" style={{display:topic8a}}>
                    <p>您目前拥有哪些银行信用卡？</p>
                    <div className="topicCont">
                        <CheckboxGroup options={options8a} onChange={this.sv.bind(this,options8a,'s8av1','s8av1s')} style={{padding:'15px 0 4px'}}/>
                    </div>
                    <div className="nextPar">
                      <Button type="primary" className="next next8a"  size="large" onClick={this.handlenext.bind(this,'v8a')}>下一步</Button>
                    </div>
                </div>
                <div className="topic topic8b" id="topic8b" style={{display:topic8b}}>
                    <p>您目前最常使用的信用卡是？</p>
                    <div className="topicCont topicContR">
                        <RadioGroup onChange={this.s8b_commonly_used} style={{width:'100%'}}>
                            {opation8b}
                        </RadioGroup>
                    </div>
                    <div className="nextPar">
                      <Button type="primary" className="next next8b"  size="large" onClick={this.handlenext8b}>下一步</Button>
                    </div>
                </div>
                <div className="topic topic9" id="topic9" style={{display:topic9}}>
                    <p>您的{daan}信用卡可用额度在以下哪个范围？</p>
                    <div className="topicCont topicContR">
                        <RadioGroup onChange={this.s9_quota} style={{width:'100%'}}>
                            <Radio style={radiostyle} value={'1'}> 1000元以下</Radio>
                            <Radio style={radiostyle} value={'2'}> 1000~3000元</Radio>
                            <Radio style={radiostyle} value={'3'}> 3000~5000元</Radio>
                            <Radio style={radiostyle} value={'4'}> 5000~8000元</Radio>
                            <Radio style={radiostyle} value={'5'}> 8000~16000元</Radio>
                            <Radio style={radiostyle} value={'6'}> 16000~22000元</Radio>
                            <Radio style={radiostyle} value={'7'}> 22000~30000元</Radio>
                            <Radio style={radiostyle} value={'8'}> 30000~50000元</Radio>
                            <Radio style={radiostyle} value={'9'}> 50000~100000元</Radio>
                            <Radio style={radiostyle} value={'10'}> 100000元以上</Radio>
                        </RadioGroup>
                    </div>
                    <div className="nextPar">
                      <Button type="primary" className="next next9"  size="large" onClick={this.handlenext9}>下一步</Button>
                    </div>
                </div>
                <div className="topic topic10" id="topic10" style={{display:topic10}}>
                    <p>以下关于手机银行APP的说法，哪个符合您的情况？</p>
                    <div className="topicCont topicContR">
                        <RadioGroup onChange={this.s10_statement} style={{width:'100%'}}>
                            <Radio style={radiostyle} value={'1'}> 没有装任何手机银行APP</Radio>
                            <Radio style={radiostyle} value={'2'}> 装有手机银行，但不经常使用</Radio>
                            <Radio style={radiostyle} value={'3'}> 装有手机银行，经常使用手机银行APP办理业务</Radio>
                        </RadioGroup>
                    </div>
                    <div className="nextPar">
                      <Button type="primary" className="next next10"  size="large" onClick={this.handlenext10}>下一步</Button>
                    </div>
                </div>
                <div className="topic topic11" id="topic11" style={{display:topic11}}>
                    <p>请问您消费时，通常会选择使用哪些支付工具？</p>
                    <div className="topicCont">
                        <CheckboxGroup options={options11} onChange={this.sv.bind(this,options11,'s11v1','s11v1s')} style={{padding:'15px 0 4px'}}/>
                        <Input style={displays} onChange={this.s11v1other}/>
                    </div>
                    <div className="nextPar">
                      <Button type="primary" className="next next11"  size="large" onClick={this.handlenext.bind(this,'v11')}>下一步</Button>
                    </div>
                </div>
                <div className="topic topic12" id="topic12" style={{display:topic12}}>
                    <p>请问以下哪个描述符合您目前的支付习惯？</p>
                    <div className="topicCont topicContR">
                        <RadioGroup onChange={this.s12_habit} style={{width:'100%'}}>
                            <Radio style={radiostyle} value={'1'}> 无论线上还是线下支付，我都优先使用信用卡</Radio>
                            <Radio style={radiostyle} value={'2'}> 大额我都会使用信用卡，小额我会使用第三方支付（支付宝/微信等）</Radio>
                            <Radio style={radiostyle} value={'3'}> 无论线上还是线下支付，我都优先使用第三方支付（支付宝/微信等）</Radio>
                            <Radio style={radiostyle} value={'4'}> 线上支付我会优先使用第三方支付（支付宝/微信等），线下支付我会优先使用信用卡</Radio>
                            <Radio style={radiostyle} value={'5'}> 其他，请注明{this.state.s12_habit_code==='5'?<Input style={displays} onChange={this.s12vother}/>:''}</Radio>
                        </RadioGroup>
                    </div>
                    <div className="nextPar">
                      <Button type="primary" className="next next12"  size="large" onClick={this.handlenext12}>提交</Button>
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
      s11v1other=(e)=>{
        this.setState({s11v1other:e.target.value})
      }


}

export default Index;
