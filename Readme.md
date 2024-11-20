# Hotel Management System API

A modern hotel management system built with Next.js, TypeScript, and Node.js, featuring server-side rendering, dynamic routing, and comprehensive testing.


## Features

- POST, GET and PUT operations for hotel management
- Image upload functionality
- JSON file-based data storage
- TypeScript implementation
- Fetches hotel details from the API using the endpoint `/hotel/{hotel-id}`.
- Displays hotel information dynamically based on URL parameters: `/hotel-details/{slug}/{hotel-id}`.
- Uses **Next.js Server-Side Rendering (SSR)** for fresh data on each request.
- SEO-optimized pages
- Dynamic meta tags generation
- Detailed hotel listings
- Custom 404 page for non-existent hotels
- URL-friendly slugs for hotel names
- Unit testing with Jest
- ESLint configuration
- Input validation
- Error handling


## Technology Stack

- Next.js
- React
- TypeScript
- Node.js
- Express.js
- Jest & React Testing Library
- ESLint
- CSS Modules/Styled Components

## Project Structure

```plaintext

hotel-management-system/
├── frontend/                      # Next.js frontend application
│   ├── __tests__/                # Frontend tests
│   │   ├── components/
│   │   │   └── HotelDetails.test.tsx
│   │   └── pages/
│   │       └── hotel-details.test.tsx
│   ├── components/               # Reusable React components
│   │   ├── AboutProperty.tsx
│   │   ├── Banner.tsx
│   │   ├── BModal.tsx
│   │   ├── Footer.tsx
│   │   ├── Gallery.tsx
│   │   ├── Header.tsx
│   │   ├── HotelRules.tsx
│   │   ├── Modal.tsx
│   │   ├── PropertyDetails.tsx
│   │   ├── QuestionSearch.tsx
│   │   ├── ReviewsSection.tsx
│   │   ├── RoomDetailsAndSpaces.tsx
│   │   ├── VacationListing.tsx
│   │   ├── __test__/
│   │   │   ├── AboutProperty.tsx
│   │   └── HotelDetails/
│   │       ├── AboutPropertyHotel.tsx
│   │       ├── Amenities.tsx
│   │       ├── BannerHotel.tsx
│   │       ├── BModalHost.tsx
│   │       ├── BookingCard.tsx
│   │       ├── FooterHost.tsx
│   │       ├── Gallery.tsx
│   │       ├── HotelInfo.tsx
│   │       └── RoomList.tsx
│   ├── pages/                    # Next.js pages
│   │   ├── _app.tsx
│   │   ├── _document.tsx
│   │   ├── index.tsx
│   │   └── hotel-details/[slug]/[id].tsx
│   ├── styles/                   # CSS/SCSS styles
│   │   ├── components/
│   │   │   └── *.module.scss
│   │   └── globals.scss
│   ├── types/                    # TypeScript types/interfaces
│   │   └── hotel.ts
│   ├── .env.local
│   ├── .eslintrc.json
│   ├── jest.config.ts
│   ├── jest.setup.ts
│   ├── next.config.js
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
│
├── backend/                      # Express.js backend application
│   ├── src/
│   │   ├── controllers/
│   │   │   └── hotelController.ts
│   │   ├── database/
│   │   │   └── hotels/
│   │   ├── models/
│   │   │   └── types.ts
│   │   ├── routes/
│   │   │   └── hotelRoutes.ts
│   │   ├── services/
│   │   │   └── hotelService.ts
│   │   ├── tests/
│   │   │   ├── hotelController.test.ts
│   │   │   └── hotelService.test.ts
│   │   │   └── jest.config
│   │   └── app.ts
│   ├── uploads/
│   ├── .env
│   ├── .eslintrc.json
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
│
├── .gitignore
└── README.md


```

## Getting Started

Follow these instructions to set up the project locally for development and testing purposes.

### Project Setup

#### Pre-requisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Git
- VS code editor


#### Clone the Repository

```bash
- https://github.com/Khairun-Nahar-Munne/w3-assignment4.git
- cd w3-assignment4
```

#### Initialize backend
```bash
- mkdir backend
- cd backend
- npm init -y
- npm install express typescript @types/node @types/express ts-node nodemon cors dotenv multer slugify
- npm install --save-dev jest ts-jest @types/jest supertest @types/supertest eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
- npm install cors
- npm install --save-dev @types/cors
```
#### Initialize frontend
```bash
- cd ..
- cd backend
- npx create-next-app@latest frontend --typescript --tailwind --eslint
- cd frontend
- npm install axios @tanstack/react-query sass jest @testing-library/react @testing-library/jest-dom @types/jest eslint-plugin-jest jest-environment-jsdom
```
### Run Application

