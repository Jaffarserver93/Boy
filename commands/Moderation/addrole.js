(function(_0x381455,_0x35f41c){function _0x3b1837(_0x7f0da,_0x46b66e){return _0x23ff(_0x7f0da- -0x63,_0x46b66e);}const _0x1df7d7=_0x381455();while(!![]){try{const _0x4dc4ba=-parseInt(_0x3b1837(0x11f,0x113))/0x1+parseInt(_0x3b1837(0x140,0x13b))/0x2+parseInt(_0x3b1837(0x138,0x126))/0x3*(parseInt(_0x3b1837(0x129,0x133))/0x4)+-parseInt(_0x3b1837(0x134,0x148))/0x5*(-parseInt(_0x3b1837(0x13e,0x147))/0x6)+-parseInt(_0x3b1837(0x139,0x13b))/0x7*(parseInt(_0x3b1837(0x127,0x13f))/0x8)+-parseInt(_0x3b1837(0x11e,0x12c))/0x9+parseInt(_0x3b1837(0x12f,0x122))/0xa*(parseInt(_0x3b1837(0x11c,0x10d))/0xb);if(_0x4dc4ba===_0x35f41c)break;else _0x1df7d7['push'](_0x1df7d7['shift']());}catch(_0x2d92a8){_0x1df7d7['push'](_0x1df7d7['shift']());}}}(_0x1ed1,0xc7af5));function _0x23ff(_0x14bd66,_0x7a99c5){const _0x1ed1ba=_0x1ed1();return _0x23ff=function(_0x23ffef,_0x481071){_0x23ffef=_0x23ffef-0x17a;let _0xffb2bd=_0x1ed1ba[_0x23ffef];return _0xffb2bd;},_0x23ff(_0x14bd66,_0x7a99c5);}const {SlashCommandBuilder,PermissionsBitField}=require(_0x27b34d(0x44f,0x434)),fs=require('fs'),yaml=require('js-yaml');function _0x1ed1(){const _0x2b1377=['cache','roles','utf8','client','reply','10wgGtVK','addrole','user','setDescription','discord.js','65FFSegE','AddroleAlreadyHave','{role}','Administrator','6720iSldIP','35eAraty','./config.yml','{user}','load','addUserOption','604806phCJnT','setRequired','661918msIMgZ','highest','setName','The\x20role\x20to\x20add\x20to\x20the\x20user','ModerationRoles','AddroleSelfRole','toString','position','AddRole','guild','./lang.yml','exports','AddroleError','The\x20user\x20to\x20add\x20the\x20role\x20to','addRoleOption','members','Flags','member','some','7621647GlqvTD','has','6391359ZTugpe','1311224MSQJlM','role','AddroleHighestRole','add','readFileSync','replace','permissions','AddroleUserRoleNotAbove','1274248Sctgtz','options','2324fyrINv'];_0x1ed1=function(){return _0x2b1377;};return _0x1ed1();}function _0x27b34d(_0x2a28db,_0x5b35a0){return _0x23ff(_0x2a28db-0x2b9,_0x5b35a0);}const config=yaml[_0x27b34d(0x458,0x453)](fs['readFileSync'](_0x27b34d(0x456,0x461),_0x27b34d(0x448,0x460))),lang=yaml[_0x27b34d(0x458,0x453)](fs[_0x27b34d(0x43f,0x42a)](_0x27b34d(0x466,0x47c),_0x27b34d(0x448,0x457)));module[_0x27b34d(0x467,0x45a)]={'data':new SlashCommandBuilder()[_0x27b34d(0x45e,0x44a)](_0x27b34d(0x44c,0x43d))[_0x27b34d(0x44e,0x448)]('Add\x20a\x20role\x20to\x20a\x20user')[_0x27b34d(0x459,0x461)](_0x2c87ef=>_0x2c87ef[_0x27b34d(0x45e,0x447)](_0x27b34d(0x44d,0x450))[_0x27b34d(0x44e,0x463)](_0x27b34d(0x469,0x481))[_0x27b34d(0x45b,0x44c)](!![]))[_0x27b34d(0x433,0x449)](_0x325006=>_0x325006[_0x27b34d(0x45e,0x448)](_0x27b34d(0x43c,0x453))[_0x27b34d(0x44e,0x45d)](_0x27b34d(0x45f,0x445))[_0x27b34d(0x45b,0x472)](!![])),'category':'Moderation',async 'execute'(_0x36e981){const _0x3deafd=config[_0x27f453(0x46c,0x484)][_0x27f453(0x481,0x470)],_0x24d8d9=_0x36e981[_0x27f453(0x442,0x45a)],_0x2436e9=_0x3deafd[_0x27f453(0x443,0x45b)](_0x465f41=>_0x24d8d9[_0x27f453(0x483,0x46b)][_0x27f453(0x464,0x46a)][_0x27f453(0x473,0x45d)](_0x465f41)),_0x3223cf=_0x24d8d9[_0x27f453(0x461,0x465)][_0x27f453(0x44c,0x45d)](PermissionsBitField[_0x27f453(0x43d,0x459)][_0x27f453(0x47c,0x477)]);if(!_0x2436e9&&!_0x3223cf){await _0x36e981['reply']({'content':lang['NoPermsMessage'],'ephemeral':!![]});return;}const _0x2ad2d8=_0x36e981[_0x27f453(0x457,0x468)]['getUser'](_0x27f453(0x472,0x471)),_0x14e249=_0x36e981[_0x27f453(0x46d,0x468)]['getRole'](_0x27f453(0x445,0x460)),_0xdf3d67=await _0x36e981['guild']['members']['fetch'](_0x2ad2d8['id']);if(_0x2ad2d8['id']===_0x36e981[_0x27f453(0x46c,0x471)]['id']){await _0x36e981[_0x27f453(0x488,0x46e)]({'content':lang['AddRole'][_0x27f453(0x472,0x485)],'ephemeral':!![]});return;}const _0x2b27c0=_0x36e981[_0x27f453(0x4a1,0x489)][_0x27f453(0x446,0x458)]['resolve'](_0x36e981[_0x27f453(0x488,0x46d)][_0x27f453(0x481,0x471)]['id'])[_0x27f453(0x461,0x46b)][_0x27f453(0x475,0x481)][_0x27f453(0x492,0x487)],_0x451050=_0x14e249[_0x27f453(0x489,0x487)];if(_0x451050>=_0x2b27c0){await _0x36e981[_0x27f453(0x465,0x46e)]({'content':lang[_0x27f453(0x478,0x488)][_0x27f453(0x460,0x461)],'ephemeral':!![]});return;}function _0x27f453(_0x3a1f36,_0x413aa4){return _0x27b34d(_0x413aa4-0x24,_0x3a1f36);}const _0x2a7baf=_0x24d8d9[_0x27f453(0x461,0x46b)][_0x27f453(0x490,0x481)]['position'];if(_0x451050>=_0x2a7baf){await _0x36e981[_0x27f453(0x458,0x46e)]({'content':lang['AddRole'][_0x27f453(0x453,0x466)],'ephemeral':!![]});return;}if(_0xdf3d67['roles'][_0x27f453(0x477,0x46a)][_0x27f453(0x45c,0x45d)](_0x14e249['id'])){await _0x36e981[_0x27f453(0x485,0x46e)]({'content':lang[_0x27f453(0x480,0x488)][_0x27f453(0x483,0x475)],'ephemeral':!![]});return;}try{await _0xdf3d67[_0x27f453(0x460,0x46b)][_0x27f453(0x471,0x462)](_0x14e249),await _0x36e981[_0x27f453(0x452,0x46e)]({'content':lang['AddRole']['AddroleSuccess'][_0x27f453(0x465,0x464)](_0x27f453(0x48a,0x476),_0x14e249[_0x27f453(0x49c,0x486)]())['replace'](_0x27f453(0x462,0x47b),_0x2ad2d8[_0x27f453(0x491,0x486)]()),'ephemeral':!![]});}catch(_0x5e644c){console['error'](_0x5e644c),await _0x36e981[_0x27f453(0x453,0x46e)]({'content':lang[_0x27f453(0x48e,0x488)][_0x27f453(0x49a,0x48c)],'ephemeral':!![]});}}};