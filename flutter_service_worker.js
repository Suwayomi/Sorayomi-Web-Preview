'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "99f29024aee8f4672a47cc3a81b9b84a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "48ce1bb8a42776caa951cb782d277730",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d8e9b6203ce2657c991f0b339ccb3a6d",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en-US.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/assets/locales/en_US.json": "40354b7e940eab442d2a820d5093f2f5",
"assets/assets/icons/dark_icon.png": "95cc3412a1e2906c371fc2fa1ad3ed16",
"assets/assets/icons/previous_done.png": "cff60670ab97b59d72be60ab7201d5cc",
"assets/assets/icons/launcher/from_suwayomi.png": "322d246b4780e447ad411e9ccfcc6a93",
"assets/assets/icons/launcher/sorayomi_icon.png": "8fe0d1d0fb3d54bd44c909e2818b70e2",
"assets/assets/icons/launcher/sorayomi_icon.ico": "40833923db3ba9fb49feb0c784ed9662",
"assets/assets/icons/launcher/sorayomi_preview_icon.png": "35d2f7aba2761306336d04d4ef414032",
"assets/assets/icons/light_icon.png": "0d866e1291784657f7661771b0f51149",
"assets/NOTICES": "30a2fb2a1a6d3b7d0d1f0c68043a3e8b",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.json": "7c6319905e7106c9280be12a15b22a08",
"assets/shaders/ink_sparkle.frag": "0ff5c2d72578756a2d288596d5a621dc",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"favicon.png": "82470fc7e3482e999d332a4cf5414865",
"canvaskit/profiling/canvaskit.js": "ba8aac0ba37d0bfa3c9a5f77c761b88b",
"canvaskit/profiling/canvaskit.wasm": "05ad694fda6cfca3f9bbac4b18358f93",
"canvaskit/canvaskit.js": "687636ce014616f8b829c44074231939",
"canvaskit/canvaskit.wasm": "d4972dbefe733345d4eabb87d17fcb5f",
"index.html": "b9d73556cbe8632ae5b6ce19c80bebaf",
"/": "b9d73556cbe8632ae5b6ce19c80bebaf",
"version.json": "043a0bf579493df10edb040b93a232ad",
"manifest.json": "abbb9ea5d372c4f730b072021db3e0e6",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/img/branding-3x.png": "983e5b3db98a164262c6355bcd53d8bb",
"splash/img/branding-1x.png": "f24892af358d2dc04e2648f1d9fe3a79",
"splash/img/light-3x.png": "d1f39a03261babb7bb3d0dce0344cfbc",
"splash/img/light-4x.png": "95cc3412a1e2906c371fc2fa1ad3ed16",
"splash/img/dark-1x.png": "6d0a0d121b4b3153e01927c508c5e329",
"splash/img/branding-dark-2x.png": "9c00a2e9fd15692cc9d282786ed76a22",
"splash/img/branding-dark-3x.png": "983e5b3db98a164262c6355bcd53d8bb",
"splash/img/branding-dark-4x.png": "50eac33e1812ecb76eae74feb6b201b0",
"splash/img/dark-4x.png": "0d866e1291784657f7661771b0f51149",
"splash/img/dark-2x.png": "7590a2aefbf85216cc9facce47e3fd83",
"splash/img/branding-dark-1x.png": "f24892af358d2dc04e2648f1d9fe3a79",
"splash/img/light-2x.png": "81762251c0d1662a5c47906d39ac1545",
"splash/img/branding-2x.png": "9c00a2e9fd15692cc9d282786ed76a22",
"splash/img/branding-4x.png": "50eac33e1812ecb76eae74feb6b201b0",
"splash/img/light-1x.png": "ec40855c269b0a354d98d0774aba7c20",
"splash/img/dark-3x.png": "4e0b47ab0777943f6bd2afe3f9033eaa",
"splash/style.css": "f4d803db23961f98c9e4206793bd0752",
"icons/Icon-maskable-512.png": "5cd6e5f04bcfeea7d8538c8b11b575b8",
"icons/Icon-512.png": "5cd6e5f04bcfeea7d8538c8b11b575b8",
"icons/Icon-maskable-192.png": "02ac0ee3ea8639d69b51eae210194d79",
"icons/Icon-192.png": "02ac0ee3ea8639d69b51eae210194d79",
"main.dart.js": "5f3b52129ccb9734392827c3a0df0054"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
