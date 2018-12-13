/*
 * @Author: zqm
 * @Date: 2018-12-12 14:02:02
 * @Last Modified by:   zqm
 * @Last Modified time: 2018-12-12 14:02:02
 */
/**
|--------------------------------------------------
| @class 接口API
| Created by zhouqm on 2018/8/6.
|
|--------------------------------------------------
*/
// 测试
// export const _Base = "http://10.0.34.226:8010/taidu8-web-app/"
// export const _Base = "https://apitest.taidu8.com/app/"
// export const _hrefurl='https://consolecs.taidu8.com'
// export const _url = 'http://localhost:3001/'
// 正式
export const _url = 'https://wwwtest.taidu8.com/app/industryTag/'
export const _Base = "https://apitest.taidu8.com/app/"

//互联网习惯
// export const _addLableInternetUser = _Base+"industryLabel/addLableInternetUser"
export const _addLableInternetUser = _Base+"center/fill/saveInteretInfo"
// 家庭情况
// export const _addLableFamilyStatus = _Base+"industryLabel/addLableFamilyStatus"
export const _addLableFamilystatus = _Base+"center/fill/saveFamilyInfo"
// 私家车情况
// export const _addLableCarUser = _Base+"industryLabel/addLableCarUser"
export const _addLableCarUser = _Base+"center/fill/saveCarInfo"
// 金融习惯
// export const _addLableFinancialUser = _Base+"industryLabel/addLableFinancialUser"
export const _addLableFinancialUser = _Base+"center/fill/saveFinanceInfo"
// 回显
// export const _getIndustryLabel = _Base+"industryLabel/getIndustryLabel"
export const _getIndustryLabel = _Base+"center/fill/getIndustryInfo"
//编辑保存返回
export const back=(source,json)=>{
  if(source+''==='1'){
      window.location.href = _url+'perfectInformationBack.html?ly=1'
  }else if(source+''==='2'){
      window.location.href = _url+'perfectInformationBack.html?ly=2'
  }else if(source+''==='4'){
      window.location.href = _url+'perfectInformationBack.html?ly=4'
  }
}
