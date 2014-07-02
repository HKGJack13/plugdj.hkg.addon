// ==UserScript==
// @name       PlugHKG IconPack 
// @version  1.5.1.2
// @description  Provide hkgolden icons for plugdj users
// @downloadURL https://raw.githubusercontent.com/HKGJack13/plugdj.hkg.addon/master/goldenmusic.user.js
// @updateURL https://raw.githubusercontent.com/HKGJack13/plugdj.hkg.addon/master/goldenmusic.meta.js
// @match     http://plug.dj/hkgolden/*
// @copyright   nasaorc , bus, jack13
// ==/UserScript==
var server = 'http://xeonyan.wtako.net/plugdj/',
    hkgserver = 'http://forum9.hkgolden.com/faces/',

    noricon = {
        '`:)' : 'smile.gif',
        '`O:-)' : 'angel.gif',
        '`xx(' : 'dead.gif',
        '`:o)' : 'clown.gif',
        '`:-(' : 'frown.gif',
        '`:~(' : 'cry.gif',
        '`;-)' : 'wink.gif',
        '`:-[' : 'angry.gif',
        '`:-]' : 'devil.gif',
        '`:D' : 'biggrin.gif',
        '`:O' : 'oh.gif',
        '`:P' : 'tongue.gif',
        '`^3^' : 'kiss.gif',
        '`?_?' : 'wonder.gif',
        '`???' : 'wonder2.gif',
        '`Z_Z' : 'z.gif',
        '`@_@' : '@.gif',
        '`#yup#' : 'agree.gif',
        '`#ng#' : 'donno.gif',
        '`#hehe#' : 'hehe.gif',
        '`#love#' : 'love.gif',
        '`#oh#' : 'surprise.gif',
        '`#cn#' : 'chicken.gif',
        '`#ass#' : 'ass.gif',
        '`#fire#' : 'fire.gif',
        '`#good#' : 'good.gif',
        '`#good2#' : 'ThumbUp.gif',
        '`#bad#' : 'ThumbDown.gif',
        '`#kill#' : 'kill.gif',
        '`#hoho#' : 'hoho.gif',
        '`#kill2#' : 'kill2.gif',
        '`#bye#' : 'bye.gif',
        '`#adore#' : 'adore.gif',
        '`#no#' : 'no.gif',
        '`fuck' : 'fuck.gif',
        '`[banghead]' : 'banghead.gif',
        '`[bouncer]' : 'bouncer.gif',
        '`[bouncy]' : 'bouncy.gif',
        '`[censored]' : 'censored.gif',
        '`[flowerface]' : 'flowerface.gif',
        '`[offtopic]' : 'offtopic.gif',
        '`[shocking]' : 'shocking.gif',
        '`[369]' : '369.gif',
        '`[bomb]' : 'bomb.gif',
        '`[photo]' : 'photo.gif',
        '`[sosad]' : 'sosad.gif',
        '`[yipes]' : 'yipes.gif',
        '`[slick]' : 'slick.gif'
    },
    xmasicon = {
    	'`:)x' : 'smilex.gif',
        '`[sosad]x' : 'sosadx.gif',
        '`#no#x' : 'nox.gif',
       	'`#ng#x' : 'donnox.gif',
        '`:-(x' : 'frownx.gif',
        '`:~(x' : 'cryx.gif',
        '`#good#x' : 'goodx.gif',
        '`#yup#x' : 'agreex.gif',
        '`#hoho#x' : 'hohox.gif',
        '`#fire#x' : 'firex.gif',
        '`#cn#x' : 'chickenx.gif',
        '`#cn#2x' : 'chicken2x.gif',
        '`[bouncy]x' : 'bouncyx.gif',
        '`[bouncy]2x' : 'bouncy2x.gif',
        '`:-[x' : 'angryx.gif',
        '`#ass#x' : 'assx.gif',
        '`#ng#x' : 'donnox.gif',
  	// Green Hat
        '`:)gx' : 'smilegx.gif',
        '`[sosad]gx' : 'sosadgx.gif',
        '`#no#gx' : 'nox.gif',
       	'`:o)gx' : 'clowngx.gif',
        '`:-(gx' : 'frowngx.gif',
        '`:~(gx' : 'crygx.gif',
        '`#bye#gx' : 'byegx.gif',
        '`fuckgx' : 'diugx.gif',
        '`[369]gx' : '369gx.gif',
        '`#good#gx' : 'goodgx.gif',
        '`#yup#gx' : 'agreegx.gif',
    },
    newyearicon = {
        '`[bangheadn]' : 'bangheadn.gif',
        '`[banghead2n]' : 'banghead2n.gif',  
        '`[369]n' : '369n.gif',
        '`:o)n' : 'clownn.gif',
        '`:o)2n' : 'clown2n.gif',
        '`fuckn' : 'diun.gif'
    },
    lomoreicon = {
        '`:)lm' : 'smilelm.gif',
        '`xx(lm' : 'deadlm.png',  
        '`:o)lm' : 'clownlm.gif',
       	'`:o)2lm' : 'clown2lm.gif',
        '`:o)3lm' : 'clown3lm.gif',
        '`:o)4lm' : 'clown4lm.gif',
        '`:-(lm' : 'frownlm.gif',
        '`:~(lm' : 'crylm.gif',
        '`;-)lm' : 'winklm.gif',
        '`:-[lm' : 'angrylm.gif',
        '`:-]lm' : 'devillm.png',
        '`:Dlm' : 'biggrinlm.gif',
        '`:D2lm' : 'biggrinlm2.JPG',
       	'`[bomb]lm' : 'bomblm.gif',
        '`#bye#lm' : 'byelm.gif',
        '`micolm' : 'micolm.gif',
        '`mmlm' : 'mmlm.gif',
        '`#ng#lm' : 'nglm2.gif',
        '`:Olm' : 'ohlm.gif',
        '`:O2lm' : 'ohlm2.gif',
        '`:Plm' : 'tonguelm.gif',
        '`:P2lm' : 'tonguelm2.gif',
        '`:P3lm' : 'feet_lm.gif',
        '`^3^lm' : 'kisslm.gif',
        '`?_?lm' : 'wonderlm.gif',
        '`???lm' : 'wonder2lm.gif',
        '`@_@lm' : '@lm.gif',
        '`#yup#lm' : 'agreelm.gif',
        '`#hehe#lm' : 'hehelm.gif',
        '`#hoho#lm' : 'hoholm.gif',
        '`#love#lm' : 'lovelm.gif',
        '`#oh#lm' : 'surpriselm.gif',
        '`#ass#lm' : 'asslm.gif',
        '`#good#lm' : 'goodlm.gif',
        '`#kill#lm' : 'killlm.gif',
        '`#kill2#lm' : 'kill2lm.gif',
        '`#adore#lm' : 'adorelm.gif',
        '`[banghead]lm' : 'bangheadlm.gif',
        '`[bouncer]lm' : 'bouncerlm.gif',
        '`[flowerface]lm' : 'flowerfacelm.gif',
        '`[offtopic]lm' : 'offtopiclm.gif',
        '`[shocking]lm' : 'shockinglm.gif',
        '`[369]lm' : '369lm.gif',
        '`[photo]lm' : 'photolm.gif',
        '`[sosad]lm' : 'sosadlm.gif',
        '`[yipes]lm' : 'yipeslm.gif',
        '`[slick]lm' : 'slicklm.gif'
    },
    dwicon = {
        '`:)_dw' : 'smile.gif',
        '`O:-)_dw' : 'angel.gif',
        '`xx(_dw' : 'dead.gif',
        '`:o)_dw' : 'clown.gif',
        '`:-(_dw' : 'frown.gif',
        '`:~(_dw' : 'cry.gif',
        '`;-)_dw' : 'wink.gif',
        '`:-[_dw' : 'angry.gif',
        '`:-]_dw' : 'devil.gif',
        '`:D_dw' : 'biggrin.gif',
        '`:O_dw' : 'oh.gif',
        '`:P_dw' : 'tongue.gif',
        '`^3^_dw' : 'kiss.gif',
        '`?_?_dw' : 'wonder.gif',
        '`???_dw' : 'wonder2.gif',
        '`Z_Z_dw' : 'z.gif',
        '`@_dw' : '@.gif',
        '`#yup#_dw' : 'agree.gif',
        '`#ng#_dw' : 'donno.gif',
        '`#hehe#_dw' : 'hehe.gif',
        '`#love#_dw' : 'love.gif',
        '`#oh#_dw' : 'surprise.gif',
        '`#cn#_dw' : 'chicken.gif',
        '`#ass#_dw' : 'ass.gif',
        '`#fire#_dw' : 'fire.gif',
        '`#good#_dw' : 'good.gif',
        '`#kill#_dw' : 'kill.gif',
        '`#hoho#_dw' : 'hoho.gif',
        '`#kill2#_dw' : 'kill2.gif',
        '`#bye#_dw' : 'bye.gif',
        '`#adore#_dw' : 'adore.gif',
        '`#no#_dw' : 'no.gif',
        '`fuck_dw' : 'diu.gif',
        '`[banghead_dw]' : 'banghead.gif',
        '`[bouncer]_dw' : 'bouncer.gif',
        '`[bouncy]_dw' : 'bouncy.gif',
        '`[censored]_dw' : 'censored.gif',
        '`[flowerface]_dw' : 'flowerface.gif',
        '`[offtopic]_dw' : 'offtopic.gif',
        '`[shocking]_dw' : 'shocking.gif',
        '`369_dw' : '369.gif',
        '`#bomb#_dw' : 'bomb.gif',
        '`[photo]_dw' : 'photo.gif',
        '`[sosad_dw]' : 'sosad.gif',
        '`[yipes]_dw' : 'yipes.gif',
        '`[slick]_dw' : 'slick.gif'
    },
    fricon = {
        '`:)fr' : 'smile.gif',
        '`O:-)fr' : 'angel.gif',
        '`xx(fr' : 'dead.gif',
        '`:o)fr' : 'clown.gif',
        '`:-(fr' : 'frown.gif',
        '`:~(fr' : 'cry.gif',
        '`;-)fr' : 'wink.gif',
        '`:-[fr' : 'angry.gif',
        '`:-]fr' : 'devil.gif',
        '`:Dfr' : 'biggrin.gif',
        '`:Ofr' : 'oh.gif',
        '`:Pfr' : 'tongue.gif',
        '`^3^fr' : 'kiss.gif',
        '`?_?fr' : 'wonder.gif',
        '`???fr' : 'wonder2.gif',
        '`Z_Zfr' : 'z.gif',
        '`@_@fr' : '@.gif',
        '`#yup#fr' : 'agree.gif',
        '`#ng#fr' : 'donno.gif',
        '`#hehe#fr' : 'hehe.gif',
        '`#love#fr' : 'love.gif',
        '`#oh#fr' : 'surprise.gif',
        '`#cn#fr' : 'chicken.gif',
        '`#ass#fr' : 'ass.gif',
        '`#fire#fr' : 'fire.gif',
        '`#good#fr' : 'good.gif',
        '`#kill#fr' : 'kill.gif',
        '`#hoho#fr' : 'hoho.gif',
        '`#kill2#fr' : 'kill2.gif',
        '`#bye#fr' : 'bye.gif',
        '`#adore#fr' : 'adore.gif',
        '`#no#fr' : 'no.gif',
        '`fuckfr' : 'diu.gif',
        '`[banghead]fr' : 'banghead.gif',
        '`[banghead2]fr' : 'banghead2.gif',
        '`[bouncer]fr' : 'bouncer.gif',
        '`[bouncy]fr' : 'bouncy.gif',
        '`[censored]fr' : 'censored.gif',
        '`[flowerface]fr' : 'flowerface.gif',
        '`[offtopic]fr' : 'offtopic.gif',
        '`[shocking]fr' : 'shocking.gif',
        '`[369]fr' : '369.gif',
        '`[bomb]fr' : 'bomb.gif',
        '`[photo]fr' : 'photo.gif',
        '`[sosad]fr' : 'sosad.gif',
        '`[yipes]fr' : 'yipes.gif',
        '`[slick]fr' : 'slick.gif'
    },
    othericon = {
    	'`#cn_big#' : 'big_cn.png',
        '`lol' : 'lol.png',
        '`okay' : 'okay.png',
        '`p_r' : 'point_right.png',
        '`:/' : 'stuck.png',
        '`lol' : 'lol.png',
        '`:3' : 'three_mouth.png',
        '`wa' : 'wa.png',
        '`WFC' : 'WFC.png'
    },
    code = {
        ' 粗體 ' : '[b][/b]',
        ' 斜體 ' : '[i][/i]',
        ' 底線 ' : '[u][/u]',
        ' 圖片 ' : '[img][/img]'
    },
    b,button,panel,paneltext,tab,cursorPos,
    noriconbutton,noriconbuttonl='',noricontab,
    xmasiconbutton,xmasiconbuttonl='',xmasicontab,
    newyeariconbutton,newyeariconbuttonl='',newyearicontab,
    lomoreiconbutton,lomoreiconbuttonl='',lomoreicontab,
    dwiconbutton,dwiconbuttonl='',dwicontab,
    friconbutton,friconbuttonl='',fricontab,
    othericonbutton,othericonbuttonl='',othericontab,
    bbcbutton,bbcbuttonl='',bbctab;
