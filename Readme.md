hotel-management-system/
├── frontend/                      # Next.js frontend application
│   ├── __tests__/                # Frontend tests
│   │   ├── components/
│   │   │   └── HotelDetails.test.tsx
│   │   └── pages/
│   │       └── hotel-details.test.tsx
│   ├── components/               # Reusable React components
│   │   ├── Layout/
│   │   │   ├── Footer.tsx
│   │   │   ├── Header.tsx
│   │   │   └── Layout.tsx
│   │   └── HotelDetails/
│   │       ├── AboutProperty.tsx
│   │       ├── Banner.tsx
│   │       ├── BModal.tsx
│   │       ├── Footer.tsx
│   │       ├── Gallery.tsx
│   │       ├── Header.tsx
│   │       ├── HotelRules.tsx
│   │       ├── Modal.tsx
│   │       ├── PropertyDetails.tsx
│   │       ├── QuestionSearch.tsx
│   │       ├── ReviewsSection.tsx
│   │       ├── RoomDetailsAndSpaces.tsx
│   │       ├── VacationListing.tsx
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
│   ├── jest.config.js
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