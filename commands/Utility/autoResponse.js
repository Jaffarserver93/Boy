(function(_0xb798df,_0x234260){const _0x48e7af=_0xb798df();function _0x99a9f(_0x488945,_0x7d4bfb){return _0x29f5(_0x7d4bfb- -0xb7,_0x488945);}while(!![]){try{const _0x5c4d27=-parseInt(_0x99a9f(0x18a,0x145))/0x1*(-parseInt(_0x99a9f(0x1a4,0x1a9))/0x2)+parseInt(_0x99a9f(0x107,0x11a))/0x3*(parseInt(_0x99a9f(0xc6,0x107))/0x4)+parseInt(_0x99a9f(0x12d,0x13b))/0x5*(parseInt(_0x99a9f(0x1bd,0x185))/0x6)+-parseInt(_0x99a9f(0x101,0x142))/0x7+-parseInt(_0x99a9f(0x140,0x141))/0x8+-parseInt(_0x99a9f(0xeb,0x117))/0x9*(-parseInt(_0x99a9f(0x1a8,0x1a0))/0xa)+-parseInt(_0x99a9f(0xd7,0x121))/0xb;if(_0x5c4d27===_0x234260)break;else _0x48e7af['push'](_0x48e7af['shift']());}catch(_0x50cb4){_0x48e7af['push'](_0x48e7af['shift']());}}}(_0x339d,0xd7519));const {SlashCommandBuilder,EmbedBuilder,ActionRowBuilder,ButtonBuilder,ButtonStyle,PermissionsBitField}=require('discord.js'),mongoose=require(_0x1fa37b(-0x173,-0x142)),AutoResponse=require(_0x1fa37b(-0x12b,-0xec));module[_0x1fa37b(-0x12a,-0x109)]={'data':new SlashCommandBuilder()[_0x1fa37b(-0x16c,-0x15f)](_0x1fa37b(-0x12e,-0x142))[_0x1fa37b(-0x188,-0x186)]('Manage\x20auto\x20responses')[_0x1fa37b(-0x13b,-0x14e)](_0x422e70=>_0x422e70[_0x1fa37b(-0x16c,-0x168)](_0x1fa37b(-0x199,-0x1c0))[_0x1fa37b(-0x188,-0x159)]('Create\x20a\x20new\x20auto\x20response')['addStringOption'](_0x533513=>_0x533513['setName']('trigger')[_0x1fa37b(-0x188,-0x193)]('The\x20trigger\x20word/phrase')[_0x1fa37b(-0x15e,-0x186)](!![]))['addStringOption'](_0x2c3393=>_0x2c3393[_0x1fa37b(-0x16c,-0x173)]('type')[_0x1fa37b(-0x188,-0x15d)](_0x1fa37b(-0x171,-0x150))[_0x1fa37b(-0x1af,-0x180)]({'name':_0x1fa37b(-0x1ad,-0x1af),'value':_0x1fa37b(-0x14b,-0x12a)},{'name':_0x1fa37b(-0x166,-0x1b3),'value':'EMBED'})['setRequired'](!![]))[_0x1fa37b(-0x1b7,-0x18f)](_0x3181ca=>_0x3181ca[_0x1fa37b(-0x16c,-0x1bc)]('whitelist_roles')[_0x1fa37b(-0x188,-0x19f)](_0x1fa37b(-0x162,-0x1a6)))[_0x1fa37b(-0x1b7,-0x167)](_0x5ae9d4=>_0x5ae9d4['setName'](_0x1fa37b(-0x169,-0x143))['setDescription']('Comma-separated\x20role\x20IDs\x20to\x20blacklist'))[_0x1fa37b(-0x1b7,-0x1b9)](_0x517d97=>_0x517d97[_0x1fa37b(-0x16c,-0x132)](_0x1fa37b(-0x14f,-0x192))[_0x1fa37b(-0x188,-0x18e)](_0x1fa37b(-0x16e,-0x1a7)))[_0x1fa37b(-0x1b7,-0x165)](_0x216d7c=>_0x216d7c[_0x1fa37b(-0x16c,-0x150)]('blacklist_channels')['setDescription'](_0x1fa37b(-0x138,-0x139))))[_0x1fa37b(-0x13b,-0x138)](_0x523f88=>_0x523f88[_0x1fa37b(-0x16c,-0x19b)](_0x1fa37b(-0x17d,-0x182))[_0x1fa37b(-0x188,-0x1a7)](_0x1fa37b(-0x11a,-0xee))['addStringOption'](_0x44c063=>_0x44c063[_0x1fa37b(-0x16c,-0x181)](_0x1fa37b(-0x1a0,-0x180))[_0x1fa37b(-0x188,-0x174)](_0x1fa37b(-0x136,-0x119))[_0x1fa37b(-0x15e,-0x114)](!![])))[_0x1fa37b(-0x13b,-0xee)](_0x9cd218=>_0x9cd218['setName'](_0x1fa37b(-0x197,-0x1c0))[_0x1fa37b(-0x188,-0x168)](_0x1fa37b(-0x141,-0x103))['addStringOption'](_0x2a051b=>_0x2a051b[_0x1fa37b(-0x16c,-0x1af)](_0x1fa37b(-0x1a0,-0x1cc))[_0x1fa37b(-0x188,-0x1db)](_0x1fa37b(-0x136,-0x143))[_0x1fa37b(-0x15e,-0x1a1)](!![])))[_0x1fa37b(-0x13b,-0xff)](_0x252c43=>_0x252c43['setName'](_0x1fa37b(-0x16b,-0x160))['setDescription']('List\x20all\x20auto\x20responses')),async 'execute'(_0x29bf61){if(!_0x29bf61[_0x154baf(-0x64,-0x18)][_0x154baf(0x1b,0x19)][_0x154baf(0x9,-0x18)](PermissionsBitField[_0x154baf(-0x44,-0x5d)][_0x154baf(-0x82,-0x57)]))return _0x29bf61[_0x154baf(0xd,0x21)]({'content':_0x154baf(-0x54,-0x6c),'ephemeral':!![]});const _0x5c7762=_0x29bf61['options'][_0x154baf(-0xf,-0x4)](),_0x4dedbf=_0x29bf61[_0x154baf(-0x88,-0xa9)][_0x154baf(-0x14,0x2a)](_0x154baf(-0x6f,-0x27));function _0x154baf(_0xca8b99,_0x4fbccf){return _0x1fa37b(_0xca8b99-0x131,_0x4fbccf);}switch(_0x5c7762){case _0x154baf(-0x68,-0x7a):await handleCreateAutoResponse(_0x29bf61,_0x4dedbf);break;case'edit':await handleEditAutoResponse(_0x29bf61,_0x4dedbf);break;case'delete':await handleDeleteAutoResponse(_0x29bf61,_0x4dedbf);break;case _0x154baf(-0x3a,-0x54):await handleListAutoResponses(_0x29bf61);break;}}};function _0x29f5(_0x8f02a,_0x9dac34){const _0x339db5=_0x339d();return _0x29f5=function(_0x29f5a7,_0x5977aa){_0x29f5a7=_0x29f5a7-0x1b9;let _0x4c78ad=_0x339db5[_0x29f5a7];return _0x4c78ad;},_0x29f5(_0x8f02a,_0x9dac34);}async function handleCreateAutoResponse(_0x432a00,_0x343ec8){function _0x2ccc51(_0x2ed806,_0x440c04){return _0x1fa37b(_0x2ed806-0x636,_0x440c04);}try{await _0x432a00[_0x2ccc51(0x4e5,0x494)]({'ephemeral':!![]});const _0x5c1ab8=await AutoResponse[_0x2ccc51(0x48b,0x4dd)]({'trigger':_0x343ec8});if(_0x5c1ab8)return _0x432a00[_0x2ccc51(0x482,0x4ad)]({'content':_0x2ccc51(0x4ba,0x4ef)});const _0x17f5e5=_0x432a00[_0x2ccc51(0x47d,0x42b)][_0x2ccc51(0x4f1,0x4fe)](_0x2ccc51(0x4c0,0x4be)),_0x224771=getArrayFromString(_0x432a00[_0x2ccc51(0x47d,0x464)][_0x2ccc51(0x4f1,0x506)](_0x2ccc51(0x499,0x453))),_0x2211b5=getArrayFromString(_0x432a00['options'][_0x2ccc51(0x4f1,0x4d9)](_0x2ccc51(0x4cd,0x4a7))),_0x558aa7=getArrayFromString(_0x432a00[_0x2ccc51(0x47d,0x472)][_0x2ccc51(0x4f1,0x53d)](_0x2ccc51(0x4e7,0x527))),_0x483ea3=getArrayFromString(_0x432a00[_0x2ccc51(0x47d,0x432)]['getString'](_0x2ccc51(0x4f8,0x4e6))),_0x187b4b={'whitelistRoles':_0x224771,'blacklistRoles':_0x2211b5,'whitelistChannels':_0x558aa7,'blacklistChannels':_0x483ea3};console[_0x2ccc51(0x4ec,0x4b4)]('Create\x20AutoResponse\x20Options:',_0x187b4b);if(_0x17f5e5===_0x2ccc51(0x518,0x536))await startEmbedBuilder(_0x432a00,_0x343ec8,_0x187b4b);else{const _0x5635cd=_0x5e89da=>_0x5e89da['author']['id']===_0x432a00[_0x2ccc51(0x506,0x4e7)]['id'];await _0x432a00['followUp']({'content':_0x2ccc51(0x490,0x45b),'ephemeral':!![]});const _0x39bc82=await _0x432a00[_0x2ccc51(0x502,0x524)][_0x2ccc51(0x4a9,0x47a)]({'filter':_0x5635cd,'max':0x1,'time':0xea60}),_0x3e1fcb=_0x39bc82[_0x2ccc51(0x4a4,0x4ac)]();if(_0x3e1fcb){const _0x3971a3=new AutoResponse({'trigger':_0x343ec8,'responseType':_0x2ccc51(0x4eb,0x4d1),'responseText':_0x3e1fcb[_0x2ccc51(0x48a,0x4c0)][_0x2ccc51(0x519,0x53b)](),..._0x187b4b});await _0x3971a3[_0x2ccc51(0x503,0x512)](),await _0x3e1fcb[_0x2ccc51(0x49f,0x4a8)](),await _0x432a00[_0x2ccc51(0x482,0x471)]({'content':'Auto\x20response\x20for\x20\x22'+_0x343ec8+_0x2ccc51(0x4c2,0x495)});}else await _0x432a00[_0x2ccc51(0x482,0x4cd)]({'content':'No\x20text\x20response\x20provided.\x20Auto\x20response\x20creation\x20canceled.'});}}catch(_0x18fe44){console[_0x2ccc51(0x4ac,0x46a)]('Error\x20in\x20handleCreateAutoResponse:',_0x18fe44),await _0x432a00[_0x2ccc51(0x482,0x46d)]({'content':_0x2ccc51(0x507,0x52d)+_0x18fe44[_0x2ccc51(0x4c9,0x475)]});}}async function handleEditAutoResponse(_0x44ae8c,_0x5739cc){await _0x44ae8c[_0x2116b9(-0x120,-0x113)]({'ephemeral':!![]});function _0x2116b9(_0xcba221,_0x2c0568){return _0x1fa37b(_0xcba221-0x31,_0x2c0568);}const _0x48765b=await AutoResponse['findOne']({'trigger':_0x5739cc});if(!_0x48765b)return _0x44ae8c['editReply']({'content':'No\x20auto\x20response\x20found\x20with\x20this\x20trigger.'});const _0x45d5a9={'whitelistRoles':_0x48765b[_0x2116b9(-0x12b,-0x136)],'blacklistRoles':_0x48765b['blacklistRoles'],'whitelistChannels':_0x48765b[_0x2116b9(-0x127,-0x169)],'blacklistChannels':_0x48765b[_0x2116b9(-0x16d,-0x14b)],'embedData':_0x48765b[_0x2116b9(-0x173,-0x145)]};console[_0x2116b9(-0x119,-0x161)](_0x2116b9(-0x185,-0x1b2),_0x45d5a9);if(_0x48765b[_0x2116b9(-0x10e,-0xff)]==='EMBED')await startEmbedBuilder(_0x44ae8c,_0x5739cc,_0x45d5a9);else{if(_0x48765b['responseType']===_0x2116b9(-0x11a,-0x114))await promptForTextResponse(_0x44ae8c,_0x48765b);else return _0x44ae8c[_0x2116b9(-0x183,-0x157)]({'content':_0x2116b9(-0x12f,-0x168)});}}async function handleDeleteAutoResponse(_0x5765d6,_0x3271d3){await _0x5765d6[_0x3f55f4(0x571,0x56d)]({'ephemeral':!![]});function _0x3f55f4(_0x3027e7,_0x511065){return _0x1fa37b(_0x511065-0x6be,_0x3027e7);}const _0x2bfb39=await AutoResponse[_0x3f55f4(0x55c,0x50d)]({'trigger':_0x3271d3});if(_0x2bfb39['deletedCount']===0x0)return _0x5765d6[_0x3f55f4(0x53a,0x50a)]({'content':_0x3f55f4(0x536,0x510)});_0x5765d6[_0x3f55f4(0x512,0x50a)]({'content':_0x3f55f4(0x572,0x52b)+_0x3271d3+'\x22\x20deleted.'});}async function handleListAutoResponses(_0x3d4c2e){await _0x3d4c2e[_0x11015e(0x573,0x544)]({'ephemeral':!![]});const _0x3f09fa=await AutoResponse[_0x11015e(0x51a,0x4ee)]();if(_0x3f09fa[_0x11015e(0x507,0x4dd)]===0x0)return _0x3d4c2e['editReply']({'content':_0x11015e(0x4fe,0x4fb),'ephemeral':!![]});const _0xb5a34f=_0x3f09fa[_0x11015e(0x59b,0x568)](_0x52acee=>{const _0x4df3fc=_0x52acee[_0x4c7d77(-0x1d,-0xb)]===_0x4c7d77(0x4,-0x40)?_0x4c7d77(-0x44,-0xb):_0x4c7d77(-0x8b,-0xc0),_0x1aba4b=_0x4c7d77(0x3,-0x19),_0x443ec5=formatArrayAsMentions(_0x52acee[_0x4c7d77(-0x3a,-0xa)],_0x4c7d77(-0x20,-0x30)),_0x2953a0=formatArrayAsMentions(_0x52acee[_0x4c7d77(-0x26,-0x4e)],'role');function _0x4c7d77(_0xc6d733,_0x4aa170){return _0x11015e(_0x4aa170,_0xc6d733- -0x573);}const _0x5ed7c0=formatArrayAsMentions(_0x52acee['whitelistChannels'],_0x4c7d77(-0x12,0x1b)),_0x36f747=formatArrayAsMentions(_0x52acee['blacklistChannels'],_0x4c7d77(-0x12,-0x22));return[{'name':'Trigger:\x20'+_0x4df3fc,'value':'\x22'+_0x52acee[_0x4c7d77(-0x7e,-0xaf)]+'\x22','inline':!![]},{'name':_0x4c7d77(-0x2e,-0x7a),'value':_0x1aba4b,'inline':!![]},{'name':_0x4c7d77(-0x3,-0x11),'value':_0x443ec5,'inline':!![]},{'name':_0x4c7d77(-0x5c,-0x9b),'value':_0x2953a0,'inline':!![]},{'name':'Allowed\x20Channels','value':_0x5ed7c0,'inline':!![]},{'name':_0x4c7d77(-0x43,-0x57),'value':_0x36f747,'inline':!![]},{'name':'​','value':'​','inline':![]}];}),_0xba8d0=_0xb5a34f[_0x11015e(0x551,0x53c)]();function _0x11015e(_0x30b2ee,_0x19ef88){return _0x1fa37b(_0x19ef88-0x695,_0x30b2ee);}const _0x2c7bc4=new EmbedBuilder()[_0x11015e(0x58b,0x559)](_0x11015e(0x4b4,0x4e3))[_0x11015e(0x4d4,0x50d)](_0x11015e(0x4fc,0x504))['addFields'](_0xba8d0)[_0x11015e(0x5c1,0x581)](_0x11015e(0x544,0x538))[_0x11015e(0x530,0x4eb)]({'text':'Use\x20/autoresponse\x20create\x20to\x20add\x20more\x20responses.'});return _0x3d4c2e[_0x11015e(0x4c0,0x4e1)]({'embeds':[_0x2c7bc4],'ephemeral':!![]});}async function startEmbedBuilder(_0x31eac4,_0x4aed45,_0x28a481){function _0x2c22f6(_0x21d1ab,_0x48e6ed){return _0x1fa37b(_0x48e6ed-0xc0,_0x21d1ab);}try{console[_0x2c22f6(-0x73,-0x8a)](_0x2c22f6(-0x76,-0xb0),_0x28a481);let _0x1e2b86=_0x28a481[_0x2c22f6(-0x105,-0xe4)]?new EmbedBuilder(_0x28a481['embedData']):new EmbedBuilder()[_0x2c22f6(-0xa0,-0x7c)](_0x2c22f6(-0xa2,-0x83))[_0x2c22f6(-0x79,-0xc8)](_0x2c22f6(-0xc0,-0xe1));!_0x1e2b86[_0x2c22f6(-0x91,-0xdc)][_0x2c22f6(-0xc7,-0xc0)]&&_0x1e2b86[_0x2c22f6(-0xe7,-0xc8)]('No\x20description\x20provided');const _0x155e51=Date[_0x2c22f6(-0xd5,-0x95)]()[_0x2c22f6(-0xa7,-0xa1)](),_0x535a7a=createEmbedBuilderComponents(_0x155e51);await _0x31eac4[_0x2c22f6(-0xbe,-0xf4)]({'embeds':[_0x1e2b86],'components':_0x535a7a,'ephemeral':!![]});const _0x41bb77=_0x5674bf=>_0x5674bf[_0x2c22f6(-0x69,-0x70)]['id']===_0x31eac4[_0x2c22f6(-0xa5,-0x70)]['id'],_0x5df5a3=_0x31eac4[_0x2c22f6(-0x41,-0x74)]['createMessageComponentCollector']({'filter':_0x41bb77,'time':0xdbba0});_0x5df5a3['on']('collect',async _0xafe642=>{await _0xafe642['deferUpdate']();const _0x3645a8=_0xafe642[_0x145b21(0x13a,0x115)][_0x145b21(0x13c,0x11e)]('_')[0x0];console['log'](_0x145b21(0x1d5,0x187)+_0x3645a8+',\x20Options:',_0x28a481);function _0x145b21(_0x2b041d,_0x5ccdf8){return _0x2c22f6(_0x2b041d,_0x5ccdf8-0x1e9);}await handleEmbedBuilderAction(_0x3645a8,_0xafe642,_0x1e2b86,_0x4aed45,_0x28a481,_0x5df5a3);}),_0x5df5a3['on'](_0x2c22f6(-0xca,-0x93),async()=>{function _0x2c2ed9(_0x52327e,_0x2c80fe){return _0x2c22f6(_0x2c80fe,_0x52327e-0x628);}if(_0x5df5a3[_0x2c2ed9(0x52e,0x4f9)]!==_0x2c2ed9(0x5c8,0x5f7))return;await _0x31eac4['editReply']({'content':'Embed\x20builder\x20session\x20ended\x20due\x20to\x20inactivity.','components':[],'embeds':[],'ephemeral':!![]});});}catch(_0x432fca){console[_0x2c22f6(-0x86,-0xca)]('Error\x20in\x20startEmbedBuilder:',_0x432fca),await _0x31eac4['editReply']({'content':_0x2c22f6(-0xbe,-0x86)+_0x432fca[_0x2c22f6(-0x5b,-0xad)]});}}function _0x1fa37b(_0x3bb5f7,_0xfee3da){return _0x29f5(_0x3bb5f7- -0x373,_0xfee3da);}async function handleEmbedBuilderAction(_0x433edb,_0x418ef8,_0x166b0c,_0x133c43,_0x867c6f,_0x24393a){function _0x1b8ee3(_0x556d79,_0x4b66fd){return _0x1fa37b(_0x556d79-0x15c,_0x4b66fd);}switch(_0x433edb){case'title':case'description':case _0x1b8ee3(-0x1d,0x7):case'authoricon':case _0x1b8ee3(-0x23,0x21):case _0x1b8ee3(-0x4c,-0x2):case _0x1b8ee3(-0x34,-0x7e):case'image':case _0x1b8ee3(0xa,0x2a):await promptAndSetField(_0x418ef8,_0x433edb,_0x166b0c,_0x433edb===_0x1b8ee3(0xa,0x20),['authoricon',_0x1b8ee3(-0x4c,-0x1e),_0x1b8ee3(-0x34,-0x3c),'image']['includes'](_0x433edb));break;case _0x1b8ee3(-0x43,-0x3a):_0x166b0c[_0x1b8ee3(-0x7,-0x12)](),await _0x418ef8[_0x1b8ee3(-0x58,-0x86)]({'embeds':[_0x166b0c],'components':_0x418ef8[_0x1b8ee3(-0x11,-0x54)][_0x1b8ee3(0x43,-0x2)],'ephemeral':!![]});break;case _0x1b8ee3(0x29,0xe):if(!_0x166b0c[_0x1b8ee3(-0x40,-0x81)]['title']&&!_0x166b0c[_0x1b8ee3(-0x40,-0x2b)][_0x1b8ee3(-0x24,0xb)])return _0x418ef8[_0x1b8ee3(-0x2a,-0x39)]({'content':_0x1b8ee3(0x44,0x1b),'ephemeral':!![]});console['log'](_0x1b8ee3(0x36,0x4d),_0x867c6f),await saveAutoResponse(_0x133c43,_0x166b0c,null,_0x867c6f),_0x24393a[_0x1b8ee3(-0xc,-0x35)](),await _0x418ef8['editReply']({'content':_0x1b8ee3(-0x37,-0x48)+_0x133c43+_0x1b8ee3(-0x32,-0x7a),'components':[],'embeds':[],'ephemeral':!![]});break;}}async function saveAutoResponse(_0x12c10d,_0x462a9b,_0x55b2d9=null,_0x4589e2={}){const {whitelistRoles:whitelistRoles=[],blacklistRoles:blacklistRoles=[],whitelistChannels:whitelistChannels=[],blacklistChannels:blacklistChannels=[]}=_0x4589e2;function _0x3f06f6(_0x1223cb,_0x2d4716){return _0x1fa37b(_0x2d4716-0x5c0,_0x1223cb);}!_0x55b2d9?_0x55b2d9=new AutoResponse({'trigger':_0x12c10d,'responseType':_0x3f06f6(0x485,0x4a2),'embedData':_0x462a9b[_0x3f06f6(0x432,0x410)](),'whitelistRoles':whitelistRoles,'blacklistRoles':blacklistRoles,'whitelistChannels':whitelistChannels,'blacklistChannels':blacklistChannels}):(_0x55b2d9['responseType']=_0x3f06f6(0x4a6,0x4a2),_0x55b2d9[_0x3f06f6(0x444,0x41c)]=_0x462a9b['toJSON'](),_0x55b2d9[_0x3f06f6(0x46c,0x464)]=whitelistRoles,_0x55b2d9[_0x3f06f6(0x460,0x478)]=blacklistRoles,_0x55b2d9[_0x3f06f6(0x47c,0x468)]=whitelistChannels,_0x55b2d9[_0x3f06f6(0x42e,0x422)]=blacklistChannels),await _0x55b2d9[_0x3f06f6(0x481,0x48d)]();}async function promptAndSetField(_0x5f5290,_0x3dc332,_0x455670,_0x3ccda6=![],_0x2b518b=![]){const _0x5268a2=_0x4c6d3f=>_0x4c6d3f[_0x328254(0x432,0x41e)]['id']===_0x5f5290['user']['id'];await _0x5f5290['followUp']({'content':_0x328254(0x469,0x465)+_0x3dc332+_0x328254(0x41a,0x453),'ephemeral':!![]});const _0x83a96=await _0x5f5290[_0x328254(0x457,0x463)][_0x328254(0x3c5,0x40a)]({'filter':_0x5268a2,'max':0x1,'time':0xea60}),_0x52c6bd=_0x83a96['first']();function _0x328254(_0x5ded78,_0x482212){return _0x1fa37b(_0x482212-0x597,_0x5ded78);}if(_0x52c6bd){let _0x9f05c=_0x52c6bd['content'][_0x328254(0x4c4,0x47a)]();if(_0x9f05c[_0x328254(0x484,0x470)]()===_0x328254(0x45e,0x45e))_0x9f05c='';else{if(_0x2b518b&&!isValidHttpUrl(_0x9f05c)){await _0x5f5290[_0x328254(0x448,0x411)]({'content':'Invalid\x20URL,\x20please\x20try\x20again.','ephemeral':!![]}),await _0x52c6bd['delete']();return;}else{if(_0x3ccda6&&!/^#[0-9A-F]{6}$/i[_0x328254(0x478,0x46b)](_0x9f05c)){await _0x5f5290['followUp']({'content':_0x328254(0x4a2,0x482),'ephemeral':!![]}),await _0x52c6bd[_0x328254(0x3b7,0x400)]();return;}}}setEmbedField(_0x455670,_0x3dc332,_0x9f05c),await _0x52c6bd[_0x328254(0x3b8,0x400)](),await _0x5f5290[_0x328254(0x415,0x3e3)]({'embeds':[_0x455670],'components':_0x5f5290['message'][_0x328254(0x446,0x47e)],'ephemeral':!![]});}else await _0x5f5290['followUp']({'content':_0x328254(0x445,0x443),'ephemeral':!![]});}function setEmbedField(_0x585d56,_0xbe7406,_0x421c0a){function _0x49ed34(_0x4de0e6,_0x58ac6e){return _0x1fa37b(_0x58ac6e- -0x4a,_0x4de0e6);}switch(_0xbe7406[_0x49ed34(-0x156,-0x171)]()){case _0x49ed34(-0x1c2,-0x1b9):_0x585d56[_0x49ed34(-0x1cf,-0x186)](_0x421c0a||null);break;case _0x49ed34(-0x191,-0x1ca):_0x585d56[_0x49ed34(-0x1a0,-0x1d2)](_0x421c0a||null);break;case'author':_0x585d56['setAuthor']({'name':_0x421c0a||null,'iconURL':_0x585d56[_0x49ed34(-0x1ee,-0x1e6)][_0x49ed34(-0x1aa,-0x1c3)]?.[_0x49ed34(-0x1bd,-0x1c2)]||null});break;case _0x49ed34(-0x159,-0x165):_0x585d56[_0x49ed34(-0x1a7,-0x16b)]({'name':_0x585d56[_0x49ed34(-0x1ec,-0x1e6)][_0x49ed34(-0x19b,-0x1c3)]?.[_0x49ed34(-0x14d,-0x184)]||null,'iconURL':_0x421c0a||null});break;case _0x49ed34(-0x18c,-0x1c9):_0x585d56[_0x49ed34(-0x1e6,-0x1f4)]({'text':_0x421c0a||null,'iconURL':_0x585d56[_0x49ed34(-0x1a6,-0x1e6)][_0x49ed34(-0x1e1,-0x1c9)]?.[_0x49ed34(-0x1fe,-0x1c2)]||null});break;case _0x49ed34(-0x22f,-0x1f2):_0x585d56[_0x49ed34(-0x247,-0x1f4)]({'text':_0x585d56[_0x49ed34(-0x200,-0x1e6)][_0x49ed34(-0x19b,-0x1c9)]?.[_0x49ed34(-0x17a,-0x16d)]||null,'iconURL':_0x421c0a||null});break;case _0x49ed34(-0x1b6,-0x1da):_0x585d56[_0x49ed34(-0x19f,-0x1b1)](_0x421c0a||null);break;case _0x49ed34(-0x19f,-0x191):_0x585d56[_0x49ed34(-0x1c7,-0x1bc)](_0x421c0a||null);break;case _0x49ed34(-0x168,-0x19c):_0x585d56[_0x49ed34(-0x19d,-0x15e)](_0x421c0a||null);break;}}function getArrayFromString(_0x157fb1){function _0x3dc3af(_0x4eaaa2,_0x52dd76){return _0x1fa37b(_0x52dd76-0x377,_0x4eaaa2);}return _0x157fb1?_0x157fb1[_0x3dc3af(0x1dd,0x1ec)](','):[];}function _0x339d(){const _0x364676=['\x22\x20saved!','awaitMessages','color_','split','error','title_','setDescription','Title','followUp','You\x20do\x20not\x20have\x20permission\x20to\x20use\x20this\x20command.','Color','timestamp_','protocol','21290hdSkTu','description','footer','Denied\x20Roles','edit','An\x20auto\x20response\x20with\x20this\x20trigger\x20already\x20exists.','6196424iLPlVx','5950574SMIApj','author','iconURL','173299QzBFQh','type','Flags','\x22\x20created!','mongoose','setImage','Response\x20type','Starting\x20Embed\x20Builder\x20with\x20options:','title','Comma-separated\x20channel\x20IDs\x20to\x20whitelist','message','setName','list','None','blacklist_roles','stop','setThumbnail','Embed','Denied\x20Channels','join','setTimestamp','Comma-separated\x20role\x20IDs\x20to\x20whitelist','toString','Unknown\x20response\x20type,\x20cannot\x20edit\x20this\x20auto\x20response.','setStyle','setRequired','#5865F2','whitelistRoles','Secondary','Image','flat','whitelistChannels','setLabel','Author','now','No\x20input\x20received,\x20operation\x20cancelled.','end','color','deferReply','Status','whitelist_channels','Timestamp','image_','http:','TEXT','log','setCustomId','blacklistRoles','image','An\x20error\x20occurred\x20while\x20starting\x20the\x20embed\x20builder:\x20','getString','\x20(or\x20type\x20\x22none\x22\x20to\x20unset):','Embed\x20Builder','role','Delete\x20an\x20auto\x20response','getSubcommand','responseType','blacklist_channels','Footer','setTitle','addSubcommand','name','none','Comma-separated\x20channel\x20IDs\x20to\x20blacklist','2382jJEokP','The\x20trigger\x20word/phrase','footer_','channel','save','Please\x20enter\x20the\x20','description_','user','An\x20error\x20occurred:\x20','autoresponse','map','test','../../models/autoResponse','exports','Thumbnail','has','toLowerCase','Saving\x20AutoResponse\x20with\x20options:','Allowed\x20Roles','reply','text','Action:\x20','setAuthor','time','🟢\x20Valid','EMBED','trim','35210XeeBAY','authoricon','Edit\x20an\x20existing\x20auto\x20response','components','Embeds\x20must\x20have\x20at\x20least\x20a\x20title\x20or\x20description\x20before\x20they\x20can\x20be\x20saved.','https:','permissions','Invalid\x20color\x20code,\x20please\x20enter\x20a\x20hex\x20code\x20(e.g.,\x20#FF5733).','setColor','12jxplzz','endedReason','options','length','addStringOption','Edit\x20AutoResponse\x20Options:','120QTswmb','editReply','ManageGuild','Auto\x20Responses\x20List','deleteOne','toJSON','addChoices','No\x20auto\x20response\x20found\x20with\x20this\x20trigger.','Text','content','findOne','setFooter','Primary','footericon','find','Please\x20enter\x20the\x20text\x20response\x20for\x20this\x20auto\x20response:','3708bdueNK','embedData','Description','173418TcmAcn','Use\x20the\x20buttons\x20below\x20to\x20customize\x20your\x20embed.','trigger','timestamp','blacklistChannels','whitelist_roles','data','37493192kmfwaO','No\x20auto\x20responses\x20are\x20set.','create','addComponents','delete','save_','member','customId','Auto\x20response\x20for\x20\x22','first','Here\x20are\x20the\x20currently\x20configured\x20auto\x20responses\x20for\x20this\x20server:','thumbnail','authoricon_'];_0x339d=function(){return _0x364676;};return _0x339d();}function formatArrayAsMentions(_0x32054f,_0x2f0f08){if(!_0x32054f[_0x7f171e(-0x36,-0x54)])return _0x7f171e(0x34,-0x6);const _0xf6ae0f=_0x2f0f08===_0x7f171e(0x25,0x22)?'@&':'#';function _0x7f171e(_0x1a0fdc,_0x3cd69f){return _0x1fa37b(_0x3cd69f-0x164,_0x1a0fdc);}return _0x32054f[_0x7f171e(0x5b,0x37)](_0x47a3a2=>'<'+_0xf6ae0f+_0x47a3a2+'>')[_0x7f171e(0x48,0x0)](',\x20');}function createEmbedBuilderComponents(_0xc8164b){function _0x477452(_0x1b9f4b,_0x7c899e){return _0x1fa37b(_0x1b9f4b-0x1c1,_0x7c899e);}return[new ActionRowBuilder()[_0x477452(0x29,0x5e)](new ButtonBuilder()[_0x477452(0x78,0x39)](_0x477452(0x38,0x75)+_0xc8164b)[_0x477452(0x6a,0x87)](_0x477452(0x3a,0xe))[_0x477452(0x62,0x39)](ButtonStyle[_0x477452(0x66,0x72)]),new ButtonBuilder()[_0x477452(0x78,0x4e)](_0x477452(0x90,0x4c)+_0xc8164b)['setLabel'](_0x477452(0x1e,0x26))[_0x477452(0x62,0x20)](ButtonStyle[_0x477452(0x66,0xb0)]),new ButtonBuilder()['setCustomId']('author_'+_0xc8164b)[_0x477452(0x6a,0x6f)](_0x477452(0x6b,0x99))['setStyle'](ButtonStyle[_0x477452(0x66,0x96)]),new ButtonBuilder()[_0x477452(0x78,0xb4)](_0x477452(0x32,0x64)+_0xc8164b)['setLabel']('Author\x20Icon')[_0x477452(0x62,0x93)](ButtonStyle['Secondary']),new ButtonBuilder()[_0x477452(0x78,0xa6)](_0x477452(0x8c,0x67)+_0xc8164b)[_0x477452(0x6a,0x40)](_0x477452(0x84,0xb5))[_0x477452(0x62,0x73)](ButtonStyle[_0x477452(0x66,0xa1)])),new ActionRowBuilder()[_0x477452(0x29,-0x20)](new ButtonBuilder()['setCustomId']('footericon_'+_0xc8164b)[_0x477452(0x6a,0x4f)]('Footer\x20Icon')['setStyle'](ButtonStyle[_0x477452(0x66,0x7f)]),new ButtonBuilder()[_0x477452(0x78,0x8b)]('thumbnail_'+_0xc8164b)[_0x477452(0x6a,0xbd)](_0x477452(0x98,0x73))['setStyle'](ButtonStyle[_0x477452(0x66,0x1d)]),new ButtonBuilder()['setCustomId'](_0x477452(0x74,0x51)+_0xc8164b)[_0x477452(0x6a,0x21)](_0x477452(0x67,0x4b))[_0x477452(0x62,0x43)](ButtonStyle[_0x477452(0x66,0x3a)]),new ButtonBuilder()[_0x477452(0x78,0x37)](_0x477452(0x35,0x46)+_0xc8164b)[_0x477452(0x6a,0x20)](_0x477452(0x3d,0x12))[_0x477452(0x62,0x3d)](ButtonStyle[_0x477452(0x66,0x86)]),new ButtonBuilder()[_0x477452(0x78,0x76)](_0x477452(0x3e,-0x6)+_0xc8164b)['setLabel'](_0x477452(0x73,0x1f))[_0x477452(0x62,0x25)](ButtonStyle['Secondary'])),new ActionRowBuilder()[_0x477452(0x29,0x5a)](new ButtonBuilder()[_0x477452(0x78,0xc6)](_0x477452(0x2b,0x5a)+_0xc8164b)[_0x477452(0x6a,0x3c)]('Save')[_0x477452(0x62,0x1d)](ButtonStyle[_0x477452(0x18,-0x30)]))];}function isValidHttpUrl(_0x123824){function _0x2ee427(_0x5975e0,_0x26f236){return _0x1fa37b(_0x5975e0-0x700,_0x26f236);}try{const _0x507c2a=new URL(_0x123824);return _0x507c2a[_0x2ee427(0x57e,0x55a)]===_0x2ee427(0x5b4,0x5bf)||_0x507c2a[_0x2ee427(0x57e,0x53a)]===_0x2ee427(0x5e9,0x60b);}catch(_0x3a2e47){return![];}}