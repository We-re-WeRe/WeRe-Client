import CanvasImage from './CanvasImage';

interface IColor {
  [key: string]: number;
  r: number;
  g: number;
  b: number;
}

class ColorThief {
  static getPixels(data: Uint8ClampedArray) {
    const rgbVals: IColor[] = [];

    for (let i = 0; i < data.length; i += 4) {
      rgbVals.push({
        r: data[i],
        g: data[i + 1],
        b: data[i + 2],
      });
    }
    return rgbVals;
  }

  static getPalette(imageSource: CanvasImage, colorCount: number) {
    const imageData = imageSource.getImageData().data;
    const rgbVals = this.getPixels(imageData);
    const maxDepth = this.convertCount(colorCount);

    return this.quantize(rgbVals, 0, maxDepth);
  }

  static colorChannelWithGreatestRange(rgbVals: IColor[]) {
    let rMin: number = 255;
    let rMax: number = 0;

    let gMin: number = 255;
    let gMax: number = 0;

    let bMin: number = 255;
    let bMax: number = 0;

    for (let i = 0; i < rgbVals.length; i += 1) {
      rMin = Math.min(rgbVals[i].r, rMin);
      rMax = Math.max(rgbVals[i].r, rMax);

      gMin = Math.min(rgbVals[i].g, gMin);
      gMax = Math.max(rgbVals[i].g, gMax);

      bMin = Math.min(rgbVals[i].b, bMin);
      bMax = Math.max(rgbVals[i].b, bMax);
    }

    const rangeRed = rMax - rMin;
    const rangeGreen = gMax - gMin;
    const rangeBlue = bMax - bMin;

    const rangeMax = Math.max(rangeRed, rangeBlue, rangeGreen);

    if (rangeMax === rangeRed) {
      return 'r';
    }
    if (rangeMax === rangeGreen) {
      return 'g';
    }
    return 'b';
  }

  static quantize(rgbVals: IColor[], initialDepth = 0, maxDepth = 2): IColor[] {
    if (initialDepth === maxDepth) {
      const color: IColor = rgbVals.reduce(
        (prev, current) => {
          prev.r += current.r;
          prev.g += current.g;
          prev.b += current.b;
          return prev;
        },
        {
          r: 0,
          g: 0,
          b: 0,
        },
      );
      return [
        {
          g: Math.round(color.g / rgbVals.length),
          b: Math.round(color.b / rgbVals.length),
          r: Math.round(color.r / rgbVals.length),
        },
      ];
    }

    const bigColorChannel = this.colorChannelWithGreatestRange(rgbVals);
    rgbVals.sort((prev, cur) => prev[bigColorChannel] - cur[bigColorChannel]);
    const mid = rgbVals.length / 2;
    //  console.log(rgbVals.slice(0, mid));
    return [
      ...this.quantize(rgbVals.slice(0, mid), initialDepth + 1, maxDepth),
      ...this.quantize(rgbVals.slice(mid), initialDepth + 1, maxDepth),
    ];
  }

  static convertCount(colorCount: number) {
    let count = 0;
    let size = colorCount;

    while (size > 1) {
      size /= 2;
      count += 1;
    }

    return count;
  }
}

export default ColorThief;
