/*
 * @Author: zqm
 * @Date: 2018-12-12 14:01:35
 * @Last Modified by:   zqm
 * @Last Modified time: 2018-12-12 14:01:35
 */
import React, { Component } from 'react';
import { Radio,Button,message,Checkbox,Input  } from 'antd';
import {_addLableFamilystatus,_url,back} from '../api/Api.jsx';
import { Requires } from '../api/NewRequire.jsx';

import { Picker, List, Whitespace } from 'antd-mobile';
import { createForm } from 'rc-form';
import "../../../node_modules/antd-mobile/dist/antd-mobile.min.css"
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
let date = new Date();
const Y = date.getFullYear()
const M = date.getMonth()+1
const D = date.getDate()
var timeArrs=[];
  for(var j=1;j<13;j++){
    if(j==2){
      var numArr1=[]
      for(var i=1;i<29;i++){
        var obj={};
        obj.value=i;
        obj.label=i+'日';
        numArr1.push(obj)
      }
      var obj={};
      obj.value=j;
      obj.label=j+'月';
      obj.children=numArr1;
      timeArrs.push(obj);
    }else if(j+''=='1'||j==3||j==5||j==7||j==8||j==10||j==12){
      var numArr2=[]
      for(var i=1;i<32;i++){
        var obj={};
        obj.value=i;
        obj.label=i+'日';
        numArr2.push(obj)
      }
      var obj={};
      obj.value=j;
      obj.label=j+'月';
      obj.children=numArr2;
      timeArrs.push(obj);
    }else{
      var numArr3=[]
      for(var i=1;i<31;i++){
        var obj={};
        obj.value=i;
        obj.label=i+'日';
        numArr3.push(obj)
      }
      var obj={};
      obj.value=j;
      obj.label=j+'月';
      obj.children=numArr3;
      timeArrs.push(obj);
    }
  }
  var t=Y;
  var weekdayArr=[];
  for(var i=46;i>0;i--){
    var obj={};
      var str=t--;
      str =str +'年';
      obj.value=t+1;
      obj.label=str;
      obj.children=timeArrs;
      weekdayArr.push(obj)
  }
  const options = weekdayArr

class Index extends Component {
    state = {
       marriage_status:'',
       marriage_status_code:'',

       have_child:'',
       have_child_code:'',

       child_year:'',
       child_month:'',
       child_day:'',

       pickervalue:[],

       // topic1:'none',
       topic1:'block',
       topic2:'none',
       topic3:'none',


       token:'',
    };
    componentDidMount() {
        // console.log(GetRequest())
    };
    submit=()=>{
        const {marriage_status,marriage_status_code,have_child,have_child_code
            ,child_year,child_month,child_day}=this.state
        let data={
            marriage_status:marriage_status,
            marriage_status_code:marriage_status_code,
            have_child:have_child,
            have_child_code:have_child_code,
            // child_year:child_year,
            // child_month:child_month,
            // child_day:child_day,
            birthDay:child_year+'-'+child_month+'-'+child_day,
            token:GetRequest().token
            // token:'5551'
        }
        Requires(_addLableFamilystatus,data).then((json)=>{
            back(GetRequest().source,json)
        });
    }
    // 第一题
      marriage_status = (e) => {
        let marriage_status;
        if(e.target.value==='1'){
          marriage_status = '单身'
        }else if(e.target.value==='2'){
          marriage_status = '已婚'
        }else if(e.target.value==='3'){
          marriage_status = '离异/丧偶'
        }
        this.setState({
          marriage_status_code: e.target.value,
          marriage_status:marriage_status,
        });
      }
      handlenext1=()=>{
        const {marriage_status,marriage_status_code}=this.state
        if(marriage_status===""||marriage_status_code === ''){
          message.error('请选择您的婚姻状况',2)
        }else{
            if(marriage_status_code==='1'){
                // 提交
                this.submit()
            }else{
              this.setState({
                topic1:'none',
                topic2:'block',
              })
            }

        }
      }
    // 第二题
      have_child = (e) => {
        let have_child;
        if(e.target.value==='1'){
          have_child = '我有1个孩子'
        }else if(e.target.value==='2'){
          have_child = '我有至少2个孩子'
        }else if(e.target.value==='3'){
          have_child = '我没有孩子'
        }else if(e.target.value==='4'){
          have_child = '我没有孩子，但是目前怀孕中'
        }
        this.setState({
          have_child_code: e.target.value,
          have_child:have_child,
        });
      }
      handlenext2=()=>{
        const {have_child,have_child_code}=this.state
        if(have_child===""||have_child_code === ''){
          message.error('请选择您是否有孩子',2)
        }else{
            if(this.state.have_child_code==='3'||this.state.have_child_code==='4'){
                // 提交
                this.submit()
            }else{
                this.setState({
                    topic2:'none',
                    topic3:'block',
                })
            }

        }
      }

