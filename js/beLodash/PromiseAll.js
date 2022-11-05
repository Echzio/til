const kek = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 900);
  });

const kek2 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(3);
    }, 300);
  });

const promiseAll = (props) => {
  return new Promise((resolve) => {
    let count = 0;
    let data = [];

    const callback = (value, index) => {
      count++;
      data[index] = value;

      if (count === props.length) {
        resolve(data);
      }
    };

    props.forEach((prom, index) => {
      prom.then((data) => callback(data, index));
    });
  });
};

(async () => {
  const res = await promiseAll([kek(), kek2()]);
  console.log(res);
})();
