function downloadFile(image, res = [1800, 1200], name = 'name') {

  const canvas = document.createElement('canvas');

  canvas.width = res[0];
  canvas.height = res[1];

  canvas.getContext('2d').drawImage(image, 0, 0, res[0], res[1])

  canvas.toBlob((blob) => {
      const link = document.createElement('a');

      link.href = URL.createObjectURL(blob);
      link.download = `${name}-${res[0]}x${res[1]}.png`;

      link.onclick = () => {
          link.remove()
          canvas.remove()
      }

      link.click()
  }, 'image/png')
}