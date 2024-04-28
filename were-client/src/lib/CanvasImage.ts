const RESIZE_VALUE = 16;

class CanvasImage {
  private canvas: HTMLCanvasElement;

  private context: CanvasRenderingContext2D;

  constructor(image: HTMLImageElement) {
    this.canvas = document.createElement('canvas');
    this.context = this.canvas.getContext('2d')!;
    this.canvas.width = RESIZE_VALUE;
    this.canvas.height = RESIZE_VALUE;
    this.context.drawImage(image, 0, 0, RESIZE_VALUE, RESIZE_VALUE);
  }

  getImageData() {
    return this.context.getImageData(0, 0, RESIZE_VALUE, RESIZE_VALUE);
  }
}

export default CanvasImage;
