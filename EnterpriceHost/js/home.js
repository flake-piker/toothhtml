$(function(){
		// @ 给窗口加滚动条事件
		$(window).scroll(function(){
			// 获得窗口滚动上去的距离
			var ling = $(document).scrollTop();
			// 在标题栏显示滚动的距离
			//document.title = ling;
			// 如果滚动距离大于1534的时候让滚动框出来
			if(ling>474){
				$('#box').show();
			}
			if(474<ling && ling<974){
				// 让第一层的数字隐藏，文字显示，让其他兄弟元素的li数字显示，文字隐藏
				$('#box ul li').eq(0).find('.num').hide().siblings('.word').css('display','block');
				$('#box ul li').eq(0).siblings('li').find('.num').css('display','block').siblings('.word').hide();
			}else if(ling<1484){
				$('#box ul li').eq(1).find('.num').hide().siblings('.word').css('display','block');
				$('#box ul li').eq(1).siblings('li').find('.num').css('display','block').siblings('.word').hide();
			}else if(ling<1994){
				$('#box ul li').eq(2).find('.num').hide().siblings('.word').css('display','block');
				$('#box ul li').eq(2).siblings('li').find('.num').css('display','block').siblings('.word').hide();
			}else if(ling<2504){
				$('#box ul li').eq(3).find('.num').hide().siblings('.word').css('display','block');
				$('#box ul li').eq(3).siblings('li').find('.num').css('display','block').siblings('.word').hide();
			}else if(ling<3014){
				$('#box ul li').eq(4).find('.num').hide().siblings('.word').css('display','block');
				$('#box ul li').eq(4).siblings('li').find('.num').css('display','block').siblings('.word').hide();
			}else if(ling<3524){
				$('#box ul li').eq(5).find('.num').hide().siblings('.word').css('display','block');
				$('#box ul li').eq(5).siblings('li').find('.num').css('display','block').siblings('.word').hide();
			}else if(ling<4034){
				$('#box ul li').eq(6).find('.num').hide().siblings('.word').css('display','block');
				$('#box ul li').eq(6).siblings('li').find('.num').css('display','block').siblings('.word').hide();
			}else if(ling<4544){
				$('#box ul li').eq(7).find('.num').hide().siblings('.word').css('display','block');
				$('#box ul li').eq(7).siblings('li').find('.num').css('display','block').siblings('.word').hide();
			}else if(ling<5054){
				$('#box ul li').eq(8).find('.num').hide().siblings('.word').css('display','block');
				$('#box ul li').eq(8).siblings('li').find('.num').css('display','block').siblings('.word').hide();
			}
			if(ling>8800 || ling<474){
				// $('#box').css('display','none');  // @ 这一句和下一句效果一样。
				$('#box').hide();
			}
			
		})

	})

	$(function(){
		//when mouse live catalog stage;
		$(".zy-main-catalog").on("mouseleave",function(){
			
			$(".zy-main-catalog-hider").hide();
		});
		//when mouse focus on anyone catalog;
		$(".zy-main-catalog-show ul li").on("mouseover",function(){
			$(".zy-main-catalog-hider").hide();
			console.log($(this).data("type"));
			$(".hider-box"+$(this).data("type")).show();
		});
		$('#box ul li').hover(function(){
			$(this).find('.num').hide().siblings('.word').css({'display':'block','background':'#CB1C39','color':'white'});
		},function(){
		
			$(this).find('.num').css({'display':'block','background':'white','color':'#666'}).siblings('.word').hide().css({'display':'none','background':'','color':''});
		});
		$(".zy-floor-item-products ul li").hover(function(){
			if($(this).hasClass("zy-img-show")){
				$(this).find(".zy-home-product-text").slideUp(500) ;
			}else{
				$(this).addClass("zy-img-show");
				$(this).find(".zy-home-product-text").slideUp(500);
				$(this).find("img").attr("src",$(this).find("img").data().src);
			}
		},function(){
			$(this).find(".zy-home-product-text").slideToggle(500);
		});
	})