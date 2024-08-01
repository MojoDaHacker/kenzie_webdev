/// <reference types="next-video/video-types/global" />

declare module "*.m3u8" {
  const content: import("../dist/assets").Asset;

  export default content;
}
