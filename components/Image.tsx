'use client'

import React, { useState, type JSX } from 'react';
import clsx from "clsx";
import NextImage, { ImageLoader } from "next/image"
import { StaticImport, PlaceholderValue, OnLoadingComplete } from 'next/dist/shared/lib/get-img-props';
import { animated, useSpring } from '@react-spring/web';

const Image = ({ src = "https://picsum.photos/1080", className, objectFit, ...rest }: ImageProps) => {
  const [isLoading, setLoading] = useState(true)

  const styles = useSpring({
    filter: isLoading ? 'blur(20px)' : 'blur(0px)',
    config: { duration: 500 }
  });

  const AnimatedImage = animated(NextImage)

  if (!(rest.width && rest.height)) rest.fill = true
  return <AnimatedImage
    onLoad={() => setLoading(false)}
    style={styles}
    className={clsx(objectFit && `object-${objectFit}`, className)}
    {...{ ...rest, src: src ?? "https://picsum.photos/1080" }}
  />
}

export default Image

export type ImageProps = Omit<
  JSX.IntrinsicElements["img"],
  "src" | "srcSet" | "ref" | "alt" | "width" | "height" | "loading"
> & {
  src?: string | null | StaticImport;
  alt: string;
  width?: number | `${number}`;
  height?: number | `${number}`;
  fill?: boolean;
  loader?: ImageLoader;
  quality?: number | `${number}`;
  priority?: boolean;
  // loading?: LoadingValue;
  placeholder?: PlaceholderValue;
  blurDataURL?: string;
  unoptimized?: boolean;
  overrideSrc?: string;
  /**
   * @deprecated Use `onLoad` instead.
   * @see https://nextjs.org/docs/app/api-reference/components/image#onload
   */
  onLoadingComplete?: OnLoadingComplete;
  /**
   * @deprecated Use `fill` prop instead of `layout="fill"` or change import to `next/legacy/image`.
   * @see https://nextjs.org/docs/api-reference/next/legacy/image
   */
  layout?: string;
  /**
   * @deprecated Use `style` prop instead.
   */
  objectFit?: string;
  /**
   * @deprecated Use `style` prop instead.
   */
  objectPosition?: string;
  /**
   * @deprecated This prop does not do anything.
   */
  lazyBoundary?: string;
  /**
   * @deprecated This prop does not do anything.
   */
  lazyRoot?: string;
};