⌚ Project Summary: SmartWrist eCommerce

SmartWrist is a high-performance, modern eCommerce web application dedicated to premium smartwatches. Built with the latest Next.js 16 (App Router) architecture, the platform focuses on speed, SEO, and a seamless user experience.

🚀 Core Features & Functionalities
Dynamic Landing Page: Features 7 distinct sections including an interactive Banner, Brand Showcase, Exclusive Collections (data-driven), Product Features, Testimonials, FAQ, and a Newsletter subscription.

Server-Side Data Fetching: 
Utilizes Next.js Server Components to fetch product data directly from MongoDB Atlas, ensuring faster initial page loads and better search engine visibility.

Dynamic Routing: 
Implements individual product pages (/product/[id]) using dynamic segments to display detailed specifications, pricing, and high-quality imagery for each watch.

Authentication Guard: 
Includes a secure login mechanism. Users must be authenticated to view specific product details or access the checkout flow, enhancing lead generation and security.

Responsive UI/UX: 
Styled with Tailwind CSS and DaisyUI components, providing a fully fluid layout that works perfectly on mobiles, tablets, and desktops.

Robust Backend Integration: 
Custom MongoDB connection utility handles database pooling and error management, ensuring stable connections even under high traffic.

🛠️ Technical StackFrontend: 
Next.js (App Router), React.js, Tailwind CSS, DaisyUI.Backend: Next.js Server Actions & API Routes.
Database: MongoDB Atlas (NoSQL).
Deployment: Vercel (with CI/CD integration).
Icons/Assets: React Icons, Lucide React.
🔑 Admin & User CredentialsFor testing and evaluation purposes, the following credentials can be used to access the restricted features of the application:
User RoleEmail / UsernamePasswordAccess:
Admin Email Id: admin@wrist.com
Admin Email Password: password123

Full access to details & dashboardStandard User: user@example.com user123 Can view products & details Note: The login system currently utilizes a combination of useSearchParams for smart redirection and localStorage for session persistence.

📈 Future Roadmaps
Cart Management: 
Integration of a Redux or Context API-based shopping cart.Payment Gateway: 
Implementation of SSLCommerz or Stripe for real-time transactions.
Admin Dashboard: 
A dedicated interface for the owner to add, update, or delete products without touching the database.