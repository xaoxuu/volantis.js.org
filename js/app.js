var Debounce=(t,o)=>{const e=o||25;let n;return function(){const o=arguments;n&&clearTimeout(n),n=setTimeout((()=>{n=null,t.apply(this,o)}),e)}};!function(t){volantis.$bodyAnchor=t("#safearea"),volantis.$topBtn=t("#s-top"),volantis.$wrapper=t("#wrapper"),volantis.$postsBtn=t(".menu .active"),volantis.$titleBtn=t("h1.title","#header-meta"),volantis.$coverAnchor=t("#l_cover .cover-wrapper"),volantis.$switcher=t("#l_header .switcher .s-search"),volantis.$header=t("#l_header"),volantis.$search=t("#l_header .m_search"),volantis.$mPhoneList=t("#l_header .m-phone .list-v");var o=80;function e(e,n=o){const a=e.href?t(decodeURI(e.getAttribute("href"))):t(e);window.scrollTo({top:a.offset().top-n,behavior:"smooth"})}function n(){volantis.$postsBtn.length&&volantis.$bodyAnchor&&volantis.$postsBtn.click((t=>{t.preventDefault(),t.stopPropagation(),"/"!=volantis.$postsBtn.attr("href")&&e(volantis.$bodyAnchor),t.stopImmediatePropagation(),volantis.$postsBtn.unbind("click")})),volantis.$titleBtn.length&&volantis.$bodyAnchor&&volantis.$titleBtn.click((t=>{t.preventDefault(),t.stopPropagation(),e(volantis.$bodyAnchor),t.stopImmediatePropagation(),volantis.$titleBtn.unbind("click")})),volantis.$topBtn.length&&volantis.$bodyAnchor&&volantis.$topBtn.click((t=>{t.preventDefault(),t.stopPropagation(),e(volantis.$bodyAnchor),t.stopImmediatePropagation()}));var n=volantis.$bodyAnchor.offset().top-o,a=document.body.scrollTop;t(document,window).scroll(Debounce((()=>{const o=t(window).scrollTop(),e=o-a;a=o,o>volantis.$bodyAnchor.offset().top?(volantis.$topBtn.addClass("show"),e>0?volantis.$topBtn.removeClass("hl"):volantis.$topBtn.addClass("hl")):volantis.$topBtn.removeClass("show").removeClass("hl"),o-n>-1?volantis.$header.addClass("show"):volantis.$header.removeClass("show")})))}function a(){if(!pdata.ispage)return;volantis.$comment=t("#s-comment"),volantis.$toc=t("#s-toc"),volantis.$commentTarget=t("#l_body article#comments"),volantis.$wrapper.find(".nav-sub .title").html(pdata.postTitle);let o=document.body.scrollTop;t(document,window).scroll(Debounce((()=>{const e=t(window).scrollTop(),n=e-o;n>=50&&e>100?(o=e,volantis.$wrapper.addClass("sub")):n<=-50&&(o=e,volantis.$wrapper.removeClass("sub"))}))),volantis.$commentTarget.length?volantis.$comment.click((t=>{t.preventDefault(),t.stopPropagation(),e(volantis.$commentTarget),t.stopImmediatePropagation()})):volantis.$comment.remove(),volantis.$tocTarget=t("#l_body .toc-wrapper"),volantis.$tocTarget.length&&volantis.$tocTarget.children().length?(volantis.$toc.click((t=>{t.stopPropagation(),volantis.$tocTarget.toggleClass("active"),volantis.$toc.toggleClass("active")})),t(document).click((function(t){t.stopPropagation(),volantis.$tocTarget.removeClass("active"),volantis.$toc.removeClass("active")})),t(document,window).scroll(Debounce((()=>{volantis.$tocTarget.removeClass("active"),volantis.$toc.removeClass("active")}),100))):volantis.$toc.remove()}function i(){volantis.$headerMenu=t("body .navigation"),volantis.$headerMenu.find("li a.active").removeClass("active"),volantis.$headerMenu.find("div a.active").removeClass("active");var o=null,e=location.pathname.replace(/\/|%|\./g,"");0==e.length&&(e="home");var n=e.match(/page\d{0,}$/g);n&&(n=n[0],e=e.split(n)[0]);var a,i=e.match(/index.html/);i&&(i=i[0],e=e.split(i)[0]),(e=e.replace(/(\[|\]|~|#|@)/g,"\\$1"))&&volantis.$headerMenu&&(o=t("#"+e,volantis.$headerMenu),(a=o)&&a.length&&a.addClass("active").siblings().removeClass("active"))}function s(){t(document).click((function(t){volantis.$mPhoneList.hide()})),t(window).scroll(Debounce((()=>{volantis.$mPhoneList.hide()})))}function l(){t(".tabs .nav-tabs").on("click","a",(o=>{o.preventDefault(),o.stopPropagation();const e=t(o.target.parentElement.parentElement.parentElement);return e.find(".nav-tabs .active").removeClass("active"),e.find(o.target.parentElement).addClass("active"),e.find(".tab-content .active").removeClass("active"),e.find(t(o.target).attr("class")).addClass("active"),!1}))}if(volantis.$header[0]&&(o=volantis.$header[0].clientHeight+16),t((function(){a(),i(),t("#l_header .m-phone li:has(.list-v)").click((function(o){o.stopPropagation(),t(t(o.currentTarget).children("ul")).show()})),t("#wrapper .m-pc li > a[href]").parent().click((function(o){o.stopPropagation(),o.target.origin==o.target.baseURI&&t("#wrapper .m-pc .list-v").hide()})),s(),0!==volantis.$switcher.length&&(volantis.$switcher.click((function(t){t.stopPropagation(),volantis.$header.toggleClass("z_search-open"),volantis.$switcher.toggleClass("active"),volantis.$search.find("input").focus()})),t(document).click((function(t){volantis.$header.removeClass("z_search-open"),volantis.$switcher.removeClass("active")})),volantis.$search.click((function(t){t.stopPropagation()})),volantis.$header.ready((function(){volantis.$header.bind("keydown",(function(t){if(9==t.keyCode)return!1;var o,e,n=!!document.all;n?(o=window.event.keyCode,e=window.event):(o=t.which,e=t),9==o&&(n?(e.keyCode=0,e.returnValue=!1):(e.which=0,e.preventDefault()))}))}))),n(),l(),t("#scroll-down").on("click",(function(){e(volantis.$bodyAnchor)}));try{document.addEventListener("pjax:complete",(function(){t((function(){o=80,volantis.$header[0]&&(o=volantis.$header[0].clientHeight+16),a(),i(),s(),n(),l(),t("#scroll-down").on("click",(function(){e(volantis.$bodyAnchor)})),0!==volantis.$switcher.length&&t(document).click((function(t){volantis.$header.removeClass("z_search-open"),volantis.$switcher.removeClass("active")}))}))}),{passive:!0})}catch(t){}})),window.location.hash)var c=setInterval((function(){t("#"+decodeURI(window.location.hash.split("#")[1]).replace(/\ /g,"-")).length&&(t("html, body").animate({scrollTop:t("#"+decodeURI(window.location.hash.split("#")[1]).replace(/\ /g,"-")).offset().top-40},500),clearInterval(c))}),100)}(jQuery);