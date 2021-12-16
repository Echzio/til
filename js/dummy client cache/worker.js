let cache = {};

this.addEventListener("message", async ({ data: { action, payload } }) => {
  switch (action) {
    case "open":
      cache = await caches.open(payload);
      await cache
        .keys()
        .then((keys) =>
          Promise.all(
            keys.map(
              async (key) => key !== payload && (await caches.delete(key))
            )
          )
        );
      break;
    case "save":
      await Promise.all(
        payload.map(async ({ key, value }) => {
          return await cache.put(new Request(key), new Response(value), {
            status: 200,
          });
        })
      );
      break;
    case "check":
      setTimeout(() => {
        check(cache, payload);
      }, 500);
      break;
  }
});

async function check(cache, payload) {
  const cached = await Promise.all(
    payload.map(async ({ key }) => {
      return cache
        .match(key)
        .then((data) => data.blob())
        .then((data) => ({
          key,
          value: new File([data], key),
        }))
        .catch(() => {});
    })
  );

  self.postMessage(cached.filter(Boolean));
}
