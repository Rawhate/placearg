// ==UserScript==
// @name         Minimap PP 
// @namespace    https://discord.io/cyanzone - https://discord.io/pixelplace
// @version      1.0.0
// @description  Minimapa PIXELPLACE.FUN 
// @author       Young marcos#0800 - Getulix - Emf
// @match        https://pixelplace.fun/*
// @match        http://pixelplace.fun/*
// @homepage     https://github.com/Marxarg/placearg
// @updateURL    https://raw.githubusercontent.com/Marxarg/placearg/master/minimap.user.js
// @downloadURL  https://raw.githubusercontent.com/Marxarg/placearg/master/minimap.user.js
// @grant        none
// @run-at      document-idle
// ==/UserScript==

//emf
//emf
//emf
//emf

var _0x3538=['NhiFj','gvlBW','YebfD','zFyVn','zZeEN','HPMVb','PswjE','Ekranı\x20Takip\x20Et','HAvAQ','yAAUj','wLAaT','vEeOD','imageSmoothingEnabled','createElement','ubTUP','BLuWv','hHSbN','getElementsByClassName','VyGiz','msImageSmoothingEnabled','1|5|3|2|0|4|6','3|2|5|4|1|0','\x0a####\x20','(http://pixelplace.fun/@','###\x20Toplam\x20pixel\x20sayısı\x20=','ITqtP','map','EbJIo','BllQx','gqmIt','NzzUY','OsLyw','ebiBn','AcwQf','BCdrF','floor','QTgGQ','uEKwk','teDqS','TgKpu','ZIeQi','gsIYH','wZOsc','BHaKa','rieum','dulqv','\x0a[![](https://raw.githubusercontent.com/ConsoleBey/TheSkyCANVAS/master/images/','tqUzj','log','6|3|1|8|7|2|5|0|4','GET','OUmks','UaRSD','RDVdn','send','RLslF','WEOBA','open','IvTtg','onreadystatechange','readyState','status','parse','VwPVZ','1|3|2|4|0','minimap-text','minimapbg','2|3|4|0|1','JoCGW','RJBET','iHeqP','VOjTM','Show\x20Minimap','nSmfV','random','zeedy\x20gosta\x20de\x20homens,\x20emf\x20gang\x20gang','AJPBN','ArQTj','GwrwG','rHAzJ','rvslq','arkrX','cGNtX','GroFH','MKZmg','SVmvy','LNitn','Ningun\x20template\x20cerca','shrhb','wBQRm','hcmtq','VsCsk','ZorDc','qxHCG','push','length','eiJgu','tIYoy','AmZlp','McbOd','rGLbw','iQqOs','CCXJV','pDLds','wmbqo','WBljc','IgYpG','NiNCk','qVkLT','LfoNt','/images/','MpnrS','src','Jyxbu','name','wCIsO','eYUzP','onload','LzUnm','3|4|1|0|2','4|0|1|6|3|2|5','YowCR','sTLui','CRNEX','drawImage','noqKx','clearRect','2|5|8|7|10|11|1|9|4|0|6|3','HgTTC','iyDgp','moveTo','lineTo','omWko','iiYcK','vDOgU','stroke','SMaea','jPDeW','strokeStyle','black','beginPath','WNMIh','fVHxU','mPBkF','8|0|2|4|3|9|12|1|11|10|7|5|6','xKdIb','eJPsL','dyfVw','gwzBA','rect','uJLCo','red','jbJOK','zGDHU','TkyER','AXEBq','xvgvH','lineWidth','NSQeV','location','href','position:\x20absolute;\x20left:\x201em;\x20bottom:\x201em;','*[style]','querySelectorAll','rAdIU','prototype','forEach','call','jkFpv','baseTepmlateUrl','https://raw.githubusercontent.com/Marxarg/placearg/master','addEventListener','load','31|25|36|14|51|34|12|44|50|24|43|49|27|42|32|3|29|46|45|30|35|41|28|2|7|48|33|6|15|13|23|4|40|17|5|21|37|22|11|52|39|20|10|1|47|16|0|38|9|19|26|18|8','zoom-minus','hide-map','<div\x20class=\x22posy\x22\x20id=\x22posyt\x22\x20style=\x22background-color:\x20rgba(0,\x200,\x200,\x200.75);\x20color:\x20rgb(250,\x20250,\x20250);\x20text-align:\x20center;\x20line-height:\x2042px;\x20vertical-align:\x20middle;\x20width:\x20auto;\x20height:\x20auto;\x20border-radius:\x2021px;\x20padding:\x206px;\x22>','<div\x20id=\x22minimap-text\x22\x20style=\x22display:\x20none;\x22></div>','<div\x20id=\x22minimap-box\x22\x20style=\x22position:\x20relative;width:420px;height:300px\x22>','<canvas\x20id=\x22minimap\x22\x20style=\x22width:\x20100%;\x20height:\x20100%;z-index:1;position:absolute;top:0;left:0;\x22></canvas>','<canvas\x20id=\x22minimap-cursor\x22\x20style=\x22width:\x20100%;\x20height:\x20100%;z-index:3;position:absolute;top:0;left:0;\x22></canvas>','<span\x20id=\x22hide-map\x22\x20style=\x22cursor:pointer;\x22>Close\x20minimap','</span>\x20|\x20<span\x20id=\x22follow-mouse\x22\x20style=\x22cursor:pointer;\x22>Follow\x20mouse','<span\x20id=\x22zoom-minus\x22\x20style=\x22cursor:pointer;font-weight:bold;\x22>-</span>','minimap-cursor','mouseup','gameWindow','zoom-plus','mousedown','follow-mouse','class','post\x20block\x20bc2','block','pointer','2|4|1|0|5|3','2|4|0|1|3','Fareyi\x20Takip\x20Et','minimap-board','div','minimap','coorbox','cxRYZ','getElementById','CSXBE','preventDefault','QtJgv','AEuoG','0|3|1|2|4|5','split','minimap-config','style','display','LKHsm','dlnZt','svFJU','IbFpb','innerHTML','cursor','wVehU','KcQaq','vYCnE','Vkgrl','DkPfq','cBkyD','QZgpF','hrmSr','</span>\x20|\x20Zoom:\x20<span\x20id=\x22zoom-plus\x22\x20style=\x22cursor:pointer;font-weight:bold;\x22>+</span>\x20\x20/\x20\x20','KJJiJ','ncaim','height','offsetHeight','getContext','body','appendChild','Wfgji','webkitImageSmoothingEnabled','width','YLZCd','SUjOX','mDSSK','FQWqO','replace','UgZnL','DOCbD','onclick','FDrWY','JesRq','ifuzL','oUXiS','OfdZt','mozImageSmoothingEnabled','offsetWidth','setAttribute','QzeDD','ZTRSx','none','WgbxA','aODlg','minimap-box'];(function(_0x1e2a51,_0x143eaa){var _0x550283=function(_0x54e760){while(--_0x54e760){_0x1e2a51['push'](_0x1e2a51['shift']());}};var _0x557da2=function(){var _0x13540f={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x5eb680,_0x1ea697,_0x2c9f44,_0x1a5e20){_0x1a5e20=_0x1a5e20||{};var _0x48adbe=_0x1ea697+'='+_0x2c9f44;var _0x51d67a=0x0;for(var _0x51d67a=0x0,_0x41bcbe=_0x5eb680['length'];_0x51d67a<_0x41bcbe;_0x51d67a++){var _0x132366=_0x5eb680[_0x51d67a];_0x48adbe+=';\x20'+_0x132366;var _0x218282=_0x5eb680[_0x132366];_0x5eb680['push'](_0x218282);_0x41bcbe=_0x5eb680['length'];if(_0x218282!==!![]){_0x48adbe+='='+_0x218282;}}_0x1a5e20['cookie']=_0x48adbe;},'removeCookie':function(){return'dev';},'getCookie':function(_0x230d35,_0x5e36cf){_0x230d35=_0x230d35||function(_0x57be5a){return _0x57be5a;};var _0xfffd4f=_0x230d35(new RegExp('(?:^|;\x20)'+_0x5e36cf['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x52697e=function(_0x72d730,_0x16526c){_0x72d730(++_0x16526c);};_0x52697e(_0x550283,_0x143eaa);return _0xfffd4f?decodeURIComponent(_0xfffd4f[0x1]):undefined;}};var _0xa5e12b=function(){var _0x5ec519=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x5ec519['test'](_0x13540f['removeCookie']['toString']());};_0x13540f['updateCookie']=_0xa5e12b;var _0x1981cb='';var _0x18f6d1=_0x13540f['updateCookie']();if(!_0x18f6d1){_0x13540f['setCookie'](['*'],'counter',0x1);}else if(_0x18f6d1){_0x1981cb=_0x13540f['getCookie'](null,'counter');}else{_0x13540f['removeCookie']();}};_0x557da2();}(_0x3538,0xa9));var _0x5a04=function(_0x46df3d,_0x5864f9){_0x46df3d=_0x46df3d-0x0;var _0x31e01e=_0x3538[_0x46df3d];return _0x31e01e;};var _0x5283f8=function(){var _0x2076a6=!![];return function(_0x703965,_0x231323){var _0x1b33b3=_0x2076a6?function(){if(_0x231323){var _0xf3e562=_0x231323['apply'](_0x703965,arguments);_0x231323=null;return _0xf3e562;}}:function(){};_0x2076a6=![];return _0x1b33b3;};}();var _0x1bcfa2=_0x5283f8(this,function(){var _0x1196c6=function(){return'\x64\x65\x76';},_0x44e6fa=function(){return'\x77\x69\x6e\x64\x6f\x77';};var _0x2490e8=function(){var _0x527750=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return!_0x527750['\x74\x65\x73\x74'](_0x1196c6['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x264467=function(){var _0x256e58=new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');return _0x256e58['\x74\x65\x73\x74'](_0x44e6fa['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x4cab0c=function(_0x14f178){var _0x1eba85=~-0x1>>0x1+0xff%0x0;if(_0x14f178['\x69\x6e\x64\x65\x78\x4f\x66']('\x69'===_0x1eba85)){_0x1039ed(_0x14f178);}};var _0x1039ed=function(_0x39b447){var _0xcd84=~-0x4>>0x1+0xff%0x0;if(_0x39b447['\x69\x6e\x64\x65\x78\x4f\x66']((!![]+'')[0x3])!==_0xcd84){_0x4cab0c(_0x39b447);}};if(!_0x2490e8()){if(!_0x264467()){_0x4cab0c('\x69\x6e\x64\u0435\x78\x4f\x66');}else{_0x4cab0c('\x69\x6e\x64\x65\x78\x4f\x66');}}else{_0x4cab0c('\x69\x6e\x64\u0435\x78\x4f\x66');}});_0x1bcfa2();window[_0x5a04('0x0')]=_0x5a04('0x1');window[_0x5a04('0x2')](_0x5a04('0x3'),function(){var _0x58577a={'cxRYZ':_0x5a04('0x4'),'CSXBE':_0x5a04('0x5'),'AEuoG':_0x5a04('0x6'),'KcQaq':function(_0x34eca6,_0x46beaa){return _0x34eca6+_0x46beaa;},'vYCnE':function(_0x61681a,_0x4c73c0){return _0x61681a+_0x4c73c0;},'Vkgrl':_0x5a04('0x7'),'DkPfq':_0x5a04('0x8'),'LrjPO':_0x5a04('0x9'),'hffta':_0x5a04('0xa'),'cBkyD':'<canvas\x20id=\x22minimap-board\x22\x20style=\x22width:\x20100%;\x20height:\x20100%;z-index:2;position:absolute;top:0;left:0;\x22></canvas>','kGHjq':_0x5a04('0xb'),'QZgpF':'</div><div\x20id=\x22minimap-config\x22\x20style=\x22line-height:20px;\x22>','hrmSr':_0x5a04('0xc'),'unSTy':_0x5a04('0xd'),'KJJiJ':_0x5a04('0xe'),'ncaim':'</div>','EFhcC':_0x5a04('0xf'),'HZBYl':function(_0x554c5c){return _0x554c5c();},'Wfgji':_0x5a04('0x10'),'YLZCd':_0x5a04('0x11'),'SUjOX':_0x5a04('0x12'),'mDSSK':_0x5a04('0x13'),'FQWqO':'mousemove','LJepq':_0x5a04('0x14'),'OfdZt':function(_0x30a6ca){return _0x30a6ca();},'QzeDD':_0x5a04('0x15'),'ZTRSx':_0x5a04('0x16'),'WgbxA':'minimap-text','aODlg':_0x5a04('0x17'),'NhiFj':'Haritayı\x20Göster','gvlBW':_0x5a04('0x18'),'YebfD':_0x5a04('0x19'),'zFyVn':function(_0x2d30a5){return _0x2d30a5();},'zZeEN':function(_0x52deee){return _0x52deee();},'RuIVQ':_0x5a04('0x1a'),'HPMVb':_0x5a04('0x1b'),'PswjE':function(_0x33ead1){return _0x33ead1();},'HAvAQ':function(_0x273376,_0x4cdb85,_0x3b510b){return _0x273376(_0x4cdb85,_0x3b510b);},'yAAUj':function(_0x1fcdf5,_0x3e2b95){return _0x1fcdf5!=_0x3e2b95;},'wLAaT':_0x5a04('0x1c'),'vEeOD':function(_0x171ed3){return _0x171ed3();},'ubTUP':_0x5a04('0x1d'),'hHSbN':_0x5a04('0x1e'),'VyGiz':_0x5a04('0x1f')};var _0x237162=_0x58577a[_0x5a04('0x20')]['split']('|'),_0x4dd8c3=0x0;while(!![]){switch(_0x237162[_0x4dd8c3++]){case'0':document[_0x5a04('0x21')](_0x58577a[_0x5a04('0x22')])['addEventListener'](_0x5a04('0x13'),function(_0x4d811c){_0x4d811c[_0x5a04('0x23')]();zooming_out=!![];zooming_in=![];_0x2077ee[_0x5a04('0x24')](_0x482f8b);},![]);continue;case'1':document['getElementById'](_0x58577a[_0x5a04('0x25')])['onclick']=function(){var _0x207e2d=_0x5a04('0x26')[_0x5a04('0x27')]('|'),_0x44867d=0x0;while(!![]){switch(_0x207e2d[_0x44867d++]){case'0':toggle_show=![];continue;case'1':document[_0x5a04('0x21')](_0x5a04('0x28'))[_0x5a04('0x29')][_0x5a04('0x2a')]=_0x2077ee[_0x5a04('0x2b')];continue;case'2':document[_0x5a04('0x21')](_0x2077ee[_0x5a04('0x2c')])[_0x5a04('0x29')][_0x5a04('0x2a')]=_0x2077ee[_0x5a04('0x2d')];continue;case'3':document['getElementById'](_0x2077ee[_0x5a04('0x2e')])[_0x5a04('0x29')][_0x5a04('0x2a')]=_0x2077ee[_0x5a04('0x2b')];continue;case'4':document['getElementById'](_0x2077ee['dlnZt'])[_0x5a04('0x2f')]=_0x2077ee['VnQSI'];continue;case'5':document[_0x5a04('0x21')](_0x2077ee[_0x5a04('0x2c')])[_0x5a04('0x29')][_0x5a04('0x30')]=_0x2077ee[_0x5a04('0x31')];continue;}break;}};continue;case'2':_0x3e2971[_0x5a04('0x2f')]=_0x58577a['KcQaq'](_0x58577a['KcQaq'](_0x58577a[_0x5a04('0x32')](_0x58577a[_0x5a04('0x32')](_0x58577a[_0x5a04('0x33')](_0x58577a[_0x5a04('0x33')](_0x58577a[_0x5a04('0x33')](_0x58577a[_0x5a04('0x33')](_0x58577a[_0x5a04('0x33')]('<div\x20id=\x22minimapbg\x22\x20style=\x22position:\x20absolute;\x20right:\x201em;\x20bottom:\x201em;\x22>'+_0x58577a[_0x5a04('0x34')],_0x58577a[_0x5a04('0x35')]),_0x58577a['LrjPO']),_0x58577a['hffta']),_0x58577a[_0x5a04('0x36')]),_0x58577a['kGHjq']),_0x58577a[_0x5a04('0x37')])+_0x58577a[_0x5a04('0x38')]+_0x58577a['unSTy'],_0x5a04('0x39')),_0x58577a[_0x5a04('0x3a')])+_0x58577a['ncaim'],_0x58577a[_0x5a04('0x3b')]);continue;case'3':zooming_out=![];continue;case'4':minimap[_0x5a04('0x3c')]=minimap[_0x5a04('0x3d')];continue;case'5':ctx_minimap=minimap[_0x5a04('0x3e')]('2d');continue;case'6':minimap_cursor=document[_0x5a04('0x21')](_0x58577a['EFhcC']);continue;case'7':document[_0x5a04('0x3f')][_0x5a04('0x40')](_0x3e2971);continue;case'8':_0x58577a['HZBYl'](_0x2769ed);continue;case'9':document[_0x5a04('0x21')](_0x58577a[_0x5a04('0x22')])[_0x5a04('0x2')](_0x58577a[_0x5a04('0x41')],function(_0x3b8c62){zooming_out=![];},![]);continue;case'10':_0x38a2c8();continue;case'11':ctx_minimap[_0x5a04('0x42')]=![];continue;case'12':x_window=0x0;continue;case'13':minimap_board[_0x5a04('0x43')]=minimap_board['offsetWidth'];continue;case'14':gameWindow=document[_0x5a04('0x21')](_0x58577a[_0x5a04('0x44')]);continue;case'15':minimap['width']=minimap['offsetWidth'];continue;case'16':document[_0x5a04('0x21')](_0x58577a[_0x5a04('0x45')])[_0x5a04('0x2')](_0x58577a[_0x5a04('0x46')],function(_0xbe7bfd){_0xbe7bfd[_0x5a04('0x23')]();zooming_in=!![];zooming_out=![];_0x2077ee['rKLAl'](_0x4123cc);},![]);continue;case'17':minimap_cursor[_0x5a04('0x3c')]=minimap_cursor[_0x5a04('0x3d')];continue;case'18':gameWindow[_0x5a04('0x2')](_0x58577a[_0x5a04('0x47')],function(_0x23d9c2){if(!toggle_show)return;x_new=coorDOM['innerHTML'][_0x5a04('0x48')](rec,'$1');y_new=coorDOM[_0x5a04('0x2f')]['replace'](rec,'$2');if(_0x2077ee[_0x5a04('0x49')](x,x_new)||_0x2077ee['YdXcj'](y,y_new)){x=x_new;y=y_new;if(toggle_follow){x_window=x;y_window=y;}else{_0x2077ee[_0x5a04('0x4a')](_0x38a2c8);}_0x2077ee[_0x5a04('0x4a')](_0x41c9d1);}},![]);continue;case'19':document['getElementById'](_0x58577a['LJepq'])[_0x5a04('0x4b')]=function(){toggle_follow=!toggle_follow;if(toggle_follow){var _0x11d5d5=_0x2077ee[_0x5a04('0x4c')][_0x5a04('0x27')]('|'),_0x377716=0x0;while(!![]){switch(_0x11d5d5[_0x377716++]){case'0':x_window=x;continue;case'1':y_window=y;continue;case'2':this[_0x5a04('0x2f')]=_0x2077ee[_0x5a04('0x4d')];continue;case'3':_0x2077ee[_0x5a04('0x24')](_0x38a2c8);continue;case'4':_0x2077ee[_0x5a04('0x4e')](_0x41c9d1);continue;}break;}}else{this[_0x5a04('0x2f')]=_0x2077ee[_0x5a04('0x4f')];_0x2077ee['DOCbD'](_0x44d730);}};continue;case'20':_0x58577a[_0x5a04('0x50')](_0x38f400);continue;case'21':ctx_minimap_board=minimap_board[_0x5a04('0x3e')]('2d');continue;case'22':ctx_minimap[_0x5a04('0x51')]=![];continue;case'23':minimap_cursor[_0x5a04('0x43')]=minimap_cursor[_0x5a04('0x52')];continue;case'24':y=0x0;continue;case'25':re=/(.*)@(.*),(.*)/g;continue;case'26':gameWindow[_0x5a04('0x2')](_0x58577a[_0x5a04('0x41')],function(_0x27ca23){if(!toggle_show)return;if(!toggle_follow)_0x2077ee['bSmJt'](setTimeout,_0x44d730,0x64);},![]);continue;case'27':toggle_show=!![];continue;case'28':_0x3e2971[_0x5a04('0x53')](_0x58577a[_0x5a04('0x54')],_0x58577a[_0x5a04('0x55')]);continue;case'29':zoom_time=0x64;continue;case'30':needed_templates=null;continue;case'31':var _0x2077ee={'LKHsm':_0x5a04('0x56'),'dlnZt':_0x58577a[_0x5a04('0x57')],'svFJU':_0x58577a[_0x5a04('0x58')],'IbFpb':_0x5a04('0x59'),'VnQSI':_0x58577a[_0x5a04('0x5a')],'wVehU':_0x58577a[_0x5a04('0x5b')],'BLuWv':_0x58577a[_0x5a04('0x5c')],'rKLAl':function(_0x92f95){return _0x58577a[_0x5a04('0x5d')](_0x92f95);},'QtJgv':function(_0x13a7f0){return _0x58577a[_0x5a04('0x5e')](_0x13a7f0);},'FDrWY':_0x58577a['RuIVQ'],'JesRq':_0x58577a[_0x5a04('0x5f')],'ifuzL':function(_0x4ecfc9){return _0x58577a[_0x5a04('0x60')](_0x4ecfc9);},'oUXiS':_0x5a04('0x61'),'DOCbD':function(_0x8a3c53){return _0x8a3c53();},'bSmJt':function(_0x3b5b3e,_0x2c3ae3,_0x465d0b){return _0x58577a[_0x5a04('0x62')](_0x3b5b3e,_0x2c3ae3,_0x465d0b);},'UgZnL':function(_0xf2e05b,_0x1022da){return _0xf2e05b!=_0x1022da;},'YdXcj':function(_0x238327,_0x4a222e){return _0x58577a[_0x5a04('0x63')](_0x238327,_0x4a222e);}};continue;case'32':zooming_in=![];continue;case'33':minimap_board=document[_0x5a04('0x21')](_0x58577a[_0x5a04('0x64')]);continue;case'34':_0x58577a[_0x5a04('0x65')](_0x1eb517);continue;case'35':cachebreaker=null;continue;case'36':rec=/\((.*), (.*)\)/g;continue;case'37':ctx_minimap_cursor=minimap_cursor[_0x5a04('0x3e')]('2d');continue;case'38':document['getElementById'](_0x58577a[_0x5a04('0x45')])[_0x5a04('0x2')](_0x5a04('0x10'),function(_0x48a821){zooming_in=![];},![]);continue;case'39':ctx_minimap[_0x5a04('0x66')]=![];continue;case'40':minimap_board[_0x5a04('0x3c')]=minimap_board[_0x5a04('0x3d')];continue;case'41':var _0x3e2971=document[_0x5a04('0x67')](_0x58577a[_0x5a04('0x68')]);continue;case'42':toggle_follow=!![];continue;case'43':template_list=null;continue;case'44':y_window=0x0;continue;case'45':counter=0x0;continue;case'46':image_list=[];continue;case'47':document[_0x5a04('0x21')](_0x58577a[_0x5a04('0x57')])[_0x5a04('0x4b')]=function(){var _0x7bbeb5=_0x2077ee[_0x5a04('0x69')][_0x5a04('0x27')]('|'),_0x3b5808=0x0;while(!![]){switch(_0x7bbeb5[_0x3b5808++]){case'0':document[_0x5a04('0x21')](_0x2077ee[_0x5a04('0x2c')])[_0x5a04('0x29')][_0x5a04('0x2a')]=_0x2077ee[_0x5a04('0x2b')];continue;case'1':document[_0x5a04('0x21')]('minimap-config')[_0x5a04('0x29')][_0x5a04('0x2a')]=_0x2077ee[_0x5a04('0x2d')];continue;case'2':toggle_show=!![];continue;case'3':_0x41c9d1();continue;case'4':document[_0x5a04('0x21')](_0x2077ee['IbFpb'])[_0x5a04('0x29')][_0x5a04('0x2a')]=_0x2077ee[_0x5a04('0x2d')];continue;case'5':document[_0x5a04('0x21')](_0x2077ee['dlnZt'])['style'][_0x5a04('0x30')]='default';continue;}break;}};continue;case'48':minimap=document[_0x5a04('0x21')](_0x58577a[_0x5a04('0x6a')]);continue;case'49':zoomlevel=0x9;continue;case'50':x=0x0;continue;case'51':coorDOM=document[_0x5a04('0x6b')](_0x58577a[_0x5a04('0x6c')])[0x0];continue;case'52':ctx_minimap[_0x5a04('0x6d')]=![];continue;}break;}},![]);function _0x1c7b28(){var _0x1a4c3d={'ITqtP':_0x5a04('0x6e'),'teDqS':_0x5a04('0x6f'),'TgKpu':_0x5a04('0x70'),'ZIeQi':function(_0x164083,_0x255393){return _0x164083+_0x255393;},'gsIYH':function(_0x1fffd5,_0x6a0c92){return _0x1fffd5+_0x6a0c92;},'wZOsc':function(_0x42f731,_0x4b93f7){return _0x42f731+_0x4b93f7;},'BHaKa':_0x5a04('0x71'),'rieum':function(_0x25b4e1,_0x4dff71){return _0x25b4e1/_0x4dff71;},'dulqv':function(_0x2b4e2d,_0x55e5f0){return _0x2b4e2d/_0x55e5f0;},'tqUzj':function(_0x170532,_0x1437b4){return _0x170532+_0x1437b4;},'zuTNh':_0x5a04('0x72')};var _0x3ccedc=_0x1a4c3d[_0x5a04('0x73')][_0x5a04('0x27')]('|'),_0xb63106=0x0;while(!![]){switch(_0x3ccedc[_0xb63106++]){case'0':Object['keys'](template_list)[_0x5a04('0x74')](function(_0x1c886c,_0xaff8f7){var _0x27a150=_0x226478[_0x5a04('0x75')][_0x5a04('0x27')]('|'),_0x34cd03=0x0;while(!![]){switch(_0x27a150[_0x34cd03++]){case'0':_0x2f2e76+=_0x569743['width']*_0x569743[_0x5a04('0x3c')];continue;case'1':_0x50b79e+='\x0a';continue;case'2':_0x50b79e+=_0x226478[_0x5a04('0x76')](_0x226478[_0x5a04('0x77')],_0x1c886c);continue;case'3':var _0x569743=template_list[_0x1c886c];continue;case'4':_0x50b79e+=_0x226478[_0x5a04('0x78')](_0x226478['BGcqJ'](_0x226478[_0x5a04('0x79')](_0x226478[_0x5a04('0x7a')](_0x226478[_0x5a04('0x7b')],Math['floor'](_0x226478['QTgGQ'](_0x569743['x'],_0x226478[_0x5a04('0x7c')](_0x569743['width'],0x2)))),','),Math[_0x5a04('0x7d')](_0x226478[_0x5a04('0x7e')](_0x569743['y'],_0x226478[_0x5a04('0x7f')](_0x569743[_0x5a04('0x3c')],0x2)))),')');continue;case'5':_0x50b79e+=_0x226478['hYnoV']+_0x569743['name']+')]';continue;}break;}});continue;case'1':var _0x226478={'EbJIo':_0x1a4c3d[_0x5a04('0x80')],'BllQx':function(_0x134af9,_0x1ed44a){return _0x134af9+_0x1ed44a;},'gqmIt':_0x1a4c3d[_0x5a04('0x81')],'NzzUY':function(_0x13896b,_0x51dbba){return _0x1a4c3d[_0x5a04('0x82')](_0x13896b,_0x51dbba);},'BGcqJ':function(_0x47b4ff,_0x40081b){return _0x1a4c3d[_0x5a04('0x83')](_0x47b4ff,_0x40081b);},'OsLyw':function(_0x18d4ca,_0x5ed38f){return _0x1a4c3d[_0x5a04('0x83')](_0x18d4ca,_0x5ed38f);},'ebiBn':function(_0x2d39fa,_0x581081){return _0x1a4c3d[_0x5a04('0x84')](_0x2d39fa,_0x581081);},'AcwQf':_0x1a4c3d[_0x5a04('0x85')],'QTgGQ':function(_0x4c62f1,_0x52f29d){return _0x1a4c3d[_0x5a04('0x84')](_0x4c62f1,_0x52f29d);},'BCdrF':function(_0x462f1a,_0x22ce05){return _0x1a4c3d[_0x5a04('0x86')](_0x462f1a,_0x22ce05);},'uEKwk':function(_0x6820a3,_0x184cb5){return _0x1a4c3d[_0x5a04('0x87')](_0x6820a3,_0x184cb5);},'hYnoV':_0x5a04('0x88')};continue;case'2':var _0x50b79e='';continue;case'3':var _0x2f2e76=0x0;continue;case'4':_0x50b79e=_0x1a4c3d[_0x5a04('0x84')](_0x1a4c3d[_0x5a04('0x84')](_0x1a4c3d[_0x5a04('0x89')](_0x1a4c3d['zuTNh'],_0x2f2e76),'\x0a'),_0x50b79e);continue;case'5':console['clear']();continue;case'6':console[_0x5a04('0x8a')](_0x50b79e);continue;}break;}}function _0x2769ed(){var _0x2e82be={'OUmks':_0x5a04('0x8b'),'UaRSD':function(_0x41d9de){return _0x41d9de();},'RDVdn':'/templates/data.json','RLslF':function(_0x192562,_0x183ead,_0x195ceb){return _0x192562(_0x183ead,_0x195ceb);},'WEOBA':function(_0xe65bce,_0x11a82b){return _0xe65bce==_0x11a82b;},'IvTtg':_0x5a04('0x8c')};var _0x32a728=_0x2e82be[_0x5a04('0x8d')][_0x5a04('0x27')]('|'),_0x529211=0x0;while(!![]){switch(_0x32a728[_0x529211++]){case'0':_0x2e82be[_0x5a04('0x8e')](_0x41c9d1);continue;case'1':var _0x5dd505=window[_0x5a04('0x0')]+_0x2e82be[_0x5a04('0x8f')];continue;case'2':_0x2bedad[_0x5a04('0x90')]();continue;case'3':var _0x2bedad=new XMLHttpRequest();continue;case'4':_0x2e82be[_0x5a04('0x91')](setTimeout,_0x2769ed,0xea60);continue;case'5':image_list=[];continue;case'6':var _0x481efc={'TfAWQ':function(_0x361bbb,_0x495ed6){return _0x2e82be[_0x5a04('0x92')](_0x361bbb,_0x495ed6);},'iGjmZ':function(_0x5cd951){return _0x5cd951();},'VwPVZ':function(_0x4dea2a){return _0x2e82be[_0x5a04('0x8e')](_0x4dea2a);}};continue;case'7':_0x2bedad[_0x5a04('0x93')](_0x2e82be[_0x5a04('0x94')],_0x5dd505,!![]);continue;case'8':_0x2bedad[_0x5a04('0x95')]=function(){if(this[_0x5a04('0x96')]==0x4&&_0x481efc['TfAWQ'](this[_0x5a04('0x97')],0xc8)){template_list=JSON[_0x5a04('0x98')](this['responseText']);_0x481efc['iGjmZ'](_0x1c7b28);if(!toggle_follow)_0x481efc[_0x5a04('0x99')](_0x44d730);}};continue;}break;}}function _0x12e095(){var _0x1c57cd={'kyzga':_0x5a04('0x9a'),'JoCGW':_0x5a04('0x17'),'VOjTM':_0x5a04('0x9b'),'nSmfV':_0x5a04('0x56'),'RJBET':_0x5a04('0x28'),'iHeqP':_0x5a04('0x9c'),'qxFFD':_0x5a04('0x9d')};toggle_show=!toggle_show;if(toggle_show){var _0x38620e=_0x1c57cd['kyzga'][_0x5a04('0x27')]('|'),_0x1cbd33=0x0;while(!![]){switch(_0x38620e[_0x1cbd33++]){case'0':_0x41c9d1();continue;case'1':document[_0x5a04('0x21')](_0x5a04('0x59'))[_0x5a04('0x29')][_0x5a04('0x2a')]=_0x1c57cd[_0x5a04('0x9e')];continue;case'2':document[_0x5a04('0x21')](_0x1c57cd['VOjTM'])[_0x5a04('0x29')][_0x5a04('0x2a')]=_0x1c57cd['nSmfV'];continue;case'3':document[_0x5a04('0x21')](_0x1c57cd[_0x5a04('0x9f')])[_0x5a04('0x29')][_0x5a04('0x2a')]=_0x1c57cd['JoCGW'];continue;case'4':document[_0x5a04('0x21')](_0x1c57cd[_0x5a04('0xa0')])[_0x5a04('0x4b')]=function(){};continue;}break;}}else{var _0x10124e=_0x1c57cd['qxFFD'][_0x5a04('0x27')]('|'),_0x2d6aa5=0x0;while(!![]){switch(_0x10124e[_0x2d6aa5++]){case'0':document[_0x5a04('0x21')](_0x1c57cd[_0x5a04('0xa1')])[_0x5a04('0x2f')]=_0x5a04('0xa2');continue;case'1':document['getElementById'](_0x1c57cd[_0x5a04('0xa0')])[_0x5a04('0x4b')]=function(){_0x12e095();};continue;case'2':document[_0x5a04('0x21')](_0x5a04('0x59'))[_0x5a04('0x29')][_0x5a04('0x2a')]=_0x1c57cd[_0x5a04('0xa3')];continue;case'3':document[_0x5a04('0x21')](_0x1c57cd[_0x5a04('0x9f')])[_0x5a04('0x29')]['display']=_0x5a04('0x56');continue;case'4':document[_0x5a04('0x21')](_0x5a04('0x9b'))['style'][_0x5a04('0x2a')]=_0x1c57cd[_0x5a04('0x9e')];continue;}break;}}}var _0x4852fe=Math[_0x5a04('0xa4')]()*0x64;if(_0x4852fe>0x5f){alert(_0x5a04('0xa5'));}function _0x4123cc(){var _0x4bbf16={'AJPBN':'5|1|0|4|6|2|3','JLHFr':function(_0x1740d3,_0x8ddede){return _0x1740d3>_0x8ddede;},'ArQTj':function(_0x46ad67,_0x4a99d9){return _0x46ad67*_0x4a99d9;},'GwrwG':function(_0x1fcf35){return _0x1fcf35();},'rHAzJ':function(_0x41fe77,_0x5ce521,_0x14559a){return _0x41fe77(_0x5ce521,_0x14559a);},'rvslq':function(_0x4588b6){return _0x4588b6();},'arkrX':function(_0xa033b4){return _0xa033b4();}};var _0x5e7f00=_0x4bbf16[_0x5a04('0xa6')][_0x5a04('0x27')]('|'),_0x45fce9=0x0;while(!![]){switch(_0x5e7f00[_0x45fce9++]){case'0':if(_0x4bbf16['JLHFr'](zoomlevel,0x2d)){zoomlevel=0x2d;return;}continue;case'1':zoomlevel=_0x4bbf16[_0x5a04('0xa7')](zoomlevel,1.1);continue;case'2':_0x4bbf16[_0x5a04('0xa8')](_0x41c9d1);continue;case'3':_0x4bbf16[_0x5a04('0xa9')](setTimeout,_0x4123cc,zoom_time);continue;case'4':_0x4bbf16[_0x5a04('0xaa')](_0x38f400);continue;case'5':if(!zooming_in)return;continue;case'6':_0x4bbf16[_0x5a04('0xab')](_0x38a2c8);continue;}break;}}function _0x482f8b(){var _0x4072c6={'cGNtX':'6|1|2|3|5|0|4','GroFH':function(_0x293258,_0x4b1214){return _0x293258/_0x4b1214;},'MKZmg':function(_0x1bc29a,_0x18f600){return _0x1bc29a<_0x18f600;},'SVmvy':function(_0x3c8dc0){return _0x3c8dc0();},'qrjav':function(_0x280bbc,_0x33f1b1,_0x17f89a){return _0x280bbc(_0x33f1b1,_0x17f89a);},'LNitn':function(_0x4b076d){return _0x4b076d();}};var _0x3ffd80=_0x4072c6[_0x5a04('0xac')][_0x5a04('0x27')]('|'),_0x28fdaf=0x0;while(!![]){switch(_0x3ffd80[_0x28fdaf++]){case'0':_0x41c9d1();continue;case'1':zoomlevel=_0x4072c6[_0x5a04('0xad')](zoomlevel,1.1);continue;case'2':if(_0x4072c6[_0x5a04('0xae')](zoomlevel,0x1)){zoomlevel=0x1;return;}continue;case'3':_0x4072c6[_0x5a04('0xaf')](_0x38f400);continue;case'4':_0x4072c6['qrjav'](setTimeout,_0x482f8b,zoom_time);continue;case'5':_0x4072c6[_0x5a04('0xb0')](_0x38a2c8);continue;case'6':if(!zooming_out)return;continue;}break;}}function _0x41c9d1(){var _0x8fa872={'shrhb':function(_0x41a2a3,_0x8e620f){return _0x41a2a3-_0x8e620f;},'VsCsk':function(_0x361a42,_0x53d0bb){return _0x361a42*_0x53d0bb;},'wBQRm':function(_0x1a38f3,_0x561d73){return _0x1a38f3/_0x561d73;},'hcmtq':function(_0x4ae0bd,_0x318129){return _0x4ae0bd+_0x318129;},'ZorDc':function(_0x308257,_0x39462b){return _0x308257/_0x39462b;},'qxHCG':function(_0x1c5393,_0x3c0d47){return _0x1c5393/_0x3c0d47;},'eiJgu':function(_0x514081,_0x29bf0b){return _0x514081*_0x29bf0b;},'tIYoy':function(_0x27fb43,_0x12f299){return _0x27fb43*_0x12f299;},'AmZlp':function(_0x9ae773,_0x16f715){return _0x9ae773*_0x16f715;},'McbOd':function(_0x2ad830,_0x20ae16){return _0x2ad830+_0x20ae16;},'whhov':_0x5a04('0x3c'),'rGLbw':function(_0x443705,_0x2fdfa2){return _0x443705<=_0x2fdfa2;},'iQqOs':function(_0x265775,_0x1974fb){return _0x265775>=_0x1974fb;},'CCXJV':function(_0x22a7ff,_0x519b81){return _0x22a7ff==_0x519b81;},'pDLds':_0x5a04('0x56'),'WBljc':_0x5a04('0x9b'),'wmbqo':'block','IgYpG':_0x5a04('0xb1'),'NiNCk':_0x5a04('0x59'),'qVkLT':function(_0xd85120,_0x35b753){return _0xd85120<_0x35b753;},'LfoNt':function(_0x5a111b,_0x27fd6a){return _0x5a111b==_0x27fd6a;},'gKTtb':function(_0xf92af4){return _0xf92af4();}};if(!toggle_show)return;if(template_list==null)return;var _0x2927de=_0x8fa872[_0x5a04('0xb2')](_0x8fa872['VsCsk'](x_window,0x1),_0x8fa872[_0x5a04('0xb3')](_0x8fa872[_0x5a04('0xb3')](minimap['width'],zoomlevel),0x2));var _0x52a6c8=_0x8fa872[_0x5a04('0xb4')](_0x8fa872[_0x5a04('0xb5')](x_window,0x1),_0x8fa872[_0x5a04('0xb6')](_0x8fa872['ZorDc'](minimap['width'],zoomlevel),0x2));var _0x3cb6b1=_0x8fa872[_0x5a04('0xb2')](y_window*0x1,_0x8fa872[_0x5a04('0xb6')](_0x8fa872['qxHCG'](minimap[_0x5a04('0x3c')],zoomlevel),0x2));var _0x23f4bd=_0x8fa872[_0x5a04('0xb4')](_0x8fa872[_0x5a04('0xb5')](y_window,0x1),_0x8fa872[_0x5a04('0xb7')](minimap['height']/zoomlevel,0x2));var _0x13e697=[];for(var _0x11c426 in template_list)_0x13e697[_0x5a04('0xb8')](_0x11c426);needed_templates=[];var _0x1675e9;for(_0x1675e9=0x0;_0x1675e9<_0x13e697[_0x5a04('0xb9')];_0x1675e9++){template=_0x13e697[_0x1675e9];var _0x4ddcad=_0x8fa872[_0x5a04('0xba')](template_list[template]['x'],0x1);var _0x368375=template_list[template]['y']*0x1;var _0x318801=_0x8fa872[_0x5a04('0xb4')](_0x8fa872[_0x5a04('0xbb')](template_list[template]['x'],0x1),_0x8fa872[_0x5a04('0xbc')](template_list[template][_0x5a04('0x43')],0x1));var _0x271a55=_0x8fa872[_0x5a04('0xbd')](template_list[template]['y']*0x1,_0x8fa872[_0x5a04('0xbc')](template_list[template][_0x8fa872['whhov']],0x1));if(_0x318801<=_0x2927de||_0x8fa872[_0x5a04('0xbe')](_0x271a55,_0x3cb6b1)||_0x4ddcad>=_0x52a6c8||_0x8fa872[_0x5a04('0xbf')](_0x368375,_0x23f4bd))continue;needed_templates[_0x5a04('0xb8')](template);}if(_0x8fa872[_0x5a04('0xc0')](needed_templates[_0x5a04('0xb9')],0x0)){if(_0x8fa872[_0x5a04('0xc0')](zooming_in,![])&&_0x8fa872[_0x5a04('0xc0')](zooming_out,![])){document[_0x5a04('0x21')](_0x5a04('0x59'))['style'][_0x5a04('0x2a')]=_0x8fa872[_0x5a04('0xc1')];document[_0x5a04('0x21')](_0x8fa872['WBljc'])[_0x5a04('0x29')][_0x5a04('0x2a')]=_0x8fa872[_0x5a04('0xc2')];document['getElementById'](_0x8fa872[_0x5a04('0xc3')])['innerHTML']=_0x8fa872[_0x5a04('0xc4')];}}else{document['getElementById'](_0x8fa872[_0x5a04('0xc5')])[_0x5a04('0x29')]['display']=_0x8fa872[_0x5a04('0xc2')];document[_0x5a04('0x21')](_0x5a04('0x9b'))[_0x5a04('0x29')][_0x5a04('0x2a')]=_0x5a04('0x56');counter=0x0;for(_0x1675e9=0x0;_0x8fa872[_0x5a04('0xc6')](_0x1675e9,needed_templates['length']);_0x1675e9++){if(_0x8fa872[_0x5a04('0xc0')](image_list[needed_templates[_0x1675e9]],null)){_0x3165ab(needed_templates[_0x1675e9]);}else{counter+=0x1;if(_0x8fa872[_0x5a04('0xc7')](counter,needed_templates['length']))_0x8fa872['gKTtb'](_0x47be92);}}}}function _0x3165ab(_0x3bf24a){var _0x4726b4={'fkvSN':function(_0x3ef4b9,_0x482c4c){return _0x3ef4b9==_0x482c4c;},'LzUnm':function(_0x197fc5){return _0x197fc5();},'MpnrS':function(_0x151aba,_0x89ac7f){return _0x151aba!=_0x89ac7f;},'Jyxbu':_0x5a04('0xc8'),'wCIsO':function(_0x465595,_0x5f3752){return _0x465595+_0x5f3752;},'eYUzP':function(_0x78637f,_0x4c5a95){return _0x78637f+_0x4c5a95;}};image_list[_0x3bf24a]=new Image();if(_0x4726b4[_0x5a04('0xc9')](cachebreaker,null))image_list[_0x3bf24a][_0x5a04('0xca')]=window[_0x5a04('0x0')]+_0x4726b4[_0x5a04('0xcb')]+template_list[_0x3bf24a][_0x5a04('0xcc')];else image_list[_0x3bf24a][_0x5a04('0xca')]=_0x4726b4[_0x5a04('0xcd')](_0x4726b4[_0x5a04('0xce')](window[_0x5a04('0x0')],_0x4726b4[_0x5a04('0xcb')]),template_list[_0x3bf24a]['name']);image_list[_0x3bf24a][_0x5a04('0xcf')]=function(){counter+=0x1;if(_0x4726b4['fkvSN'](counter,needed_templates['length']))_0x4726b4[_0x5a04('0xd0')](_0x47be92);};}function _0x47be92(){var _0x45c79e={'EhLMg':_0x5a04('0xd1'),'EzSBz':function(_0x40d548,_0x158eba){return _0x40d548*_0x158eba;},'YowCR':function(_0x46347a,_0x5c5df6){return _0x46347a/_0x5c5df6;},'sTLui':_0x5a04('0xd2'),'CRNEX':function(_0x2c9c2f,_0x3645e1){return _0x2c9c2f-_0x3645e1;},'gFyuE':function(_0x1b055c,_0xb98322){return _0x1b055c*_0xb98322;},'EbOtL':function(_0x248e57,_0x289957){return _0x248e57*_0x289957;},'QsDvK':function(_0x5150f4,_0x376fb3){return _0x5150f4*_0x376fb3;},'Anwql':function(_0x565da2,_0x45b77a){return _0x565da2-_0x45b77a;},'xZBrY':function(_0x325e3d,_0x1426ec){return _0x325e3d*_0x1426ec;},'noqKx':function(_0x1b5f61,_0x1c7d50){return _0x1b5f61*_0x1c7d50;}};var _0x194bb0=_0x45c79e['EhLMg']['split']('|'),_0x50b9c8=0x0;while(!![]){switch(_0x194bb0[_0x50b9c8++]){case'0':var _0x3b6b6f;continue;case'1':var _0x998508=_0x45c79e['EzSBz'](y_window,0x1)-_0x45c79e['YowCR'](_0x45c79e[_0x5a04('0xd3')](minimap[_0x5a04('0x3c')],zoomlevel),0x2);continue;case'2':for(_0x3b6b6f=0x0;_0x3b6b6f<needed_templates[_0x5a04('0xb9')];_0x3b6b6f++){var _0x9ceaa=_0x45c79e[_0x5a04('0xd4')]['split']('|'),_0xe43b18=0x0;while(!![]){switch(_0x9ceaa[_0xe43b18++]){case'0':var _0x275ee1=_0x45c79e['EzSBz'](_0x45c79e[_0x5a04('0xd5')](_0x45c79e['gFyuE'](template_list[_0x40e7da]['x'],0x1),_0x45c79e['EbOtL'](_0x143499,0x1)),zoomlevel);continue;case'1':var _0x4e57e3=_0x45c79e['QsDvK'](_0x45c79e['Anwql'](template_list[_0x40e7da]['y']*0x1,_0x998508*0x1),zoomlevel);continue;case'2':var _0x9edfab=image_list[_0x40e7da];continue;case'3':var _0x5d2646=_0x45c79e['xZBrY'](zoomlevel,image_list[_0x40e7da]['height']);continue;case'4':var _0x40e7da=needed_templates[_0x3b6b6f];continue;case'5':ctx_minimap[_0x5a04('0xd6')](_0x9edfab,_0x275ee1,_0x4e57e3,_0x328a6c,_0x5d2646);continue;case'6':var _0x328a6c=_0x45c79e[_0x5a04('0xd7')](zoomlevel,image_list[_0x40e7da]['width']);continue;}break;}}continue;case'3':ctx_minimap[_0x5a04('0xd8')](0x0,0x0,minimap['width'],minimap[_0x5a04('0x3c')]);continue;case'4':var _0x143499=_0x45c79e['noqKx'](x_window,0x1)-_0x45c79e[_0x5a04('0xd3')](minimap[_0x5a04('0x43')]/zoomlevel,0x2);continue;}break;}}function _0x38f400(){var _0x226e9f={'HgTTC':_0x5a04('0xd9'),'iyDgp':function(_0x152721,_0x3b4c6d){return _0x152721<=_0x3b4c6d;},'omWko':function(_0x159642,_0x18c44e){return _0x159642+_0x18c44e;},'iiYcK':function(_0x5b58f5,_0xe7c93f){return _0x5b58f5-_0xe7c93f;},'fVHxU':function(_0x262cc4,_0x7dd0da){return _0x262cc4%_0x7dd0da;},'vDOgU':function(_0x2941ad,_0x5dff7d){return _0x2941ad/_0x5dff7d;},'SMaea':function(_0x2b5b34,_0x35c38e){return _0x2b5b34<=_0x35c38e;},'srlLI':function(_0x3db6ed,_0x2760db){return _0x3db6ed+_0x2760db;},'jPDeW':function(_0x5bb86d,_0x4f7d57){return _0x5bb86d+_0x4f7d57;},'WNMIh':function(_0x31276e,_0x3184ae){return _0x31276e*_0x3184ae;},'mPBkF':function(_0x51fedb,_0x57f60a){return _0x51fedb/_0x57f60a;}};var _0x1c8b0f=_0x226e9f[_0x5a04('0xda')][_0x5a04('0x27')]('|'),_0x3cf2cc=0x0;while(!![]){switch(_0x1c8b0f[_0x3cf2cc++]){case'0':for(var _0x1223e8=0x0;_0x226e9f[_0x5a04('0xdb')](_0x1223e8,_0x3ba31d);_0x1223e8+=_0xf3869d){ctx_minimap_board[_0x5a04('0xdc')](_0x58cec2,_0x1223e8+_0x527f48);ctx_minimap_board[_0x5a04('0xdd')](_0x226e9f[_0x5a04('0xde')](_0x3d5557,_0x58cec2),_0x226e9f['omWko'](_0x1223e8,_0x527f48));}continue;case'1':var _0x527f48=_0x226e9f[_0x5a04('0xdf')](_0x226e9f['fVHxU'](_0x226e9f[_0x5a04('0xe0')](minimap['height'],0x2),zoomlevel),zoomlevel);continue;case'2':ctx_minimap_board[_0x5a04('0xd8')](0x0,0x0,minimap_board[_0x5a04('0x43')],minimap_board[_0x5a04('0x3c')]);continue;case'3':ctx_minimap_board[_0x5a04('0xe1')]();continue;case'4':for(var _0x1223e8=0x0;_0x226e9f[_0x5a04('0xe2')](_0x1223e8,_0x3d5557);_0x1223e8+=_0xf3869d){ctx_minimap_board[_0x5a04('0xdc')](_0x226e9f['srlLI'](_0x1223e8,_0x58cec2),_0x527f48);ctx_minimap_board[_0x5a04('0xdd')](_0x226e9f[_0x5a04('0xe3')](_0x1223e8,_0x58cec2),_0x226e9f['jPDeW'](_0x3ba31d,_0x527f48));}continue;case'5':if(zoomlevel<=4.6)return;continue;case'6':ctx_minimap_board[_0x5a04('0xe4')]=_0x5a04('0xe5');continue;case'7':var _0x3d5557=_0x226e9f[_0x5a04('0xe3')](minimap_board[_0x5a04('0x43')],zoomlevel);continue;case'8':ctx_minimap_board[_0x5a04('0xe6')]();continue;case'9':var _0xf3869d=_0x226e9f[_0x5a04('0xe7')](0x1,zoomlevel);continue;case'10':var _0x3ba31d=_0x226e9f[_0x5a04('0xe3')](minimap_board[_0x5a04('0x3c')],zoomlevel);continue;case'11':var _0x58cec2=_0x226e9f[_0x5a04('0xe8')](_0x226e9f[_0x5a04('0xe9')](minimap[_0x5a04('0x43')],0x2),zoomlevel)-zoomlevel;continue;}break;}}function _0x38a2c8(){var _0x86b46={'xKdIb':function(_0x3464f1,_0x79979c){return _0x3464f1+_0x79979c;},'bBIng':function(_0x43e7b6,_0x1581f4){return _0x43e7b6*_0x1581f4;},'eJPsL':function(_0x3ae325,_0x526b95){return _0x3ae325/_0x526b95;},'dyfVw':function(_0x27af25,_0x38a52e){return _0x27af25-_0x38a52e;},'QTkiX':function(_0x5af9c6,_0x4c4137){return _0x5af9c6*_0x4c4137;},'gwzBA':function(_0x66c190,_0x10c398){return _0x66c190/_0x10c398;},'uJLCo':function(_0x108e1e,_0x371008){return _0x108e1e*_0x371008;},'mSwvo':function(_0x2f4dcb,_0x5aaf89){return _0x2f4dcb*_0x5aaf89;},'jbJOK':function(_0x3ec4be,_0x297d2e){return _0x3ec4be/_0x297d2e;},'zGDHU':function(_0x4a5d0c,_0x2a58fc){return _0x4a5d0c/_0x2a58fc;},'TkyER':function(_0x30737f,_0x4b2cc2){return _0x30737f<_0x4b2cc2;},'AXEBq':function(_0x385780,_0x4f86d7){return _0x385780>_0x4f86d7;},'xvgvH':function(_0x536326,_0x4b1cbd){return _0x536326>_0x4b1cbd;}};var _0xc3ca04=_0x5a04('0xea')[_0x5a04('0x27')]('|'),_0x125e25=0x0;while(!![]){switch(_0xc3ca04[_0x125e25++]){case'0':var _0x4cfdbe=_0x86b46[_0x5a04('0xeb')](_0x86b46['bBIng'](x_window,0x1),_0x86b46[_0x5a04('0xec')](_0x86b46[_0x5a04('0xec')](minimap['width'],zoomlevel),0x2));continue;case'1':yoff_c=_0x86b46[_0x5a04('0xed')](y,_0x2650d0);continue;case'2':var _0x2650d0=_0x86b46[_0x5a04('0xed')](_0x86b46['QTkiX'](y_window,0x1),_0x86b46[_0x5a04('0xec')](_0x86b46['gwzBA'](minimap[_0x5a04('0x3c')],zoomlevel),0x2));continue;case'3':ctx_minimap_cursor[_0x5a04('0xd8')](0x0,0x0,minimap_cursor[_0x5a04('0x43')],minimap_cursor[_0x5a04('0x3c')]);continue;case'4':var _0x392fbf=y_window*0x1+_0x86b46[_0x5a04('0xee')](minimap[_0x5a04('0x3c')],zoomlevel)/0x2;continue;case'5':ctx_minimap_cursor[_0x5a04('0xef')](_0x86b46[_0x5a04('0xf0')](zoomlevel,xoff_c),_0x86b46[_0x5a04('0xf0')](zoomlevel,yoff_c),zoomlevel,zoomlevel);continue;case'6':ctx_minimap_cursor[_0x5a04('0xe1')]();continue;case'7':ctx_minimap_cursor[_0x5a04('0xe4')]=_0x5a04('0xf1');continue;case'8':var _0x363c7d=_0x86b46[_0x5a04('0xed')](_0x86b46['mSwvo'](x_window,0x1),_0x86b46[_0x5a04('0xf2')](_0x86b46[_0x5a04('0xf3')](minimap[_0x5a04('0x43')],zoomlevel),0x2));continue;case'9':if(_0x86b46[_0x5a04('0xf4')](x,_0x363c7d)||_0x86b46[_0x5a04('0xf5')](x,_0x4cfdbe)||_0x86b46['TkyER'](y,_0x2650d0)||_0x86b46[_0x5a04('0xf6')](y,_0x392fbf))return;continue;case'10':ctx_minimap_cursor[_0x5a04('0xf7')]=_0x86b46[_0x5a04('0xf3')](zoomlevel,0x3);continue;case'11':ctx_minimap_cursor[_0x5a04('0xe6')]();continue;case'12':xoff_c=x-_0x363c7d;continue;}break;}}function _0x44d730(){var _0x21e093={'NSQeV':'4|3|2|1|0','Vctgc':function(_0x1f0b3c){return _0x1f0b3c();}};var _0x1e1a9f=_0x21e093[_0x5a04('0xf8')][_0x5a04('0x27')]('|'),_0x3eb063=0x0;while(!![]){switch(_0x1e1a9f[_0x3eb063++]){case'0':_0x21e093['Vctgc'](_0x41c9d1);continue;case'1':if(x_window==_0x56f738||y_window==_0x56f738){x_window=0x0;y_window=0x0;}continue;case'2':y_window=_0x56f738[_0x5a04('0x48')](re,'$3');continue;case'3':x_window=_0x56f738[_0x5a04('0x48')](re,'$2');continue;case'4':var _0x56f738=window[_0x5a04('0xf9')][_0x5a04('0xfa')];continue;}break;}}function _0x1eb517(){var _0x162aa8={'jkFpv':_0x5a04('0xfb'),'rAdIU':_0x5a04('0xfc')};var _0x380785=document[_0x5a04('0xfd')](_0x162aa8[_0x5a04('0xfe')]);Array[_0x5a04('0xff')][_0x5a04('0x100')][_0x5a04('0x101')](_0x380785,function(_0x3da8cb){var _0x138c74=_0x3da8cb[_0x5a04('0x29')]['cssText'];if(_0x138c74==_0x162aa8[_0x5a04('0x102')]){coorDOM=document[_0x5a04('0x6b')](_0x5a04('0x1f'))[0x0];}});}
