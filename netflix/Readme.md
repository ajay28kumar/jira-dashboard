# Netflix Frontend Design System

## Components

### 1. Header
- Logo
- Navigation Links (Home, TV Shows, Movies, Latest, My List)
- Search Bar
- User Profile

### 2. Hero Banner
- Featured Movie/Show
- Play Button
- More Info Button

### 3. Movie/Show Card
- Thumbnail Image
- Title
- Rating
- Play Button
- Add to My List Button

### 4. Carousel
- Category Title
- Horizontal Scrollable List of Movie/Show Cards

### 5. Footer
- Links (Contact Us, Terms of Service, Privacy Policy)
- Social Media Icons

## Styles

### Colors
- Primary: #E50914 (Netflix Red)
- Secondary: #221F1F (Dark Background)
- Text: #FFFFFF (White)

### Typography
- Font Family: 'Helvetica Neue', Helvetica, Arial, sans-serif
- Font Sizes: 
  - Large: 24px
  - Medium: 18px
  - Small: 14px

### Spacing
- Padding: 16px
- Margin: 16px

## Data Model

### Movie/Show
- id: string
- title: string
- description: string
- genre: string
- releaseDate: string
- rating: number
- thumbnailUrl: string
- videoUrl: string

### User
- id: string
- name: string
- email: string
- password: string
- profilePictureUrl: string
- myList: array of movie/show ids

### Category
- id: string
- title: string
- movieShowIds: array of movie/show ids

## Example JSON Data

### Movies/Shows