const cacheName = "cacheV1";
//Just take into account that the "files" below are request-url's 
//and not filenames perse. So for your root of your website you
//should include "./" and if you use my site (or another plain HTML-site) 
//also "index.html". If you use a server-side language and have friendly 
//url's that could be something like "news/this-is-a-newsarticle/".
const appFiles = [
    'index.html', 'offline.html'
];

self.addEventListener("install", (installing) => {
  installing.waitUntil(
    caches.open(cacheName).then((cache) => {
      console.log("Service Worker: Caching important offline files");
      return cache.addAll(appFiles);
    })
  );
  console.log("Service Worker: I am being installed, hello world!");
});

self.addEventListener("activate", (activating) => {
  console.log("Service Worker: All systems online, ready to go!");
});

self.addEventListener("fetch", (fetching) => {
  fetching.respondWith(
    caches.match(fetching.request.url).then((response) => {
      console.log("Service Worker: Fetching resource " + fetching.request.url);
      return (
        response ||
        fetch(fetching.request)
          .then((response) => {
            console.log(
              "Service Worker: Resource " +
                fetching.request.url +
                " not available in cache"
            );
            return caches.open(fetching).then((cache) => {
              console.log(
                "Service Worker: Caching (new) resource " + fetching.request.url
              );
              cache.put(fetching.request, response.clone());
              return response;
            });
          })
          .catch(function () {
            console.log("Service Worker: Fetching online failed, HAALLPPPP!!!");
            //Do something else with the request (for example: respond with a different cached file)
            return caches.match("index.html");
          })
      );
    })
  );
  console.log("Service Worker: User threw a ball, I need to fetch it!");
});

self.addEventListener("push", (pushing) => {
  if(pushing.data){
    pushdata=JSON.parse(pushing.data.text());		
    console.log("Service Worker: I received this:",pushdata);
    if((pushdata["title"]!="")&&(pushdata["message"]!="")){			
      const options={ body:pushdata["message"] }
      self.registration.showNotification(pushdata["title"],options);
      console.log("Service Worker: I made a notification for the user");
    } else {
      console.log("Service Worker: I didn't make a notification for the user, not all the info was there :(");			
    }
  }
  
  console.log(
    "Service Worker: I received some push data, but because I am still very simple I don't know what to do with it :("
  );
});
