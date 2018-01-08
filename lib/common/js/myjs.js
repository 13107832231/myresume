$(function(){
	// 我的描述悬浮效果
	$(".mydesc").hover(function() {
		$(".mydesc").css('box-shadow', '1px 1px 2px 2px #aaa');
		$(".mydesc").addClass('shake');
	}, function() {
		$(".mydesc").css('box-shadow', '0px 0px 0px 0px #000');
		$(".mydesc").removeClass('shake')
	});
	// 技术盒子点击效果
	$("#technical_box").click(function(event) {
		$("#technical_box").addClass('lightSpeedIn center');
		var timer = setTimeout(function(){
			$("#technical_box").removeClass('lightSpeedIn center')
		}, 1000)
	});
	// $("#technical_box").hover(function() {
	// 	$("#technical_box").addClass('bounceInRight center');
	// }, function() {
	// 	$("#technical_box").removeClass('bounceInRight center')
	// });
	// 我的项目介绍悬浮效果
	$(".project").hover(function() {
		console.log($(this).index)
		$(this).css('border', '2px solid #4b3dea');
		$(this).css('color', '#bd2d2d');
	}, function() {
		$(this).css('border', '2px solid #b9d3dd');
		$(this).css('color', '#b86646');
	});
	$(".mydesc").hover(function() {
		$(".mydesc").css('box-shadow', '1px 1px 2px 2px #aaa');
		$(".mydesc").addClass('shake');
	}, function() {
		$(".mydesc").css('box-shadow', '0px 0px 0px 0px #000');
		$(".mydesc").removeClass('shake')
	});
})