import { ImageLoaderProps } from "next/image";

export default function externalImageLoader({ src, width, quality }: ImageLoaderProps) {
    return src;
}