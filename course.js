(function(){
	
	var dundiancengke = {
		course : "",
		id : "",
		pwd : "",
		frashcount : 0,
		submitcount : 0,
		submitform : function(){
			__doPostBack('ctl00$chdContent$btnSelect','')//学校自带提交方法
		},
		isSubmit : function(){
				//if($(".login-box")){
				//	this.login()
				//}
				if($("#ctl00_chdContent_btnSelect").length==0) {
					this.setTime()
					console.log("load")
				}
				else if($("#ctl00_chdContent_btnSelect").length>0&&$("#ctl00_chdContent_btnSelect").attr("disabled")=="disabled"){
					this.frashcount++
					$("#conut1").children("span").text(this.frashcount)
					this.setTime()
					console.log("reload2")
				}
				else if($("#ctl00_chdContent_btnSelect").length>0&&$("#ctl00_chdContent_btnSelect").attr("disabled")==undefined){
					this.submitcount++;
					$("#conut2").children("span").text(this.submitcount)
					console.log("cansubmit")
					this.submitform()
				}
		},
		reLoad : function(){
			var self = this
			var html = "http://xk.jxnu.edu.cn/Step3/ClassInfor.aspx?"+self.course
			$("html").load(html,function(){
				$("html").append("<div class='conut' style='width:200px;height:100px;position: absolute;padding:30px;top:20px;background: rgba(0, 0, 0, 0.33);'></div>")
				$(".conut").append("<div>当前蹲点课程:<span>"+$(".row-fluid u:first-child").text()+"</span></div>")
				$(".conut").append("<div id='conut1'>刷新次数:<span>0</span></div>")
				$(".conut").append("<div id='conut2'>可提交次数:<span>0</span></div>")
				self.isSubmit()
			})
		},
		setTime : function(){
			var self = this
			function reload(){
				self.reLoad()
			}
			setTimeout(reload,3000)
		},
		/*login : function(){
			var self = this
			$("[name='txtUserNum']").val(self.id)
			$("[name='txtPassword']").val(self.pwd)
			$("form").submit()
			self.isSubmit()
		},*/
		init : function(config){
			if(this.submitcount) return false
			else {
				console.log("start")
				this.course = config.course
				this.id = config.id
				this.pwd = config.pwd
				this.isSubmit()
			}
		}
	}
	//setInterval("dundiancengke.init()",3000)
	dundiancengke.init({
		course : "kch=258321&bjh=002297B4",
		id : "",
		pwd : ""
	})
	//人机交互kch=267031&bjh=003466B2
	//应用密码学kch=262053&bjh=002562B1
	//动态网站kch=262047&bjh=003432B1
}
)();