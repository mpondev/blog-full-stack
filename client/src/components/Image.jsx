import PropTypes from 'prop-types';

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
      transformation={[
        {
          height: h,
          width: w,
        },
      ]}
    />
  );
};

Image.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
  path: PropTypes.string.isRequired,
  w: PropTypes.string,
  h: PropTypes.string,
};

export default Image;
