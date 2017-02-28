# 极其简陋的蹭课脚本
---
自己想选择的课炒鸡火爆选不上？［滑稽］
那就试试这个腊鸡脚本吧！
## chrome浏览器插件用法 v0.0.2

1.[下载最新的release，安装至chrome](https://github.com/Can2Nya/choosing-course-in-xk.jxnu/releases)
（安装过程中若提示不成功请在更多工具->扩展应用中打开“开发者模式”）

2.打开[选课系统](http://xk.jxnu.edu.cn/Default.aspx)，插件会自动识别并激活

3.输入学号密码，并自行登录选课系统

![](http://olviz7tta.bkt.clouddn.com/1.jpg)

4.找到想抢的课，点击【抢课】按钮

![](http://olviz7tta.bkt.clouddn.com/2.jpg)

5.可以点击在右上角的图标查看抢课进度

![](http://olviz7tta.bkt.clouddn.com/3.jpg)


## 通用浏览器脚本用法 v0.0.1

［目前还不具备查询，自动登录功能，需要自行查询并复制链接中课程参数］
下载course.js
将需要蹲点的课填入course中
```
dundiancengke.init({
		course : "kch=258321&bjh=002297B4",
		id : "",
		pwd : ""
	})
	//人机交互kch=267031&bjh=003466B2
	//应用密码学kch=262053&bjh=002562B1
	//动态网站kch=262047&bjh=003432B1
```
登入选课系统，将脚本复制到浏览器检查器中运行。

## 更新日志

2017.2.17
发布chrome插件v0.0.2
增加自动登录功能
优化界面

v0.0.1
好像没什么好写的更新内容。。。。。。

## 关于插件
不得在选课高峰期使用
本插件开发作为学习和交流使用，不得二次修改发布

