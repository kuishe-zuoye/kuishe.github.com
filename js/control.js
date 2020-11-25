//友情链接打开链接
function linkChange(obj){
var linkObj = document.all(obj);
if(linkObj==null)
	return;
var link = linkObj.options[linkObj.selectedIndex].value;
if(link!='0')
	window.open(link);
}
//导航菜单切换
function dmove(str){
       for (var i=1;i<12;i++){
      if (i==str){
     document.getElementById("daohang"+str).className='dhxz'
     }else
     {
     document.getElementById("daohang"+i).className='dhwxz'
     }
   }
}

//搜索开始
function searchs()
{
	  var s=document.getElementById("search").value
	  if (s=="")
	 {
		 alert("请输入关键词")
		 return false
	 }
}

//登录判断开始
  function logins()
  {
	 var u=document.getElementById("username").value
	 var p=document.getElementById("password").value
	 var yzm=document.getElementById("yzm").value
	 var code=document.getElementById("code").innerHTML
	 //alert(code)
	 //alert(yzm)
	 if (u=="")
	 {
		 alert("用户名不能为空")
		 return false
	 }
	  if (p=="")
	 {
		 alert("密码不能为空")
		 return false
	 }
	 if (yzm!=code)
	 {
		 alert("验证码错误")
		 return false
	}
	alert("成功")
  }
  //登录判断结束