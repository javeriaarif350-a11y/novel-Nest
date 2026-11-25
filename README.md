# Novel Nest — Bookstore Website

A responsive novel and book discovery storefront built with HTML, CSS, vanilla JavaScript and Bootstrap 5.

## Features
- Responsive homepage with story, genre discovery, reading-club, promise, reviews, newsletter and contact sections.
- 28 sample book listings across fiction, romance, mystery, fantasy, personal growth, historical fiction, science fiction, young adult, horror, poetry, biography, children's books and classics.
- Search by title, author, description or category; category filtering and price/title sorting.
- Shopping cart with add, increase/decrease quantity, remove item, item count and subtotal.
- Cart and selected colour theme saved in browser local storage when available.
- Lightbox book-cover preview and back-to-top control.

## Run locally
1. Extract the ZIP file.
2. Open the `Novel-Nest` folder in Visual Studio Code.
3. Open `index.html` in a browser, or use the Live Server extension in VS Code.

## Demo limitations
This is a frontend demonstration. Cart data is stored only in the visitor's browser. Contact and newsletter forms show preview confirmations and do not send or store submissions. Checkout does not process payments or create real orders. A real store requires a secure backend, database, order management and payment-provider integration.

External Bootstrap, Bootstrap Icons, Google Fonts and Unsplash images require an internet connection.


## Latest design updates
- Single daytime colour palette: plum, berry, dusty rose and warm cream.
- Removed the night-theme switch and its saved preference.
- Hero floating book artwork now matches the navigation and site palette.
- Every listed genre is expanded to at least 10 book choices.
- Added fixed scroll-up and scroll-down controls.


## Interaction and mobile fixes
- Checkout now opens one centered modal instead of registering duplicate checkout click handlers.
- “Continue Shopping” closes the modal and leaves the cart drawer available.
- “Continue to Contact” closes both the modal and cart drawer, restores page scrolling, and smoothly moves to the contact section.
- Hero book illustrations can be clicked or keyboard-activated to play a page-flip animation.
- Improved small-screen layout for the hero books, navigation, book tools, cart drawer, popup and content sections.
- Removed duplicate closing HTML tags and made the scroll-down control safe to initialize.


## Order flow update
- The cart now uses a **Confirm Order** button.
- Confirming an order closes the cart and takes the customer straight to the contact form, with the order summary and total prefilled.
- After the customer completes and submits the contact form, a personalised receipt appears with a receipt number, date, customer details, purchased books and total.
- The receipt has **Download PDF** and **Print Receipt** actions. PDF generation uses jsPDF from a CDN; printing uses the browser print dialog.
- Book cards use book-cover artwork matched to titles through the Google Books cover lookup, with the existing cover/placeholder fallback.

This remains a frontend demo: submitted contact/order details are not sent to a server, payment is not collected, and the receipt is a local demonstration record. The PDF library and book-cover lookup require an internet connection.
