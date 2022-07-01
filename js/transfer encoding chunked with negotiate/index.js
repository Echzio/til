import express from "express";

const app = express();

app.route("/").get((req, res) => {
  res.header("WWW-Authenticate", "negotiate");
  const auth = req.header("authorization");
  if (auth) {
    res.header("Content-Type", "text/html");
    res.status(200);

    res.write("hello ");

    setTimeout(() => {
      res.write("world");

      setTimeout(() => {
        res.end("!");
      }, 2000);
    }, 1000);
    return;
  }
  return res.status(401).send("hello");
});

app.listen(8080, () => {
  console.log("server started");
});
