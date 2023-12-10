/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/0-0-内测反馈/index.html","0f314a3adee50921a454edc852aafc52"],["/404.html","5eace35d24b9fb6d5af93c795df36b1a"],["/Gallery/01/1.jpg","351a22ab57c72ff195f32af79d7f3dea"],["/Gallery/01/2.jpg","c7d57bb0a8011b2ab0fe990c071fcf45"],["/Gallery/01/3.jpg","5ff4cd9f959be5681a4a28041dd93b81"],["/Gallery/01/4.jpg","9ed73ef319fadf604a56eed50da6dad5"],["/Gallery/01/5.jpg","f9c50db6a0042e910a375adde81a5b36"],["/Gallery/01/6.jpg","3cf1c1eea269cbbcb7b5e8fb024b9821"],["/Gallery/01/7.jpg","8843677c00e5a448f82e5d49b06b247b"],["/Gallery/01/8.jpg","1c44d8e6e7b38e9ecb610edffd486c44"],["/Gallery/01/9.jpg","3f05bf99ceacce6a476c3a29c1f34887"],["/Gallery/02/1.jpg","4f24fb0ab13fb363698427e95d9ad85b"],["/Gallery/02/2.jpg","925efa4254356cbe90c6ce72b08990ac"],["/Gallery/02/3.jpg","6ed32861d76c230efcbb11a4864424df"],["/Gallery/02/4.jpg","bf3e56b6219d2cfcd39eda9b4d1ab69d"],["/Gallery/02/5.jpg","1b3969f4e71c1748b2c3bc6d7a8af37b"],["/Gallery/02/6.jpg","b23ffa6d89bf73a35b8f461927502dbd"],["/Gallery/02/7.jpg","8843677c00e5a448f82e5d49b06b247b"],["/Gallery/02/8.jpg","1c44d8e6e7b38e9ecb610edffd486c44"],["/Gallery/02/9.jpg","3f05bf99ceacce6a476c3a29c1f34887"],["/Gallery/games.html","d9d9337ec7c28faf6cf6d6e99e9a3770"],["/Gallery/index.html","7c4d1caecc44dcbf0cfabd6b7aac4382"],["/Gallery/wallpaper.html","b933f8ad5922a67532706d0402dc3bab"],["/PE/index.html","90e801cc42a51dfe2218c792f97500df"],["/PE/物理.png","c4b9dd57e4e97635eea100d1ee4d5a67"],["/about/Gallery/01/1.jpg","351a22ab57c72ff195f32af79d7f3dea"],["/about/Gallery/01/2.jpg","c7d57bb0a8011b2ab0fe990c071fcf45"],["/about/Gallery/01/3.jpg","5ff4cd9f959be5681a4a28041dd93b81"],["/about/Gallery/01/4.jpg","9ed73ef319fadf604a56eed50da6dad5"],["/about/Gallery/01/5.jpg","f9c50db6a0042e910a375adde81a5b36"],["/about/Gallery/01/6.jpg","3cf1c1eea269cbbcb7b5e8fb024b9821"],["/about/Gallery/01/7.jpg","8843677c00e5a448f82e5d49b06b247b"],["/about/Gallery/01/8.jpg","1c44d8e6e7b38e9ecb610edffd486c44"],["/about/Gallery/01/9.jpg","3f05bf99ceacce6a476c3a29c1f34887"],["/about/Gallery/02/1.jpg","4f24fb0ab13fb363698427e95d9ad85b"],["/about/Gallery/02/2.jpg","925efa4254356cbe90c6ce72b08990ac"],["/about/Gallery/02/3.jpg","6ed32861d76c230efcbb11a4864424df"],["/about/Gallery/02/4.jpg","bf3e56b6219d2cfcd39eda9b4d1ab69d"],["/about/Gallery/02/5.jpg","1b3969f4e71c1748b2c3bc6d7a8af37b"],["/about/Gallery/02/6.jpg","b23ffa6d89bf73a35b8f461927502dbd"],["/about/Gallery/02/7.jpg","8843677c00e5a448f82e5d49b06b247b"],["/about/Gallery/02/8.jpg","1c44d8e6e7b38e9ecb610edffd486c44"],["/about/Gallery/02/9.jpg","3f05bf99ceacce6a476c3a29c1f34887"],["/about/Gallery/games.html","d06daa88b81a889b0ca401cb4f5d32e4"],["/about/Gallery/index.html","33df77d0167ba56e96978673e13035e0"],["/about/Gallery/wallpaper.html","75a79baaea5d998eb4c6d5bd8acee968"],["/about/about/index.html","21254ab928bd3c85e7f92f02d04dedf4"],["/about/archives/index.html","6be98c058c4f639157f6347dd65ac092"],["/about/categories/index.html","1d04f56db622b56b86307943e84cb1c6"],["/about/index.html","22683205ee8d7f62149d10da476d9ffd"],["/about/link/index.html","3c5f93927e643227611ba5bc6968038a"],["/about/media/alipay.jpg","4655da5c2ade91a63d2245809f2b12ab"],["/about/media/alipay3.jpg","b7a47c8a9827b11f490a9a500275b664"],["/about/media/avatar.jpg","351a22ab57c72ff195f32af79d7f3dea"],["/about/media/avatar0.jpg","27b885e44dd59f480c8c0cf362c7a8ed"],["/about/media/bg.jpg","e49f23795545b0cd35400a9b70a9f918"],["/about/media/bg2.jpg","8843677c00e5a448f82e5d49b06b247b"],["/about/media/favicon.jpg","351a22ab57c72ff195f32af79d7f3dea"],["/about/media/favicon.png","af8abb8e9a391127e380537ccecab37f"],["/about/media/favicon5.png","af8abb8e9a391127e380537ccecab37f"],["/about/media/page404.jpg","ca9f5e9f1572830853930ccaebbbce88"],["/about/media/top_img.jpg","e71ec4340bdd4ba0a43da480139af8ba"],["/about/media/top_img3.jpg","76a9985c6b0230199858f84e139319d0"],["/about/media/wechat.jpg","4655da5c2ade91a63d2245809f2b12ab"],["/about/media/wechat6.jpg","a04ff3507238e61ead45169f20d81c20"],["/about/tags/index.html","ab34cb3a777337bc4d3d3802416e035d"],["/archives/2023/08/index.html","a17c942876d0263fdf33e304c591e2da"],["/archives/2023/11/index.html","4d6340b781a492240e7d19dbac1295a0"],["/archives/2023/11/page/2/index.html","b9737b13e0002d1659f091d8e2f9c1dc"],["/archives/2023/12/index.html","76398d9532b23ae6558a65953ae022eb"],["/archives/2023/12/page/2/index.html","a52636acac53e53dea038e450414dea2"],["/archives/2023/index.html","4cf1ddecf468e1f85abd2cb2bbe1a87f"],["/archives/2023/page/2/index.html","d54e9943bc70c946bcfb5b0691b6a685"],["/archives/2023/page/3/index.html","a2424f35197bed81a3498f70e28e588b"],["/archives/index.html","6298f80bb02e9bc9036309b7f3f1c47a"],["/archives/page/2/index.html","81501333d8e3ab24a9beaae385f7d0b6"],["/archives/page/3/index.html","238bbc62f9740b640856b6101bc8b49f"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/blog/Ct调度使用指南/index.html","fa373b53ce536b704c77b9da219a1281"],["/blog/OPPO年度中端机/1.jpg","dcc0c91ee91cd49f9eb488e570a694dd"],["/blog/OPPO年度中端机/10.jpg","71f17395fbdcf3b3e9f093eab19f3e94"],["/blog/OPPO年度中端机/11.jpg","32b6aad8f33a572dc9c49698c028391d"],["/blog/OPPO年度中端机/12.jpg","1d313dfef9331083eb8c96a9d026bbff"],["/blog/OPPO年度中端机/13.jpg","ab11a0b7d7b229812a9cb49354db4bec"],["/blog/OPPO年度中端机/14.jpg","40f6618c951eae7a469132f7da6e7751"],["/blog/OPPO年度中端机/15.jpg","1b1acd3f5073f7fc4a7c183eacbcbb94"],["/blog/OPPO年度中端机/2.jpg","251648a968e803ddf48cd4b1d7763291"],["/blog/OPPO年度中端机/3.jpg","1b4331db6ac4be3e4a67f07dde705b49"],["/blog/OPPO年度中端机/4.jpg","c9215982fd0bb41754b64fa972a104ba"],["/blog/OPPO年度中端机/5.jpg","43d210c583a293f395cb9949938c6885"],["/blog/OPPO年度中端机/6.jpg","f6572b938da04349ad52a63e5a88c1dd"],["/blog/OPPO年度中端机/7.jpg","f81b7138d8611c16527d5438ae2c1ad3"],["/blog/OPPO年度中端机/8.jpg","f852ac137755f6f3fd77ccd3c2cf2681"],["/blog/OPPO年度中端机/9.jpg","ae7efeaefa413e1d4a1cc3212720499e"],["/blog/OPPO年度中端机/index.html","1b55aba6b019624bd8be46e3c3656e0f"],["/blog/OPPO年度中端机/top.jpg","57a751d2646b4af76c1c395ae37afb2d"],["/blog/blazorservice/1.jpg","4c158ed883451eee27e8f4a98ec57110"],["/blog/blazorservice/2.jpg","8e9f89e106f1ae22c86b82437a2629fd"],["/blog/blazorservice/3.jpg","38388a1ae7de182552c0e81b60da76a1"],["/blog/blazorservice/4.jpg","763baf789145dac92a8eb311f368603f"],["/blog/blazorservice/5.jpg","aa8ab62417059a6bd98466a4d1bd4901"],["/blog/blazorservice/6.jpg","d38051308fffcb90831b9bb8f11a5f8b"],["/blog/blazorservice/cover.jpg","d38051308fffcb90831b9bb8f11a5f8b"],["/blog/blazorservice/index.html","e803230afb568ff3851b88cfa2b19c50"],["/blog/done/1.jpg","27b885e44dd59f480c8c0cf362c7a8ed"],["/blog/done/default (1).jpg","4655da5c2ade91a63d2245809f2b12ab"],["/blog/done/default (2).jpg","c7d57bb0a8011b2ab0fe990c071fcf45"],["/blog/done/default (3).jpg","5ff4cd9f959be5681a4a28041dd93b81"],["/blog/done/default (4).jpg","9ed73ef319fadf604a56eed50da6dad5"],["/blog/done/default (5).jpg","f9c50db6a0042e910a375adde81a5b36"],["/blog/done/default (6).jpg","3cf1c1eea269cbbcb7b5e8fb024b9821"],["/blog/done/index.html","f8fe8e2377160c09ba187c20d4cdf740"],["/blog/iPhone15Plus和iPhone15Pro选谁好-看看真正懂手机的人怎么说/1.jpg","2230a3528e5a571c9ee848d2262f3830"],["/blog/iPhone15Plus和iPhone15Pro选谁好-看看真正懂手机的人怎么说/2.jpg","a312159338254898bd5c7c1989ff137b"],["/blog/iPhone15Plus和iPhone15Pro选谁好-看看真正懂手机的人怎么说/3.jpg","ef14bbf4a1838efccdaf0a24770d3899"],["/blog/iPhone15Plus和iPhone15Pro选谁好-看看真正懂手机的人怎么说/4.jpg","74d5913783d4f50efe349ad827770be0"],["/blog/iPhone15Plus和iPhone15Pro选谁好-看看真正懂手机的人怎么说/5.jpg","a80609d6bb3e90525c095bc49c61b227"],["/blog/iPhone15Plus和iPhone15Pro选谁好-看看真正懂手机的人怎么说/6.jpg","9e82be1d4048b62e4d87d1862047846b"],["/blog/iPhone15Plus和iPhone15Pro选谁好-看看真正懂手机的人怎么说/index.html","8a0c8a1dff8433a32b97134285d2e759"],["/blog/iPhone15Plus和iPhone15Pro选谁好-看看真正懂手机的人怎么说/top.jpg","4122cedc98ded6711988e39494a808d3"],["/blog/iPhone15Plus和iPhone15Pro选谁好-看看真正懂手机的人怎么说/top2.jpg","92d762334480fb146c62e041bcb3c9c1"],["/blog/iPhone16机型将采用新一代麦克风且苹果明年将在Siri中集成AI/1.jpg","6d8940f5370dd035ab322458fb8ddb54"],["/blog/iPhone16机型将采用新一代麦克风且苹果明年将在Siri中集成AI/index.html","8082eb6d77f6fc163722e533948e1007"],["/blog/originos4/1.jpg","ab0fd2f0814b98e18a4464af9b9da8c6"],["/blog/originos4/10.jpg","8eff27f0fec9c670144ca690a38eb613"],["/blog/originos4/2.jpg","7951a37ef763c383cb1efdd8a7548f95"],["/blog/originos4/3.jpg","51cbe930036cb27bc341ec90e33f3341"],["/blog/originos4/4.jpg","8d8d3723444261b210982f8457f0ed4a"],["/blog/originos4/5.jpg","24743e1978e91d4223af0d4cd87cbcb8"],["/blog/originos4/6.jpg","a7faec43ebf485acdddac17b23f1ccb1"],["/blog/originos4/7.jpg","3432d3e0b7a61e0a1ae683bbbf46ffd5"],["/blog/originos4/8.jpg","ceb45f707d47cd11b7de09a9704e31d7"],["/blog/originos4/9.jpg","a90fdd53ac9479bddbdd8104f0a11490"],["/blog/originos4/index.html","d2d9d328c5d068f1331ffcae0c4d4556"],["/blog/realme真我手机全球销量突破2亿台仅用时5年/1.jpg","9b1924cce4efe00c26bf58f12f03a2ec"],["/blog/realme真我手机全球销量突破2亿台仅用时5年/2.jpg","23cb6c5c1abfccbbba74d3e9709cccbc"],["/blog/realme真我手机全球销量突破2亿台仅用时5年/3.jpg","6c6af309a2cb943975225cdc4b3f73dc"],["/blog/realme真我手机全球销量突破2亿台仅用时5年/index.html","c6b752ca83eeca7db7118612c0d40aa8"],["/blog/一加Ace 2 Pro评测/1.jpg","879491cf2a74af32b1cd90c4627bc471"],["/blog/一加Ace 2 Pro评测/10.jpg","5ce621357f4eced4001799be9f24a7f2"],["/blog/一加Ace 2 Pro评测/11.jpg","98b44c983a7170434103c298d1cb8de5"],["/blog/一加Ace 2 Pro评测/12.jpg","0f0b2932aff61c0adb5b9dd82c99b90f"],["/blog/一加Ace 2 Pro评测/13.jpg","95651879d9cb429e886abd88b8e21a04"],["/blog/一加Ace 2 Pro评测/14.jpg","46cd621f91821db14ce291d85e8ef83b"],["/blog/一加Ace 2 Pro评测/15.jpg","a43b2c88b3daf0951abe7e8bdc8a39e9"],["/blog/一加Ace 2 Pro评测/16.jpg","41dfd2f1442bede26e66b6cd067567d7"],["/blog/一加Ace 2 Pro评测/17.jpg","ffcdd3c930c48ee633cfcd97f98a0076"],["/blog/一加Ace 2 Pro评测/18.jpg","188521414d423c3d7af063205a1e183f"],["/blog/一加Ace 2 Pro评测/19.jpg","ca38883383ca089369773c7bfcbe3a4c"],["/blog/一加Ace 2 Pro评测/2.jpg","18f996c3b0bdcac2215176aeb4f2dc63"],["/blog/一加Ace 2 Pro评测/20.jpg","64cc8e805b0742d5d389cb0a2a1d3bc9"],["/blog/一加Ace 2 Pro评测/3.jpg","8c55401c8abe37f38fa1b49f5bd45f70"],["/blog/一加Ace 2 Pro评测/4.jpg","64db5280102f82e0876b30dcb49ff447"],["/blog/一加Ace 2 Pro评测/5.jpg","9860c1ee482c25a431132486b826af5f"],["/blog/一加Ace 2 Pro评测/6.jpg","26cebbbfa683dd2852ea4bbbc4b47890"],["/blog/一加Ace 2 Pro评测/7.jpg","b86239eea16a67df1285b46d0a0d978a"],["/blog/一加Ace 2 Pro评测/8.jpg","9904a22aabf5efbba6ca06c078950b2d"],["/blog/一加Ace 2 Pro评测/9.jpg","179cd42367a4f79d03285ffb25242f89"],["/blog/一加Ace 2 Pro评测/index.html","23f06f5f45439025f5501450dc77b6c3"],["/blog/为Windows电脑重新安装或更换系统/1.jpg","eea7f4222400a6bfdb94cc620b35bae3"],["/blog/为Windows电脑重新安装或更换系统/10.jpg","4d13261daf9e4b545e9233d4965a3f6c"],["/blog/为Windows电脑重新安装或更换系统/11.jpg","33e38e0262333addf857dd66c61ff470"],["/blog/为Windows电脑重新安装或更换系统/12.jpg","7385388e7e90d4fd7d2f67d23b533a98"],["/blog/为Windows电脑重新安装或更换系统/13.jpg","3d7e0e7e5384fd7bb3af6a28cf16fb3d"],["/blog/为Windows电脑重新安装或更换系统/14.jpg","edc0c0cc0adec3b8d21800d1bca4b690"],["/blog/为Windows电脑重新安装或更换系统/15.jpg","f1bf1758f0532cb23b6c8cf102f785e6"],["/blog/为Windows电脑重新安装或更换系统/2.jpg","82051c18af050b7e0429d67b80a67ebc"],["/blog/为Windows电脑重新安装或更换系统/3.jpg","be4e42a664a2de177dbbc4bb316ae0e4"],["/blog/为Windows电脑重新安装或更换系统/4.jpg","8a8475c02ca9405f64b9dec1c0d2f14a"],["/blog/为Windows电脑重新安装或更换系统/5.jpg","93d7cf9d95e7be97b7620b537287c961"],["/blog/为Windows电脑重新安装或更换系统/6.jpg","3369ead0bf0477674423755ca8c20106"],["/blog/为Windows电脑重新安装或更换系统/7.jpg","e97b1ee865fe853a8db5de9bb6d14568"],["/blog/为Windows电脑重新安装或更换系统/8.jpg","df71c7583ba35fd517d37e3840b47918"],["/blog/为Windows电脑重新安装或更换系统/9.jpg","48ba27baab757c1e0632f4f8e6824bc6"],["/blog/为Windows电脑重新安装或更换系统/index.html","36ddd3cf1cb4ce3423a2be004a721df6"],["/blog/二大旗舰到底如何抉择/1.jpg","1fdfe207bc282020b96ee4ce2a73a295"],["/blog/二大旗舰到底如何抉择/index.html","bad95d4a7c1e0a9f4f7ecfbe2e240974"],["/blog/今年已14起！阿里、滴滴等多个平台系统崩溃！网友质疑：大厂技术都靠不住还是另有隐情/1.jpg","88544111ef0a6922774098f94a9f204e"],["/blog/今年已14起！阿里、滴滴等多个平台系统崩溃！网友质疑：大厂技术都靠不住还是另有隐情/2.jpg","250c33667fdb04dd63c204ac17a1756f"],["/blog/今年已14起！阿里、滴滴等多个平台系统崩溃！网友质疑：大厂技术都靠不住还是另有隐情/3.jpg","8f10e118cfa388af01e0824c6386575a"],["/blog/今年已14起！阿里、滴滴等多个平台系统崩溃！网友质疑：大厂技术都靠不住还是另有隐情/4.jpg","0c67922d2cd1e77365e75d6c3da90fe1"],["/blog/今年已14起！阿里、滴滴等多个平台系统崩溃！网友质疑：大厂技术都靠不住还是另有隐情/5.jpg","84f2d04e7fdd944652f5c4b83b51ead7"],["/blog/今年已14起！阿里、滴滴等多个平台系统崩溃！网友质疑：大厂技术都靠不住还是另有隐情/6.jpg","9ef2a9e88a6218aac9ad5aba1704b7d5"],["/blog/今年已14起！阿里、滴滴等多个平台系统崩溃！网友质疑：大厂技术都靠不住还是另有隐情/index.html","afe79478fac97da633c0631873964655"],["/blog/今日话题/index.html","e73f67154987cb978187ac19a5b658c3"],["/blog/今日话题（第002期）/1.jpg","97f8ff550cf61ac48e65a7bdc4208625"],["/blog/今日话题（第002期）/index.html","b1ac06abf91b2bfd7aa08fb3f214128f"],["/blog/初步构建建一个hexo博客/1.jpg","54aebe1c0ccd55ac5161751571cfd510"],["/blog/初步构建建一个hexo博客/10.jpg","c67494251aa16ec405024d7a5b3f53ab"],["/blog/初步构建建一个hexo博客/11.jpg","7f1c3b1aad59b057b547eaa087803503"],["/blog/初步构建建一个hexo博客/2.jpg","550ab8ffd617a8817351419e38755f20"],["/blog/初步构建建一个hexo博客/3.jpg","04ecc0d5a6a904630b19348392d45959"],["/blog/初步构建建一个hexo博客/4.jpg","176de74a409f339c8b254d26b031c745"],["/blog/初步构建建一个hexo博客/5.jpg","74e3d785f394f9ced8cbfd08d042ff47"],["/blog/初步构建建一个hexo博客/6.jpg","8e3c3fd7de3f4774b6cb92523afc63c1"],["/blog/初步构建建一个hexo博客/7.jpg","ed6b70088d4d17f072a3b896aae7dd47"],["/blog/初步构建建一个hexo博客/8.jpg","8602cdc45d6a6913dd89c16a90bf3b47"],["/blog/初步构建建一个hexo博客/9.jpg","fbea27cc93d5edf64d11c4148a2364cf"],["/blog/初步构建建一个hexo博客/index.html","3adc7940207277a88fe50751c3e317f6"],["/blog/博主招募！/index.html","c95464f250ced1ab0db718cc42115247"],["/blog/测评/1.jpg","728fd5d7f46a1cb444704e4f73c6d018"],["/blog/测评/10.jpg","f3d506e932c7261f29a8adac1f627a73"],["/blog/测评/11.jpg","bc8c2994e6fabbd7e9f8f599e9c822bf"],["/blog/测评/12.jpg","3f07870c31b0bc393c5c9713ba473b47"],["/blog/测评/2.jpg","eccd1f5c9cb42ac7c38ce7999113ab94"],["/blog/测评/3.jpg","968f6def116bdfd3f5ade06339a1cb26"],["/blog/测评/4.jpg","81de58c06dcf09b616c8adfda906643f"],["/blog/测评/5.jpg","875630bc8412f3eee12082b0ae0f301d"],["/blog/测评/6.jpg","8de6ce348dd76b095f80db8b34726657"],["/blog/测评/7.jpg","9500d66a82a87d1de93bfb231bf869c2"],["/blog/测评/8.jpg","319092576c66b3b31d5cca78fc3ce6e9"],["/blog/测评/9.jpg","6f15d5d0f45ab822e26339a62f1f99b5"],["/blog/测评/index.html","d28e11dce2d4aef3e179e59866c5eed4"],["/blog/游戏性能暴涨，大电池长久续航-太强了/1.jpg","bfff8cc48bc01fdc31e479abcdcf5e76"],["/blog/游戏性能暴涨，大电池长久续航-太强了/10.jpg","ade9dd04af2c5aef611ca0b52874aed0"],["/blog/游戏性能暴涨，大电池长久续航-太强了/11.jpg","667e942e91ede8f96373ecd663aeb5e7"],["/blog/游戏性能暴涨，大电池长久续航-太强了/12.jpg","2700b617a04950fc3cd50c0dc3b08775"],["/blog/游戏性能暴涨，大电池长久续航-太强了/13.jpg","8aa8dc21f5494126e8be476c82864241"],["/blog/游戏性能暴涨，大电池长久续航-太强了/14.jpg","6c47ade20007bf6094090c14d641af6d"],["/blog/游戏性能暴涨，大电池长久续航-太强了/15.jpg","74d4bbc2760a27e2d1951cb926723251"],["/blog/游戏性能暴涨，大电池长久续航-太强了/16.jpg","a33b4b77ec41f087b8ce9a8e4c03fdd0"],["/blog/游戏性能暴涨，大电池长久续航-太强了/17.jpg","b7a910b47851327465744e977fe5a0bd"],["/blog/游戏性能暴涨，大电池长久续航-太强了/18.jpg","103da25dddf6af18ca1a120f2ed47be4"],["/blog/游戏性能暴涨，大电池长久续航-太强了/19.jpg","3b205c9bf046281f2f1f3d3cfd7853f1"],["/blog/游戏性能暴涨，大电池长久续航-太强了/2.jpg","39e1cd4e55cfd04b1b1a5eef64508371"],["/blog/游戏性能暴涨，大电池长久续航-太强了/20.jpg","4d835a0d6ef69c0a08f1cbfd04f5b161"],["/blog/游戏性能暴涨，大电池长久续航-太强了/21.jpg","92b72202581ecb4afc6d6cef359f1a6c"],["/blog/游戏性能暴涨，大电池长久续航-太强了/22.jpg","117e0d8aac66adafcc1f0f6759041f95"],["/blog/游戏性能暴涨，大电池长久续航-太强了/23.jpg","748498bf61285544209a445b35e882f6"],["/blog/游戏性能暴涨，大电池长久续航-太强了/25.jpg","06ab914f42bca8af53d6334d0c9401a7"],["/blog/游戏性能暴涨，大电池长久续航-太强了/26.jpg","5fb94368e38aa8411021d86fea23784f"],["/blog/游戏性能暴涨，大电池长久续航-太强了/27.jpg","5385e22cd39972724efb155cca9f88e0"],["/blog/游戏性能暴涨，大电池长久续航-太强了/28.jpg","667259f47f4289de5a8d56dbcec36345"],["/blog/游戏性能暴涨，大电池长久续航-太强了/29.jpg","519bfdbcad30ff2d2f81549849cd33aa"],["/blog/游戏性能暴涨，大电池长久续航-太强了/3.jpg","9aceb5cb0d9687b0d25482a4a84f0a83"],["/blog/游戏性能暴涨，大电池长久续航-太强了/4.jpg","a3c5156671a7ffe214ce7159190e3405"],["/blog/游戏性能暴涨，大电池长久续航-太强了/5.jpg","0eafb85ee7c022fc992c556bd2631e5b"],["/blog/游戏性能暴涨，大电池长久续航-太强了/6.jpg","0be8fa7cb48dc906ffb6a85241d7a336"],["/blog/游戏性能暴涨，大电池长久续航-太强了/7.jpg","9f79462f33c9cac3784efe9b1b6cde2c"],["/blog/游戏性能暴涨，大电池长久续航-太强了/8.jpg","aa242b6d14bbbe24c463e8f270310011"],["/blog/游戏性能暴涨，大电池长久续航-太强了/9.jpg","a3c6576fb11c8e924014aa595204a743"],["/blog/游戏性能暴涨，大电池长久续航-太强了/index.html","42a4575c9ec84dab6d30200445fe1025"],["/blog/游戏性能暴涨，大电池长久续航-太强了/top.jpg","f46c9ea2de3fe6511bc404f0f9764931"],["/blog/真我GT5Pro评测/1.jpg","6450fb47584d09a8b09577367a511838"],["/blog/真我GT5Pro评测/10.jpg","e6da7e8b7152ab37881fec09b2e9431d"],["/blog/真我GT5Pro评测/11.jpg","d005fd0f08eefebeac9045e11cdefd62"],["/blog/真我GT5Pro评测/12.jpg","2a8826dc69e462345694e6feedbcf93e"],["/blog/真我GT5Pro评测/13.jpg","bf3ac2d505d3697e1f9d77815d7bbb74"],["/blog/真我GT5Pro评测/14.jpg","4fd919512f6ac78012c7552b34849451"],["/blog/真我GT5Pro评测/15.jpg","9b848a54f57509041dd574bd7869e3f8"],["/blog/真我GT5Pro评测/16.jpg","2b40995ad77f6968f6f0194101b00db7"],["/blog/真我GT5Pro评测/17.jpg","2b40995ad77f6968f6f0194101b00db7"],["/blog/真我GT5Pro评测/18.jpg","12f6d49f75d3f50622b72a76cd77d0e4"],["/blog/真我GT5Pro评测/19.jpg","42beff86d7c5011515bc56d96a346f9b"],["/blog/真我GT5Pro评测/2.jpg","48b35707c36214610e7c3a040ca9bfd6"],["/blog/真我GT5Pro评测/20.jpg","8c6f5f33c458316b4913f76e7f1af90b"],["/blog/真我GT5Pro评测/21.jpg","e1a900ae721d236eb5c9db334982200b"],["/blog/真我GT5Pro评测/22.jpg","c341f6eb58de543e9f5011c8a69506f1"],["/blog/真我GT5Pro评测/23.jpg","18ef66d42152515429f24b91224e755b"],["/blog/真我GT5Pro评测/24.jpg","af9a2d3d6e4d3b46ba375492e3b1703b"],["/blog/真我GT5Pro评测/25.jpg","4969f818e9fa36ecfae70551704f1e8f"],["/blog/真我GT5Pro评测/26.jpg","02694e5cf81fa4fafe8b1253a2a2a5f0"],["/blog/真我GT5Pro评测/27.jpg","7a839478035dba4313c3d5fae6a9cc39"],["/blog/真我GT5Pro评测/28.jpg","3d7d87e7383d9f10269438c68c469c60"],["/blog/真我GT5Pro评测/29.jpg","ac94f12b696116098fe480eb69de16c2"],["/blog/真我GT5Pro评测/3.jpg","a99f6ba43343a6ae72ce67b139a901b7"],["/blog/真我GT5Pro评测/30.jpg","fad25ed5d5b8422c7d7d198dc3efd108"],["/blog/真我GT5Pro评测/31.jpg","3f36b04f6909805ab5c0e3fc916a826d"],["/blog/真我GT5Pro评测/32.jpg","a015c9b4ab0621cac84438ca93d9b2e8"],["/blog/真我GT5Pro评测/33.jpg","8e47b8eda309b35e3b2c3ea50d4c6a53"],["/blog/真我GT5Pro评测/34.jpg","f699f3920fe7c587aae98b2a7d3a2c5f"],["/blog/真我GT5Pro评测/35.jpg","c1b9fb1fa0b895b735dd80b8ba120704"],["/blog/真我GT5Pro评测/4.jpg","bd4251f9cb7f57c9e06a132116580769"],["/blog/真我GT5Pro评测/5.jpg","692819c8fafecc566520dd6a6037244c"],["/blog/真我GT5Pro评测/6.jpg","d8999c0a914952d3c5f0618bd6600fca"],["/blog/真我GT5Pro评测/7.jpg","1bb22234b32dbe93ada9b0f81bfa7329"],["/blog/真我GT5Pro评测/8.jpg","580053f5ceae895bb7aefd997c470798"],["/blog/真我GT5Pro评测/9.jpg","c45c3dd1d27996c83f2028c67cfbcd93"],["/blog/真我GT5Pro评测/index.html","97a35a785a855846d31dbbf9528a4b1a"],["/blog/真我GT5Pro评测/top.jpg","c8b869743295d0d9b7c0d2479e1e50d4"],["/blog/真我GT5Pro评测/top2.jpg","b94fb97dc1a362b188b7cd66c32b3d23"],["/blog/红米K70系列/1.jpg","adb59b5816267df93a841471d6d5040f"],["/blog/红米K70系列/10.jpg","b393e6e022039b701e0ee2ca97dc47a7"],["/blog/红米K70系列/11.jpg","9cb91d631ff9da25a0bb85ef4d898715"],["/blog/红米K70系列/12.jpg","3f34c0de178c9fe93b89545a361b4cd5"],["/blog/红米K70系列/13.jpg","d4967d3612cedaced6b4e17c77cc451b"],["/blog/红米K70系列/14.jpg","5d1374b5fca78568bad8993a3f55d47c"],["/blog/红米K70系列/15.jpg","b459aac7612e8e5bbd388f5ec8efc2db"],["/blog/红米K70系列/16.jpg","d005c3231dcea4303e3fe624db88b491"],["/blog/红米K70系列/17.jpg","958c97e3bb2876aa6830bbc6e5749058"],["/blog/红米K70系列/18.jpg","1b79553bf308ae5fcd6ecba95dc14369"],["/blog/红米K70系列/19.jpg","cfc22d515364eefd43e0d100e077b597"],["/blog/红米K70系列/2.jpg","cb866d578bf5d1e602597f4720dd394b"],["/blog/红米K70系列/20.jpg","3bf9b2b780acf199e0713c7165247f64"],["/blog/红米K70系列/21.jpg","72521b68e1955c1ac9cada4b1aa77c4f"],["/blog/红米K70系列/22.jpg","c26dbcf0e964892e6fbb83b535ae2bfb"],["/blog/红米K70系列/23.jpg","beea65c4ff469c7a69d0427a5dbfa7ed"],["/blog/红米K70系列/24.jpg","6a6ea7c53af22691cf2b2e99d1f898eb"],["/blog/红米K70系列/25.jpg","236c1f4e9e844becdfe219e35d347ec8"],["/blog/红米K70系列/26.jpg","107128b48995d48c5c42f8c6961826a2"],["/blog/红米K70系列/27.jpg","4d31435cbb7de4a7df2c4307374ec0d2"],["/blog/红米K70系列/28.jpg","e9b5fee386ab512894964bd4c9e0407d"],["/blog/红米K70系列/3.jpg","fccb2fd2457c82f52d799e7fa3ca63ba"],["/blog/红米K70系列/4.jpg","30454db01b08e5353f99d34dfe30c235"],["/blog/红米K70系列/5.jpg","143c0d59e9fb3127f26545614aa4cc93"],["/blog/红米K70系列/6.jpg","2b08f106bb74527b33ee648eb69d8e22"],["/blog/红米K70系列/7.jpg","fc8a1fe2c26abd4732a454cc86381bf8"],["/blog/红米K70系列/8.jpg","53e55dbff2aed346fe0ee856369b4862"],["/blog/红米K70系列/9.jpg","a551e6ed5562bdf7239318aa7366f551"],["/blog/红米K70系列/index.html","3e004acdfcb37dd3d46c8cde4f748010"],["/blog/荣耀100系列/1.jpg","c1171ac28dddbe37041bf2af2d6f9e6c"],["/blog/荣耀100系列/10.jpg","c548d1a47b253eaca26cb4d99947e014"],["/blog/荣耀100系列/11.jpg","4abedecb0ff82087a8d090dcfbca5681"],["/blog/荣耀100系列/12.jpg","e2a46b68bf0ec939ec003de145306869"],["/blog/荣耀100系列/13.jpg","a1b386720fafb5b0a554725eded3bd6f"],["/blog/荣耀100系列/14.jpg","afb8dbe774d7aa19b92b9122a2ccefae"],["/blog/荣耀100系列/15.jpg","8f3c477cffb412dedb720c7fdbb04c3e"],["/blog/荣耀100系列/16.jpg","2d3f0df1bd019f505075fb152c10b400"],["/blog/荣耀100系列/17.jpg","3a2c5f0a51c645c91b460e16d930d529"],["/blog/荣耀100系列/2.jpg","bb788f21e915f07c731b751ab6f4c386"],["/blog/荣耀100系列/3.jpg","bc9a46198da12078e96d3f15a2f15bb2"],["/blog/荣耀100系列/4.jpg","d3766e7bf9dfb55b4023a528d8bbc961"],["/blog/荣耀100系列/5.jpg","68297639b69969e62091ae54f665284a"],["/blog/荣耀100系列/6.jpg","33ff6bb62347842c8f8e0b51eaffe6f0"],["/blog/荣耀100系列/7.jpg","cf1153da2a396c56c082a56194c4a1e2"],["/blog/荣耀100系列/8.jpg","aff0a738a9dbf09786bb129efcb42bc0"],["/blog/荣耀100系列/9.jpg","74400886eb619496a73bad54b5bb2fed"],["/blog/荣耀100系列/index.html","01a7718afac3849953b6e26d60f0d2e1"],["/blog/蓝厂大模型来了/1.jpg","ccb65ad59b143d258f37964610f2e884"],["/blog/蓝厂大模型来了/2.jpg","216ed51c91b635620b0803f42ead7806"],["/blog/蓝厂大模型来了/3.jpg","bbaa08a6da5cfb11c2fa220107e7f5df"],["/blog/蓝厂大模型来了/4.jpg","e1b3c2df0f834c232765721c22d6194c"],["/blog/蓝厂大模型来了/5.jpg","fbad81710ab17f397691d824844a991c"],["/blog/蓝厂大模型来了/6.jpg","7e77c2e3c6860e07441db7795ef98d5a"],["/blog/蓝厂大模型来了/7.jpg","1618bd5f53405862c200db911d99161c"],["/blog/蓝厂大模型来了/8.jpg","cc79f8bb897e2986b7ed1a103aa756ea"],["/blog/蓝厂大模型来了/index.html","32c6663967420373ef070f744e784567"],["/blog/认识Windows11/1.jpg","9ff2729d28cfda377e5d388037b5a454"],["/blog/认识Windows11/2.jpg","54e258dec3eefb62ccd3c0ef88c6aab6"],["/blog/认识Windows11/3.jpg","700e611dd45b235885027613823c7e7f"],["/blog/认识Windows11/4.jpg","f48643421daf060980e44dfbdbb8b861"],["/blog/认识Windows11/5.jpg","6255735c8f9eaac59ba8a8fae8c8c0bd"],["/blog/认识Windows11/index.html","988709097a1588aa66361056e86077a7"],["/blog/谈谈-vivo/1.jpg","f72c3411d156fb5ee33de9e624a70d0e"],["/blog/谈谈-vivo/2.jpg","2597eb1ec6f197d24d5ea6674355a76d"],["/blog/谈谈-vivo/3.jpg","545f165d4ffdece48c65f6cdb4d36747"],["/blog/谈谈-vivo/4.jpg","d5446b7760d425715dcb551bcda80dcd"],["/blog/谈谈-vivo/5.jpg","536e65719087d89e55cb3cdf5bcc8436"],["/blog/谈谈-vivo/6.jpg","3b50b8f6ce939eb5550af3d67d7b6f03"],["/blog/谈谈-vivo/7.jpg","e5caea533ec244a5c01f83e0ea0925ec"],["/blog/谈谈-vivo/8.jpg","5522bdc4ee9dbd45353dd89745042ba2"],["/blog/谈谈-vivo/9.jpg","f22d099eb9d842830c2c5e2670d79eaa"],["/blog/谈谈-vivo/index.html","a81da1b7b8681e9ed06af67afaefd1ce"],["/blog/谈谈-vivo/top.jpg","18d81e7f94a185e9bb89e76e6425c020"],["/blog/谈谈-小米/1.jpg","b1cf454f1278934130d0cc1767d9fae8"],["/blog/谈谈-小米/2.jpg","2d64b9e6c5ed4a848e31e48fcde350d9"],["/blog/谈谈-小米/3.jpg","cd8fb6dfd33d0896c48b4a70403214eb"],["/blog/谈谈-小米/4.jpg","eff1cbcd4952b589f7ea4aead3e290f1"],["/blog/谈谈-小米/5.jpg","32dc27481f939c2f2b9ab6514af7d3c3"],["/blog/谈谈-小米/6.jpg","90b1628c39cac5c49afc7dfbf9e41afe"],["/blog/谈谈-小米/index.html","5e3f292db1af1563574ca93b5f5791fb"],["/blog/谷歌相机（拍照利器）/1.jpg","1feb3cf281cba1f98958df22d497d0f0"],["/blog/谷歌相机（拍照利器）/2.jpg","61538d6642f898a4224fed1422a1310a"],["/blog/谷歌相机（拍照利器）/3.jpg","fa0b5b931afec15b67d0058ec42908e7"],["/blog/谷歌相机（拍照利器）/4.jpg","63c8208e1ae98b09aed50802d5d3efd7"],["/blog/谷歌相机（拍照利器）/5.jpg","6880ccfc077c35f7212a1bf996c6f827"],["/blog/谷歌相机（拍照利器）/6.jpg","a42e85b7e07612ad8c81deef66a52cc7"],["/blog/谷歌相机（拍照利器）/7.jpg","65b6a56e9b01510a8fbfab4184fbcda9"],["/blog/谷歌相机（拍照利器）/8.jpg","2fedc3a79996f3d0db612b6e6cfaf8c6"],["/blog/谷歌相机（拍照利器）/index.html","4dcd37184e80a1e6073dfa155966ed23"],["/blog/辽宁河南的有福了……/1.jpg","4719564a9c53e939019679209fec7d70"],["/blog/辽宁河南的有福了……/2.jpg","1d291cb56222a9260936c8a344a80121"],["/blog/辽宁河南的有福了……/3.jpg","4484b38b1732311e8722ac618e63d77c"],["/blog/辽宁河南的有福了……/index.html","41bf03f7df190ac9c26114364882ed0c"],["/blog/辽宁河南的有福了……/top.jpg","aad1045f14c6e6f9408b1c891c692a40"],["/blog/骁龙8Gen3配4500nit峰值亮度东方屏/0.jpg","bd994f681bc7ed9ad97b28861c254ced"],["/blog/骁龙8Gen3配4500nit峰值亮度东方屏/00.jpg","9c1de3d549d582fdf557cfdadb9ad2fb"],["/blog/骁龙8Gen3配4500nit峰值亮度东方屏/1.jpg","9c1de3d549d582fdf557cfdadb9ad2fb"],["/blog/骁龙8Gen3配4500nit峰值亮度东方屏/2.jpg","c41ef04086899ed6421177ea1e646fb3"],["/blog/骁龙8Gen3配4500nit峰值亮度东方屏/3.jpg","251f357353086c445bf1b4eb8aadc128"],["/blog/骁龙8Gen3配4500nit峰值亮度东方屏/4.jpg","759c8e62468a07e6cc45d3e1706bae97"],["/blog/骁龙8Gen3配4500nit峰值亮度东方屏/5.jpg","3348226b318a03e26d6e9257d4b41a59"],["/blog/骁龙8Gen3配4500nit峰值亮度东方屏/6.jpg","b21d482d9c7015fcf7597e543c8f2dd0"],["/blog/骁龙8Gen3配4500nit峰值亮度东方屏/7.jpg","53658272759487e4564a5ac7c53269f8"],["/blog/骁龙8Gen3配4500nit峰值亮度东方屏/8.jpg","8050f3b8cea4e2783ae584069f54826d"],["/blog/骁龙8Gen3配4500nit峰值亮度东方屏/index.html","1ea218b248065f5fa20eede07cbc7491"],["/categories/Windows/index.html","8c7c8f8525786ad8e48d1d5415151b3e"],["/categories/index.html","6dfd12f3cb088b91c3fbf20e35206631"],["/categories/今日话题/index.html","f5ad1f6b98f5fa51420e7838af15c4f0"],["/categories/手机测评/index.html","7f6bede10f620a956fe96c1a99a03d13"],["/categories/机型资讯/index.html","36521fb15a276b3b1d02c6f9d6430a8c"],["/categories/玩机技巧/index.html","81da457867a68d8c09ad903729b3e8b8"],["/categories/谈谈各大厂商/index.html","0f1a88bd859c7e88d53ad7480adae548"],["/css/icat.css","bd14fc7df077e7d07d47211b135bbb29"],["/css/index.css","d2b36c98648209cbd3546c6407f89380"],["/css/pagination.css","7a3017f288ff97f3453d59db6a247f0a"],["/css/sweetalert.css","4668c1e648b8f58d442ed5b6b2031ee1"],["/css/universe.css","64d924471ddf19905ea30ae8cbd664ec"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/ct/index.html","c5c34c17860ada180ca82d8fe8c5782a"],["/diaocha/index.html","5accef2c1593fa8e84940d60c86feb24"],["/equipment/index.html","babc345fec514a19cedc2db3398a5ece"],["/fwxy/index.html","b1c23d3e63737f79d04af8d579fcc3b8"],["/hfgkfzxy/index.html","cb3051b5128342d859b86329a0254e89"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","1d6b8b7a708bc458e929750a1406ddd0"],["/js/main.js","01f62452fd05335569c6341d3ac0f52b"],["/js/pagination.js","7835e85bc59651cae441083704c5d774"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/sweetalert.js","25e927bce400d2204ff6391e1ee44b7a"],["/js/timing.js","f9d80919f71ec47bfc854679b545b2b9"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/js/welcome.js","33ce0a3fc21f14933a4722d3ba87711b"],["/link/index.html","c4fe32df9ff6aa24ee5c4789155b2e01"],["/media/a1.jpg","c4a132dcf09d6141022e27e8b4ddbef3"],["/media/a2.jpg","d8553e899243ea8d429c10afb8522c9b"],["/media/alipay3.jpg","b7a47c8a9827b11f490a9a500275b664"],["/media/avatar.jpg","0b7f5c59100a46dcfb8b577f63aa2a89"],["/media/avatar0.jpg","27b885e44dd59f480c8c0cf362c7a8ed"],["/media/b0g (2).jpg","62e30f8d367d19d3189476fea722c560"],["/media/b0g.jpg","fd600d4d123008d592379a2f5e7c1142"],["/media/bg.jpg","e49f23795545b0cd35400a9b70a9f918"],["/media/bg2.jpg","8843677c00e5a448f82e5d49b06b247b"],["/media/bg3.jpg","9f5a814fcd02931a3ecc89687cb9447a"],["/media/bg5.jpg","fff45761ea270b3c215dd2bcd210bf7f"],["/media/bg6.jpg","03ffd925ed02896f8833cba4bdc7f4bb"],["/media/bg7.jpg","c35d74ebad6d98ddcb5e55a6ac2ddfd4"],["/media/bilibili.jpg","3a9a2d4ef041e95755d66e3a9eca9077"],["/media/douyin.jpg","9005a3e45f95806966e4660e7ed500db"],["/media/favicon.png","0b7f5c59100a46dcfb8b577f63aa2a89"],["/media/favicon1.png","351a22ab57c72ff195f32af79d7f3dea"],["/media/favicon5.png","af8abb8e9a391127e380537ccecab37f"],["/media/ltst.jpg","aea7514fa06f85bd83e1d3f0a46a0b42"],["/media/page404.jpg","aea7514fa06f85bd83e1d3f0a46a0b42"],["/media/page4041.jpg","ca9f5e9f1572830853930ccaebbbce88"],["/media/top_img.jpg","1043a79472125f15b026db5520333822"],["/media/top_img3.jpg","76a9985c6b0230199858f84e139319d0"],["/media/wechat.jpg","00764e054880a1476e3e25c0413237fd"],["/media/wechat6.jpg","a04ff3507238e61ead45169f20d81c20"],["/media/weibo.jpg","f58e642ae889eb825a5524401f20f527"],["/notice/index.html","583fb376c2f2b0edee2601596801984d"],["/page/2/index.html","10847fba9eeff52fba88aabe1e188956"],["/page/3/index.html","ce3cc6a404def203b46a8e4b082ffa59"],["/sw-register.js","b43735d5a655939b0b5de005725282ce"],["/tags/Windows/index.html","1e79e435a2487cb6f3dc365879577536"],["/tags/index.html","280be569d22975edec767d3fdb91890e"],["/tags/今日话题/index.html","67b09febbae20e4ea8e9409f37a723f3"],["/tags/机型资讯/index.html","1ba4955e7e6ef97c6507f9dd787a1df0"],["/tags/测评/index.html","523cf322b06010d2f3a34953167df616"],["/tags/玩机技巧-Android/index.html","441f6b1a17a2277198670b8b9898322c"],["/tags/谈谈各大厂商/index.html","799b6c80dd94775d8847da5853ba158d"],["/wsdfghjklxadozg35drtrgy2errtg2ertye3rye5rhe4tewtkwet49053wt54ty4etldsg4sgsdfasdaskifjpo0uyjutylyhrtghjrgrgjmfgifgifhrtoihtoh/index.html","b3a3a237a4f669da7a5ac8d70c751a8b"],["/yszc/index.html","6709066788437e8ac63eeb8d943a97e0"],["/订阅资讯/1.jpg","a87de0015624866e304480d8ca6abe84"],["/订阅资讯/2.jpg","b375c591c3897cf354f554a2a82e86a0"],["/订阅资讯/3.jpg","4c972330f706b797d7f00e4f7bf10ddd"],["/订阅资讯/index.html","19f557cc04f43f0324af2be0dbca0872"],["/跳蚤市场购买须知/1.jpg","3b2b17899411c23cc2013f58f314ecb4"],["/跳蚤市场购买须知/2.jpg","48070ba9cf655dd1c9da7f77b12cdbac"],["/跳蚤市场购买须知/3.jpg","1b20266484c73d6035e1a21159a0809e"],["/跳蚤市场购买须知/4.jpg","9f0526de460bf92bfddab8aaec46bd34"],["/跳蚤市场购买须知/5.jpg","2a78685a08b40ba0be8503b542f5489b"],["/跳蚤市场购买须知/index.html","be8c6fdf03e36e4a72356b5057ced2b5"],["/跳蚤市场购买须知/导购.jpg","cdcd102b6897863619b6a1d0cf28c62b"],["/跳蚤市场购买须知/持续上新.jpg","ae2f78c7e3e953e8d68dc662220678f6"],["/跳蚤市场购买须知/规则.jpg","664a794070ef661f331da82bf94a4cf5"]];
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
