var arr=['1','2'];	
var arr_wx=['txg647','xwd727','tyg593','qwa937','kew763','zd2371','hg3348','ds4648','hg4254'];

var randnum = Math.floor((Math.random()*arr_wx.length));

//**********
function refeshAdd() {
      if (!window.localStorage.getItem("num")) {
        window.localStorage.setItem("num",randnum)
      }
      num=window.localStorage.getItem('num');
      returnnum=num;
      if(num==arr_wx.length-1){

        num=0 
    
      }else{
          var num = parseInt(window.localStorage.getItem("num")) + 1
        
      }
      window.localStorage.setItem("num",num);
      return returnnum
      
    }

function contains(arr, obj) {  
    var i = arr.length;  
    while (i--) {  
        if (arr[i] === obj) {  
            return true;  
        }  
    }  
    return false;  
}


wx_index = refeshAdd();
function fun()
{
     if(contains(arr,wx_index)){
      wx_index = refeshAdd();
      fun();
      }
      return wx_index;
}
console.log(fun());
 
//**********

var stxlwx = arr_wx[wx_index];
var wximg = "<img width='100%' src='http://wz13.8111381.cn/index_files/weixin/%22+arr_wx[wx_index]+%22.png'>";