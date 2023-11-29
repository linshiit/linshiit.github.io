/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/0-0-内测反馈/index.html","f4c734618e17f9e6bd13d885f363fc1c"],["/404.html","157c05d5c0d39dd9521672a50d415a1b"],["/Gallery/01/1.jpg","351a22ab57c72ff195f32af79d7f3dea"],["/Gallery/01/2.jpg","c7d57bb0a8011b2ab0fe990c071fcf45"],["/Gallery/01/3.jpg","5ff4cd9f959be5681a4a28041dd93b81"],["/Gallery/01/4.jpg","9ed73ef319fadf604a56eed50da6dad5"],["/Gallery/01/5.jpg","f9c50db6a0042e910a375adde81a5b36"],["/Gallery/01/6.jpg","3cf1c1eea269cbbcb7b5e8fb024b9821"],["/Gallery/01/7.jpg","8843677c00e5a448f82e5d49b06b247b"],["/Gallery/01/8.jpg","1c44d8e6e7b38e9ecb610edffd486c44"],["/Gallery/01/9.jpg","3f05bf99ceacce6a476c3a29c1f34887"],["/Gallery/02/1.jpg","4f24fb0ab13fb363698427e95d9ad85b"],["/Gallery/02/2.jpg","925efa4254356cbe90c6ce72b08990ac"],["/Gallery/02/3.jpg","6ed32861d76c230efcbb11a4864424df"],["/Gallery/02/4.jpg","bf3e56b6219d2cfcd39eda9b4d1ab69d"],["/Gallery/02/5.jpg","1b3969f4e71c1748b2c3bc6d7a8af37b"],["/Gallery/02/6.jpg","b23ffa6d89bf73a35b8f461927502dbd"],["/Gallery/02/7.jpg","8843677c00e5a448f82e5d49b06b247b"],["/Gallery/02/8.jpg","1c44d8e6e7b38e9ecb610edffd486c44"],["/Gallery/02/9.jpg","3f05bf99ceacce6a476c3a29c1f34887"],["/Gallery/games.html","e9a744079948fdfa078d7f4c0b63a541"],["/Gallery/index.html","c15063e02ba0c9c76c000c916fe660a3"],["/Gallery/wallpaper.html","88196243cd7b025e5b1f7712bd1875b5"],["/PE/index.html","10187beb29897370e0833a27c472e232"],["/PE/物理.png","c4b9dd57e4e97635eea100d1ee4d5a67"],["/about/Gallery/01/1.jpg","351a22ab57c72ff195f32af79d7f3dea"],["/about/Gallery/01/2.jpg","c7d57bb0a8011b2ab0fe990c071fcf45"],["/about/Gallery/01/3.jpg","5ff4cd9f959be5681a4a28041dd93b81"],["/about/Gallery/01/4.jpg","9ed73ef319fadf604a56eed50da6dad5"],["/about/Gallery/01/5.jpg","f9c50db6a0042e910a375adde81a5b36"],["/about/Gallery/01/6.jpg","3cf1c1eea269cbbcb7b5e8fb024b9821"],["/about/Gallery/01/7.jpg","8843677c00e5a448f82e5d49b06b247b"],["/about/Gallery/01/8.jpg","1c44d8e6e7b38e9ecb610edffd486c44"],["/about/Gallery/01/9.jpg","3f05bf99ceacce6a476c3a29c1f34887"],["/about/Gallery/02/1.jpg","4f24fb0ab13fb363698427e95d9ad85b"],["/about/Gallery/02/2.jpg","925efa4254356cbe90c6ce72b08990ac"],["/about/Gallery/02/3.jpg","6ed32861d76c230efcbb11a4864424df"],["/about/Gallery/02/4.jpg","bf3e56b6219d2cfcd39eda9b4d1ab69d"],["/about/Gallery/02/5.jpg","1b3969f4e71c1748b2c3bc6d7a8af37b"],["/about/Gallery/02/6.jpg","b23ffa6d89bf73a35b8f461927502dbd"],["/about/Gallery/02/7.jpg","8843677c00e5a448f82e5d49b06b247b"],["/about/Gallery/02/8.jpg","1c44d8e6e7b38e9ecb610edffd486c44"],["/about/Gallery/02/9.jpg","3f05bf99ceacce6a476c3a29c1f34887"],["/about/Gallery/games.html","3fd5d7e8e3a4621da93e0771cb688598"],["/about/Gallery/index.html","a7ef7a3a50e3f212484f01871c546472"],["/about/Gallery/wallpaper.html","afd51eb613046324de4a597abd1bf1f8"],["/about/about/index.html","df797b6c39ffeb4cd2cddbef3364eb3b"],["/about/archives/index.html","2938757f902997c69ea638d2bffdd435"],["/about/categories/index.html","509b865fb3e6af5f780291461b5649e3"],["/about/index.html","618c1715dc810ca5845654b3aeb4dad1"],["/about/link/index.html","7250bb7a85eb554f68ff10d8b209a4c7"],["/about/media/alipay.jpg","4655da5c2ade91a63d2245809f2b12ab"],["/about/media/alipay3.jpg","b7a47c8a9827b11f490a9a500275b664"],["/about/media/avatar.jpg","351a22ab57c72ff195f32af79d7f3dea"],["/about/media/avatar0.jpg","27b885e44dd59f480c8c0cf362c7a8ed"],["/about/media/bg.jpg","e49f23795545b0cd35400a9b70a9f918"],["/about/media/bg2.jpg","8843677c00e5a448f82e5d49b06b247b"],["/about/media/favicon.jpg","351a22ab57c72ff195f32af79d7f3dea"],["/about/media/favicon.png","af8abb8e9a391127e380537ccecab37f"],["/about/media/favicon5.png","af8abb8e9a391127e380537ccecab37f"],["/about/media/page404.jpg","ca9f5e9f1572830853930ccaebbbce88"],["/about/media/top_img.jpg","e71ec4340bdd4ba0a43da480139af8ba"],["/about/media/top_img3.jpg","76a9985c6b0230199858f84e139319d0"],["/about/media/wechat.jpg","4655da5c2ade91a63d2245809f2b12ab"],["/about/media/wechat6.jpg","a04ff3507238e61ead45169f20d81c20"],["/about/tags/index.html","7759a86d8cccee9c3c0c3a24907db7e9"],["/archives/2023/08/index.html","8e5837359a98e64cb21d3cf67224f39b"],["/archives/2023/11/index.html","886feb2c37f04fb3a5bae0781ea02fad"],["/archives/2023/11/page/2/index.html","7ad55b91d29af55796358e5fa2b2691f"],["/archives/2023/index.html","098b17cadea7816f5733e816783343c1"],["/archives/2023/page/2/index.html","6b34e90b97d4f7d1853e4f9cee0f03b2"],["/archives/index.html","47f17aa4acd47917ec1d848a74c198c7"],["/archives/page/2/index.html","928df57eb844b0ea572649377865d81d"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/blog/Ct调度使用指南/index.html","703d4e10a4f45e22b21c91ad4e71b8f9"],["/blog/OPPO年度中端机/1.jpg","dcc0c91ee91cd49f9eb488e570a694dd"],["/blog/OPPO年度中端机/10.jpg","71f17395fbdcf3b3e9f093eab19f3e94"],["/blog/OPPO年度中端机/11.jpg","32b6aad8f33a572dc9c49698c028391d"],["/blog/OPPO年度中端机/12.jpg","1d313dfef9331083eb8c96a9d026bbff"],["/blog/OPPO年度中端机/13.jpg","ab11a0b7d7b229812a9cb49354db4bec"],["/blog/OPPO年度中端机/14.jpg","40f6618c951eae7a469132f7da6e7751"],["/blog/OPPO年度中端机/15.jpg","1b1acd3f5073f7fc4a7c183eacbcbb94"],["/blog/OPPO年度中端机/2.jpg","251648a968e803ddf48cd4b1d7763291"],["/blog/OPPO年度中端机/3.jpg","1b4331db6ac4be3e4a67f07dde705b49"],["/blog/OPPO年度中端机/4.jpg","c9215982fd0bb41754b64fa972a104ba"],["/blog/OPPO年度中端机/5.jpg","43d210c583a293f395cb9949938c6885"],["/blog/OPPO年度中端机/6.jpg","f6572b938da04349ad52a63e5a88c1dd"],["/blog/OPPO年度中端机/7.jpg","f81b7138d8611c16527d5438ae2c1ad3"],["/blog/OPPO年度中端机/8.jpg","f852ac137755f6f3fd77ccd3c2cf2681"],["/blog/OPPO年度中端机/9.jpg","ae7efeaefa413e1d4a1cc3212720499e"],["/blog/OPPO年度中端机/index.html","2546956843368af1e3d5f86376d5627d"],["/blog/OPPO年度中端机/top.jpg","57a751d2646b4af76c1c395ae37afb2d"],["/blog/done/1.jpg","27b885e44dd59f480c8c0cf362c7a8ed"],["/blog/done/default (1).jpg","4655da5c2ade91a63d2245809f2b12ab"],["/blog/done/default (2).jpg","c7d57bb0a8011b2ab0fe990c071fcf45"],["/blog/done/default (3).jpg","5ff4cd9f959be5681a4a28041dd93b81"],["/blog/done/default (4).jpg","9ed73ef319fadf604a56eed50da6dad5"],["/blog/done/default (5).jpg","f9c50db6a0042e910a375adde81a5b36"],["/blog/done/default (6).jpg","3cf1c1eea269cbbcb7b5e8fb024b9821"],["/blog/done/index.html","4f12f66f37b2098aa05d53bb41db79d2"],["/blog/originos4/1.jpg","ab0fd2f0814b98e18a4464af9b9da8c6"],["/blog/originos4/10.jpg","8eff27f0fec9c670144ca690a38eb613"],["/blog/originos4/2.jpg","7951a37ef763c383cb1efdd8a7548f95"],["/blog/originos4/3.jpg","51cbe930036cb27bc341ec90e33f3341"],["/blog/originos4/4.jpg","8d8d3723444261b210982f8457f0ed4a"],["/blog/originos4/5.jpg","24743e1978e91d4223af0d4cd87cbcb8"],["/blog/originos4/6.jpg","a7faec43ebf485acdddac17b23f1ccb1"],["/blog/originos4/7.jpg","3432d3e0b7a61e0a1ae683bbbf46ffd5"],["/blog/originos4/8.jpg","ceb45f707d47cd11b7de09a9704e31d7"],["/blog/originos4/9.jpg","a90fdd53ac9479bddbdd8104f0a11490"],["/blog/originos4/index.html","6fb1846fe05d00738f12865023a534b6"],["/blog/一加Ace 2 Pro评测/1.jpg","879491cf2a74af32b1cd90c4627bc471"],["/blog/一加Ace 2 Pro评测/10.jpg","5ce621357f4eced4001799be9f24a7f2"],["/blog/一加Ace 2 Pro评测/11.jpg","98b44c983a7170434103c298d1cb8de5"],["/blog/一加Ace 2 Pro评测/12.jpg","0f0b2932aff61c0adb5b9dd82c99b90f"],["/blog/一加Ace 2 Pro评测/13.jpg","95651879d9cb429e886abd88b8e21a04"],["/blog/一加Ace 2 Pro评测/14.jpg","46cd621f91821db14ce291d85e8ef83b"],["/blog/一加Ace 2 Pro评测/15.jpg","a43b2c88b3daf0951abe7e8bdc8a39e9"],["/blog/一加Ace 2 Pro评测/16.jpg","41dfd2f1442bede26e66b6cd067567d7"],["/blog/一加Ace 2 Pro评测/17.jpg","ffcdd3c930c48ee633cfcd97f98a0076"],["/blog/一加Ace 2 Pro评测/18.jpg","188521414d423c3d7af063205a1e183f"],["/blog/一加Ace 2 Pro评测/19.jpg","ca38883383ca089369773c7bfcbe3a4c"],["/blog/一加Ace 2 Pro评测/2.jpg","18f996c3b0bdcac2215176aeb4f2dc63"],["/blog/一加Ace 2 Pro评测/20.jpg","64cc8e805b0742d5d389cb0a2a1d3bc9"],["/blog/一加Ace 2 Pro评测/3.jpg","8c55401c8abe37f38fa1b49f5bd45f70"],["/blog/一加Ace 2 Pro评测/4.jpg","64db5280102f82e0876b30dcb49ff447"],["/blog/一加Ace 2 Pro评测/5.jpg","9860c1ee482c25a431132486b826af5f"],["/blog/一加Ace 2 Pro评测/6.jpg","26cebbbfa683dd2852ea4bbbc4b47890"],["/blog/一加Ace 2 Pro评测/7.jpg","b86239eea16a67df1285b46d0a0d978a"],["/blog/一加Ace 2 Pro评测/8.jpg","9904a22aabf5efbba6ca06c078950b2d"],["/blog/一加Ace 2 Pro评测/9.jpg","179cd42367a4f79d03285ffb25242f89"],["/blog/一加Ace 2 Pro评测/index.html","20513f5db94a4c418c58ad49db9689f8"],["/blog/为Windows电脑重新安装或更换系统/1.jpg","eea7f4222400a6bfdb94cc620b35bae3"],["/blog/为Windows电脑重新安装或更换系统/10.jpg","4d13261daf9e4b545e9233d4965a3f6c"],["/blog/为Windows电脑重新安装或更换系统/11.jpg","33e38e0262333addf857dd66c61ff470"],["/blog/为Windows电脑重新安装或更换系统/12.jpg","7385388e7e90d4fd7d2f67d23b533a98"],["/blog/为Windows电脑重新安装或更换系统/13.jpg","3d7e0e7e5384fd7bb3af6a28cf16fb3d"],["/blog/为Windows电脑重新安装或更换系统/14.jpg","edc0c0cc0adec3b8d21800d1bca4b690"],["/blog/为Windows电脑重新安装或更换系统/15.jpg","f1bf1758f0532cb23b6c8cf102f785e6"],["/blog/为Windows电脑重新安装或更换系统/2.jpg","82051c18af050b7e0429d67b80a67ebc"],["/blog/为Windows电脑重新安装或更换系统/3.jpg","be4e42a664a2de177dbbc4bb316ae0e4"],["/blog/为Windows电脑重新安装或更换系统/4.jpg","8a8475c02ca9405f64b9dec1c0d2f14a"],["/blog/为Windows电脑重新安装或更换系统/5.jpg","93d7cf9d95e7be97b7620b537287c961"],["/blog/为Windows电脑重新安装或更换系统/6.jpg","3369ead0bf0477674423755ca8c20106"],["/blog/为Windows电脑重新安装或更换系统/7.jpg","e97b1ee865fe853a8db5de9bb6d14568"],["/blog/为Windows电脑重新安装或更换系统/8.jpg","df71c7583ba35fd517d37e3840b47918"],["/blog/为Windows电脑重新安装或更换系统/9.jpg","48ba27baab757c1e0632f4f8e6824bc6"],["/blog/为Windows电脑重新安装或更换系统/index.html","52a177bb0eb68b00f0eab79f7d7f13b9"],["/blog/二大旗舰到底如何抉择/1.jpg","1fdfe207bc282020b96ee4ce2a73a295"],["/blog/二大旗舰到底如何抉择/index.html","425df5159e1ba019e3175f13350cdd8f"],["/blog/今日话题/index.html","3bce7b6eb58ae5f380cfa00969216616"],["/blog/今日话题（第002期）/1.jpg","97f8ff550cf61ac48e65a7bdc4208625"],["/blog/今日话题（第002期）/index.html","961694e7b1a5f79d8f31c16c4cf8109d"],["/blog/初步构建建一个hexo博客/1.jpg","54aebe1c0ccd55ac5161751571cfd510"],["/blog/初步构建建一个hexo博客/10.jpg","c67494251aa16ec405024d7a5b3f53ab"],["/blog/初步构建建一个hexo博客/11.jpg","7f1c3b1aad59b057b547eaa087803503"],["/blog/初步构建建一个hexo博客/2.jpg","550ab8ffd617a8817351419e38755f20"],["/blog/初步构建建一个hexo博客/3.jpg","04ecc0d5a6a904630b19348392d45959"],["/blog/初步构建建一个hexo博客/4.jpg","176de74a409f339c8b254d26b031c745"],["/blog/初步构建建一个hexo博客/5.jpg","74e3d785f394f9ced8cbfd08d042ff47"],["/blog/初步构建建一个hexo博客/6.jpg","8e3c3fd7de3f4774b6cb92523afc63c1"],["/blog/初步构建建一个hexo博客/7.jpg","ed6b70088d4d17f072a3b896aae7dd47"],["/blog/初步构建建一个hexo博客/8.jpg","8602cdc45d6a6913dd89c16a90bf3b47"],["/blog/初步构建建一个hexo博客/9.jpg","fbea27cc93d5edf64d11c4148a2364cf"],["/blog/初步构建建一个hexo博客/index.html","f47e7337bb7a818af9698540108ddd08"],["/blog/博主招募！/index.html","516d4dd37d589f6598bda073bf3d54d1"],["/blog/测评/1.jpg","728fd5d7f46a1cb444704e4f73c6d018"],["/blog/测评/10.jpg","f3d506e932c7261f29a8adac1f627a73"],["/blog/测评/11.jpg","bc8c2994e6fabbd7e9f8f599e9c822bf"],["/blog/测评/12.jpg","3f07870c31b0bc393c5c9713ba473b47"],["/blog/测评/2.jpg","eccd1f5c9cb42ac7c38ce7999113ab94"],["/blog/测评/3.jpg","968f6def116bdfd3f5ade06339a1cb26"],["/blog/测评/4.jpg","81de58c06dcf09b616c8adfda906643f"],["/blog/测评/5.jpg","875630bc8412f3eee12082b0ae0f301d"],["/blog/测评/6.jpg","8de6ce348dd76b095f80db8b34726657"],["/blog/测评/7.jpg","9500d66a82a87d1de93bfb231bf869c2"],["/blog/测评/8.jpg","319092576c66b3b31d5cca78fc3ce6e9"],["/blog/测评/9.jpg","6f15d5d0f45ab822e26339a62f1f99b5"],["/blog/测评/index.html","f1b2e41bf3daa17e9a2e52aa5d77d31c"],["/blog/荣耀100系列/1.jpg","c1171ac28dddbe37041bf2af2d6f9e6c"],["/blog/荣耀100系列/10.jpg","c548d1a47b253eaca26cb4d99947e014"],["/blog/荣耀100系列/11.jpg","4abedecb0ff82087a8d090dcfbca5681"],["/blog/荣耀100系列/12.jpg","e2a46b68bf0ec939ec003de145306869"],["/blog/荣耀100系列/13.jpg","a1b386720fafb5b0a554725eded3bd6f"],["/blog/荣耀100系列/14.jpg","afb8dbe774d7aa19b92b9122a2ccefae"],["/blog/荣耀100系列/15.jpg","8f3c477cffb412dedb720c7fdbb04c3e"],["/blog/荣耀100系列/16.jpg","2d3f0df1bd019f505075fb152c10b400"],["/blog/荣耀100系列/17.jpg","3a2c5f0a51c645c91b460e16d930d529"],["/blog/荣耀100系列/2.jpg","bb788f21e915f07c731b751ab6f4c386"],["/blog/荣耀100系列/3.jpg","bc9a46198da12078e96d3f15a2f15bb2"],["/blog/荣耀100系列/4.jpg","d3766e7bf9dfb55b4023a528d8bbc961"],["/blog/荣耀100系列/5.jpg","68297639b69969e62091ae54f665284a"],["/blog/荣耀100系列/6.jpg","33ff6bb62347842c8f8e0b51eaffe6f0"],["/blog/荣耀100系列/7.jpg","cf1153da2a396c56c082a56194c4a1e2"],["/blog/荣耀100系列/8.jpg","aff0a738a9dbf09786bb129efcb42bc0"],["/blog/荣耀100系列/9.jpg","74400886eb619496a73bad54b5bb2fed"],["/blog/荣耀100系列/index.html","66ff8fe6dbd0b6bcb1390c9ae110b864"],["/blog/蓝厂大模型来了/1.jpg","ccb65ad59b143d258f37964610f2e884"],["/blog/蓝厂大模型来了/2.jpg","216ed51c91b635620b0803f42ead7806"],["/blog/蓝厂大模型来了/3.jpg","bbaa08a6da5cfb11c2fa220107e7f5df"],["/blog/蓝厂大模型来了/4.jpg","e1b3c2df0f834c232765721c22d6194c"],["/blog/蓝厂大模型来了/5.jpg","fbad81710ab17f397691d824844a991c"],["/blog/蓝厂大模型来了/6.jpg","7e77c2e3c6860e07441db7795ef98d5a"],["/blog/蓝厂大模型来了/7.jpg","1618bd5f53405862c200db911d99161c"],["/blog/蓝厂大模型来了/8.jpg","cc79f8bb897e2986b7ed1a103aa756ea"],["/blog/蓝厂大模型来了/index.html","d98fa08ba09e84f054d66110c645d1b0"],["/blog/认识Windows11/1.jpg","9ff2729d28cfda377e5d388037b5a454"],["/blog/认识Windows11/2.jpg","54e258dec3eefb62ccd3c0ef88c6aab6"],["/blog/认识Windows11/3.jpg","700e611dd45b235885027613823c7e7f"],["/blog/认识Windows11/4.jpg","f48643421daf060980e44dfbdbb8b861"],["/blog/认识Windows11/5.jpg","6255735c8f9eaac59ba8a8fae8c8c0bd"],["/blog/认识Windows11/index.html","289cf7724e19494a2c19ac3e1c9b1034"],["/blog/谷歌相机（拍照利器）/1.jpg","1feb3cf281cba1f98958df22d497d0f0"],["/blog/谷歌相机（拍照利器）/2.jpg","61538d6642f898a4224fed1422a1310a"],["/blog/谷歌相机（拍照利器）/3.jpg","fa0b5b931afec15b67d0058ec42908e7"],["/blog/谷歌相机（拍照利器）/4.jpg","63c8208e1ae98b09aed50802d5d3efd7"],["/blog/谷歌相机（拍照利器）/5.jpg","6880ccfc077c35f7212a1bf996c6f827"],["/blog/谷歌相机（拍照利器）/6.jpg","a42e85b7e07612ad8c81deef66a52cc7"],["/blog/谷歌相机（拍照利器）/7.jpg","65b6a56e9b01510a8fbfab4184fbcda9"],["/blog/谷歌相机（拍照利器）/8.jpg","2fedc3a79996f3d0db612b6e6cfaf8c6"],["/blog/谷歌相机（拍照利器）/index.html","0d3fb318cef11aa217bb6902abd6a75d"],["/blog/跳蚤市场活动正在火热进行中/1.jpg","47cd9ba48433cfdf05b1000ab71b5674"],["/blog/跳蚤市场活动正在火热进行中/index.html","854fc40297e48541985db73096441beb"],["/categories/Windows/index.html","abf5e37fdb0f3fa11de351284b844318"],["/categories/index.html","5fbb41fadecec731f5f4a5c2aa5157a8"],["/categories/今日话题/index.html","912a8f0975b7531651b824aa254349c0"],["/categories/手机测评/index.html","f064949f47768b35eb6f7c815db2a21e"],["/categories/玩机技巧/index.html","067218762bf9549e9552009d7b6b5fdd"],["/css/icat.css","bd14fc7df077e7d07d47211b135bbb29"],["/css/index.css","d2b36c98648209cbd3546c6407f89380"],["/css/sweetalert.css","4668c1e648b8f58d442ed5b6b2031ee1"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/ct/index.html","0aca2f02d44053f0d43611a9a7c1664c"],["/diaocha/index.html","ac1b503181b0524a1d43a30f8eb0a833"],["/equipment/index.html","0271845324d60e4b69c650d7238ada97"],["/fwxy/index.html","5a864aa1567282dff072a842e7e52a5d"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","5f92a10146c571382572a436660569ea"],["/js/main.js","01f62452fd05335569c6341d3ac0f52b"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/sweetalert.js","25e927bce400d2204ff6391e1ee44b7a"],["/js/timing.js","f9d80919f71ec47bfc854679b545b2b9"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/js/welcome.js","33ce0a3fc21f14933a4722d3ba87711b"],["/link/index.html","0bd42891abaae0a226454804fefd96ea"],["/media/a1.jpg","c4a132dcf09d6141022e27e8b4ddbef3"],["/media/a2.jpg","d8553e899243ea8d429c10afb8522c9b"],["/media/alipay3.jpg","b7a47c8a9827b11f490a9a500275b664"],["/media/avatar.jpg","351a22ab57c72ff195f32af79d7f3dea"],["/media/avatar0.jpg","27b885e44dd59f480c8c0cf362c7a8ed"],["/media/b0g (2).jpg","62e30f8d367d19d3189476fea722c560"],["/media/b0g.jpg","fd600d4d123008d592379a2f5e7c1142"],["/media/bg.jpg","e49f23795545b0cd35400a9b70a9f918"],["/media/bg2.jpg","8843677c00e5a448f82e5d49b06b247b"],["/media/bg3.jpg","9f5a814fcd02931a3ecc89687cb9447a"],["/media/bg5.jpg","fff45761ea270b3c215dd2bcd210bf7f"],["/media/bg6.jpg","03ffd925ed02896f8833cba4bdc7f4bb"],["/media/bg7.jpg","c35d74ebad6d98ddcb5e55a6ac2ddfd4"],["/media/bilibili.jpg","3a9a2d4ef041e95755d66e3a9eca9077"],["/media/douyin.jpg","9005a3e45f95806966e4660e7ed500db"],["/media/favicon.png","351a22ab57c72ff195f32af79d7f3dea"],["/media/favicon5.png","af8abb8e9a391127e380537ccecab37f"],["/media/ltst.jpg","aea7514fa06f85bd83e1d3f0a46a0b42"],["/media/page404.jpg","ca9f5e9f1572830853930ccaebbbce88"],["/media/top_img.jpg","1043a79472125f15b026db5520333822"],["/media/top_img3.jpg","76a9985c6b0230199858f84e139319d0"],["/media/wechat.jpg","00764e054880a1476e3e25c0413237fd"],["/media/wechat6.jpg","a04ff3507238e61ead45169f20d81c20"],["/media/weibo.jpg","f58e642ae889eb825a5524401f20f527"],["/notice/index.html","f6462c239c45484de89457d6c9ff3ffb"],["/page/2/index.html","f972190d9f0337f5f4673d096322b3cd"],["/sw-register.js","ba1083354af631f1d7adbad64afe837a"],["/tags/Windows/index.html","6e1f7db16803b76453c9dc4768be8aa2"],["/tags/index.html","83be67ae3079e5c127cf9ff5074fc689"],["/tags/今日话题/index.html","1dd23936ecc64495138b51e5448e43d5"],["/tags/测评/index.html","6c04fdf00b37947080436badbc121df7"],["/tags/玩机技巧-Android/index.html","22c1ecbdc92fd998c1014712fd26b873"],["/wsdfghjklxadozg35drtrgy2errtg2ertye3rye5rhe4tewtkwet49053wt54ty4etldsg4sgsdfasdaskifjpo0uyjutylyhrtghjrgrgjmfgifgifhrtoihtoh/1.jpg","8b80f63a835aa8a094f1b77af9a01753"],["/wsdfghjklxadozg35drtrgy2errtg2ertye3rye5rhe4tewtkwet49053wt54ty4etldsg4sgsdfasdaskifjpo0uyjutylyhrtghjrgrgjmfgifgifhrtoihtoh/2.jpg","a18a50ca102faa025fb939cc1d2ba12d"],["/wsdfghjklxadozg35drtrgy2errtg2ertye3rye5rhe4tewtkwet49053wt54ty4etldsg4sgsdfasdaskifjpo0uyjutylyhrtghjrgrgjmfgifgifhrtoihtoh/index.html","68085dde6977f867adbb6f3269c51436"],["/yszc/index.html","3af4a6508f96abec52ef5cf1d9d58a35"],["/跳蚤市场购买须知/1.jpg","3b2b17899411c23cc2013f58f314ecb4"],["/跳蚤市场购买须知/2.jpg","48070ba9cf655dd1c9da7f77b12cdbac"],["/跳蚤市场购买须知/3.jpg","1b20266484c73d6035e1a21159a0809e"],["/跳蚤市场购买须知/4.jpg","9f0526de460bf92bfddab8aaec46bd34"],["/跳蚤市场购买须知/5.jpg","2a78685a08b40ba0be8503b542f5489b"],["/跳蚤市场购买须知/index.html","669352b8c28c96477cd2e8169fdf7c90"],["/跳蚤市场购买须知/导购.jpg","cdcd102b6897863619b6a1d0cf28c62b"],["/跳蚤市场购买须知/持续上新.jpg","ae2f78c7e3e953e8d68dc662220678f6"],["/跳蚤市场购买须知/规则.jpg","664a794070ef661f331da82bf94a4cf5"]];
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
