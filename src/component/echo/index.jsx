/*
 * @Author: zqm
 * @Date: 2018-12-12 14:01:48
 * @Last Modified by:   zqm
 * @Last Modified time: 2018-12-12 14:01:48
 */
import React, { Component } from 'react';
import { Radio,Button,message,Checkbox,Input  } from 'antd';
import {_getIndustryLabel,_url} from '../api/Api.jsx';
import { Requires } from '../api/NewRequire.jsx';

// 获取url后的参数
function GetRequest() {
   var url = window.location.href; //获取url中"?"符后的字串
   console.log(url)
   url = url.split('?')[1]
   console.log(url)
   var theRequest = new Object();
   // if (url.indexOf("?") != -1) {
   //    var str = url.substr(1);
      var strs = url.split("&");
      for(var i = 0; i < strs.length; i ++) {
         theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
      }
   // }
   return theRequest;
}
let date = new Date();
const Y = date.getFullYear()
const M = date.getMonth()+1
const D = date.getDate()

class Index extends Component {
    state = {
       data:[],
       type:'',
       token:'',
       source:'',
       title:'',
       abled:false,
    };
    componentDidMount() {
      Requires(_getIndustryLabel,{token:GetRequest().token,type:GetRequest().type}).then((json)=>{
          // message.success('提交成功',3)
          console.log(json)
          if(json.code+''==='1'){
            this.setState({data:json.data})
          }else{
            message.error('获取数据失败,请重试！',3)
          }

      });
        // type //1汽车 2金融 3互联网 4母婴 5家庭
        let title;
        if(GetRequest().type+''==='1'){
          title='私家车情况:'
        }else if(GetRequest().type+''==='2'){
          title='金融习惯:'
        }else if(GetRequest().type+''==='3'){
          title='互联网习惯:'
        }else if(GetRequest().type+''==='5'){
          title='家庭状况:'
        }else{
          title = ''
        }
        this.setState({
           type:GetRequest().type,
           token:GetRequest().token,
           source:GetRequest().source,
           title:title,
        })
    };

    clickHref=()=>{
        const {type,token,source}=this.state
        this.setState({abled:true})
        if(type==='1'){
          window.location.href = _url+'#/privateCar?token='+token+'&source='+source
        }else if(type==='2'){
          window.location.href = _url+'#/financialHabits?token='+token+'&source='+source
        }else if(type==='3'){
          window.location.href = _url+'#/internetHabits?token='+token+'&source='+source
        }else if(type==='5'){
          window.location.href = _url+'#/familystatus?token='+token+'&source='+source
        }
    }
    render() {
        const data = this.state.data.map((item,index)=>{
            const list = item.answerList.map((item,index)=>{
              // item.tostring().replace('其他，请注明', ' ')
              // return <div className="itemp2" key={index}>{item.tostring().replace('其他，请注明', ' 其他，请注明')}</div>
              return <div className="itemp2" key={index}>{item}</div>
            })
          return(
            <div key={index} className="itemList">
              <div className="itemp1"><span>Q{index+1}.</span>{item.question}</div>
              <div className="itemp2s">{list}</div>
            </div>
            )
        })

        return (
            <div className="echocont">
              <h3 className="echo-title">{this.state.title}</h3>
              {data}
              <div className="re-edit"><button disabled={this.state.abled} onClick={this.clickHref}>重新编辑信息</button></div>
                <style>{`
                  .echo-title{
                    padding: 10px 0 0 15px;
                    color: #ffa733;
                    font-size: 18px;
                  }
                  .echocont{
                    background:#efeff4;
                    height:100%;
                    text-align:left;
                    min-height:800px;
                    padding-bottom:100px;
                  }
                  .echocont .itemList .itemp1{
                    line-height:30px;
                    padding:10px 15px 10px 45px;
                    margin-bottom:0;
                  }
                  .echocont .itemList .itemp2{
                    padding:2px 15px 2px 45px;
                    margin-bottom:0;
                  }
                  .echocont .itemp1{
                    font-size:14px;
                    color:#888;
                    position:relative;
                  }
                  .echocont .itemp1 span{
                    font-size:14px;
                    color:#ffa722;
                    position:absolute;
                    left:15px;
                    top:10px;
                  }
                  .echocont .itemp2s{
                    width:100%; padding:10px 0;
                    background-color:#fff;
                  }
                  .echocont .itemp2{
                    background:#fff;
                    font-size:16px;
                    color:#aeb8ce;
                  }
                  .re-edit{
                    position:fixed;
                    bottom:0;
                    left:0;
                    width:100%;
                    height:90px;
                    text-align:center;
                    background:#efeff4;
                  }
                  .re-edit button{
                    position:absolute;
                    bottom:25px;
                    width:80%;
                    left:10%;
                    height:40px;
                    background:#ffa733;
                    color:#fff;
                    border:0px solid #ffa733;
                    text-align:center;
                    line-height:40px;
                    border-radius:6px;
                  }
                `}</style>
            </div>
        )
    }
}

export default Index;
