function cookieWorker() {
  let vCookie = {};

  function cookieReader() {
    return [
      ...new URLSearchParams(document.cookie.split("; ").join("&")),
    ].reduce(
      (acc, [name, value]) => ({
        ...acc,
        [name]: value,
      }),
      {}
    );
  }

  vCookie = cookieReader(); // initial cookie

  return {
    add(name, value, maxAge = 3600) {
      document.cookie = `${name}=${value}; max-age=${maxAge}`;
      vCookie = cookieReader();

      if (name in vCookie) {
        const event = new CustomEvent("cookie", {
          bubbles: true,
          detail: {
            event: "add",
            name,
            value,
            maxAge,
          },
        });

        window.dispatchEvent(event);
      } else {
        throw new Error("что то сломалось");
      }
    },
    remove(name) {
      vCookie = cookieReader();

      if (name in vCookie) {
        const event = new CustomEvent("cookie", {
          bubbles: true,
          detail: {
            event: "remove",
            name,
          },
        });

        window.dispatchEvent(event);

        document.cookie = `${name}=""; max-age=-1`;
      } else {
        console.warn("таких кук не было");
      }
    },
  };
}

const cookie = cookieWorker();

export { cookie };
