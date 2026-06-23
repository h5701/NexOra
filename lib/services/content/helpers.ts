import { unsplashUrl } from "../images";
import type { ServiceImageRef } from "../types";

export function heroImage(
  photoId: string,
  alt: string,
  credit: string,
  creditUrl: string,
): ServiceImageRef {
  return {
    src: unsplashUrl(photoId, 1400, 800),
    alt,
    width: 1400,
    height: 800,
    credit,
    creditUrl,
  };
}

export function bodyImage(
  photoId: string,
  alt: string,
  credit: string,
  creditUrl: string,
): ServiceImageRef {
  return {
    src: unsplashUrl(photoId, 960, 640),
    alt,
    width: 960,
    height: 640,
    credit,
    creditUrl,
  };
}

export function cardImage(
  photoId: string,
  alt: string,
  credit: string,
  creditUrl: string,
): ServiceImageRef {
  return {
    src: unsplashUrl(photoId, 640, 400),
    alt,
    width: 640,
    height: 400,
    credit,
    creditUrl,
  };
}
