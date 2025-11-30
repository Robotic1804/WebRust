async function init() {
  try {
    const rustApp = await import('../pkg');

    const input = document.getElementById('upload');
    const fileReader = new FileReader();

    fileReader.onloadend = () => {
      const base64 = fileReader.result.replace(
        /^data:image\/(png|jpeg|jpg);base64,/,
        ''
      );
      const img_data_url = rustApp.grayscale(base64);
      document.getElementById('new-img').setAttribute('src', img_data_url);
    };

    input.addEventListener('change', () => {
      if (input.files && input.files[0]) {
        fileReader.readAsDataURL(input.files[0]);
      }
    });
  } catch (err) {
    console.error('Failed to load WASM module:', err);
  }
}

init();