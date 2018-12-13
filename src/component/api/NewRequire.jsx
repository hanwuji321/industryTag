/*
 * @Author: zqm 
 * @Date: 2018-12-12 14:02:12 
 * @Last Modified by: zqm
 * @Last Modified time: 2018-12-12 14:02:35
 */
export function Requires(url, data) {
  return fetch(url, {
    method: "POST",
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "deviceinfo":JSON.stringify({
          "source":'3',
          "versionCode":'2'
        })
    },
    body: JSON.stringify(data)
  })
    .then((res) => {
      if (res.ok) {
        return res.json().then((json) => {
          return json;
        })
      } else {
        return res.json().then((json) => {
          return json;
        })
      }
    })
    .catch((e) => {
      console.log("error")
    })
    	
}






