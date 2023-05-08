import React from 'react';

const Gallery = () => {
    return (
        <div className='gallery'>
            <div>
                <h3 className='slide-text-gallery'>
                    Галерея
                </h3>
            </div>

            <div className='gallery-icon'>
                <img className='gall-image' src="https://th.bing.com/th/id/OIP.DFxtOh5htQU-9u1C9oCy7QHaEo?pid=ImgDet&rs=1" alt=""/>
                <img className='gall-image' src="https://th.bing.com/th/id/OIP.DFxtOh5htQU-9u1C9oCy7QHaEo?pid=ImgDet&rs=1" alt=""/>
                <img className='gall-image' src="https://th.bing.com/th/id/OIP.DFxtOh5htQU-9u1C9oCy7QHaEo?pid=ImgDet&rs=1" alt=""/>
            </div>
        </div>
    );
};

export default Gallery;