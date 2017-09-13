function myAdd(t, e, n) {
    e = "undefined" != typeof e ? e : 1;
    var a = "&" + jQuery(n).parent().prev(".itemSize").find("input:checked").attr("name") + "=",
        s = "";
    jQuery(n).parent().prev(".itemSize").find("input:checked").each(function() {
        s += a + jQuery(this).val()
    }), a = s, jQuery.ajax({
        url: "index.php?route=checkout/cart/add",
        type: "post",
        data: "product_id=" + t + "&quantity=" + e + a,
        dataType: "json",
        success: function(t) {
            if (jQuery(".success, .warning, .attention, .information, .error").remove(), t.error && t.error.option)
                for (i in t.error.option) $(n).parent().prev(".itemSize").find("div div div").after('<span class="error">' + t.error.option[i] + "</span>");
            t.success && (jQuery(".error").remove(), $cartCount = $("div.cartWrap > div > span").text(), $cartCount = parseInt($cartCount) + 1, $("div.cartWrap > div > span").text($cartCount), $("#notification").html('<div class="success" style="display: none;">' + t.success + '<img src="catalog/view/theme/default/image/close.png" alt="" class="close" /></div>'), $(".success").fadeIn("slow"), $("#cart-total").html(t.total), $("html, body").animate({
                scrollTop: 0
            }, "slow"), setTimeout('$("#notification").hide("slow")', 2e3))
        }
    })
}
$(document).ready(function() {
        $(document).mouseleave(function() {
           if ($('div.cartWrap > div > span').text() != '0' && !$(".dontGo").hasClass("blogbaster")) {
                    $('.dontGo').addClass('active');
                    $('.popUpbg').addClass('active');
                }
        });
        $('#wsend').click(function(){
            yaCounter26519511.reachGoal('PopUp310');
        });
        function t() {
            e = 1, $(".yved:nth-child(" + e + ")").fadeIn(500).delay(7e3).fadeOut(500)
        }
        var e = 0;
        setTimeout(function() {
            setInterval(function() {
                e += 1, e > 20 && (e = 1), $(".yved:nth-child(" + e + ")").fadeIn(500).delay(7e3).fadeOut(500)
            }, 4e4), t()
        }, 3e4)
    }), jQuery(document).ready(function() {
        $(".zclick").click(function() {
            $(".popUpbg, .zcall").addClass("active")
        }), $("div#search1").click(function() {
            $(".searchPopup").addClass("active"), $(".popUpbg2").addClass("active")
        }), $(".popUpbg2").click(function() {
            $(".searchPopup").removeClass("active"), $(".popUpbg2").removeClass("active")
        }), $(".zform").submit(function(t) {
            $('#zname, #zphone').removeAttr('style');
            t.preventDefault();
            var e = $(this).serialize();
            // $.post("/catalog/view/theme/default/template/common/isend.php", {
            $.ajax({
                url: 'index.php?route=checkout/cart/addorder',
                type: 'post',
                data: e,
                dataType: 'json',
                beforeSend: function() {
                    $('.zform > button').text('Отправка..');
                },
                complete: function() {
                    $('.zform > button').text('Отправить');
                },
                success: function(json) { 
                    if(json['error']){
                        if(json['error']['name']){
                            $('#zname').css('border', '1px solid red');
                        } 
                        if(json['error']['phone']){
                            $('#zphone').css('border', '1px solid red');
                        }            
                    } else {                    	
          				yaCounter26519511.reachGoal('BackCall');
                        $(".zcall").removeClass("active"); 
                        $(".thx > p").remove();
                        $(".thx").addClass("active"); 
                        $(".thx").append("</div><p>Благодарим за заявку. <br>Наш менеджер свяжется с Вами в ближайшее время.</p>");
                    }
                }
            });
        }), $(".menBootsWrap.similary").slick({
            dots: !1,
            infinite: !1,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: !0,
                    dots: !1
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        }), $("div.reviewsWrap > div > div.reviwsSlider").slick({
            dots: false,
            arrows: false,
            infinite: !1,
            speed: 300,
            slidesToShow: 2,
            slidesToScroll: 2,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: !0,
                    dots: false
                }
            }, {
                breakpoint: 600,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        }), $(".productViewed").slick({
            dots: !1,
            infinite: !1,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: !0,
                    dots: !1
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        }), 
        $(".qBuy").submit(function(t) {
            t.preventDefault();
            var btext = $('.qBuy > button').text();
            var size = jQuery(".popUp .itemSize input[type=radio]:checked").next('label').text();
            $('#iname, #iphone').removeAttr('style');
            var e = 'iname='+$("#iname").val()+'&iphone='+$("#iphone").val()+'&ititle='+$("#ititle").val()+'&iprice='+$("#iprice").val()+'&isize='+size+'&prid='+$("#predprid").val()+'&iurl='+$("#iurl").val();
            $.ajax({
                url: 'index.php?route=checkout/cart/addorder',
                type: 'post',
                data: e,
                dataType: 'json',
                beforeSend: function() {

                    $('.qBuy > button').text('Отправка..');
                },
                complete: function() {
                    $('.qBuy > button').text(btext);
                },
                success: function(json) { 
                    if(json['error']){
                        if(json['error']['name']){
                            $('#iname').css('border', '1px solid red');
                        } 
                        if(json['error']['phone']){
                            $('#iphone').css('border', '1px solid red');
                        }            
                    } else {
            			yaCounter26519511.reachGoal('QuickOrder');
                        $(".popUp").removeClass("active");
                        $(".thx > p").remove();
                        $(".thx").addClass("active");
                        $(".thx").append("</div><p>Благодарим за заказ. <br>Наш менеджер свяжется с Вами в ближайшее время.</p>");
                    }
                }
            });         
        }), $("#iphone").keypress(function(t) {
            8 != t.which && isNaN(String.fromCharCode(t.which)) && t.preventDefault()
        }), $(".itemAddToCart .sale-btn.buy").click(function() {
            $(".popUp, .popUpbg").addClass("active");
            var t = $(this).parent().parent().parent().find(".itemName a").text(),
                e = $(this).parent().parent().parent().find(".itemName p").text(),
                i = $(this).parent().parent().prev(".itemPrice").find(".newPrice").text(),
                n = $(this).parent().prev(".itemSize").html(),
                a = 1,
                s = $(this).parent().parent().parent().find(".itemName a").attr("href"),
                o = "",
                r = "";
            r = $(this).parent().parent().parent().find(".itemImage").html(), null == r && (r = $(this).parent().parent().parent().prev(".item-image").html()), $(this).parent().prev(".itemSize").find("input:checked + label").each(function() {
                o += $(this).text() + ","
            }), $(".popItemImage").html(r), $(".popTitle").text(t), $("#ititle").val(t), $(".popModel").html("<span>Модель:</span> " + e), $(".popPrice").html(i + "  <span>РУБ</span>"), $("#iprice").val(i + "  РУБ"), $(".popUp .itemSize").html(n), $(".popUp .itemSize input").each(function() {
                $(this).attr("id", "newopt-" + a), $(this).attr("name", "newopts[]"), $(this).next("label").attr("for", "newopt-" + a), o.indexOf($(this).next("label").text()) >= 0 && $(this).attr("checked", !0), a++
            }), $("#iurl").val(s), $("#isize").val(o)
        }), $(".item-sale .sale-btn.buy").click(function() {
            $(".popUp, .popUpbg").addClass("active");
            var t = $(this).parent().parent().find(".itemName a").text(),
                e = $(this).parent().parent().parent().find(".itemName p").text(),
                i = $(this).parent().parent().find(".newPrice").text(),
                n = $(this).parent().prev(".itemSize").html(),
                a = 1,
                s = $(this).parent().parent().parent().find(".itemName a").attr("href"),
                o = "",
                r = "";
            r = $(this).parent().parent().parent().find(".itemImage").html(), 
            null == r && (r = $(this).parent().parent().parent().find(".item-image").html()), 
            $(this).parent().prev(".itemSize").find("input:checked + label").each(function() {
                o += $(this).text() + ","
            }), $(".popItemImage").html(r), $(".popTitle").text(t), $("#ititle").val(t), $(".popModel").html("<span>Модель:</span> " + e), $(".popPrice").html(i + "  <span>РУБ</span>"), $("#iprice").val(i + "  РУБ"), $(".popUp .itemSize").html(n), $(".popUp .itemSize input").each(function() {
                $(this).attr("id", "newopt-" + a), $(this).attr("name", "newopts[]"), $(this).next("label").attr("for", "newopt-" + a), o.indexOf($(this).next("label").text()) >= 0 && $(this).attr("checked", !0), a++
            }), $("#iurl").val(s), $("#isize").val(o)
        }), $(".closePopUp, .popUpbg3").click(function() {
            $('.dontGo').removeClass('.active');
            $('.dontGo').addClass('blogbaster');
            $(".popUp, .popUpbg, .zcall, .thx, .popUpbg3, .willcall").removeClass("active"), $(".popTitle").html(""), $(".popPrice").html(""), $(".popUp .itemSize").html("")
        }), $(".popUpbg").click(function() {
            $(".popUp, .popUpbg, .zcall, .thx").removeClass("active"), $(".popTitle").html(""), $(".popPrice").html(""), $(".popUp .itemSize").html("")
            $('.dontGo').removeClass('.active');
            $('.dontGo').addClass('blogbaster');
        }), $(".item").hover(function() {
            $(this).find(".item-size").show()
        }, function() {
            $(this).find(".item-size").hide()
        }), $(".zagolovok .divh1").text($("#bigt").text()), $(".home-sale strong:last-child").text("только до " + $("#bigt span").text())
    }), $(".showMore.container .showMoreWrap").click(function() {
        var t = $(this),
            e = "";
        $(this).parent().prev(".menBootsWrap").find(".menBootsItem.actbl").each(function() {
            e = Number($(this).attr("data-count"))
        }), e += 4;
        var i = $(this).parent().prev(".menBootsWrap").find(".menBootsItem");
        i.length;
        $(this).parent().prev(".menBootsWrap").find(".menBootsItem").each(function() {
            $(this).attr("data-count") <= e && $(this).addClass("actbl"), t.parent().prev(".menBootsWrap").find(".menBootsItem:last-child").is(".actbl") && t.hide()
        })
    }), $(".filter-heading").click(function() {
        $(this).next().toggle("slow"), $(this).toggleClass("opening")
    }), $("#filters").submit(function(t) {
        var e = "";
        $("#filters .filter-item").each(function() {
            0 != $(this).find("input:checked").length && (e += ";" + $(this).attr("data-item"));
            var t = $(this),
                i = 1;
            $(this).find("input:checked").each(function() {
                1 == t.find("input:checked").length ? e += "=" + $(this).val() : 0 != t.find("input:checked").length && (1 == i ? (e += "=" + $(this).val(), ++i) : e += "," + $(this).val())
            })
        }), $("#fid").val(e.substring(1)), "" == $("#fid").val(), console.log(e)
    }), $("#filters label").click(function() {
        var t = $(this).parent();
        $(this).attr("data-prod");
        $(".filters-count").hide(), t.find(".filters-count").show()
    }), $(document).ready(function() {
        if ($("#fi3").is(":not(:disabled)")) {
            var t = $("#fi3").attr("onclick");
            $(".fmuj").attr("onclick", t)
        } else $(".fmuj").addClass("notact");
        if ($("#fi4").is(":not(:disabled)")) {
            var e = $("#fi4").attr("onclick");
            $(".fjen").attr("onclick", e)
        } else $(".fjen").addClass("notact");
        $('a[href*="account"]').each(function() {
            $(this).parent().addClass("disNon")
        }), $("#cat-sort > option:nth-child(1)").text("Сортировка")
    }), $(function() {
        var t, e = window.location.href;
        "/" == window.location.href.substr(-1) && (e = e.substring(0, e.length - 1)), $('li a[href="' + e + '"]').each(function() {
            t = $(this).text(), $(this).after('<span class="disable">' + t + "</span>"), $(this).parent().addClass("current"), $(this).parent().parent().parent().addClass("current"), $(this).parent().parent().parent().parent().parent().addClass("current"), $(this).parent().parent().parent().parent().parent().parent().parent().addClass("current"), $(this).parent().parent().parent().parent().parent().parent().parent().parent().parent().addClass("current"), $(this).remove()
        })
    }), $(function() {
        var t, e = window.location.href;
        e = e.split("/"), e = e[e.length - 1], $('li a[href="/' + e + '"]').each(function() {
            t = $(this).text(), $(this).parent().html('<span class="disable">' + t + "</span>")
        })
    }),
    function(t) {
        t(".showChild").click(function() {
            t(this).next().next("ul").is(":visible") ? t(this).next().next("ul").hide() : t(this).next().next("ul").show()
        })
    }(jQuery);
