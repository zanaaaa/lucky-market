import React from 'react';
import styles from './StyleGallery.js';
import ImageGallery from 'react-image-gallery';
import image from '../../assets/images/lucky4.jpg';

const images = [
    {
      original: 'https://images.pexels.com/photos/7599277/pexels-photo-7599277.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];

const Gallery = () => {
    return (
        <div style={styles.outerWrapper}>
            <ImageGallery items={images} />;
        </div>
    );
}
export default Gallery;