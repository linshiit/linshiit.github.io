/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/0-0-内测反馈/index.html","122e333d6af21687595306a118a65fa3"],["/404.html","2f8bbe15ac6b8c4b20095553cb4383e8"],["/Gallery/01/1.jpg","351a22ab57c72ff195f32af79d7f3dea"],["/Gallery/01/2.jpg","c7d57bb0a8011b2ab0fe990c071fcf45"],["/Gallery/01/3.jpg","5ff4cd9f959be5681a4a28041dd93b81"],["/Gallery/01/4.jpg","9ed73ef319fadf604a56eed50da6dad5"],["/Gallery/01/5.jpg","f9c50db6a0042e910a375adde81a5b36"],["/Gallery/01/6.jpg","3cf1c1eea269cbbcb7b5e8fb024b9821"],["/Gallery/01/7.jpg","8843677c00e5a448f82e5d49b06b247b"],["/Gallery/01/8.jpg","1c44d8e6e7b38e9ecb610edffd486c44"],["/Gallery/01/9.jpg","3f05bf99ceacce6a476c3a29c1f34887"],["/Gallery/02/1.jpg","4f24fb0ab13fb363698427e95d9ad85b"],["/Gallery/02/2.jpg","925efa4254356cbe90c6ce72b08990ac"],["/Gallery/02/3.jpg","6ed32861d76c230efcbb11a4864424df"],["/Gallery/02/4.jpg","bf3e56b6219d2cfcd39eda9b4d1ab69d"],["/Gallery/02/5.jpg","1b3969f4e71c1748b2c3bc6d7a8af37b"],["/Gallery/02/6.jpg","b23ffa6d89bf73a35b8f461927502dbd"],["/Gallery/02/7.jpg","8843677c00e5a448f82e5d49b06b247b"],["/Gallery/02/8.jpg","1c44d8e6e7b38e9ecb610edffd486c44"],["/Gallery/02/9.jpg","3f05bf99ceacce6a476c3a29c1f34887"],["/Gallery/games.html","f31cbbaa782ed9010bb8fd669e869a07"],["/Gallery/index.html","38a6b60ecdf12b0f091c08d41e36244c"],["/Gallery/wallpaper.html","afd3d05ee1e1204c521f745b50d78464"],["/PE/index.html","8cf1a77bba4a8ef7d8a2f132594b4900"],["/PE/物理.png","c4b9dd57e4e97635eea100d1ee4d5a67"],["/about/Gallery/01/1.jpg","351a22ab57c72ff195f32af79d7f3dea"],["/about/Gallery/01/2.jpg","c7d57bb0a8011b2ab0fe990c071fcf45"],["/about/Gallery/01/3.jpg","5ff4cd9f959be5681a4a28041dd93b81"],["/about/Gallery/01/4.jpg","9ed73ef319fadf604a56eed50da6dad5"],["/about/Gallery/01/5.jpg","f9c50db6a0042e910a375adde81a5b36"],["/about/Gallery/01/6.jpg","3cf1c1eea269cbbcb7b5e8fb024b9821"],["/about/Gallery/01/7.jpg","8843677c00e5a448f82e5d49b06b247b"],["/about/Gallery/01/8.jpg","1c44d8e6e7b38e9ecb610edffd486c44"],["/about/Gallery/01/9.jpg","3f05bf99ceacce6a476c3a29c1f34887"],["/about/Gallery/02/1.jpg","4f24fb0ab13fb363698427e95d9ad85b"],["/about/Gallery/02/2.jpg","925efa4254356cbe90c6ce72b08990ac"],["/about/Gallery/02/3.jpg","6ed32861d76c230efcbb11a4864424df"],["/about/Gallery/02/4.jpg","bf3e56b6219d2cfcd39eda9b4d1ab69d"],["/about/Gallery/02/5.jpg","1b3969f4e71c1748b2c3bc6d7a8af37b"],["/about/Gallery/02/6.jpg","b23ffa6d89bf73a35b8f461927502dbd"],["/about/Gallery/02/7.jpg","8843677c00e5a448f82e5d49b06b247b"],["/about/Gallery/02/8.jpg","1c44d8e6e7b38e9ecb610edffd486c44"],["/about/Gallery/02/9.jpg","3f05bf99ceacce6a476c3a29c1f34887"],["/about/Gallery/games.html","ed91baaf1d643c09ba279ffbb939f16e"],["/about/Gallery/index.html","972c6526d06ce87c8d1e1b8608be5f25"],["/about/Gallery/wallpaper.html","62821dcb5244a452ffe3295d4141ae40"],["/about/about/index.html","ea77bc7816fc35932ad0e9cbefe2449b"],["/about/archives/index.html","34a51fe7889dde55f59d7cd6d736e7d7"],["/about/categories/index.html","0ef6513d5b7dee3590489c3db2cd229c"],["/about/index.html","ab9df894d665315a93904e7942c2345e"],["/about/link/index.html","5386d5c53e31d6e8124e0ecf85d9df49"],["/about/media/alipay.jpg","4655da5c2ade91a63d2245809f2b12ab"],["/about/media/alipay3.jpg","b7a47c8a9827b11f490a9a500275b664"],["/about/media/avatar.jpg","351a22ab57c72ff195f32af79d7f3dea"],["/about/media/avatar0.jpg","27b885e44dd59f480c8c0cf362c7a8ed"],["/about/media/bg.jpg","e49f23795545b0cd35400a9b70a9f918"],["/about/media/bg2.jpg","8843677c00e5a448f82e5d49b06b247b"],["/about/media/favicon.jpg","351a22ab57c72ff195f32af79d7f3dea"],["/about/media/favicon.png","af8abb8e9a391127e380537ccecab37f"],["/about/media/favicon5.png","af8abb8e9a391127e380537ccecab37f"],["/about/media/page404.jpg","ca9f5e9f1572830853930ccaebbbce88"],["/about/media/top_img.jpg","e71ec4340bdd4ba0a43da480139af8ba"],["/about/media/top_img3.jpg","76a9985c6b0230199858f84e139319d0"],["/about/media/wechat.jpg","4655da5c2ade91a63d2245809f2b12ab"],["/about/media/wechat6.jpg","a04ff3507238e61ead45169f20d81c20"],["/about/tags/index.html","d7a624f1ce7bb4832aab47830d34b302"],["/archives/2023/08/index.html","f9828b09d0e56b773d3bd9c5125d77a7"],["/archives/2023/11/index.html","1c0e67e7b4b5de0573b5de67959dbdfa"],["/archives/2023/11/page/2/index.html","c83ad6fd1a669ba6e7e0393b1607a722"],["/archives/2023/index.html","8493d0d2033e601ff557751b8687694b"],["/archives/2023/page/2/index.html","1240a71161ebf10c996dec51f440aa5e"],["/archives/index.html","ca7ec107bde44516fb39029442a6a62e"],["/archives/page/2/index.html","e67cd842847f884d4057a92ef2fb388c"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/blog/Ct调度使用指南/index.html","ba13505328cf5c6114d7363a8340908c"],["/blog/done/1.jpg","27b885e44dd59f480c8c0cf362c7a8ed"],["/blog/done/default (1).jpg","4655da5c2ade91a63d2245809f2b12ab"],["/blog/done/default (2).jpg","c7d57bb0a8011b2ab0fe990c071fcf45"],["/blog/done/default (3).jpg","5ff4cd9f959be5681a4a28041dd93b81"],["/blog/done/default (4).jpg","9ed73ef319fadf604a56eed50da6dad5"],["/blog/done/default (5).jpg","f9c50db6a0042e910a375adde81a5b36"],["/blog/done/default (6).jpg","3cf1c1eea269cbbcb7b5e8fb024b9821"],["/blog/done/index.html","49ba6c82c07f9c93bd8f0fdf1134ef77"],["/blog/originos4/1.jpg","ab0fd2f0814b98e18a4464af9b9da8c6"],["/blog/originos4/10.jpg","8eff27f0fec9c670144ca690a38eb613"],["/blog/originos4/2.jpg","7951a37ef763c383cb1efdd8a7548f95"],["/blog/originos4/3.jpg","51cbe930036cb27bc341ec90e33f3341"],["/blog/originos4/4.jpg","8d8d3723444261b210982f8457f0ed4a"],["/blog/originos4/5.jpg","24743e1978e91d4223af0d4cd87cbcb8"],["/blog/originos4/6.jpg","a7faec43ebf485acdddac17b23f1ccb1"],["/blog/originos4/7.jpg","3432d3e0b7a61e0a1ae683bbbf46ffd5"],["/blog/originos4/8.jpg","ceb45f707d47cd11b7de09a9704e31d7"],["/blog/originos4/9.jpg","a90fdd53ac9479bddbdd8104f0a11490"],["/blog/originos4/index.html","9b3f46423f5823c4b76c89b630306b48"],["/blog/一加Ace 2 Pro评测/1.jpg","879491cf2a74af32b1cd90c4627bc471"],["/blog/一加Ace 2 Pro评测/10.jpg","5ce621357f4eced4001799be9f24a7f2"],["/blog/一加Ace 2 Pro评测/11.jpg","98b44c983a7170434103c298d1cb8de5"],["/blog/一加Ace 2 Pro评测/12.jpg","0f0b2932aff61c0adb5b9dd82c99b90f"],["/blog/一加Ace 2 Pro评测/13.jpg","95651879d9cb429e886abd88b8e21a04"],["/blog/一加Ace 2 Pro评测/14.jpg","46cd621f91821db14ce291d85e8ef83b"],["/blog/一加Ace 2 Pro评测/15.jpg","a43b2c88b3daf0951abe7e8bdc8a39e9"],["/blog/一加Ace 2 Pro评测/16.jpg","41dfd2f1442bede26e66b6cd067567d7"],["/blog/一加Ace 2 Pro评测/17.jpg","ffcdd3c930c48ee633cfcd97f98a0076"],["/blog/一加Ace 2 Pro评测/18.jpg","188521414d423c3d7af063205a1e183f"],["/blog/一加Ace 2 Pro评测/19.jpg","ca38883383ca089369773c7bfcbe3a4c"],["/blog/一加Ace 2 Pro评测/2.jpg","18f996c3b0bdcac2215176aeb4f2dc63"],["/blog/一加Ace 2 Pro评测/20.jpg","64cc8e805b0742d5d389cb0a2a1d3bc9"],["/blog/一加Ace 2 Pro评测/3.jpg","8c55401c8abe37f38fa1b49f5bd45f70"],["/blog/一加Ace 2 Pro评测/4.jpg","64db5280102f82e0876b30dcb49ff447"],["/blog/一加Ace 2 Pro评测/5.jpg","9860c1ee482c25a431132486b826af5f"],["/blog/一加Ace 2 Pro评测/6.jpg","26cebbbfa683dd2852ea4bbbc4b47890"],["/blog/一加Ace 2 Pro评测/7.jpg","b86239eea16a67df1285b46d0a0d978a"],["/blog/一加Ace 2 Pro评测/8.jpg","9904a22aabf5efbba6ca06c078950b2d"],["/blog/一加Ace 2 Pro评测/9.jpg","179cd42367a4f79d03285ffb25242f89"],["/blog/一加Ace 2 Pro评测/index.html","1a1fd72068cf2562006df0597a7ac88b"],["/blog/为Windows电脑重新安装或更换系统/1.jpg","eea7f4222400a6bfdb94cc620b35bae3"],["/blog/为Windows电脑重新安装或更换系统/10.jpg","4d13261daf9e4b545e9233d4965a3f6c"],["/blog/为Windows电脑重新安装或更换系统/11.jpg","33e38e0262333addf857dd66c61ff470"],["/blog/为Windows电脑重新安装或更换系统/12.jpg","7385388e7e90d4fd7d2f67d23b533a98"],["/blog/为Windows电脑重新安装或更换系统/13.jpg","3d7e0e7e5384fd7bb3af6a28cf16fb3d"],["/blog/为Windows电脑重新安装或更换系统/14.jpg","edc0c0cc0adec3b8d21800d1bca4b690"],["/blog/为Windows电脑重新安装或更换系统/15.jpg","f1bf1758f0532cb23b6c8cf102f785e6"],["/blog/为Windows电脑重新安装或更换系统/2.jpg","82051c18af050b7e0429d67b80a67ebc"],["/blog/为Windows电脑重新安装或更换系统/3.jpg","be4e42a664a2de177dbbc4bb316ae0e4"],["/blog/为Windows电脑重新安装或更换系统/4.jpg","8a8475c02ca9405f64b9dec1c0d2f14a"],["/blog/为Windows电脑重新安装或更换系统/5.jpg","93d7cf9d95e7be97b7620b537287c961"],["/blog/为Windows电脑重新安装或更换系统/6.jpg","3369ead0bf0477674423755ca8c20106"],["/blog/为Windows电脑重新安装或更换系统/7.jpg","e97b1ee865fe853a8db5de9bb6d14568"],["/blog/为Windows电脑重新安装或更换系统/8.jpg","df71c7583ba35fd517d37e3840b47918"],["/blog/为Windows电脑重新安装或更换系统/9.jpg","48ba27baab757c1e0632f4f8e6824bc6"],["/blog/为Windows电脑重新安装或更换系统/index.html","d50868cc86187790428a96815de8f3d9"],["/blog/二大旗舰到底如何抉择/1.jpg","1fdfe207bc282020b96ee4ce2a73a295"],["/blog/二大旗舰到底如何抉择/index.html","3985e6a8a29aa0f4863bed828792e54c"],["/blog/今日话题/index.html","46bd4fab00312b6ddf500c55a48e2c7b"],["/blog/初步构建建一个hexo博客/1.jpg","54aebe1c0ccd55ac5161751571cfd510"],["/blog/初步构建建一个hexo博客/10.jpg","c67494251aa16ec405024d7a5b3f53ab"],["/blog/初步构建建一个hexo博客/11.jpg","7f1c3b1aad59b057b547eaa087803503"],["/blog/初步构建建一个hexo博客/2.jpg","550ab8ffd617a8817351419e38755f20"],["/blog/初步构建建一个hexo博客/3.jpg","04ecc0d5a6a904630b19348392d45959"],["/blog/初步构建建一个hexo博客/4.jpg","176de74a409f339c8b254d26b031c745"],["/blog/初步构建建一个hexo博客/5.jpg","74e3d785f394f9ced8cbfd08d042ff47"],["/blog/初步构建建一个hexo博客/6.jpg","8e3c3fd7de3f4774b6cb92523afc63c1"],["/blog/初步构建建一个hexo博客/7.jpg","ed6b70088d4d17f072a3b896aae7dd47"],["/blog/初步构建建一个hexo博客/8.jpg","8602cdc45d6a6913dd89c16a90bf3b47"],["/blog/初步构建建一个hexo博客/9.jpg","fbea27cc93d5edf64d11c4148a2364cf"],["/blog/初步构建建一个hexo博客/index.html","058b9e0ae99db4bd08db7b866cb4b399"],["/blog/博主招募！/index.html","6e36c2ab7c76485f10601cddd494783c"],["/blog/测评/1.jpg","728fd5d7f46a1cb444704e4f73c6d018"],["/blog/测评/10.jpg","f3d506e932c7261f29a8adac1f627a73"],["/blog/测评/11.jpg","bc8c2994e6fabbd7e9f8f599e9c822bf"],["/blog/测评/12.jpg","3f07870c31b0bc393c5c9713ba473b47"],["/blog/测评/2.jpg","eccd1f5c9cb42ac7c38ce7999113ab94"],["/blog/测评/3.jpg","968f6def116bdfd3f5ade06339a1cb26"],["/blog/测评/4.jpg","81de58c06dcf09b616c8adfda906643f"],["/blog/测评/5.jpg","875630bc8412f3eee12082b0ae0f301d"],["/blog/测评/6.jpg","8de6ce348dd76b095f80db8b34726657"],["/blog/测评/7.jpg","9500d66a82a87d1de93bfb231bf869c2"],["/blog/测评/8.jpg","319092576c66b3b31d5cca78fc3ce6e9"],["/blog/测评/9.jpg","6f15d5d0f45ab822e26339a62f1f99b5"],["/blog/测评/index.html","390cb491271355c9ee39cdd9a5faad43"],["/blog/荣耀100系列/1.jpg","c1171ac28dddbe37041bf2af2d6f9e6c"],["/blog/荣耀100系列/10.jpg","c548d1a47b253eaca26cb4d99947e014"],["/blog/荣耀100系列/11.jpg","4abedecb0ff82087a8d090dcfbca5681"],["/blog/荣耀100系列/12.jpg","e2a46b68bf0ec939ec003de145306869"],["/blog/荣耀100系列/13.jpg","a1b386720fafb5b0a554725eded3bd6f"],["/blog/荣耀100系列/14.jpg","afb8dbe774d7aa19b92b9122a2ccefae"],["/blog/荣耀100系列/15.jpg","8f3c477cffb412dedb720c7fdbb04c3e"],["/blog/荣耀100系列/16.jpg","2d3f0df1bd019f505075fb152c10b400"],["/blog/荣耀100系列/17.jpg","3a2c5f0a51c645c91b460e16d930d529"],["/blog/荣耀100系列/2.jpg","bb788f21e915f07c731b751ab6f4c386"],["/blog/荣耀100系列/3.jpg","bc9a46198da12078e96d3f15a2f15bb2"],["/blog/荣耀100系列/4.jpg","d3766e7bf9dfb55b4023a528d8bbc961"],["/blog/荣耀100系列/5.jpg","68297639b69969e62091ae54f665284a"],["/blog/荣耀100系列/6.jpg","33ff6bb62347842c8f8e0b51eaffe6f0"],["/blog/荣耀100系列/7.jpg","cf1153da2a396c56c082a56194c4a1e2"],["/blog/荣耀100系列/8.jpg","aff0a738a9dbf09786bb129efcb42bc0"],["/blog/荣耀100系列/9.jpg","74400886eb619496a73bad54b5bb2fed"],["/blog/荣耀100系列/index.html","aaa118055d2f634b526348bebdd549f0"],["/blog/蓝厂大模型来了/1.jpg","ccb65ad59b143d258f37964610f2e884"],["/blog/蓝厂大模型来了/2.jpg","216ed51c91b635620b0803f42ead7806"],["/blog/蓝厂大模型来了/3.jpg","bbaa08a6da5cfb11c2fa220107e7f5df"],["/blog/蓝厂大模型来了/4.jpg","e1b3c2df0f834c232765721c22d6194c"],["/blog/蓝厂大模型来了/5.jpg","fbad81710ab17f397691d824844a991c"],["/blog/蓝厂大模型来了/6.jpg","7e77c2e3c6860e07441db7795ef98d5a"],["/blog/蓝厂大模型来了/7.jpg","1618bd5f53405862c200db911d99161c"],["/blog/蓝厂大模型来了/8.jpg","cc79f8bb897e2986b7ed1a103aa756ea"],["/blog/蓝厂大模型来了/index.html","2a89590b7ea865c0f98ca5e25ce24a9a"],["/blog/认识Windows11/1.jpg","9ff2729d28cfda377e5d388037b5a454"],["/blog/认识Windows11/2.jpg","54e258dec3eefb62ccd3c0ef88c6aab6"],["/blog/认识Windows11/3.jpg","700e611dd45b235885027613823c7e7f"],["/blog/认识Windows11/4.jpg","f48643421daf060980e44dfbdbb8b861"],["/blog/认识Windows11/5.jpg","6255735c8f9eaac59ba8a8fae8c8c0bd"],["/blog/认识Windows11/index.html","c79ddf27d0a130ef7455bfda36e888de"],["/blog/谷歌相机（拍照利器）/1.jpg","1feb3cf281cba1f98958df22d497d0f0"],["/blog/谷歌相机（拍照利器）/2.jpg","61538d6642f898a4224fed1422a1310a"],["/blog/谷歌相机（拍照利器）/3.jpg","fa0b5b931afec15b67d0058ec42908e7"],["/blog/谷歌相机（拍照利器）/4.jpg","63c8208e1ae98b09aed50802d5d3efd7"],["/blog/谷歌相机（拍照利器）/5.jpg","6880ccfc077c35f7212a1bf996c6f827"],["/blog/谷歌相机（拍照利器）/6.jpg","a42e85b7e07612ad8c81deef66a52cc7"],["/blog/谷歌相机（拍照利器）/7.jpg","65b6a56e9b01510a8fbfab4184fbcda9"],["/blog/谷歌相机（拍照利器）/8.jpg","2fedc3a79996f3d0db612b6e6cfaf8c6"],["/blog/谷歌相机（拍照利器）/index.html","91e4a58a981352f2265284c41bd2348e"],["/categories/Windows/index.html","d4030c8915ed8b628b6e09f854897024"],["/categories/index.html","2d82e395ab74924d306774fb6cc2ba5a"],["/categories/今日话题/index.html","09a3d99681a4b4827392edc0573401a9"],["/categories/手机测评/index.html","eeb3fc86bc08b6b2a2c904af6992c17b"],["/categories/玩机技巧/index.html","2aa84286d8252940ba343aef8636dc63"],["/css/index.css","ee7fab8f01bea2d79adb233b3467162d"],["/css/sweetalert.css","4668c1e648b8f58d442ed5b6b2031ee1"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/ct/index.html","eb88f220670ebd38fb160c9a5c4c890d"],["/diaocha/index.html","f5594140eea0a855bada909444dc92c2"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","d9c599047d27f282c73427603907e833"],["/js/main.js","01f62452fd05335569c6341d3ac0f52b"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/sweetalert.js","25e927bce400d2204ff6391e1ee44b7a"],["/js/timing.js","f9d80919f71ec47bfc854679b545b2b9"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/js/welcome.js","33ce0a3fc21f14933a4722d3ba87711b"],["/link/index.html","9f6b793c7ea2eefb57102c3a97ef5f59"],["/media/alipay.jpg","4655da5c2ade91a63d2245809f2b12ab"],["/media/alipay3.jpg","b7a47c8a9827b11f490a9a500275b664"],["/media/avatar.jpg","351a22ab57c72ff195f32af79d7f3dea"],["/media/avatar0.jpg","27b885e44dd59f480c8c0cf362c7a8ed"],["/media/b0g (2).jpg","62e30f8d367d19d3189476fea722c560"],["/media/b0g.jpg","fd600d4d123008d592379a2f5e7c1142"],["/media/bg.jpg","e49f23795545b0cd35400a9b70a9f918"],["/media/bg2.jpg","8843677c00e5a448f82e5d49b06b247b"],["/media/bg3.jpg","9f5a814fcd02931a3ecc89687cb9447a"],["/media/bg5.jpg","fff45761ea270b3c215dd2bcd210bf7f"],["/media/bg6.jpg","03ffd925ed02896f8833cba4bdc7f4bb"],["/media/bg7.jpg","c35d74ebad6d98ddcb5e55a6ac2ddfd4"],["/media/favicon.png","351a22ab57c72ff195f32af79d7f3dea"],["/media/favicon5.png","af8abb8e9a391127e380537ccecab37f"],["/media/page404.jpg","ca9f5e9f1572830853930ccaebbbce88"],["/media/top_img.jpg","1043a79472125f15b026db5520333822"],["/media/top_img3.jpg","76a9985c6b0230199858f84e139319d0"],["/media/wechat.jpg","4655da5c2ade91a63d2245809f2b12ab"],["/media/wechat6.jpg","a04ff3507238e61ead45169f20d81c20"],["/notice/index.html","e9cad61b297d0f27b6e85a1d0a5e4352"],["/page/2/index.html","ebdaf604d2e394cd7bd791e8a59914f2"],["/sw-register.js","92c098dc05cc52d86d34124eac547107"],["/tags/Windows/index.html","d56e7f9d3c21efe17f09449025195833"],["/tags/index.html","8ff33dff5286a15673b7d4b59024065f"],["/tags/今日话题/index.html","626dddd8ba8665f5e5a9e43cbd014e8a"],["/tags/测评/index.html","0727205921285d9feadef26403014efc"],["/tags/玩机技巧-Android/index.html","376ca98311251a938eeddc623b42480f"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
