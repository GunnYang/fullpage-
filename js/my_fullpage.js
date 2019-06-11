$(function(){
	var k = $(window).height();
	var flag = false;
//	此处名字应该对应上index里面最大的div的id名称
	$(".next").click(function(){
			$.fn.fullpage.moveSectionDown();
	});
	$('#fullpage').fullpage({
		
//		meau: false,
		navigation:true,
		loopBottom:true,
		
		//回调函数，屏幕滚动结束后执行
		afterLoad:function(anchorLink,index){
			 if(index == 2 && flag ==false){
			 	$(".next").fadeOut();
			 	$(".search").show().animate({'right':375},1500,"easeOutBack",function(){
			 		$(".search-text").animate({"opacity":1},500,function(){
			 			$(".search-pic").show().animate({"width":158,"height":30,"top":22,"right":220},500);
			 			$(".goods-2").show().animate({"height":228,"left":275,"top":65},500);
			 			$(".section2-text2").animate({"opacity":1},500,function(){
			 				$(".next").fadeIn();
			 			});
			 			$(".search").hide();
			 		});
			 	});
			}
			 
			if(index == 7){
				$(".next").fadeOut();
				$(".star").animate({"opacity":1},1000,function(){
					$(".good-07").animate({"opacity":1},1500,function(){
						$(".next").fadeIn();
					});
				});
			}
			
			if(index == 8){
//				$(".btn-shop").hover(function(){
//					$(".btn-08-a").toggle();
//				})
				$(".next").fadeOut();
				$(document).mousemove(function(event){
					var x = event.pageX - $(".hand-08").width()/2 - 10;
					var y = event.pageY +10
					var Min = k-449;
					if(Min > y){
						y = Min;
					}
					$(".hand-08").css({"left":x,"top":y});
				});
//				点击回到顶部
				$(".again").click(function(){
					$.fn.fullpage.moveTo(1);
//					移除所有的img和div的样式
//					$(" img, .move").attr("style","");
				})
				
				
				
			}
		},
//		滚动时的就开始执行
		onLeave:function(index,nextIndex,direction){
			if(index == 2 && nextIndex == 3){
				$(".next").fadeOut();
				$(".sofa-2").show().animate({"bottom":-(k - 250),"width":207,"left":259},1500,function(){
					$(".section3-pic2-a").animate({"opacity":1},500,function(){
						$(".section3-pic3-a").animate({"opacity":1},500,function(){
							$(".next").fadeIn();
						});
					});
					
				});
				$(".cover").show();
			}
			
			if(index == 3 && nextIndex == 4){
				$(".next").fadeOut();
				$(".sofa-2").hide();
				$(".sofa-3-a").show().animate({"bottom": -((k-245)+50), "left":250},2000,function(){
					$(".sofa-3-a").hide();
					$(".shop-car-sofa").show();
					$(".shop-car").animate({"left":2000},2500,"easeInElastic",function(){
						$(".words-04-a").animate({"opacity":1},500);
						$(".form-01-pic1").animate({"opacity":1},500,function(){
							$(".form-01-pic2").animate({"opacity":1},500,function(){
								$(".next").fadeIn();
							});
						});
					});
				});
			}
			
			if(index == 4 && nextIndex == 5){
				$(".next").fadeOut();
				$(".hand-05").animate({"bottom":0},1500,"easeOutQuad",function(){
					$(".mouse-05-a").show();
					$(".t1f-05").show().animate({"bottom":70},800,"easeOutCubic",function(){
						$(".order-05").animate({"bottom":380},800,"easeInOutSine",function(){
							$(".words-05").addClass("words-05-a");
							$(".next").fadeIn();
						});
					});
				});
			}
			
			if(index == 5 && nextIndex == 6){
				$(".next").fadeOut();
				$(".t1f-05").animate({"bottom":-(k-540),"left":"45%","width":68},1500);
				$(".box-06").animate({"left":"43%"},1500,function(){
					$(".t1f-05").hide();
					$(".box-06").animate({"bottom":40},1000,function(){
						$(".box-06").hide();
//						屏幕运动
						$(".words-06").show().animate({"left":"25%"},2000,"easeOutBounce");
						$(".section6").animate({"backgroundPositionX":"100%"},3000,"easeOutCubic",function(){
							$(".man-06").show().animate({"width":252,"left":"30%","bottom":114},"1000",
							function(){
//								画满停滞后
								$(this).animate({"left":"40%"},500,function(){
									$(".door-06").show();
									$(".women-06").show().animate({"width":91,"right":390},500,function(){
										$(".qyh-06").show();
										$(".next").fadeIn();
									});
								})
							})
						});
					});
				});
			}
			
			
			
		}
	});
});
