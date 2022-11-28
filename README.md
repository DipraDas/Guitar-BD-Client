# Guitar BD
    This is basically a second-hand guitar-selling website. Where buyer can see their orders. The seller can add their product and also see their uploaded product. Finally, a admin can see all of the buyers and sellers and also delete them.

### Live Link 
[Live Link](https://guitar-bd.web.app/)

### Technologies Used Here

- Frontend - React | React-Router-Dom | React-Icons | React Tailwind | DaisyUI 
- Backend - Node | Express | MongoDB | EmailJS
- Third Party Tools - TanStack | Axiox | SweetAlert2 | EmailJS

### Key Features
- Authentication System | Dashboard Panel | Payment Gateway(Strip) 

## Features

- Home Page- Guitar BD contains an animated banner in the first section. Then a singer's short blog. The third section has a category section for guitar. For accessing this section users must give their credentials. It may be email, password system, or Google login system. In the second last section users can see the advertisement if any seller posts any advertisement. In the footer, there is a subscription form where users can subscribe to Guitar BD and after subscription, they will get a confirmation email.

- Category Page - In the category page there are 3 types of guitars, which are: 1. Electric 2. Bass 3. Acoustic. On this page, the user will see some detailed information like Product Model, Resale Price, Orginal Price, Used Time, Year of Purchase, Seller Name, Seller's Number, and Seller's Location. Finally, the user can book the guitar or report on that product. Using Book now button user will send their information to a database which will be confirmed with a popup.

- Role - There are 3 types of users. Which are: 1. Admin 2. User 3. Seller

- By giving the users a credential Dashboard option added in the navbar which is dynamic. Here, Admin can see 4 options which are 'My Orders', 'All Seller', 'All Buyer', and 'Reported Items'. Secondly, the Buyer will see 'My Orders. Finally, the seller will 2 options which are 'Add a Product' & 'My Product'.

- Admin Pannel - An admin can see their ordered product in the 'My Order' option. In the 'All Seller' option admin will see all of the user. Where it will show user's Name, Email and Roll. Here admin can verify the seller by verifying a seller every verified seller will get a blue tick sign beside their name in the guitar showing page. Admin can also delete a seller using delete button which will confirmed with a confirmation popup. The 'All Buyer' option has the same functionality excluding verification option.

- Seller Pannel - A seller can also place an order and see the ordered items in 'My Orders' option. From the 'Add Product' option seller can add a product for sell. So, have to submit a from which contains Product Name, Product Condition (Excellent, Good, Fair), Mobile Number, Location, Guitar Type (Electric, Bass, Acoustic), Orginal Price, Selling Price, Year of Purchase (2000 - 2022), Image & Description. In 'My Product' option seller will see their uploaded product with Product Name, Price, Condition & Status. Their has 'Advertise' button, by clicking this, that product will show in the home page. Seller can delete their uploaded product by clicking 'Delete'.

- Buyer Pannel - Buyer can only see the orders that are placed by them

- Blogs - In blog page their are 4 basic questions with answers. Here are the questions: 1. What are the different ways to manage a state in React application? 2. How does prototypical inheritance work? 3. What is unit test? Why should we write unit test? 4. React vs Angular vs Vue

- Authentication System - Email, Password Login and Google Login System are implemented using Firebase.