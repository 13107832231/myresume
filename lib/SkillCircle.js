function SkillCircle(options){
	this._init(options);
}
SkillCircle.prototype = {
	constructor:SkillCircle,
	_init:function(options){
		options = options || {};
		this.datas = options.datas || [];
		this.group = {};
	},
	render:function(layer){
		this.group = new Konva.Group({
			x:stage.width()/2,
			y:stage.height()/2
		});
		var datas = this.datas;
		for(var i=0;i<datas.length;i++){
			var myGroup = new Konva.Group({
				x:0,y:0
			});
			var item = datas[i];
			var x = item.radius*Math.cos(item.angle*Math.PI/180);
			var y = item.radius*Math.sin(item.angle*Math.PI/180);
			var skillCircle = new Konva.Circle({
				x:x,
				y:y,
				radius:parseInt((item.radius==outerRadius?(innerRadius + 20):innerRadius)/4),
				stroke:item.stroke,
				fill:item.fill,
				strokeWidth:item.strokeWidth
			});
			myGroup.add(skillCircle);
			// 再来绘制文本内容
			var circleTxt = new Konva.Text({
				x:x - item.radius,
				y:y - 10/2,
				width:2*item.radius,
				lineHeight:10,
				align:"center",
				text:item.text,
				fill:"#fff",
				fontSize:10
			});	
			myGroup.add(circleTxt);
			this.group.add(myGroup);
		}
		layer.add(this.group);
	},
	rotate:function(layer){
	  var that = this;
	  var anglePerSecond = 30;
	  console.log(that.group.children);
	  // 借助Konva中的Animation构建出animation对象
  	  var anim = new Konva.Animation(function(frame) {
      	// frame成为是帧,这个方法是每绘制一帧都会调用
      	var time = frame.timeDiff / 1000;
        that.group.rotate(anglePerSecond * time);
        // 转动所绕的中心点
        that.group.children.rotate(-anglePerSecond * time);
      }, layer);
      // 启动动画
      anim.start();
	}
}