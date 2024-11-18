
import '@fortawesome/fontawesome-free/css/all.min.css';

import { useState, useEffect } from 'react';
import styles from '@/styles/header.module.css';
import Modal from './Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';

type RegionData = {
  [key: string]: string;
};

const regionNames: RegionData = {
  PT: "Portugal",
  US: "United States",
  UK: "United Kingdom",
  ES: "Spain",
  FR: "France",
  DE: "Germany",
};

const regionCurrencyMap: RegionData = {
  PT: "EUR",
  US: "USD",
  UK: "GBP",
  ES: "EUR",
  FR: "EUR",
  DE: "EUR",
};

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState('US');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleClickOutside = (e: MouseEvent) => {
    const navItems = document.querySelector(`.${styles['nav-items']}`);
    const userIcon = document.getElementById('userIcon');
    
    if (navItems && userIcon && 
        !navItems.contains(e.target as Node) && 
        !userIcon.contains(e.target as Node)) {
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <header>
      <nav className={styles.nav}>
        <div className={`${styles['nav-items']} ${isMobileMenuOpen ? styles.active : ''}`}>
          <a 
            href="#" 
            className={`${styles['nav-item']} ${styles['globe-icon']}`}
            onClick={(e) => {
              e.preventDefault();
              setIsModalOpen(true);
            }}
          >
            {regionNames[selectedRegion]}
          </a>
          <a href="#" className={styles['nav-item']}>Trip Boards</a>
          <a href="#" className={styles['nav-item']}>List your property</a>
          <a href="#" className={styles['nav-item']}>Help</a>
          <a href="#" className={styles['nav-item']}>My trips</a>
          <a href="#" className={styles['nav-item']}>Sign in</a>
        </div>
        <div 
          className={styles['user-icon']} 
          id="userIcon"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <FontAwesomeIcon icon={faCircleUser} />
        </div>
      </nav>

      <Modal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedRegion={selectedRegion}
        onRegionChange={setSelectedRegion}
        regionNames={regionNames}
        regionCurrencyMap={regionCurrencyMap}
      />
    </header>
  );
};

export default Header;