function cacheVersion() {
  const cookies = Array.from(
    new URLSearchParams(document.cookie.split("; ").join("&")).entries()
  ).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: value,
    }),
    {}
  );

  if (!("cacheVersion" in cookies)) {
    const version = Math.round(Math.random() * 1000).toString();
    document.cookie = `cacheVersion=${version}; max-age=86400; path=/`;
    window.cacheVersion = version;
  } else {
    window.cacheVersion = cookies.cacheVersion;
  }
}

cacheVersion();
