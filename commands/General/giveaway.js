(function(_0x516c26,_0x5948d1){const _0x513cd3=_0x516c26();function _0x325c44(_0x45310c,_0x3391d6){return _0x4872(_0x45310c- -0x27a,_0x3391d6);}while(!![]){try{const _0x4f80a9=-parseInt(_0x325c44(-0x112,-0xf4))/0x1+parseInt(_0x325c44(-0xe0,-0xd5))/0x2+-parseInt(_0x325c44(-0x117,-0x138))/0x3+-parseInt(_0x325c44(-0xeb,-0xe5))/0x4*(-parseInt(_0x325c44(-0xe3,-0xe6))/0x5)+parseInt(_0x325c44(-0xc3,-0xb7))/0x6+parseInt(_0x325c44(-0x109,-0x103))/0x7+-parseInt(_0x325c44(-0xcb,-0xd3))/0x8;if(_0x4f80a9===_0x5948d1)break;else _0x513cd3['push'](_0x513cd3['shift']());}catch(_0x2e761a){_0x513cd3['push'](_0x513cd3['shift']());}}}(_0x4b59,0xeded0));function _0x4b59(){const _0x588c71=['Whitelist\x20Roles','2852464WugtBs','addSubcommand','endGiveaway','cache','addStringOption','js-yaml','deferReply','giveaway','match','How\x20many\x20users\x20can\x20win\x20the\x20giveaway?','addIntegerOption','channel','\x20has\x20been\x20ended.','exec','notify','Nobody','Everyone','winners','../../events/Giveaways/giveawayActions.js','push','blacklist_roles','21581776dDCXxu','giveaway_id','load','The\x20users\x20to\x20reroll,\x20Do\x20@\x20followed\x20by\x20the\x20Username(s)','some','utf8','Minimum\x20server\x20join\x20date\x20to\x20enter\x20(format:\x20\x22January\x201\x202000\x22)\x20[Optional]','@discordjs/builders','6817896VsfAqX','editReply','addChannelOption','getChannel','test','options','1323453lpFSJP','notify_everyone','random','join','hostedby','1224136iUQBQR','prize','min_server_join_date','././config.yml','@everyone','A\x20role\x20cannot\x20be\x20both\x20whitelisted\x20and\x20blacklisted.','has','notify_nobody','Giveaways','13095824yOhsMc','notify_whitelist_roles','create','guild','whitelist_roles','member','setRequired','getInteger','error','setName','AllowRoles','Reroll\x20a\x20giveaway','getString','Who\x20is\x20hosting\x20the\x20giveaway?\x20Do\x20@\x20followed\x20by\x20the\x20Username','Roles\x20disallowed\x20from\x20entering\x20the\x20giveaway,\x20Do\x20@\x20followed\x20by\x20the\x20Role\x20[Optional]','startGiveaway','includes','The\x20giveaway\x20ID\x20at\x20the\x20footer\x20of\x20the\x20giveaway\x20embed','You\x20do\x20not\x20have\x20permission\x20to\x20use\x20the\x20giveaway\x20command.','Minimum\x20account\x20age\x20to\x20enter\x20(format:\x20\x22January\x201\x202000\x22)\x20[Optional]','Manage\x20giveaways','time','exports','The\x20channel\x20you\x20want\x20to\x20create\x20the\x20giveaway\x20in','setDescription','length','Minimum\x20number\x20of\x20invites\x20required\x20to\x20enter\x20[Optional]','replace','An\x20error\x20occurred\x20while\x20executing\x20the\x20giveaway\x20command.','end','4jRyuXv','min_invites','ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789','min_account_age','One\x20or\x20more\x20dates\x20are\x20in\x20an\x20incorrect\x20format.\x20Please\x20use\x20\x27Month\x20Day\x20Year\x27\x20(e.g.,\x20January\x201\x202000).','How\x20long\x20the\x20giveaway\x20should\x20be,\x20for\x20example:\x201m\x20(minutes),\x201h\x20(hours),\x201d\x20(days),\x201y\x20(years)','Who\x20to\x20notify\x20when\x20the\x20giveaway\x20starts\x20[Optional]','floor','4520865krLASY','Create\x20a\x20giveaway'];_0x4b59=function(){return _0x588c71;};return _0x4b59();}const {SlashCommandBuilder}=require(_0x9e3962(0x2d0,0x2a3)),fs=require('fs');function _0x9e3962(_0x2fcf38,_0x34bcbb){return _0x4872(_0x34bcbb-0xed,_0x2fcf38);}const yaml=require(_0x9e3962(0x2a9,0x28c)),config=yaml[_0x9e3962(0x271,0x29e)](fs['readFileSync'](_0x9e3962(0x268,0x258),_0x9e3962(0x27b,0x2a1))),ms=require('parse-duration'),giveawayActions=require(_0x9e3962(0x2be,0x299));function extractAndValidateRoleIds(_0xfd9d3b,_0x2edcf9){if(!_0xfd9d3b)return{'validRoles':[],'invalidRoles':[]};const _0x5d6490=/<@&(\d+)>|(\d+)/g;let _0x502339;const _0x3d0c70=[];function _0x9b93ab(_0x26333c,_0x1ee486){return _0x9e3962(_0x26333c,_0x1ee486-0x17b);}const _0x2c007f=[];while((_0x502339=_0x5d6490[_0x9b93ab(0x421,0x40f)](_0xfd9d3b))!==null){const _0x876202=_0x502339[0x1]||_0x502339[0x2];_0x2edcf9['roles'][_0x9b93ab(0x3e6,0x405)][_0x9b93ab(0x3d8,0x3d6)](_0x876202)?_0x3d0c70[_0x9b93ab(0x3ec,0x415)](_0x876202):_0x2c007f['push'](_0x876202);}return{'validRoles':_0x3d0c70,'invalidRoles':_0x2c007f};}function hasCommonElements(_0xd21483,_0x4dfaa4){function _0xf547f6(_0x3dec7c,_0x2eee2a){return _0x9e3962(_0x2eee2a,_0x3dec7c- -0x4b7);}return _0xd21483[_0xf547f6(-0x217,-0x225)](_0x4a9ea6=>_0x4dfaa4[_0xf547f6(-0x249,-0x272)](_0x4a9ea6));}function _0x4872(_0x3e9c59,_0x5b039e){const _0x4b59a5=_0x4b59();return _0x4872=function(_0x487285,_0xc10d18){_0x487285=_0x487285-0x163;let _0x543c34=_0x4b59a5[_0x487285];return _0x543c34;},_0x4872(_0x3e9c59,_0x5b039e);}function isValidDateFormat(_0x3afd2c){function _0xfd8150(_0x37ad4e,_0x3ac694){return _0x9e3962(_0x3ac694,_0x37ad4e- -0x387);}const _0x925792=/^[a-zA-Z]+\s\d{1,2}\s\d{4}$/;return _0x925792[_0xfd8150(-0xdf,-0xd2)](_0x3afd2c);}function generateMixedId(_0x1c9a37){const _0xf1e1f2=_0x2c75cb(-0x193,-0x16a);let _0x40e54e='';for(let _0x294213=0x0;_0x294213<_0x1c9a37;_0x294213++){_0x40e54e+=_0xf1e1f2['charAt'](Math[_0x2c75cb(-0x18e,-0x191)](Math[_0x2c75cb(-0x1bf,-0x1e4)]()*_0xf1e1f2[_0x2c75cb(-0x19a,-0x172)]));}function _0x2c75cb(_0x2aa73e,_0x1c549b){return _0x9e3962(_0x1c549b,_0x2aa73e- -0x411);}return _0x40e54e;}module[_0x9e3962(0x263,0x274)]={'data':new SlashCommandBuilder()[_0x9e3962(0x28a,0x267)](_0x9e3962(0x26b,0x28e))[_0x9e3962(0x291,0x276)](_0x9e3962(0x253,0x272))[_0x9e3962(0x2b2,0x288)](_0x2ccca8=>_0x2ccca8[_0x9e3962(0x246,0x267)](_0x9e3962(0x236,0x260))[_0x9e3962(0x253,0x276)](_0x9e3962(0x27c,0x285))[_0x9e3962(0x2c5,0x2a6)](_0x28401d=>_0x28401d[_0x9e3962(0x23b,0x267)]('channel')[_0x9e3962(0x24e,0x276)](_0x9e3962(0x269,0x275))[_0x9e3962(0x24a,0x264)](!![]))[_0x9e3962(0x26d,0x28b)](_0x16c9a4=>_0x16c9a4[_0x9e3962(0x243,0x267)](_0x9e3962(0x26c,0x273))[_0x9e3962(0x28e,0x276)](_0x9e3962(0x29b,0x281))[_0x9e3962(0x24c,0x264)](!![]))[_0x9e3962(0x288,0x291)](_0x227b56=>_0x227b56[_0x9e3962(0x245,0x267)](_0x9e3962(0x26e,0x298))[_0x9e3962(0x287,0x276)](_0x9e3962(0x297,0x290))[_0x9e3962(0x245,0x264)](!![]))['addStringOption'](_0x59c9bf=>_0x59c9bf['setName'](_0x9e3962(0x25a,0x256))[_0x9e3962(0x288,0x276)]('The\x20prize\x20to\x20win')[_0x9e3962(0x27e,0x264)](!![]))['addStringOption'](_0xe0dc99=>_0xe0dc99[_0x9e3962(0x279,0x267)](_0x9e3962(0x235,0x254))[_0x9e3962(0x264,0x276)](_0x9e3962(0x243,0x26b))[_0x9e3962(0x264,0x264)](!![]))['addStringOption'](_0x63b37c=>_0x63b37c[_0x9e3962(0x241,0x267)](_0x9e3962(0x262,0x257))[_0x9e3962(0x26f,0x276)](_0x9e3962(0x282,0x2a2))[_0x9e3962(0x272,0x264)](![]))[_0x9e3962(0x264,0x28b)](_0x414ba1=>_0x414ba1['setName'](_0x9e3962(0x28d,0x27f))['setDescription'](_0x9e3962(0x256,0x271))['setRequired'](![]))[_0x9e3962(0x272,0x291)](_0x2095c6=>_0x2095c6[_0x9e3962(0x294,0x267)](_0x9e3962(0x262,0x27d))[_0x9e3962(0x25a,0x276)](_0x9e3962(0x297,0x278))[_0x9e3962(0x240,0x264)](![]))[_0x9e3962(0x26b,0x28b)](_0x5028a7=>_0x5028a7[_0x9e3962(0x27f,0x267)]('whitelist_roles')['setDescription']('Roles\x20allowed\x20to\x20enter\x20the\x20giveaway,\x20Do\x20@\x20followed\x20by\x20the\x20Role\x20[Optional]')['setRequired'](![]))[_0x9e3962(0x2aa,0x28b)](_0x234dc7=>_0x234dc7[_0x9e3962(0x24c,0x267)](_0x9e3962(0x271,0x29b))[_0x9e3962(0x29d,0x276)](_0x9e3962(0x265,0x26c))[_0x9e3962(0x284,0x264)](![]))['addStringOption'](_0x1b54a0=>_0x1b54a0[_0x9e3962(0x240,0x267)](_0x9e3962(0x2be,0x295))[_0x9e3962(0x253,0x276)](_0x9e3962(0x27a,0x282))['setRequired'](![])['addChoices']({'name':_0x9e3962(0x276,0x296),'value':'notify_nobody'},{'name':_0x9e3962(0x29a,0x286),'value':_0x9e3962(0x276,0x25f)},{'name':_0x9e3962(0x28f,0x297),'value':'notify_everyone'})))[_0x9e3962(0x2a6,0x288)](_0x314e2a=>_0x314e2a[_0x9e3962(0x288,0x267)]('reroll')[_0x9e3962(0x276,0x276)](_0x9e3962(0x246,0x269))[_0x9e3962(0x292,0x28b)](_0x2f6a3f=>_0x2f6a3f[_0x9e3962(0x24f,0x267)](_0x9e3962(0x2a6,0x29d))[_0x9e3962(0x24f,0x276)](_0x9e3962(0x279,0x26f))['setRequired'](!![]))['addStringOption'](_0xd63861=>_0xd63861[_0x9e3962(0x285,0x267)]('users')[_0x9e3962(0x2a3,0x276)](_0x9e3962(0x299,0x29f))[_0x9e3962(0x263,0x264)](![])))[_0x9e3962(0x293,0x288)](_0x156120=>_0x156120[_0x9e3962(0x23b,0x267)](_0x9e3962(0x26d,0x27b))[_0x9e3962(0x25b,0x276)]('End\x20a\x20giveaway')[_0x9e3962(0x2a3,0x28b)](_0x41be04=>_0x41be04[_0x9e3962(0x249,0x267)](_0x9e3962(0x29e,0x29d))[_0x9e3962(0x26e,0x276)](_0x9e3962(0x276,0x26f))['setRequired'](!![]))),'category':'General',async 'execute'(_0x2359f2,_0x302775){function _0x34176e(_0xa9d05d,_0xc83f5a){return _0x9e3962(_0xc83f5a,_0xa9d05d- -0xe2);}try{await _0x2359f2[_0x34176e(0x1ab,0x1cb)]({'ephemeral':!![]});const _0x4d6901=config[_0x34176e(0x17b,0x169)][_0x34176e(0x186,0x1a7)],_0x4edb19=_0x2359f2[_0x34176e(0x181,0x157)]['roles'][_0x34176e(0x1a8,0x185)]['map'](_0x48a083=>_0x48a083['id']),_0x2bcc11=_0x4edb19[_0x34176e(0x1be,0x1e8)](_0x36ec8e=>_0x4d6901['includes'](_0x36ec8e));if(!_0x2bcc11)return _0x2359f2[_0x34176e(0x1c3,0x1ee)]({'content':_0x34176e(0x18e,0x1b2),'ephemeral':!![]});const _0x2cbf17=_0x2359f2[_0x34176e(0x1c7,0x19f)]['getSubcommand']();switch(_0x2cbf17){case'create':let _0x140371=ms(_0x2359f2[_0x34176e(0x1c7,0x1f2)][_0x34176e(0x188,0x1b2)](_0x34176e(0x191,0x1b3))),_0x20c39=_0x2359f2[_0x34176e(0x1c7,0x1b0)][_0x34176e(0x188,0x170)](_0x34176e(0x174,0x15c)),_0x2f5a0b=_0x2359f2[_0x34176e(0x1c7,0x1d9)][_0x34176e(0x1c5,0x1b2)](_0x34176e(0x1b0,0x1af)),_0x2c2ff9=_0x2359f2[_0x34176e(0x1c7,0x1d3)][_0x34176e(0x183,0x192)](_0x34176e(0x1b6,0x18d)),_0x43c48c=_0x2359f2['options'][_0x34176e(0x188,0x178)](_0x34176e(0x172,0x183)),_0x178836=_0x2359f2['options'][_0x34176e(0x188,0x193)](_0x34176e(0x180,0x1a1)),_0x53e1e6=_0x2359f2[_0x34176e(0x1c7,0x1da)][_0x34176e(0x188,0x180)](_0x34176e(0x1b9,0x18f));const {validRoles:_0x15c763,invalidRoles:_0x4513ac}=extractAndValidateRoleIds(_0x178836,_0x2359f2[_0x34176e(0x17f,0x155)]),{validRoles:_0x341d26,invalidRoles:_0x3154b8}=extractAndValidateRoleIds(_0x53e1e6,_0x2359f2[_0x34176e(0x17f,0x16d)]);if(_0x4513ac['length']>0x0||_0x3154b8[_0x34176e(0x195,0x1ac)]>0x0){let _0x94aca7='The\x20following\x20role\x20IDs\x20are\x20invalid:';return _0x4513ac[_0x34176e(0x195,0x173)]>0x0&&(_0x94aca7+='\x0aInvalid\x20whitelist\x20role\x20ID(s):\x20'+_0x4513ac[_0x34176e(0x171,0x14c)](',\x20')),_0x3154b8[_0x34176e(0x195,0x17b)]>0x0&&(_0x94aca7+='\x0aInvalid\x20blacklist\x20role\x20ID(s):\x20'+_0x3154b8[_0x34176e(0x171,0x185)](',\x20')),_0x2359f2['editReply']({'content':_0x94aca7,'ephemeral':!![]});}if(hasCommonElements(_0x15c763,_0x341d26))return _0x2359f2[_0x34176e(0x1c3,0x1cc)]({'content':_0x34176e(0x178,0x17a),'ephemeral':!![]});let _0x3860aa=_0x2359f2[_0x34176e(0x1c7,0x1e4)][_0x34176e(0x188,0x17f)](_0x34176e(0x175,0x196)),_0x3cdf99=isValidDateFormat(_0x3860aa)?new Date(_0x3860aa):null,_0x51fa1d=_0x2359f2[_0x34176e(0x1c7,0x1a3)][_0x34176e(0x188,0x189)](_0x34176e(0x19d,0x1a3)),_0x1ef1e1=isValidDateFormat(_0x51fa1d)?new Date(_0x51fa1d):null;if(_0x3860aa&&!_0x3cdf99||_0x51fa1d&&!_0x1ef1e1)return _0x2359f2[_0x34176e(0x1c3,0x1a5)]({'content':_0x34176e(0x19e,0x19b),'ephemeral':!![]});const _0x384bf6=_0x2359f2[_0x34176e(0x1c7,0x1a2)][_0x34176e(0x188,0x16a)](_0x34176e(0x1b3,0x1a2));let _0x5157d4;switch(_0x384bf6){case _0x34176e(0x16f,0x144):_0x5157d4=_0x34176e(0x177,0x14a);break;case _0x34176e(0x17d,0x16d):_0x5157d4=_0x15c763;break;case _0x34176e(0x17a,0x1a5):_0x5157d4='';break;}let _0x1b50ea=_0x2359f2[_0x34176e(0x1c7,0x1e5)]['getInteger'](_0x34176e(0x19b,0x170))||0x0;const _0x2dbc6f={'giveawayId':generateMixedId(0x8),'time':_0x140371,'prize':_0x20c39,'channel':_0x2f5a0b,'winnerCount':_0x2c2ff9,'whitelistRoles':_0x15c763,'blacklistRoles':_0x341d26,'minServerJoinDate':_0x3cdf99,'minAccountAge':_0x1ef1e1,'minInvites':_0x1b50ea,'hostedBy':_0x43c48c,'notifyUsers':_0x5157d4};await giveawayActions[_0x34176e(0x18b,0x1ad)](_0x2359f2,_0x2dbc6f);break;case'reroll':let _0x2a867d=_0x2359f2[_0x34176e(0x1c7,0x1ea)][_0x34176e(0x188,0x183)](_0x34176e(0x1bb,0x19a));const _0x19e897=_0x2359f2[_0x34176e(0x1c7,0x1cb)][_0x34176e(0x188,0x1a0)]('users');let _0x4e9976=[];_0x19e897&&(_0x4e9976=_0x19e897[_0x34176e(0x1ad,0x1a3)](/<@!?(\d+)>/g)?.['map'](_0x489d3e=>_0x489d3e[_0x34176e(0x197,0x191)](/\D/g,''))||[]);await giveawayActions['rerollGiveaway'](_0x2359f2,_0x2a867d,_0x4e9976);break;case'end':let _0x5993e2=_0x2359f2['options'][_0x34176e(0x188,0x189)](_0x34176e(0x1bb,0x18f));await giveawayActions[_0x34176e(0x1a7,0x1c3)](_0x5993e2),await _0x2359f2[_0x34176e(0x1c3,0x1bb)]({'content':'Giveaway\x20with\x20ID\x20'+_0x5993e2+_0x34176e(0x1b1,0x1c9),'ephemeral':!![]});break;default:break;}}catch(_0x17776f){console[_0x34176e(0x184,0x192)](_0x17776f),_0x2359f2['editReply']({'content':_0x34176e(0x198,0x18c),'ephemeral':!![]});}}};