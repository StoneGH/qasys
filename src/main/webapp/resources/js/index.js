$(function() {
	navFixedEffect();
	customerEffect();
	caseSwitchEffect();
	$("img").lazyload({
        effect : "fadeIn"
    });
});

/**
 * 固定导航效果
 */
function navFixedEffect() {
	if (!navigator.userAgent.match(/mobile/i)) {
		$("#pcnavbar").show();
		$("#mobnavbar").hide();
		$(window).scroll(function() {
			var scrollTop = $(document).scrollTop();
			if (scrollTop >= 110) {
				$("#fixedNavbar").show();
			} else {
				$("#fixedNavbar").hide();
			}
		});
	} else {
		$("#pcnavbar").hide();
		$("#mobnavbar").show();
	}
}

/**
 * 合作伙伴效果
 */
function customerEffect() {
	$(".cl-con").hover(function() {
		$(this).children(".cl-h").animate({
			top : 0
		}, 600, function() {
		});
	}, function() {
		$(this).children(".cl-h").animate({
			top : "100%"
		}, 600, function() {
		});
	});
}

/**
 * 案例切换效果
 */
function caseSwitchEffect() {
	$(".case .tabs span").click(
			function(obj, index) {
				$(".case .tabs span").removeClass("on");
				$(".case .case-lists").removeClass("on");
				$(this).addClass("on");
				$(".case .case-lists").eq($(".case .tabs span").index($(this)))
						.addClass("on");
			});
}

/**
 * 留言
 */
function takeMsg() {
	var name = $("#msgForm input[name='name']").val();
	var tel = $("#msgForm input[name='tel']").val();
	var msg = $("#msgForm textarea[name='msg']").val();
	if (name.length < 1) {
		$("#msgForm input[name='name']").focus();
		return;
	}
	if (tel.length < 1 || !(/^1[1-9]\d{9}$/.test(tel))) {
		$("#msgForm input[name='tel']").focus();
		return;
	}
	if (msg.length < 1 || msg.length > 200) {
		$("#msgForm textarea[name='msg']").focus();
		return;
	}
	$.ajax({
		url : "message/add",
		type : "post",
		dataType : "json",
		data : {
			"cname" : name,
			"ctel" : tel,
			"message" : msg
		},
		success : function(data) {
			alert("您的留言已提交，客户经理将在收到的第一时间联系你！");
			$("#msgForm")[0].reset();
		}
	});
}