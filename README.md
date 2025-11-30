# Image Effects

A WebAssembly-powered image manipulation tool built with Rust and JavaScript. This application applies grayscale effects to images directly in your browser using the power of WebAssembly for high-performance image processing.

## Features

- **Fast Image Processing**: Leverages Rust compiled to WebAssembly for near-native performance
- **Multiple Format Support**: Supports PNG, JPG, and JPEG image formats
- **Grayscale Filter**: Convert your images to grayscale instantly
- **Client-Side Processing**: All image processing happens in your browser - no server uploads required
- **Beautiful UI**: Modern, responsive interface with animated gradient backgrounds

## Technologies Used

- **Rust**: Core image processing logic
- **WebAssembly (WASM)**: Compile Rust to run in the browser
- **JavaScript**: Frontend interaction and file handling
- **Webpack**: Module bundling and development server
- **Tailwind CSS**: Styling and responsive design
- **wasm-pack**: Building and packaging WebAssembly modules

## Prerequisites

Before running this project, make sure you have installed:

- [Rust](https://www.rust-lang.org/tools/install) (latest stable version)
- [Node.js](https://nodejs.org/) (v14 or higher)
- [wasm-pack](https://rustwasm.github.io/wasm-pack/installer/)

## Installation

1. Clone this repository:
```bash
git clone <repository-url>
cd WebRust-main
```

2. Install Node dependencies:
```bash
npm install
```

## Usage

### Development Mode

Run the development server with hot reload:

```bash
npm run serve
```

The application will be available at `http://localhost:8080`

### Production Build

Create an optimized production build:

```bash
npm run build
```

The compiled files will be in the `dist/` directory.

## How It Works

1. **Upload an Image**: Click the upload button and select a PNG, JPG, or JPEG image
2. **Processing**: The image is converted to base64, sent to the Rust/WASM module
3. **Grayscale Conversion**: Rust processes the image using the `image` crate
4. **Display**: The processed image is displayed on the page

## Project Structure

```
.
├── src/
│   └── lib.rs              # Rust source code for image processing
├── Public/
│   ├── index.html          # HTML template
│   └── main.js             # JavaScript entry point
├── Cargo.toml              # Rust dependencies
├── package.json            # Node dependencies and scripts
├── webpack.config.js       # Webpack configuration
└── README.md               # This file
```

## Dependencies

### Rust Dependencies
- `wasm-bindgen` - Interoperability between Rust and JavaScript
- `base64` - Base64 encoding/decoding
- `image` - Image processing library
- `web-sys` - Web API bindings for console logging

### Node Dependencies
- `webpack` - Module bundler
- `webpack-dev-server` - Development server
- `@wasm-tool/wasm-pack-plugin` - Webpack plugin for wasm-pack
- `html-webpack-plugin` - HTML file generation

## Future Enhancements

Potential features to add:
- Additional filters (sepia, blur, brightness, contrast)
- Batch processing for multiple images
- Image resize and crop functionality
- Download processed images
- Before/after comparison slider
- Custom filter intensity controls

## Performance

WebAssembly provides near-native performance for image processing tasks. The grayscale conversion is significantly faster than pure JavaScript implementations, especially for large images.

## Browser Compatibility

This application requires a modern browser with WebAssembly support:
- Chrome 57+
- Firefox 52+
- Safari 11+
- Edge 16+

## License

ISC

## Author

**Norman** - Built with love ❤️

---

*This project demonstrates the power of combining Rust and WebAssembly for high-performance web applications.*