#### Development Mode (Both Backend and Frontend):
```bash
- npm run dev
```

You will see the webpage at http://localhost:3000/

https://github.com/Khairun-Nahar-Munne/w3-assignment4/blob/1508c3852c47448b92481afa9ef8c1da3c389af3/frontend/public/hotel.png

You can see hotel details at http://localhost:3000/hotel-details/ocean-breeze-resort/1731479202985

You have to give your hotel id and slug name of hotel

frontend/public/hotelDetails.png

#### Production Mode:
```bash
- npm run build
- npm start
```

#### Run Tests:
```bash
- npm test
```

#### Run Eslint:
```bash
- npx eslint .
```

### Test Opeartions Using CURL (Backend)

#### POST Hotel Data:

```bash
curl -X POST http://localhost:3000/api/hotels \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Luxury Suites",
    "description": "A luxury hotel with world-class amenities",
    "guestCount": 2,
    "bedroomCount": 1,
    "bathroomCount": 1,
    "amenities": ["pool", "gym", "restaurant", "spa"],
    "host": {
      "name": "Jane Smith",
      "email": "jane.smith@example.com",
      "phone": "987-654-3210"
    },
    "address": {
      "street": "456 Elite Rd",
      "city": "Prestige City",
      "state": "Prime State",
      "country": "Exotic Country",
      "zipCode": "67890"
    },
    "location": {
      "latitude": 23.45,
      "longitude": 67.89
    }
  }'
  ```

#### GET Hotel Data by Unique-ID

```bash
curl http://localhost:3000/api/hotels/1731479202985
```
#### GET Hotel Data by by slug

```bash
curl http://localhost:3000/api/hotels/slug/ocean-breeze-resort
```

#### PUT Hotel Data by Unique-ID

```bash
curl -X PUT http://localhost:3000/api/hotels/1731416516744 \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Grand Plaza Hotel & Suites",
    "description": "A luxurious 5-star hotel in the heart of Manhattan",
    "guestCount": 6,
    "bedroomCount": 3,
    "bathroomCount": 3,
    "amenities": [
      "Free High-Speed WiFi",
      "Infinity Pool",
      "Luxury Spa",
      "Modern Gym",
      "Michelin Star Restaurant",
      "24/7 Concierge",
      "Valet Parking",
      "Executive Business Center"
    ],
    "host": {
      "name": "John Smith",
      "email": "john.smith@grandplaza.com",
      "phone": "+1-555-123-4567"
    },
    "address": {
      "street": "123 Luxury Avenue",
      "city": "New York",
      "state": "NY",
      "country": "USA",
      "zipCode": "10001"
    },
    "location": {
      "latitude": 40.7128,
      "longitude": -74.0060
    }
  }'

```

#### Post Hotel Images

```bash
  curl -X POST http://localhost:3000/api/hotels/1731479202985/images \
  -F "images=@/home/w3e60/Documents/w3_assignment1/images/img1.jpg" \
  -F "images=@/home/w3e60/Documents/w3_assignment1/images/img2.jpg" \
  -F "images=@/home/w3e60/Documents/w3_assignment1/images/img3.jpg" \
  -F "images=@/home/w3e60/Documents/w3_assignment1/images/img4.jpg"

```
#### Post Room Details in Hotel Data
```bash
curl -X POST http://localhost:3000/api/hotels/ocean-breeze-resort/rooms \
  -H "Content-Type: application/json" \
  -d '{
    "roomTitle": "Deluxe Suite",
    "bedroomCount": 1
  }'
  ```

#### Post Room Image
```bash
  curl -X POST http://localhost:3000/api/hotels/ocean-breeze-resort/rooms/deluxe-suite/image  
   -F "image=@/home/w3e60/Documents/w3_assignment1/images/img1.jpg"
```

## Contributing
Contributions are welcome! Here's how you can contribute:

### Fork the Repository
```bash
- git clone https://github.com/Khairun-Nahar-Munne/hotel-management-system.git
- cd hotel-management-system
```
### Create a New Branch

```bash
- git checkout -b feature/add-new-feature
```
### Make Modifications and Commit Changes
```bash
- git commit -m 'Add new feature: [brief description of the feature]'

```
### Push Changes to the Branch

```bash
- git push origin feature/add-new-feature

```
### Create a New Pull Request
- Navigate to the repository on GitHub.
- Click on the "Compare & pull request" button.
- Fill in the pull request details and submit it for review.
