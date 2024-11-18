import { useState, useEffect } from 'react';
import styles from '@/styles/header.module.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedRegion: string;
  onRegionChange: (region: string) => void;
  regionNames: { [key: string]: string };
  regionCurrencyMap: { [key: string]: string };
}

const Modal = ({
  isOpen,
  onClose,
  selectedRegion: initialSelectedRegion,
  onRegionChange,
  regionNames,
  regionCurrencyMap
}: ModalProps) => {
  // Keep track of the selected region locally
  const [localSelectedRegion, setLocalSelectedRegion] = useState(initialSelectedRegion);
  const [currency, setCurrency] = useState(regionCurrencyMap[initialSelectedRegion]);

  // Update local state when props change
  useEffect(() => {
    setLocalSelectedRegion(initialSelectedRegion);
    setCurrency(regionCurrencyMap[initialSelectedRegion]);
  }, [initialSelectedRegion, regionCurrencyMap]);

  if (!isOpen) return null;

  const handleRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newRegion = e.target.value;
    setLocalSelectedRegion(newRegion); // Update local selected region
    setCurrency(regionCurrencyMap[newRegion]);
  };

  const handleSave = () => {
    onRegionChange(localSelectedRegion); // Pass the local selected region back to parent
    onClose();
  };

  return (
    <div className={styles['modal-overlay']} onClick={(e) => {
      if (e.target === e.currentTarget) onClose();
    }}>
      <div className={styles.modal}>
        <div className={styles['modal-header']}>
          <h3>Display settings</h3>
          <button className={styles['close-btn']} onClick={onClose}>&times;</button>
        </div>
        
        <div className={styles['warning-message']}>
          <span className={styles['warning-icon']}>⚠️</span>
          <span>Changing your region could change your rewards program</span>
        </div>

        <p className={styles['modal-description']}>
          To stay with your current rewards program keep your region the
          same. One Key is currently only available in select regions.
        </p>

        <div className={styles['nav-form-group']}>
          <label htmlFor="region">Region</label>
          <select 
            id="region"
            value={localSelectedRegion}  // Use local state here
            onChange={handleRegionChange}
          >
            {Object.entries(regionNames).map(([code, name]) => (
              <option key={code} value={code}>{name}</option>
            ))}
          </select>
        </div>

        <div className={styles['nav-form-group']}>
          <label htmlFor="currency">Currency</label>
          <select 
            id="currency"
            value={currency}
            disabled
          >
            <option value="EUR">EUR</option>
            <option value="USD">USD</option>
            <option value="GBP">GBP</option>
          </select>
        </div>

        <button 
          className={styles['nav-save-btn']}
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Modal;