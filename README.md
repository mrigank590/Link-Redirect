## LocalFetch

LocalFetch is a comprehensive web application developed to facilitate users in finding local shops that offer the same products available on Amazon, along with detailed information about the items and their prices. The project seamlessly integrates HTML, CSS, JavaScript, Gsap, Lenis, Python, Flask, Folium, and SQLite3 to provide a user-friendly and efficient experience.

### Key Features:

1. **Amazon Link Integration:**
   - Users can input an Amazon product link, initiating a search for local shops carrying the same item.

2. **Database Integration (local_shops.db):**
   - Utilizes SQLite3 to store and manage data about nearby shops, their available items, and corresponding prices.

3. **Interactive Map Display:**
   - Presents the search results on an interactive map using Folium, offering a visual representation of nearby shops with the desired product.

4. **Item Comparison:**
   - Highlights shops on the map that carry the same item, making it easy for users to compare prices and offerings.

5. **Price Optimization:**
   - Identifies the shop with the lowest price for the searched item, marked with a distinctive green marker for quick identification.

6. **Smooth Animations with Gsap:**
   - Incorporates Gsap for smooth and visually appealing animations, enhancing the overall user experience.

### How It Works:

1. **Input Amazon Link:**
   - Users provide an Amazon link for a specific product they are interested in purchasing.

2. **Database Query:**
   - The application queries the local_shops.db database to identify nearby shops offering the same item.

3. **Map Visualization:**
   - Results are dynamically displayed on an interactive map, making it easy for users to explore and assess their options.

4. **Price Comparison:**
   - Shops with the same item are highlighted, and the shop with the lowest price is distinguished by a green marker.

5. **Detailed Information:**
   - Users can view detailed information about each shop, including the available items, prices, and contact details.

### Technologies Used:

- **Frontend:**
  - HTML, CSS for the user interface.
  - JavaScript for interactive features.
  - Gsap for smooth animations.

- **Backend:**
  - Python with Flask for server-side functionality.
  - SQLite3 for database management.

- **Mapping:**
  - Folium for dynamic map generation.

### Future Improvements:

- Implement user authentication for personalized experiences.
- Expand the database to include a wider range of products and shops.
- Enhance the user interface for a more polished look.

### How to Run Locally:

1. Clone the repository.
2. Install required dependencies using `pip install -r requirements.txt`.
3. Run the Flask application using `python app.py`.
