import React, { useState } from 'react';
import styles from '@/styles/gallery.module.css';

const Gallery: React.FC = () => {
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Array of images and their titles
    const images = [
        { src: "/img1.jpg", title: "Juneau Vacation Rental | 2BR | 1BA | 1,115 Sq Ft | Stairs Required" },
        { src: "/img2.jpg", title: "Cozy Bedroom with Lake View" },
        { src: "/img3.jpg", title: "Beautiful Baranda with Stunning Exterior View" },
        { src: "/img4.jpg", title: "Modern Living Room" },
        { src: "/img5.jpg", title: "Stunning Exterior View" }
    ];

    // Open the popup and set the current image index
    const openPopup = (index: number) => {
        setCurrentImageIndex(index);
        setIsPopupVisible(true);
    };

    // Close the popup
    const closePopup = () => {
        setIsPopupVisible(false);
    };

    // Show the previous image
    const showPreviousImage = () => {
        setCurrentImageIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    // Show the next image
    const showNextImage = () => {
        setCurrentImageIndex((prevIndex) => Math.min(prevIndex + 1, images.length - 1));
    };

    return (
        <div className="galleryHead">
            {/* Gallery Section */}
           
            <div className={styles.gallery}>
                {/* Main Gallery Image */}
                <div className={styles.galleryMain}>
                    <img src={images[0].src} alt={images[0].title} className={`${styles.image} ${styles.TImage}`} />
                    <div className= {`${styles.MobileImage}`}>
                        <img src={images[1].src} alt={images[1].title} className= {`${styles.MobileImage} ${styles.TImage}`}/>
                            <div className={styles.photoCountMobile}>
                                <span onClick={() => openPopup(0)}>
                                    <i className="fa-regular fa-image mr-3"></i>5+
                                </span>
                            </div>
                    </div>
                </div>

                {/* Other Gallery Items */}
                {images.slice(1, 5).map((image, index) => (
                    <div key={index + 1} className={styles.galleryItem}>
                        <img src={image.src} alt={image.title} className={styles.image} />
                        {/* Icon for opening the popup */}
                        {index === 3 && (
                            <div className={styles.photoCount}>
                                <span onClick={() => openPopup(index + 1)}>
                                    <i className="fa-regular fa-image mr-3"></i>5+
                                </span>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Popup for Gallery */}
            {isPopupVisible && (
                <div className={styles.galleryPopup}>
                    <div className={styles.galleryPopupContent}>
                        {/* Close Button */}
                        <span className={styles.closeButton} onClick={closePopup}>
                            &times;
                        </span> <br /> 
                        {/* Image and Title */}
                        <img
                            id="gallery-image"
                            src={images[currentImageIndex].src}
                            alt={images[currentImageIndex].title}
                            className="mx-auto mb-3"
                        />
                        <h3 className={styles.popupTitle}>{images[currentImageIndex].title}</h3>
                        {/* Image Navigation */}
                        <div className={styles.galleryNavigation}>
                            <button
                                className={styles.previousButton}
                                onClick={showPreviousImage}
                                disabled={currentImageIndex === 0}
                            >
                                &#8249;
                            </button>
                            <span className={styles.photoCount}>
                                {currentImageIndex + 1}/{images.length}
                            </span>
                            <button
                                className={styles.nextButton}
                                onClick={showNextImage}
                                disabled={currentImageIndex === images.length - 1}
                            >
                                &#8250;
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>


    );
};

export default Gallery;