function cb(){
	
    var DOMwatcher = function(root, callback){
        var __appendChild = document.body.appendChild,
        patch = function(node){
            if(typeof node.appendChild !== 'undefined' && node.nodeName !== '#text'){
                node.appendChild = function(incomingNode){
                callback(node, incomingNode);
                patch(incomingNode);
                walk(incomingNode);
                __appendChild.call(node, incomingNode);
                };
            }
            walk(node);
        },
        walk = function(node){
            var i = node.childNodes.length;
            while(i--){
                patch(node.childNodes[i]);
            }
        };
        patch(root);
    };
    b = setInterval(function(){
        if(!jQuery('#room-loader').length){
            clearInterval(b);
            jQuery('#chat #chat-input').css({width:304});
            jQuery('#chat-input #chat-input-field').css({width:284});
            
            button = jQuery('<div/>',{id:'hkg-emot-btn'}).insertAfter('#chat #chat-input');
            button.css({height:30,bottom:10,right:2,position:'absolute',width:24,background:'#282c35 url("'+server+noricon[Object.keys(noricon)[0]]+'") center no-repeat',borderRadius:4,cursor:'pointer'})
            $('#hkg-emot-btn').on('click',function(){cursorPos=$('#chat-input-field').prop('selectionStart');jQuery("#hkg-emot-panel").toggle();});

            paneltext = '<span class="text"><center><b>PlugHKG Icon v1.5.1.1</b></center></span>';
            panel = jQuery('<div/>',{id:'hkg-emot-panel',style:'height:265px;width:336px;overflow-x:hidden;overflow-y:hidden;bottom:50px;right:2px;position:absolute;background:#282c35;'}).html(paneltext);
            spanel = jQuery('<div/>',{id:'hkg-emot-spanel',style:'padding:8px;height:215px;overflow-y:scroll;'});

            jQuery.each(noricon,function(code1,name1){
                noriconbuttonl += '<img alt src="'+server+name1+'" style="padding:4px;" onclick="var ccode = \''+code1+'\';var cursorPos=$(\'#chat-input-field\').prop(\'selectionStart\');var v=$(\'#chat-input-field\').val();var textBefore=v.substring(0,cursorPos);var textAfter=v.substring(cursorPos,v.length);$(\'#chat-input-field\').val(textBefore+ccode+textAfter);$(\'#chat-input-field\').focus();$(\'#chat-input-field\').prop(\'selectionStart\',cursorPos+ccode.length);$(\'#chat-input-field\').prop(\'selectionEnd\',cursorPos+ccode.length);jQuery(\'#hkg-emot-panel\').toggle();">';
            });
            jQuery.each(xmasicon,function(code2,name2){
                xmasiconbuttonl += '<img alt src="'+server+name2+'" style="padding:4px;" onclick="var ccode = \''+code2+'\';var cursorPos=$(\'#chat-input-field\').prop(\'selectionStart\');var v=$(\'#chat-input-field\').val();var textBefore=v.substring(0,cursorPos);var textAfter=v.substring(cursorPos,v.length);$(\'#chat-input-field\').val(textBefore+ccode+textAfter);$(\'#chat-input-field\').focus();$(\'#chat-input-field\').prop(\'selectionStart\',cursorPos+ccode.length);$(\'#chat-input-field\').prop(\'selectionEnd\',cursorPos+ccode.length);jQuery(\'#hkg-emot-panel\').toggle();">';
            });
            jQuery.each(newyearicon,function(code3,name3){
                newyeariconbuttonl += '<img alt src="'+server+name3+'" style="padding:4px;" onclick="var ccode = \''+code3+'\';var cursorPos=$(\'#chat-input-field\').prop(\'selectionStart\');var v=$(\'#chat-input-field\').val();var textBefore=v.substring(0,cursorPos);var textAfter=v.substring(cursorPos,v.length);$(\'#chat-input-field\').val(textBefore+ccode+textAfter);$(\'#chat-input-field\').focus();$(\'#chat-input-field\').prop(\'selectionStart\',cursorPos+ccode.length);$(\'#chat-input-field\').prop(\'selectionEnd\',cursorPos+ccode.length);jQuery(\'#hkg-emot-panel\').toggle();">';
            });
            jQuery.each(lomoreicon,function(code4,name4){
                lomoreiconbuttonl += '<img alt src="'+server+name4+'" style="padding:4px;" onclick="var ccode = \''+code4+'\';var cursorPos=$(\'#chat-input-field\').prop(\'selectionStart\');var v=$(\'#chat-input-field\').val();var textBefore=v.substring(0,cursorPos);var textAfter=v.substring(cursorPos,v.length);$(\'#chat-input-field\').val(textBefore+ccode+textAfter);$(\'#chat-input-field\').focus();$(\'#chat-input-field\').prop(\'selectionStart\',cursorPos+ccode.length);$(\'#chat-input-field\').prop(\'selectionEnd\',cursorPos+ccode.length);jQuery(\'#hkg-emot-panel\').toggle();">';
            });
            jQuery.each(dwicon,function(code5,name5){
                dwiconbuttonl += '<img alt src="'+hkgserver+'draw/'+name5+'" style="padding:4px;" onclick="var ccode = \''+code5+'\';var cursorPos=$(\'#chat-input-field\').prop(\'selectionStart\');var v=$(\'#chat-input-field\').val();var textBefore=v.substring(0,cursorPos);var textAfter=v.substring(cursorPos,v.length);$(\'#chat-input-field\').val(textBefore+ccode+textAfter);$(\'#chat-input-field\').focus();$(\'#chat-input-field\').prop(\'selectionStart\',cursorPos+ccode.length);$(\'#chat-input-field\').prop(\'selectionEnd\',cursorPos+ccode.length);jQuery(\'#hkg-emot-panel\').toggle();">';
            });
            jQuery.each(fricon,function(code6,name6){
                friconbuttonl += '<img alt src="'+hkgserver+'frozen/'+name6+'" style="padding:4px;" onclick="var ccode = \''+code6+'\';var cursorPos=$(\'#chat-input-field\').prop(\'selectionStart\');var v=$(\'#chat-input-field\').val();var textBefore=v.substring(0,cursorPos);var textAfter=v.substring(cursorPos,v.length);$(\'#chat-input-field\').val(textBefore+ccode+textAfter);$(\'#chat-input-field\').focus();$(\'#chat-input-field\').prop(\'selectionStart\',cursorPos+ccode.length);$(\'#chat-input-field\').prop(\'selectionEnd\',cursorPos+ccode.length);jQuery(\'#hkg-emot-panel\').toggle();">';
            });
            jQuery.each(othericon,function(code7,name7){
                othericonbuttonl += '<img alt src="'+server+name7+'" style="padding:4px;" onclick="var ccode = \''+code7+'\';var cursorPos=$(\'#chat-input-field\').prop(\'selectionStart\');var v=$(\'#chat-input-field\').val();var textBefore=v.substring(0,cursorPos);var textAfter=v.substring(cursorPos,v.length);$(\'#chat-input-field\').val(textBefore+ccode+textAfter);$(\'#chat-input-field\').focus();$(\'#chat-input-field\').prop(\'selectionStart\',cursorPos+ccode.length);$(\'#chat-input-field\').prop(\'selectionEnd\',cursorPos+ccode.length);jQuery(\'#hkg-emot-panel\').toggle();">';
            });
            jQuery.each(code,function(code8,name8){
                bbcbuttonl += '<span onclick="var ccode = \''+name8+'\';var cursorPos=$(\'#chat-input-field\').prop(\'selectionStart\');var v=$(\'#chat-input-field\').val();var textBefore=v.substring(0,cursorPos);var textAfter=v.substring(cursorPos,v.length);$(\'#chat-input-field\').val(textBefore+ccode+textAfter);$(\'#chat-input-field\').focus();$(\'#chat-input-field\').prop(\'selectionStart\',cursorPos+ccode.length);$(\'#chat-input-field\').prop(\'selectionEnd\',cursorPos+ccode.length);jQuery(\'#hkg-emot-panel\').toggle();">'+code8+'</span>';
            });
            
            noriconbutton = jQuery('<div/>',{id:'hkg-emot-noriconbutton',class:'tab'}).html(noriconbuttonl);
            xmasiconbutton = jQuery('<div/>',{id:'hkg-emot-xmasiconbutton',class:'tab',style:"display:none;"}).html(xmasiconbuttonl);
            newyeariconbutton = jQuery('<div/>',{id:'hkg-emot-newyeariconbutton',class:'tab',style:"display:none;"}).html(newyeariconbuttonl);
            lomoreiconbutton = jQuery('<div/>',{id:'hkg-emot-lomoreiconbutton',class:'tab',style:"display:none;"}).html(lomoreiconbuttonl);
            dwiconbutton = jQuery('<div/>',{id:'hkg-emot-dwiconbutton',class:'tab',style:"display:none;"}).html(dwiconbuttonl);
            friconbutton = jQuery('<div/>',{id:'hkg-emot-friconbutton',class:'tab',style:"display:none;"}).html(friconbuttonl);
            othericonbutton = jQuery('<div/>',{id:'hkg-emot-othericonbutton',class:'tab',style:"display:none;"}).html(othericonbuttonl);
            bbcbutton = jQuery('<div/>',{id:'hkg-emot-bbcbutton',class:'tab',style:"display:none;"}).html(bbcbuttonl);
            
            tab = jQuery('<div/>',{id:'hkg-emot-icontab'});
            
            noricontab = jQuery('<span/>',{id:'hkg-emot-noricontab',style:"width:35px;display:inline-block;",onclick:"jQuery('.tab').css({display:'none'});jQuery('#hkg-emot-noriconbutton').css({display:'block'});"}).html('<center><b>正常</b></center>');
            xmasicontab = jQuery('<span/>',{id:'hkg-emot-xmasicontab',style:"width:35px;display:inline-block;",onclick:"jQuery('.tab').css({display:'none'});jQuery('#hkg-emot-xmasiconbutton').css({display:'block'});"}).html('<center><b>聖誕</b></center>');
            newyearicontab = jQuery('<span/>',{id:'hkg-emot-newtearicontab',style:"width:35px;display:inline-block;",onclick:"jQuery('.tab').css({display:'none'});jQuery('#hkg-emot-newyeariconbutton').css({display:'block;'})"}).html('<center><b>新年</b></center>');
            lomoreicontab = jQuery('<span/>',{id:'hkg-emot-lomoreicontab',style:"width:35px;display:inline-block;",onclick:"jQuery('.tab').css({display:'none'});jQuery('#hkg-emot-lomoreiconbutton').css({display:'block;'})"}).html('<center><b>腦魔</b></center>');
            dwicontab = jQuery('<span/>',{id:'hkg-emot-dwicontab',style:"width:35px;display:inline-block;",onclick:"jQuery('.tab').css({display:'none'});jQuery('#hkg-emot-dwiconbutton').css({display:'block;'})"}).html('<center><b>水彩</b></center>');
            fricontab = jQuery('<span/>',{id:'hkg-emot-fricontab',style:"width:35px;display:inline-block;",onclick:"jQuery('.tab').css({display:'none'});jQuery('#hkg-emot-friconbutton').css({display:'block;'})"}).html('<center><b>北極</b></center>');
            othericontab = jQuery('<span/>',{id:'hkg-emot-othericontab',style:"width:35px;display:inline-block;",onclick:"jQuery('.tab').css({display:'none'});jQuery('#hkg-emot-othericonbutton').css({display:'block;'})"}).html('<center><b>其它</b></center>');
            bbctab = jQuery('<span/>',{id:'hkg-emot-bbctab',style:"width:35px;display:inline-block;",onclick:"jQuery('.tab').css({display:'none'});jQuery('#hkg-emot-bbcbutton').css({display:'block;'})"}).html('<center><b>連結</b></center>');
            
            tab.append(noricontab);
            tab.append(xmasicontab);
            tab.append(newyearicontab);
            tab.append(lomoreicontab);
            tab.append(dwicontab);
            tab.append(fricontab);
            tab.append(othericontab);
            tab.append(bbctab);
            
            panel.append(tab);
            panel.append(spanel);
            
            spanel.append(noriconbutton);
            spanel.append(xmasiconbutton);
            spanel.append(newyeariconbutton);
            spanel.append(lomoreiconbutton);
            spanel.append(dwiconbutton);
            spanel.append(friconbutton);
            spanel.append(othericonbutton);
            spanel.append(bbcbutton);
            
            panel.insertAfter('#chat #chat-input');
            
            var u = $.extend({}, lomoreicon, newyearicon, xmasicon, othericon, noricon);
            
            DOMwatcher(jQuery('#chat #chat-messages')[0], function(t,n){
                n = jQuery(n).find('.text');
                var q = n.html();
                var srh = new Array(
                    /\[b\](.*?)\[\/b\]/g,
                    /\[i\](.*?)\[\/i\]/g,
                    /\[u\](.*?)\[\/u\]/g
                ),
                rpl = new Array(
                    '<b>$1</b>',
                    '<i>$1</i>',
                    '<u>$1</u>'
                );
                for(var i = 0; i < srh.length; i++){
                    q = q.replace(srh[i], rpl[i]);
                };
                q = q.replace(/\[(img|IMG)\][\s\S]*?href=\"(.*?)\"[\s\S]*?\[\/(img|IMG)\]/g,'<img width="100%" class="himg" alt src="$2">');
                jQuery.each(dwicon,function(code5,name5){
                    q = q.replace(new RegExp(code5.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,'\\$&'),'g'),'<img alt src="'+hkgserver+'draw/'+name5+'">');
                });
                jQuery.each(fricon,function(code6,name6){
                    q = q.replace(new RegExp(code6.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,'\\$&'),'g'),'<img alt src="'+hkgserver+'frozen/'+name6+'">');
                });
                jQuery.each(u,function(code,name){
                    q = q.replace(new RegExp(code.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,'\\$&'),'g'),'<img alt src="'+server+name+'">');
                });
                n.html(q);
            });
        }
    },500);
}
window.onload = function(){
    setTimeout(function(){
        cb();
    },2000);
};