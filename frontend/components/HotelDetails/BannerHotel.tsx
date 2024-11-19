import { useState, useEffect } from 'react';
import styles from '@/styles/banner.module.css';
import BModalHost from '@/components/HotelDetails/BModalHost';
import Gallery from './Gallery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faArrowLeft, 
  faArrowUpFromBracket, 
  faHeart as faHeartSolid 
} from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { Hotel } from '@/types/hotel';
interface ShareModalProps {
    hotel: Hotel;
  }

  const BannerHotel: React.FC<ShareModalProps> = ({
    hotel
  })=> {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const heartIconColor = localStorage.getItem("heartIconColor");
    setIsSaved(heartIconColor === "red");
  }, []);

  const handleSaveClick = () => {
    const newSavedState = !isSaved;
    setIsSaved(newSavedState);
    if (newSavedState) {
      localStorage.setItem("heartIconColor", "red");
    } else {
      localStorage.removeItem("heartIconColor");
    }
  };

  return (
    <section className={styles.banner}>
      <div className={styles.bannerHead}>
        <a href="#" className={styles.bannerHeadItem1}>
          <FontAwesomeIcon icon={faArrowLeft} />
          See all property
        </a>
        <div className={styles.bannerHeadItem2}>
          <button 
            onClick={() => setIsShareModalOpen(true)}
            className={`${styles.bannerHeadItem} ${styles.bannerShare}`}
          >
            <FontAwesomeIcon icon={faArrowUpFromBracket} />
            <span>Share</span>
          </button>

          <BModalHost
                      isOpen={isShareModalOpen}
                      onClose={() => setIsShareModalOpen(false)} hotel={hotel}          />

          <button 
            onClick={handleSaveClick}
            className={`${styles.bannerHeadItem} ${styles.bannerSave}`}
          >
            <FontAwesomeIcon 
              icon={isSaved ? faHeartSolid : faHeartRegular} 
              style={{ color: isSaved ? 'red' : undefined }}
            />
            <span>Save</span>
          </button>
        </div>
      </div>
    </section>
    
  );
};

export default BannerHotel;