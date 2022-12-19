const fromBase64 = () => {
  const parsed = [26, 6, 21, 44, 27, 6, 60, 32, 29, 54, 61, 50, 27, 6, 16]; // with base64 encoding table

  const binary6 = parsed
    .map((item) => item.toString(2).padStart(6, "0"))
    .join("");

  const binary8 = [];

  for (let i = 0; i < binary6.length; i += 8) {
    binary8.push(binary6.slice(i, i + 8).padStart(8, "0"));
  }

  return binary8.map((item) => String.fromCodePoint(parseInt(item, 2)));
};

const toBase64 = () => {
  const string = "hello world";

  const binary = [...string]
    .map((item) => item.charCodeAt(0).toString(2).padStart(8, "0"))
    .join("");

  const binary6 = []; // with base64 encoding table

  for (let i = 0; i < binary.length; i += 6) {
    binary6.push(parseInt(binary.slice(i, i + 6).padStart(6, "0"), 2));
  }

  return binary6;
};

const base64ToBlob = () => {
  const raw = atob("base64 string");

  const arrayWithUnit8 = [];

  for (let i = 0; i < raw.length; i += 512) {
    const sliced = raw.slice(i, i + 512);

    arrayWithUnit8.push(
      new Uint8Array([...sliced].map((item) => item.charCodeAt(0)))
    );
  }

  const blob = new Blob(arrayWithUnit8, { type: "image/jpeg" });

  return URL.createObjectURL(blob);
};
/*
'IHDR,,y}usBIT|d	pHYs7p7p' -> arraybuffer -> Uint8 -> Blob
'0e202232512a2c1129860a4b448aa1c2129162a' -> buffer.from(data, 'hex')
*/
