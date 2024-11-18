import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUtensils, 
  faBucket, 
  faBoxesPacking, 
  faSoap, 
  faHouse, 
  faWater 
} from '@fortawesome/free-solid-svg-icons';
import styles from '@/styles/AboutProperty.module.css';
import Image from 'next/image';

const AboutProperty = () => {
  return (
    <section>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutContainerHalf}>
          <h2 className={styles.aboutHead}>About the property</h2>
          <h4>Juneau Vacation Home: Stunning View + Beach Access</h4>

          <div className={styles.aboutPropertyDescription}>
            <p>
              Escape to the mountains and experience the great outdoors at
              this lovely Juneau vacation rental! Perched on the shore of Lena
              Cove, this 2-bedroom, 1-bath home is the perfect getaway for
              those looking to enjoy a relaxing retreat surrounded by nature.
              Spend your day fishing for King Salmon, exploring Lena Beach and
              the rocky coastline, or hiking the nearby trails. After your
              outdoor adventure, kick back on the private deck and admire the
              breathtaking panoramic views!
            </p>
          </div>

          <div className={styles.aboutPropertyDetails}>
            <div className={styles.aboutPropertyTitle}>-- THE PROPERTY --</div>
            <p>
              CBJ000104 | 1,115 Sq Ft | 2 Private Decks | Lena Cove & Mountain
              Views | 2 Bicycles Provided
            </p>
            <p>
              Bedroom 1: Queen Bed, Full Floor Mattress | Bedroom 2: Extra
              Long Twin Bed
            </p>
            <div className={styles.aboutHighlights}>
              <p>
                HOME-HIGHLIGHTS: Flat-screen TV, dining table, washer/dryer
              </p>
              <p>
                KITCHEN: Fridge, stove, coffee maker, microwave, cooking
                basics, toaster, dishware/flatware, trash bags/paper towels,
                Crockpot
              </p>
              <p>
                GENERAL: Free WiFi, central heating, linens/towels, keyless
                entry, hair dryer, ceiling fans
              </p>
            </div>
          </div>

          <div className={styles.aboutLocationDetails}>
            <div className={styles.aboutTitle}>-- THE LOCATION --</div>
            <p>
              GREAT OUTDOORS: Lena Cove (on-site), Lena Beach Recreation Area
              (0.5 miles), Glacier Gardens Rainforest Adventure (10 miles),
              Mendenhall Glacier (10 miles), Twin Lakes (13 miles)
            </p>
          </div>

          <div className={styles.aboutRest}>
            <div className={styles.aboutTitle}>-- REST EASY WITH US --</div>
            <p>
              Evolve makes it easy to find and book properties you'll never
              want to leave. You can relax knowing that our properties will
              always be ready for you and that we'll answer the phone 24/7.
              Even better, if anything is off about your stay, we'll make it
              right. You can count on our homes and our people to make you
              feel welcome—because we know what vacation means to you.
            </p>
          </div>

          <div className={styles.policies}>
            <div className={styles.aboutTitle}>-- POLICIES --</div>
            <ul>
              <li>- No smoking</li>
              <li>- No pets allowed</li>
              <li>- No events, parties, or large gatherings</li>
              <li>- Must be at least 25 years old to book</li>
              <li>- Additional fees and taxes may apply</li>
              <li>- NOTE: The property requires stairs to access</li>
              <li>- NOTE: The property does not have air conditioning</li>
              <li>
                - NOTE: The property sleeps 3 guests in 2 beds, with room for
                4 total by using the full floor mattress
              </li>
            </ul>
          </div>

          <div className={styles.aboutPropertyManager}>
            <h4>Property manager</h4>
            <Image
              src="/img7.png"
              alt="Property Manager"
              width={70}
              height={70}
            />
            <p>Evolve</p>
          </div>

          <div className={styles.languages}>
            <h4>Languages</h4>
            <p>English, French, German, Spanish</p>
          </div>
        </div>

        <a href="#" className={styles.aboutOverflowLink}>See more</a>

        <div className={styles.aboutAmenities}>
          <div className={styles.aboutAmenitiesHead}>
            <h2>Amenities</h2>
          </div>
          <div className={styles.aboutAmenitiesIcons}>
            <div className={styles.aboutAmenitiesGrid}>
              <p>
                <FontAwesomeIcon icon={faUtensils} />
                <span>Kitchen</span>
              </p>
              <p>
                <FontAwesomeIcon icon={faBucket} />
                <span>Dryer</span>
              </p>
              <p>
                <FontAwesomeIcon icon={faBoxesPacking} />
                <span>Packaging available</span>
              </p>
              <a href="#">See all 34 amenities</a>
            </div>
            <div className={styles.aboutAmenitiesGrid}>
              <p>
                <FontAwesomeIcon icon={faSoap} />
                <span>Washer</span>
              </p>
              <p>
                <FontAwesomeIcon icon={faHouse} />
                <span>Outdoor Space</span>
              </p>
              <p>
                <FontAwesomeIcon icon={faWater} />
                <span>Ocean</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProperty;