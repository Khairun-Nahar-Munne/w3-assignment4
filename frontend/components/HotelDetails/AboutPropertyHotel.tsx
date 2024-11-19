import { Hotel } from "@/types/hotel";
import styles from '@/styles/AboutProperty.module.css';
import Image from 'next/image';
import Amenities from "@/components/HotelDetails/Amenites";

interface Props {
  hotel: Hotel;
}

const AboutPropertyHotel: React.FC<Props> = ({ hotel }) => {
  return (
    <section>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutContainerHalf}>
          <h2 className={styles.aboutHead}>About the property</h2>
          <h4>{hotel.title}</h4>

          <div className={styles.aboutPropertyDescription}>
            <p>
              {hotel.description}
            </p>
          </div>

          <div className={styles.aboutPropertyDetails}>
            <div className={styles.aboutTitle}>-- THE PROPERTY --</div>
            <p>
            {hotel.bedroomCount} Bedrooms | {hotel.bathroomCount} Bathrooms | {hotel.guestCount} Guests
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

        <Amenities amenities={hotel.amenities}  />
      </div>
    </section>
  );
};

export default AboutPropertyHotel;