(function($){
    $(".reviewform").submit(function(t) {
        t.preventDefault();
        var btext = $('.reviewform > button').text();
        $('#revname, #revphone, #revsilka, #revtext').removeAttr('style');
        var e = 'revname='+$("#revname").val()+'&revphone='+$("#revphone").val()+'&revsilka='+$('#revsilka').val()+'&revtext='+$('#revtext').val();
        $.ajax({
            url: 'index.php?route=checkout/cart/addreview',
            type: 'post',
            data: e,
            dataType: 'json',
            beforeSend: function() {
                $('.reviewform > button').text('Отправка..');
            },
            complete: function() {
                $('.reviewform > button').text(btext);
            },
            success: function(json) { 
                if(json['error']){
                    if(json['error']['name']){
                        $('#revname').css('border', '1px solid red');
                    } 
                    if(json['error']['phone']){
                        $('#revphone').css('border', '1px solid red');
                    } 
                    if(json['error']['silka']){
                        $('#revsilka').css('border', '1px solid red');
                    } 
                    if(json['error']['text']){
                        $('#revtext').css('border', '1px solid red');
                    }            
                } else {
                    $(".popUp").removeClass("active");
                    $(".thx > p").remove();
                    $(".thx, .popUpbg3").addClass("active");
                    $(".thx").append("</div><p>Благодарим за отзыв.</p>");
                }
            }
        });
    });

    $(".wform").submit(function(t) {
        t.preventDefault();
        var btext = $('.wform > button').text();
        $('#wphone').removeAttr('style');
        var e = 'wname=Перезвонить&zphone='+$("#wphone").val();
        $.ajax({
            url: 'index.php?route=checkout/cart/addorder',
            type: 'post',
            data: e,
            dataType: 'json',
            beforeSend: function() {
                $('.wform > button').text('Отправка..');
            },
            complete: function() {
                $('.wform > button').text(btext);
            },
            success: function(json) { 
                if(json['error']){
                    if(json['error']['phone']){
                        $('#wphone').css('border', '1px solid red');
                    }        
                } else {                    
                    yaCounter26519511.reachGoal('BackCall');
                    $(".willcall").removeClass("active");
                    $(".thx > p").remove();
                    $(".thx, .popUpbg3").addClass("active");
                    $(".thx").append("</div><p>Благодарим за заказ. <br>Наш менеджер свяжется с Вами в ближайшее время.</p>");
                }
            }
        });
    });

    // setTimeout(function(){
    //     $('.willcall, .popUpbg3').addClass('active');
    // }, 180000);
    // Javascript starts
function convert_to_time(secs) {
    secs = parseInt(secs);
    hh = secs / 3600;
    hh = parseInt(hh);
    mmt = secs - (hh * 3600);
    mm = mmt / 60;
    mm = parseInt(mm);
    ss = mmt - (mm * 60);

    if (hh > 23) {
        dd = hh / 24;
        dd = parseInt(dd);
        hh = hh - (dd * 24);
    } else {
        dd = 0;
    }

    if (ss < 10) {
        ss = "0" + ss;
    }
    if (mm < 10) {
        mm = "0" + mm;
    }
    if (hh < 10) {
        hh = "0" + hh;
    }
    if (dd == 0) {
        return (hh + ":" + mm + ":" + ss);
    }
    else {
        if (dd > 1) {
            return (dd + " day " + hh + ":" + mm + ":" + ss);
        }
        else {
            return (dd + " day " + hh + ":" + mm + ":" + ss);
        }
    }
}

do_cd4 = function() {
    if(typeof(sessionStorage.getItem("countdown")) === "string"){
    		countdown4 = parseInt(sessionStorage.getItem("countdown"), 10);
    } else {
    		countdown4 = 90;
    }
    
   
    
    if (countdown4 == 1) {
        countdown4 = countdown4 - 1;
        sessionStorage.setItem('countdown', countdown4);
        console.log(countdown4);
        // change text
        $('.willcall, .popUpbg3').addClass('active');
        // $.removeCookie('countdown', { path: '/' });
        //document.cookie = 'countdown' + '=; expires=Thu, 01-Jan-70 00:00:01 GMT;';
    } else if(countdown4 >= 0){
        countdown4 = countdown4 - 1;
        sessionStorage.setItem('countdown', countdown4);
        console.log(convert_to_time(countdown4));
        setTimeout('do_cd4()', 1000);
    }
}

do_cd4();







    function rot(){
    var n = $(".rotban ul").children().length;
    function selfRandom(min, max)
      {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
        $('.rotban li:nth-child('+selfRandom(1, n)+')').fadeIn();
    }
    rot();




    $(function(){
         var loaded = parseInt(sessionStorage.getItem('loaded'), 10);
         var loaded_numb;
         if(loaded == null){
         	loaded_numb = 1;
         } else {
         	loaded_numb = loaded+1;
         }
         
         sessionStorage.setItem('loaded', loaded_numb);
         if(loaded_numb == 10){
            $('.willcall, .popUpbg3').addClass('active');
            // sessionStorage.removeItem('loaded');
         }
        
         // console.log(loaded_numb);
    });
})(jQuery);