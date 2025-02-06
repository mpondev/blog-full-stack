import { IKImage } from 'imagekitio-react';

const Image = ({ alt, className, path, w, h }) => {
  return (
    <IKImage
      urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
      path={path}
      className={className}
      loading="lazy"
      lqip={{ active: true, quality: 20 }}
      width={w}
      height={h}
      alt={alt}
    />
  );
};

export default Image;
