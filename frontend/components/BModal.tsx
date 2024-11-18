import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faXmark,
    faLink
} from '@fortawesome/free-solid-svg-icons';
import {
    faFacebookMessenger,
    faWhatsapp,
    faFacebookF
} from '@fortawesome/free-brands-svg-icons';
import styles from '@/styles/banner.module.css';
import Image from 'next/image';
import { useState } from 'react';

interface ShareModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ShareModal = ({ isOpen, onClose }: ShareModalProps) => {
    const [copyText, setCopyText] = useState('');

    const copyToClipboard = () => {
        navigator.clipboard.writeText("https://www.vrbo.com/2983918?dateless=true&x_pwa=1&rfrr=HSR&pwa_ts=1730820725756&referrerUrl=aHR0cHM6Ly93d3cudnJiby5jb20vSG90ZWwtU2VhcmNo&useRewards=false&adults=2&regionId=956&destination=Cox%27s+Bazar%2C+Chittagong+Division%2C+Bangladesh&destType=MARKET&latLong=21.360771%2C92.020443&privacyTrackingState=CAN_TRACK&searchId=d68f7778-3b3e-4d74-9726-4f9a2d1c5497&sort=RECOMMENDED&userIntent=&expediaPropertyId=84083026&propertyName=Opelia+Beach+Resort+%3Cbr%3EBehind+KFC%2C+120m+inside%2C+1+minute+walking+distance+from+KFC://example.com");
        setCopyText('Copied!');
        setTimeout(() => {
            setCopyText('');
          }, 2000);
    };

    const handleShareOption = (shareType: string) => {
        // Implement social sharing logic here
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className={`${styles.sharePopup} ${!isOpen && styles.hidden}`}>
            <div className={styles.shareContent}>
                <Image
                    src="/images/img1.jpg"
                    alt="Juneau Vacation Home"
                    width={100}
                    height={100}
                    className={styles.shareImage}
                />
                <div className={styles.shareInfo}>
                    <h3>Juneau Vacation Home: Stunning View + Beach Access</h3>
                    <p>United States of America</p>
                    <p>9.8/10</p>
                </div>
            </div>

            <div className={styles.shareOptions}>
                <button
                    className={styles.shareOption}
                    onClick={() => handleShareOption('messages')}
                >
                    <FontAwesomeIcon icon={faFacebookMessenger} />
                    <span>Messenger</span>
                </button>

                <button
                    className={styles.shareOption}
                    onClick={() => handleShareOption('whatsapp')}
                >
                    <FontAwesomeIcon icon={faWhatsapp} />
                    <span>WhatsApp</span>
                </button>

                <button
                    className={styles.shareOption}
                    onClick={() => handleShareOption('facebook')}
                >
                    <FontAwesomeIcon icon={faFacebookF} />
                    <span>Facebook</span>
                </button>

                <button
                    className={`${styles.shareOption} ${styles.copyLink}`}
                    onClick={copyToClipboard}
                >
                    <FontAwesomeIcon icon={faLink} />
                    <span>Copy link</span>
                </button>
            </div>

            <button
                className={styles.sharePopupClose}
                onClick={onClose}
            >
                <FontAwesomeIcon icon={faXmark} />
            </button>
            <span onClick={copyToClipboard} className="cursor-pointer mx-48 md:mx-60 rounded-lg text-green-600">
                {copyText}
            </span>
        </div>
    );
};

export default ShareModal;