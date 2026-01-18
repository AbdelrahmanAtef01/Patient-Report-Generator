'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "9da975cd8dc03b0424d959850b3938de",
".git/config": "c1cc131f91ede43326342fef72f34654",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "3715c6807627daf358771437cb561e9f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1c52b05616f1fcfe03cb1a6cb6a3f949",
".git/logs/refs/heads/main": "1c52b05616f1fcfe03cb1a6cb6a3f949",
".git/logs/refs/remotes/origin/main": "04c48f9a7ce51eb9e79f17fdf140a3de",
".git/objects/00/004ef0ff17081953d5a2098a7a26c01e6f86e4": "23ebfcb62630b03f842355a313e9e04a",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/07/13ebd7b12778b9cc54dd631bad81e507d8cb04": "d0a251685f9a21026a1e7104ac90ae67",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1a/f69446fd6828cb799e454af7264dbf87e58c35": "7c0773d02eacf11d49b89e2844cd06a5",
".git/objects/1e/503d45bd1c8bc3ffddef7dd14e73f8775d2f79": "635aa7fea23430a29af418903f91e209",
".git/objects/21/64e66292e76626f5c494b110b5f4645a191896": "2a32c4ae3d9492f02fa5dc612b6f0710",
".git/objects/26/ac856e2d516b746232e57b0e3dfd1a43bed64b": "4b3a121dd64280e117176f7a5b51e197",
".git/objects/2b/5060cfa41d6c8d9e8957852d7bdee02b1ce057": "4b3d4f94e3252199aa297f5e1454fed7",
".git/objects/2d/dfcd4109abd4111571fdeffefce3f6c289eca6": "a8d45d705dd849802d5714f180007497",
".git/objects/37/c9bf07618b767907efe93dd6334f81782a64ac": "bb46e5ada627c452ffe2356b529df81b",
".git/objects/38/c3baf400fe5aa7033e64d92976bbffb9aaeaff": "4f0ae352e0741622a2e60f1886acc778",
".git/objects/38/c4af604e359245087d03e62ce052e3cb444e9d": "badb262c487eb53c8349da4e2c282862",
".git/objects/39/2e3904dee885f128828c9968243d2dd05422ea": "232dc0d0415d0c6c1e9e8239b5a69e83",
".git/objects/39/ae17e389aa0ad8af74686e588897e59b0f2c24": "64be00838ae238f0202de3f5cc2a43a4",
".git/objects/40/0ceb5b51aef3d86d1c2aca5b18cf25dce1f92c": "04a6ac0b69085c03e842b7e69a95a10b",
".git/objects/42/a15fa4ac9f6ff7d5e5cd7f0c03a21ee881e546": "e26b33f037a52bc4915c29a3dd85bb17",
".git/objects/44/a1ee9d240c2100d8da314ddc72d3c93df22e69": "213bc1b03af369564e6ed8bae4ff89bd",
".git/objects/44/d098ced10482a17dafcc325f6ffe2deeb8a8db": "d5b50165fd71458844194cb3b53f9edd",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/5cfa0a3936706b331950e61a990da446d0297e": "ad00c940a09d3db22156564f614d1f2b",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/4d/c00492a9593db167295e3645c67a97ad9a2451": "95e1e05f61cca1e86183e20d09707e3b",
".git/objects/4e/920ab1a72b52a9bd9647a423a19e16fba6d286": "b0a2f149a32f3a807e15d1b30aa2d47c",
".git/objects/50/2942ff054abfc513ecfd1289f5d5c30b7423f9": "1f62376ae5c9eed8854fc485d09b3dc4",
".git/objects/51/00c959698de8fabe8c654d6b04e926f157dfd7": "45745f81d1a79232766fafa3b35c5b7d",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/60/f0e938c5c05f005a10a892dfb42a67857f783d": "255295a7a8592549641c8e714a947275",
".git/objects/64/01c106a33763133ed8184fbb603f6d83905b9b": "d8b04bf05fd441188e3f92fb325ea76d",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/73/cb8d06fb62e5abb67cde7853005d32102c638b": "bedb75b81c8bfb5d21725b39b14aaa56",
".git/objects/73/e1d19d695458404c7ee6bc90b323b18311bfc7": "568059ab68fcf6541f69949a6a44a627",
".git/objects/79/6d6a172ec45a4ebbf3ddb478d25611ba03a00d": "654487630816fd2ce62b15e086b89d0d",
".git/objects/7f/0522535166e2053fdc97997b051d17d6807e18": "7c4ad2a6bc57b63af33d447df52b7af6",
".git/objects/86/654dcab4b7a46169b92846828140206c76c137": "64cd32be4c64587508a92cec43b1a303",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/b4001d90e7185e68ac2dd30d56ba2f68fa15bd": "6f452d902b8b2566d3ec32c07600cec6",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/97/356d6a476c820e32962ab150b447d57a429211": "b293eb1d20ee2c3e3c96fc2f384e92ab",
".git/objects/98/ead99be75ee2565cdfbc655b0ecd40f165eddc": "6f9d8240844ea711aa600380ed82af06",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9d/351ecdf6042f1b0736738f07db7a74d05d454a": "fa2aa7f013585960fcf0bcdd443b8738",
".git/objects/9f/2a2138d97110d80583d4cba925bf5c10c1bcf0": "6b7c94de2bbc7dd169b728afd73e689f",
".git/objects/9f/55c77eca5cc555b0515023b69bac42ffe62e2f": "6df7a415b0a3ef602b1ec00438effe29",
".git/objects/a3/fb27b3b35c937e264ae7b1909126098127b1ac": "86d2191c052a8c344e7c52b66a44839a",
".git/objects/a7/be7b72822e1cb09828207ae7d2a565f9c8abd0": "40402245ac18bb139b7c6b93eee66dec",
".git/objects/ad/afa6001724e05823479610dc6bc09fc7238de3": "47e915d4c9bf88cce1829ff10ae1343e",
".git/objects/ad/d57ad7c0513b82a5f212c9c88e4e8fd15ba86c": "f25035c7492e335772d7ca6611b24c76",
".git/objects/b6/5fea92a8812afe5c54f0c452c3ff12ffe9ad4e": "31a4342af104037f5849e32ed91c0f09",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/bb/e702a519176ef94102915c65261297bc2f21cb": "3ec9b6a1e617f838ef57d9c6bc5cbb9f",
".git/objects/c7/7b7d9b293d916212db57216990f40f4068ffee": "351af0da17d5b7d7720dc052436a4134",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/d0/5a18dfb871ff07db4ceb4666272410ede33863": "8d63422925d711e02aac8835c3935239",
".git/objects/d2/cfc01794e3866373d9f1297d6bbcc63396e7cc": "9a2e8ec7b680fe9259486ea08cd7c4e4",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/8804eb3022556821bac3a459c09f6e0575f4da": "10ffe93bcc0dd2fdcba4b7d4447af000",
".git/objects/d6/3be3cf6303413af509c06dc4470f79cdf91d7d": "77aeb62e8568e45d9a9f04e17c345c0c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/db/6a920de53db0429b1e499b4272ed3a3bfa6d9d": "32489747f5bff9df97e964d3e6d6a073",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/df/de7c155b0380eef5dca4539ba2e631dda72ca7": "d5f96ff093e30504756c6f6753cd1f6a",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e6/48f643190b5fd72b45e554ec79de93d2f6f2b8": "eb0b5ed1f5bd3adac40fa4a7e20488c4",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/6c1bbe468129899dcd9c43a88e0c8d8606adcd": "ed1dbfaf0162c98adbc849cc2c1f8d15",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/fb/cdc51f7a3eb1d939311760c9583e10e3bd36e0": "6de228aba2cbc6a3801301d99bd1ae28",
".git/objects/ff/8e7888a2dd8b0c5f0fb4928ca0e835bae1f20c": "d17ee9bb02168195dfe12f8116e6b663",
".git/objects/ff/bfb603c764b45044245976d70fefbb656a9755": "4df6a942502905b57b9156b40f3c8f55",
".git/refs/heads/main": "56362c7c6a541f4d06cac0e3e1385761",
".git/refs/remotes/origin/main": "56362c7c6a541f4d06cac0e3e1385761",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "bfe3d3936fbbcfed615cd0fb97ed03ad",
"assets/NOTICES": "cc090ceb4149a7abd37e5e725566dbfc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "bcce3be5cd7e10a52e6467e01bdd534b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9256114234e536d1a0b64dd6b2e1083e",
"/": "9256114234e536d1a0b64dd6b2e1083e",
"main.dart.js": "47d37e0e26f6ed53163a85567db7f997",
"manifest.json": "a0dd7824f5af899e2f69a76edccc928d",
"version.json": "86ae5ea0d107ec11650044e4377e3700"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