    // 第三题
    change=(v)=>{
        console.log(v)
        this.setState({
            pickervalue:v,
            child_year:v[0],
            child_month:v[1],
            child_day:v[2],
        })
    }
    handlenextsave=()=>{
        const {child_year,child_month,child_day}=this.state
        if(child_year===""){
          message.error('请选择孩子的出生年月',2)
        }else{
          if(child_year===Y&&child_month>M){
            message.error('请选择正确的日期',3)
          }else if(child_year===Y&&child_month===M&&child_day>D){
            message.error('请选择正确的日期',3)
          }else{
            this.submit()
          }
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
        const {topic1,topic2,topic3}=this.state
        const displays = {display:'inline-block',width:'80%',marginLeft:'40px'}
        //
        const next1 = this.state.marriage_status_code==='1'?'提交':'下一步'
        const next2 = this.state.have_child_code==='3'||this.state.have_child_code==='4'?'提交':'下一步'
        return (
            <div className="internetcCnt" style={{height:window.innerHeight}}>
                <h3 className="echo-title">家庭状况:</h3>
                <div className="topic topic1" style={{display:topic1}}>
                    <p>请选择您的婚姻状况?</p>
                    <div className="topicCont topicContR">
                        <RadioGroup onChange={this.marriage_status} style={{width:'100%'}}>
                            <Radio style={radiostyle} value={'1'}> 单身</Radio>
                            <Radio style={radiostyle} value={'2'}> 已婚</Radio>
                            <Radio style={radiostyle} value={'3'}> 离异/丧偶</Radio>
                        </RadioGroup>
                    </div>
                    <Button type="primary" className="next next1" size="large" onClick={this.handlenext1}>{next1}</Button>
                </div>
                <div className="topic topic2" style={{display:topic2}}>
                    <p>您有孩子吗？</p>
                    <div className="topicCont topicContR">
                        <RadioGroup onChange={this.have_child}  style={{width:'100%'}}>
                            <Radio style={radiostyle} value={'1'}> 我有1个孩子</Radio>
                            <Radio style={radiostyle} value={'2'}> 我有至少2个孩子</Radio>
                            <Radio style={radiostyle} value={'3'}> 我没有孩子</Radio>
                            <Radio style={radiostyle} value={'4'}> 我没有孩子，但是目前怀孕中</Radio>
                        </RadioGroup>
                    </div>
                    <Button type="primary" className="next next2" size="large" onClick={this.handlenext2}>{next2}</Button>
                </div>

                <div className="topic topic3" id="topic3" style={{display:topic3}}>
                    <p>您选择您孩子的出生年月。如果您有多个孩子，请按照您最小的孩子来选择</p>
                    <div className="topicCont" style={{paddingBottom:'0px'}}>
                        <Picker extra="请选择" data={options} title="出生年月" value={this.state.pickervalue}  onChange={this.change}>
                          <List.Item arrow="horizontal">出生年月</List.Item>
                        </Picker>
                    </div>
                    <div className="nextPar">
                      <Button type="primary" className="next next3"  size="large" onClick={this.handlenextsave}>提交</Button>
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
                    background:#efeff4;
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
                    background-color: #efeff4;
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
                  .am-list-item .am-list-line .am-list-content, .am-list-item .am-list-line .am-list-extra {
                      width: 200px;overflow: initial;
                  }
                `}</style>
            </div>
        )
    }
}

export default Index;
