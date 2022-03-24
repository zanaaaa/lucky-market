import React from 'react';
import styles from './StyleGallery.js';
import ImageGallery from 'react-image-gallery';

const images = [
    {
      original: 'https://live.staticflickr.com/65535/51190834375_2332467239_k.jpg',
      thumbnail: 'https://live.staticflickr.com/65535/51190834375_2332467239_k.jpg',
    },
    {
      original: 'https://live.staticflickr.com/65535/51190834205_d3756b085a_k.jpg',
      thumbnail: 'https://live.staticflickr.com/65535/51190834205_d3756b085a_k.jpg',
    },
    {
      original: 'https://live.staticflickr.com/65535/51189768656_a7d6439abb_k.jpg',
      thumbnail: 'https://live.staticflickr.com/65535/51189768656_a7d6439abb_k.jpg',
    },
    {
    original: 'https://live.staticflickr.com/65535/51190833885_30cba7c153_k.jpg',
    thumbnail: 'https://live.staticflickr.com/65535/51190833885_30cba7c153_k.jpg',
    },
    {
      original: 'https://live.staticflickr.com/65535/51189060447_c3f22cadc8_k.jpg',
      thumbnail: 'https://live.staticflickr.com/65535/51189060447_c3f22cadc8_k.jpg',
    },
    {
      original: 'https://live.staticflickr.com/65535/51156437009_4bce0ab7aa_k.jpg',
      thumbnail: 'https://live.staticflickr.com/65535/51156437009_4bce0ab7aa_k.jpg',
    },
    {
      original: 'https://live.staticflickr.com/65535/51189281927_6859c69a0a_k.jpg',
      thumbnail: 'https://live.staticflickr.com/65535/51189281927_6859c69a0a_k.jpg',
    },
    {
      original: 'https://live.staticflickr.com/65535/51156760965_b46f8c291f_k.jpg',
      thumbnail: 'https://live.staticflickr.com/65535/51156760965_b46f8c291f_k.jpg',
    },
    {
      original: 'https://live.staticflickr.com/65535/51189060882_2cfcc1d5a2_k.jpg',
      thumbnail: 'https://live.staticflickr.com/65535/51189060882_2cfcc1d5a2_k.jpg',
    },
    {
      original: 'https://live.staticflickr.com/65535/51190833545_1bdd6518a2_k.jpg',
      thumbnail: 'https://live.staticflickr.com/65535/51190833545_1bdd6518a2_k.jpg',
    },
    {
      original: 'https://live.staticflickr.com/65535/51154988902_b3324e8154_k.jpg',
      thumbnail: 'https://live.staticflickr.com/65535/51154988902_b3324e8154_k.jpg',
    },
    {
      original: 'https://live.staticflickr.com/65535/51155652256_fec5e929fa_k.jpg',
      thumbnail: 'https://live.staticflickr.com/65535/51155652256_fec5e929fa_k.jpg',
    },
    {
      original: 'https://live.staticflickr.com/65535/51156438699_bfeef4a053_k.jpg',
      thumbnail: 'https://live.staticflickr.com/65535/51156438699_bfeef4a053_k.jpg',
    },
    {
      original: 'https://live.staticflickr.com/65535/51154987752_8350b302a9_k.jpg', 
      thumbnail: 'https://live.staticflickr.com/65535/51154987752_8350b302a9_k.jpg',
    },
    {
      original: 'https://live.staticflickr.com/65535/51156439214_3dcf5e6687_k.jpg', 
      thumbnail: 'https://live.staticflickr.com/65535/51156439214_3dcf5e6687_k.jpg', 
    },
    {
      original: 'https://live.staticflickr.com/65535/51156439444_80e2f4546c_k.jpg', 
      thumbnail: 'https://live.staticflickr.com/65535/51156439444_80e2f4546c_k.jpg', 
    },
    {
      original: 'https://live.staticflickr.com/65535/51154988417_d814ad0b2e_k.jpg', 
      thumbnail:  'https://live.staticflickr.com/65535/51154988417_d814ad0b2e_k.jpg', 
    },
    {
      original: 'https://live.staticflickr.com/65535/51155888773_6b08100e63_k.jpg', 
      thumbnail: 'https://live.staticflickr.com/65535/51155888773_6b08100e63_k.jpg', 
    },
    {
      original: 'https://live.staticflickr.com/65535/51156759260_e9ade9a19a_k.jpg', 
      thumbnail: 'https://live.staticflickr.com/65535/51156759260_e9ade9a19a_k.jpg', 
    },
    {
      original: 'https://live.staticflickr.com/65535/51156760525_1cb4017843_k.jpg', 
      thumbnail: 'https://live.staticflickr.com/65535/51156760525_1cb4017843_k.jpg', 
    },
    {
      original: 'https://live.staticflickr.com/65535/51156758365_6aed677dfa_k.jpg', 
      thumbnail: 'https://live.staticflickr.com/65535/51156758365_6aed677dfa_k.jpg', 
    },
    {
      original: 'https://live.staticflickr.com/65535/51156440129_b7af6cc8f8_k.jpg', 
      thumbnail: 'https://live.staticflickr.com/65535/51156440129_b7af6cc8f8_k.jpg', 
    },
    {
      original: 'https://live.staticflickr.com/65535/51155656501_5870f191a2_k.jpg', 
      thumbnail: 'https://live.staticflickr.com/65535/51155656501_5870f191a2_k.jpg', 
    },
    {
      original: 'https://live.staticflickr.com/65535/51154985092_21e342f72e_k.jpg', 
      thumbnail: 'https://live.staticflickr.com/65535/51154985092_21e342f72e_k.jpg', 
    },
    {
      original: 'https://live.staticflickr.com/65535/51156439994_597f076e8e_k.jpg', 
      thumbnail: 'https://live.staticflickr.com/65535/51156439994_597f076e8e_k.jpg', 
    },
    {
      original: 'https://live.staticflickr.com/65535/51155888548_fdec3c52d1_k.jpg', 
      thumbnail: 'https://live.staticflickr.com/65535/51155888548_fdec3c52d1_k.jpg', 
    },
    {
      original: 'https://live.staticflickr.com/65535/51155885688_2526a8f7b0_k.jpg', 
      thumbnail: 'https://live.staticflickr.com/65535/51155885688_2526a8f7b0_k.jpg', 
    },
    
    
  ];

const Gallery = () => {
    return (
        <div className="gallery">
            <ImageGallery className="gallery" items={images} />
        </div>
    );
}
export default Gallery;