
const books = [
  { id: 1, title: "The Midnight Library", author: "Matt Haig", category: "fiction", price: 1850, description: "A thoughtful story about choices and second chances.", image: "https://thebibliofilles.com/wp-content/uploads/2022/03/The-Midnight-Library.png", tag: "Reader favourite" },
  { id: 2, title: "Pride & Prejudice", author: "Jane Austen", category: "romance", price: 1250, description: "A timeless tale of love, wit and first impressions.", image: "https://i0.wp.com/janeaustensworld.com/wp-content/uploads/2025/08/pp-cover.jpg?fit=1200%2C1200&ssl=1", tag: "Classic" },
  { id: 3, title: "The Silent Patient", author: "Alex Michaelides", category: "mystery", price: 2100, description: "A gripping psychological mystery full of secrets.", image: "https://i0.wp.com/scribblesandquills.com/wp-content/uploads/2026/03/img_9677.jpeg?fit=1920%2C2560&ssl=1", tag: "Page turner" },
  { id: 4, title: "A Court of Dreams", author: "Sarah J. Maas", category: "fantasy", price: 2450, description: "An enchanting escape into a world of magic.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9R1zaAROGpCeaz5FYSa35eXnIqOtu_ymp_YS8YBdmag&s=10", tag: "Fantasy" },
 { id: 5, title: "The Seven Husbands", author: "Taylor Jenkins Reid", category: "fiction", price: 1950, description: "A fascinating life story wrapped in old Hollywood glamour.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCVfi-CWM711UIccUF9AoQ7Kobr-pCETSdb1DVEXNq71kSm9UA9zAY0BSj&s=10", tag: "Popular" },
{ id: 6, title: "Love in the Pages", author: "Elena Rose", category: "romance", price: 1600, description: "A warm, gentle romance for a cosy afternoon.", image: "https://m.media-amazon.com/images/I/51xea2VZK4L._UF1000,1000_QL80_.jpg", tag: "Romance" },
{ id: 7, title: "The House of Secrets", author: "M. L. Harper", category: "mystery", price: 2250, description: "A hidden room. A missing letter. A truth nobody wants.", image: "https://m.media-amazon.com/images/S/pv-target-images/56ffbf12750938b4049a1845db3c437941219ad53afa41f94a900fd56c2f7ef6.jpg", tag: "Mystery" },
{ id: 8, title: "The Power of Now", author: "Eckhart Tolle", category: "self-help", price: 1750, description: "A guide to presence, awareness and a calmer mind.", image: "https://studentstore.pk/cdn/shop/files/B_390_4.jpg?v=1730895979&width=3024", tag: "Personal growth" },
{ id: 9, title: "The Hobbit", author: "J. R. R. Tolkien", category: "fantasy", price: 1900, description: "An unforgettable adventure beyond the familiar.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2OsTdgWT1uNvugPv1rBvOXPheV4NKp8fJNlmdcJTvBA&s=10", tag: "Adventure" },
{ id: 10, title: "It Ends With Us", author: "Colleen Hoover", category: "romance", price: 1850, description: "An emotional story about love, courage and choices.", image: "https://static-01.daraz.pk/p/8f0c7544c7f958b308f59ae5c4205ed7.jpg", tag: "Bestseller" },
{ id: 11, title: "Gone Girl", author: "Gillian Flynn", category: "mystery", price: 2050, description: "A marriage, a disappearance and a chilling puzzle.", image: "https://m.media-amazon.com/images/I/918X1ukd8iL._AC_UF350,350_QL80_.jpg", tag: "Thriller" },
{ id: 12, title: "Atomic Habits", author: "James Clear", category: "self-help", price: 2300, description: "Small changes that can lead to remarkable results.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsH1z3KkBR9oES4HFGPzqe_ErFAJOxdG4BROkGHrcXng&s=10", tag: "Top pick" },

{ id: 13, title: "The Book Thief", author: "Markus Zusak", category: "historical", price: 1950, description: "A moving story of courage, friendship and the power of words.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3O1cqW_E1BM6qCPH7nfX6vBK5ze48JfxX2iCoARafYA&s=10", tag: "Historical" },
{ id: 14, title: "Dune", author: "Frank Herbert", category: "science-fiction", price: 2600, description: "An epic journey across a mysterious desert planet.", image: "https://m.media-amazon.com/images/M/MV5BNTc0YmQxMjEtODI5MC00NjFiLTlkMWUtOGQ5NjFmYWUyZGJhXkEyXkFqcGc@._V1_.jpg", tag: "Sci-fi classic" },
{ id: 15, title: "Little Women", author: "Louisa May Alcott", category: "classic", price: 1450, description: "Four sisters navigate family, dreams and growing up.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZFqe0drLMbPOrXXq5HdnreBoeS7varLj5Ma-GCC3iRg&s=10", tag: "Classic" },
{ id: 16, title: "The Fault in Our Stars", author: "John Green", category: "young-adult", price: 1750, description: "A heartfelt young adult story about connection and hope.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr51uxMr_4fO0AP8Atb0r3HB02eO2MAuW8W7eKMhM6xg&s=10", tag: "Young adult" },
{ id: 17, title: "Dracula", author: "Bram Stoker", category: "horror", price: 1550, description: "A gothic classic filled with mystery and atmosphere.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE27Y8_sUHcpZWkpAKEJxjvb8-iOBKSjKITDU4HSxtqw&s=10", tag: "Gothic" },
{ id: 18, title: "Milk and Honey", author: "Rupi Kaur", category: "poetry", price: 1650, description: "A collection of poetry about life, feelings and healing.", image: "https://m.media-amazon.com/images/I/81nXaJR8W6L._AC_UF1000,1000_QL80_.jpg", tag: "Poetry" },
{ id: 19, title: "The Alchemist", author: "Paulo Coelho", category: "fiction", price: 1500, description: "A young shepherd follows a dream and discovers his path.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-WzJVWrp8KAOe1bQSkbAYZX0Zf4aNlboDYq0bKpVzuA&s=10", tag: "Reader favourite" },
{ id: 20, title: "Sherlock Holmes: The Complete Novels", author: "Arthur Conan Doyle", category: "mystery", price: 2200, description: "Follow the famous detective through clever cases and clues.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCg5tPpgNTJ9XQ_W4ZHVyloXSLQR7kr0LZlKdx_Ls-Fw&s=10", tag: "Detective" },
{ id: 21, title: "The Name of the Wind", author: "Patrick Rothfuss", category: "fantasy", price: 2750, description: "A richly imagined tale of music, magic and adventure.", image: "https://m.media-amazon.com/images/I/71nVnnERNsL._UF1000,1000_QL80_.jpg", tag: "Epic fantasy" },
{ id: 22, title: "Anne of Green Gables", author: "L. M. Montgomery", category: "classic", price: 1350, description: "A spirited girl brings imagination to a small town.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk2Y3RlI-OjrdGgP0ykWAwQcK2XG_WcjVSYv8tVo5mVg&s=10", tag: "Beloved classic" },
{ id: 23, title: "The Diary of a Young Girl", author: "Anne Frank", category: "biography", price: 1800, description: "A historic diary offering a young person's perspective.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn6wfrDZnySeMCQgPf2T9__mXQvbT-N3G62HVs-UdomQ&s=10", tag: "Biography" },
{ id: 24, title: "The Very Hungry Caterpillar", author: "Eric Carle", category: "children", price: 1250, description: "A colourful picture-book favourite for young readers.", image: "https://www.bumblesandboo.com/cdn/shop/files/buggy-book-the-very-hungry-caterpillar.jpg?v=1790624947", tag: "Children" },
{ id: 25, title: "The Martian", author: "Andy Weir", category: "science-fiction", price: 2150, description: "A clever survival adventure set far from Earth.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9RszaEK0XAEu7mO5tq1nhkhCauOISlP4SqLQftR6vqQ&s=10", tag: "Sci-fi" },
{ id: 26, title: "Rebecca", author: "Daphne du Maurier", category: "mystery", price: 1700, description: "A suspenseful classic filled with secrets and uncertainty.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvj18xSP6ULITpdSrXBXa4XfWrFroT88um2LigdNebTA&s=10", tag: "Suspense" },
{ id: 27, title: "The Song of Achilles", author: "Madeline Miller", category: "historical", price: 2050, description: "A lyrical retelling inspired by Greek mythology.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrjMIXaSCMSxM4X0GAjhT3oCR2j2yCPrrU2vi0Wd2e-w&s=10", tag: "Myth retelling" },
{ id: 28, title: "The Little Prince", author: "Antoine de Saint-Exupéry", category: "children", price: 1150, description: "A thoughtful fable about friendship and seeing with the heart.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk8q9AABioi0JBkLrn7K_z0aHeux-mRnARzITxp5DzMw&s=10", tag: "Timeless" }
]

const genreBookTitles = {
  fiction: ["To Kill a Mockingbird","The Great Gatsby","A Man Called Ove","The Kite Runner","The Book of Lost Names","The Secret Garden","The Giver","The Curious Incident of the Dog in the Night-Time","The Ocean at the End of the Lane","Eleanor Oliphant Is Completely Fine"],
  romance: ["Jane Eyre","Me Before You","The Notebook","The Rosie Project","The Time Traveler's Wife","The Hating Game","The Love Hypothesis","Beach Read","The Flatshare","The Kiss Quotient"],
  mystery: ["And Then There Were None","The Girl with the Dragon Tattoo","The Thursday Murder Club","Big Little Lies","The Woman in the Window","The Cuckoo's Calling","In the Woods","The Murder of Roger Ackroyd","The Guest List","The Reversal"],
  fantasy: ["The Fellowship of the Ring","A Game of Thrones","The Lion, the Witch and the Wardrobe","The Golden Compass","The Way of Kings","The Lies of Locke Lamora","The Priory of the Orange Tree","The Poppy War","The Magicians","The Eye of the World"],
  "self-help": ["Deep Work","The 7 Habits of Highly Effective People","Mindset","Think Again","The Four Agreements","Essentialism","Grit","The Psychology of Money","The Happiness Project","How to Win Friends and Influence People"],
  historical: ["All the Light We Cannot See","The Nightingale","The Pillars of the Earth","The Book of Longings","The Tattooist of Auschwitz","The Other Boleyn Girl","The Help","The Paris Library","A Gentleman in Moscow","The Guernsey Literary and Potato Peel Pie Society"],
  "science-fiction": ["1984","Fahrenheit 451","Brave New World","Ender's Game","The Three-Body Problem","Neuromancer","The Left Hand of Darkness","Do Androids Dream of Electric Sheep?","Project Hail Mary","Ready Player One"],
  "young-adult": ["The Hunger Games","Divergent","The Maze Runner","Looking for Alaska","Eleanor & Park","Six of Crows","The Hate U Give","The Perks of Being a Wallflower","We Were Liars","A Good Girl's Guide to Murder"],
  horror: ["Frankenstein","The Shining","The Haunting of Hill House","Pet Sematary","The Exorcist","The Turn of the Screw","Bird Box","The Woman in Black","The Call of Cthulhu","The Picture of Dorian Gray"],
  poetry: ["The Sun and Her Flowers","The Waste Land","Leaves of Grass","The Raven and Other Poems","The Complete Poems of Emily Dickinson","The Prophet","Devotions","Ariel","The Essential Rumi","Twenty Love Poems and a Song of Despair"],
  biography: ["Long Walk to Freedom","Steve Jobs","Educated","Becoming","The Diary of a Young Girl: Illustrated Edition","I Am Malala","Wings of Fire","The Story of My Experiments with Truth","Alexander Hamilton","Born a Crime"],
  children: ["Matilda","Charlie and the Chocolate Factory","Charlotte's Web","The Secret Garden: Illustrated Edition","Winnie-the-Pooh","Alice's Adventures in Wonderland","The Wind in the Willows","Peter Pan","The Tale of Peter Rabbit","The Railway Children"],
  classic: ["Wuthering Heights","Great Expectations","Moby-Dick","The Count of Monte Cristo","The Adventures of Tom Sawyer","The Picture of Dorian Gray: Classic Edition","The Scarlet Letter","Crime and Punishment","Les Misérables","Don Quixote"]
};
const genreDescriptions = {
  fiction:"A memorable story filled with vivid characters and thoughtful moments.",
  romance:"A heartfelt read about connection, relationships and unexpected turns.",
  mystery:"Clues, secrets and suspense make this a page-turning read.",
  fantasy:"Step into an imaginative world of wonder, adventure and possibility.",
  "self-help":"Practical ideas and inspiration for learning and personal growth.",
  historical:"Explore another time through richly told stories and real-world settings.",
  "science-fiction":"Discover imaginative ideas, distant worlds and possible futures.",
  "young-adult":"A compelling coming-of-age story about identity, friendship and courage.",
  horror:"A suspenseful atmospheric read for fans of the mysterious and eerie.",
  poetry:"A collection of expressive writing, imagery and memorable lines.",
  biography:"A true-life account offering insight into an extraordinary journey.",
  children:"A delightful story for young readers and shared reading moments.",
  classic:"A much-loved literary work that continues to inspire readers."
};
const genreImages = [
  "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=700&q=85",
  "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=700&q=85",
  "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=700&q=85",
  "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=700&q=85"
];
let nextBookId = Math.max(...books.map(book => book.id)) + 1;
Object.entries(genreBookTitles).forEach(([category, titles]) => {
  const existingCount = books.filter(book => book.category === category).length;
  const missingTitles = titles.filter(title => !books.some(book => book.title.toLowerCase() === title.toLowerCase()));
  const needed = Math.max(0, 10 - existingCount);
  missingTitles.slice(0, needed).forEach((title, index) => {
    books.push({
      id: nextBookId++,
      title,
      author: "Novel Nest selection",
      category,
      price: 1250 + ((nextBookId * 137) % 1450),
      description: genreDescriptions[category],
      image: `https://covers.openlibrary.org/b/title/${encodeURIComponent(title)}-L.jpg?default=false`,
      tag: "Genre collection"
    });
  });
});

const bookGrid = document.getElementById("bookGrid");
const bookSearch = document.getElementById("bookSearch");
const genreFilter = document.getElementById("genreFilter");
const priceSort = document.getElementById("priceSort");
const noResults = document.getElementById("noResults");
const cartCount = document.getElementById("cartCount");
const cartPanel = document.getElementById("cartPanel");
const cartShade = document.getElementById("cartShade");
const cartItems = document.getElementById("cartItems");
const cartEmpty = document.getElementById("cartEmpty");
const cartSubtotal = document.getElementById("cartSubtotal");

const formatPrice = (price) => `Rs. ${price.toLocaleString("en-PK")}`;

let cart = [];
try {
  const savedCart = JSON.parse(localStorage.getItem("novelNestCart"));
  cart = Array.isArray(savedCart) ? savedCart : [];
} catch (error) {
  cart = [];
}


const googleCoverLookups = new Map();
const normalizeBookText = (value) => String(value || "").toLowerCase()
  .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  .replace(/&/g, "and").replace(/[^a-z0-9]+/g, " ").trim();

async function findGoogleBooksCover(book) {
  const queryParts = [`intitle:${book.title}`];
  if (book.author && book.author !== "Novel Nest selection") queryParts.push(`inauthor:${book.author}`);
  const query = queryParts.join(" ");
  const endpoint = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&maxResults=8&printType=books`;
  const response = await fetch(endpoint);
  if (!response.ok) throw new Error(`Google Books returned ${response.status}`);
  const data = await response.json();
  const wantedTitle = normalizeBookText(book.title);
  const wantedAuthor = normalizeBookText(book.author);
  const candidates = (data.items || []).map((item) => {
    const info = item.volumeInfo || {};
    const resultTitle = normalizeBookText(info.title);
    const resultAuthors = (info.authors || []).map(normalizeBookText);
    let score = 0;
    if (resultTitle === wantedTitle) score += 100;
    else if (resultTitle.includes(wantedTitle) || wantedTitle.includes(resultTitle)) score += 72;
    if (wantedAuthor && wantedAuthor !== "novel nest selection" && resultAuthors.some((name) => name.includes(wantedAuthor) || wantedAuthor.includes(name))) score += 45;
    const links = info.imageLinks || {};
    const cover = links.thumbnail || links.smallThumbnail;
    return { score, cover: cover ? cover.replace(/^http:/, "https:").replace(/&zoom=\d+/g, "&zoom=2") : "" };
  }).filter((item) => item.cover).sort((a, b) => b.score - a.score);
  return candidates[0] && candidates[0].score >= 70 ? candidates[0].cover : "";
}

async function findOpenLibraryCover(book) {
  const params = new URLSearchParams({ title: book.title, limit: "8" });
  if (book.author && book.author !== "Novel Nest selection") params.set("author", book.author);
  const response = await fetch(`https://openlibrary.org/search.json?${params.toString()}`);
  if (!response.ok) return "";
  const data = await response.json();
  const wantedTitle = normalizeBookText(book.title);
  const wantedAuthor = normalizeBookText(book.author);
  const match = (data.docs || []).find((entry) => {
    const titleMatches = normalizeBookText(entry.title) === wantedTitle;
    const authors = (entry.author_name || []).map(normalizeBookText);
    const authorMatches = !wantedAuthor || wantedAuthor === "novel nest selection" || authors.some((name) => name === wantedAuthor || name.includes(wantedAuthor));
    return titleMatches && authorMatches && entry.cover_i;
  });
  return match ? `https://covers.openlibrary.org/b/id/${match.cover_i}-L.jpg` : "";
}

async function loadGoogleBooksCovers() {
  let nextIndex = 0;
  const workers = Array.from({ length: 5 }, async () => {
    while (nextIndex < books.length) {
      const book = books[nextIndex++];
      if (googleCoverLookups.has(book.id)) continue;
      const task = findGoogleBooksCover(book).catch((error) => {
        console.warn(`Could not find a Google Books cover for ${book.title}:`, error);
        return "";
      });
      googleCoverLookups.set(book.id, task);
      let coverUrl = await task;
      if (!coverUrl) {
        try { coverUrl = await findOpenLibraryCover(book); }
        catch (error) { console.warn(`No matching public cover found for ${book.title}:`, error); }
      }
      if (!coverUrl) continue;
      book.image = coverUrl;
      document.querySelectorAll(`[data-book-cover-id="${book.id}"]`).forEach((img) => {
        img.src = coverUrl;
        img.dataset.lightbox = coverUrl;
      });
      updateCart();
    }
  });
  await Promise.all(workers);
}

function renderBooks() {
  const searchText = bookSearch.value.trim().toLowerCase();
  const selectedGenre = genreFilter.value;

  let visibleBooks = books.filter((book) => {
    const searchable = `${book.title} ${book.author} ${book.description} ${book.category}`.toLowerCase();
    const matchesTitle = searchable.includes(searchText);
    const matchesGenre = selectedGenre === "all" || book.category === selectedGenre;
    return matchesTitle && matchesGenre;
  });

  if (priceSort.value === "low-high") visibleBooks.sort((a, b) => a.price - b.price);
  if (priceSort.value === "high-low") visibleBooks.sort((a, b) => b.price - a.price);
  if (priceSort.value === "az") visibleBooks.sort((a, b) => a.title.localeCompare(b.title));
  if (priceSort.value === "za") visibleBooks.sort((a, b) => b.title.localeCompare(a.title));

  bookGrid.innerHTML = visibleBooks.map((book) => `
    <div class="col-sm-6 col-lg-3">
      <article class="book-card">
        <div class="book-cover-wrap">
          <img class="book-cover" src="${book.image}" alt="Cover artwork for ${book.title}" data-book-cover-id="${book.id}" data-lightbox="${book.image}" loading="lazy" onerror="this.onerror=null;this.src='assets/book-placeholder.svg';this.dataset.lightbox='assets/book-placeholder.svg'">
          <span class="book-tag">${book.tag}</span>
        </div>
        <div class="book-info">
          <h3>${book.title}</h3>
          <p class="book-author">${book.author}</p>
          <p class="book-description">${book.description}</p>
          <div class="book-card-bottom">
            <span class="book-price">${formatPrice(book.price)}</span>
            <button class="add-book" type="button" data-add-book="${book.id}"><i class="bi bi-basket2"></i> Add to Cart</button>
          </div>
        </div>
      </article>
    </div>
  `).join("");

  noResults.classList.toggle("d-none", visibleBooks.length > 0);
}


function saveCart() {
  try { localStorage.setItem("novelNestCart", JSON.stringify(cart)); } catch (error) { console.warn("Cart could not be saved in this browser session.", error); }
  updateCart();
}

function addToCart(bookId) {
  const existing = cart.find((item) => item.id === bookId);
  if (existing) existing.quantity += 1;
  else cart.push({ id: bookId, quantity: 1 });
  saveCart();
  openCart();
}


function updateCart() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => {
    const book = books.find((entry) => entry.id === item.id);
    return sum + (book ? book.price * item.quantity : 0);
  }, 0);

  cartCount.textContent = count;
  cartSubtotal.textContent = formatPrice(subtotal);
  cartItems.innerHTML = cart.map((item) => {
    const book = books.find((entry) => entry.id === item.id);
    if (!book) return "";
    return `
      <div class="cart-item">
        <img src="${book.image}" alt="${book.title}" onerror="this.onerror=null;this.src='assets/book-placeholder.svg'">
        <div>
          <h3>${book.title}</h3>
          <p>${formatPrice(book.price)}</p>
          <div class="qty-controls">
            <button type="button" data-qty="${book.id}" data-step="-1" aria-label="Decrease quantity">−</button>
            <span>${item.quantity}</span>
            <button type="button" data-qty="${book.id}" data-step="1" aria-label="Increase quantity">+</button>
          </div>
        </div>
        <button class="remove-item" type="button" data-remove="${book.id}" aria-label="Remove ${book.title}"><i class="bi bi-trash3"></i></button>
      </div>`;
  }).join("");

  const empty = cart.length === 0;
  cartEmpty.classList.toggle("show", empty);
  cartItems.style.display = empty ? "none" : "block";
  document.getElementById("checkoutButton").disabled = empty;
}

function openCart() {
  cartPanel.classList.add("open");
  cartShade.classList.add("show");
  cartPanel.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeCart() {
  cartPanel.classList.remove("open");
  cartShade.classList.remove("show");
  cartPanel.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

bookGrid.addEventListener("click", (event) => {
  const addButton = event.target.closest("[data-add-book]");
  if (addButton) addToCart(Number(addButton.dataset.addBook));
});

cartItems.addEventListener("click", (event) => {
  const qtyButton = event.target.closest("[data-qty]");
  const removeButton = event.target.closest("[data-remove]");

  if (qtyButton) {
    const id = Number(qtyButton.dataset.qty);
    const item = cart.find((entry) => entry.id === id);
    if (item) {
      item.quantity += Number(qtyButton.dataset.step);
      if (item.quantity <= 0) cart = cart.filter((entry) => entry.id !== id);
      saveCart();
    }
  }

  if (removeButton) {
    const id = Number(removeButton.dataset.remove);
    cart = cart.filter((entry) => entry.id !== id);
    saveCart();
  }
});

bookSearch.addEventListener("input", renderBooks);
genreFilter.addEventListener("change", renderBooks);
priceSort.addEventListener("change", renderBooks);
document.getElementById("openCart").addEventListener("click", openCart);
document.getElementById("closeCart").addEventListener("click", closeCart);
cartShade.addEventListener("click", closeCart);
document.getElementById("keepBrowsing").addEventListener("click", closeCart);


document.querySelectorAll("[data-genre-link]").forEach((link) => {
  link.addEventListener("click", () => {
    genreFilter.value = link.dataset.genreLink;
    renderBooks();
  });
});


const checkoutButton = document.getElementById("checkoutButton");
let currentOrder = null;

function orderSubtotal(items) {
  return items.reduce((sum, item) => {
    const book = books.find((entry) => entry.id === item.id);
    return sum + (book ? book.price * item.quantity : 0);
  }, 0);
}

function goToContact() {
  if (!cart.length) return;
  closeCart();
  const contactSection = document.getElementById("contact");
  const summary = cart.map((item) => {
    const book = books.find((entry) => entry.id === item.id);
    return book ? `${book.title} × ${item.quantity} — ${formatPrice(book.price * item.quantity)}` : "";
  }).filter(Boolean);
  document.getElementById("orderSummaryPreview").innerHTML =
    `<strong>Your order</strong>${summary.map((line) => `<span>${line}</span>`).join("")}<strong class="order-preview-total">Total: ${formatPrice(orderSubtotal(cart))}</strong>`;
  if (contactSection) contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
  const form = document.getElementById("contactForm");
  if (form) {
    form.classList.add("contact-form-highlight");
    window.setTimeout(() => form.classList.remove("contact-form-highlight"), 1800);
    window.setTimeout(() => document.getElementById("contactName").focus({ preventScroll: true }), 650);
  }
}
checkoutButton.addEventListener("click", goToContact);

function makeReceipt() {
  const orderId = `NN-${Date.now().toString().slice(-8)}`;
  const customer = document.getElementById("contactName").value.trim();
  const email = document.getElementById("contactEmail").value.trim();
  const phone = document.getElementById("contactPhone").value.trim();
  const address = document.getElementById("contactAddress").value.trim();
  const items = cart.map((item) => ({...item}));
  currentOrder = {
    id: orderId,
    date: new Date().toLocaleString("en-PK", { dateStyle: "medium", timeStyle: "short" }),
    customer, email, phone, address, items,
    total: orderSubtotal(items)
  };
  document.getElementById("receiptNumber").textContent = orderId;
  document.getElementById("receiptDate").textContent = currentOrder.date;
  document.getElementById("receiptCustomer").textContent = customer;
  document.getElementById("receiptEmail").textContent = email;
  document.getElementById("receiptPhone").textContent = phone;
  document.getElementById("receiptAddress").textContent = address;
  document.getElementById("receiptTotal").textContent = formatPrice(currentOrder.total);
  document.getElementById("receiptLines").innerHTML = items.map((item) => {
    const book = books.find((entry) => entry.id === item.id);
    if (!book) return "";
    return `<div class="receipt-line"><span>${book.title} <small>× ${item.quantity}</small></span><strong>${formatPrice(book.price * item.quantity)}</strong></div>`;
  }).join("");
  const overlay = document.getElementById("receiptOverlay");
  overlay.classList.add("show");
  overlay.setAttribute("aria-hidden", "false");
}

function closeReceipt() {
  document.getElementById("receiptOverlay").classList.remove("show");
  document.getElementById("receiptOverlay").setAttribute("aria-hidden", "true");
}

function receiptTextLines() {
  const lines = [
    "NOVEL NEST — ORDER RECEIPT",
    `Receipt: ${currentOrder.id}`,
    `Date: ${currentOrder.date}`,
    `Customer: ${currentOrder.customer}`,
    `Email: ${currentOrder.email}`,
    `Phone: ${currentOrder.phone}`,
    `Delivery address: ${currentOrder.address}`,
    "",
    "ITEMS"
  ];
  currentOrder.items.forEach((item) => {
    const book = books.find((entry) => entry.id === item.id);
    if (book) lines.push(`${book.title} x ${item.quantity} — ${formatPrice(book.price * item.quantity)}`);
  });
  lines.push("", `TOTAL: ${formatPrice(currentOrder.total)}`, "",
    "Demo-store receipt. No payment has been processed.");
  return lines;
}

document.getElementById("downloadReceipt").addEventListener("click", () => {
  if (!currentOrder) return;
  if (window.jspdf && window.jspdf.jsPDF) {
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF();
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(20);
    pdf.text("NOVEL NEST", 20, 22);
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(11);
    let y = 34;
    receiptTextLines().slice(1).forEach((line) => {
      const wrapped = pdf.splitTextToSize(String(line), 170);
      wrapped.forEach((part) => {
        if (y > 275) { pdf.addPage(); y = 20; }
        pdf.text(part, 20, y);
        y += line ? 7 : 5;
      });
    });
    pdf.save(`${currentOrder.id}-receipt.pdf`);
  } else {
    window.print();
  }
});

document.getElementById("printReceipt").addEventListener("click", () => {
  if (!currentOrder) return;
  const paper = document.getElementById("receiptPaper").innerHTML;
  const printWindow = window.open("", "_blank", "width=800,height=900");
  if (!printWindow) { window.print(); return; }
  printWindow.document.write(`<!doctype html><html><head><title>Novel Nest Receipt</title><style>
    body{font-family:Georgia,serif;color:#352438;padding:35px}.receipt-brand{font-size:28px;font-weight:bold}.receipt-brand em{color:#a66f83}
    .receipt-kicker,small{display:block;color:#8c7481;font-size:10px;letter-spacing:1.5px;margin-top:8px}
    .receipt-success{text-align:center;padding:25px 0}.receipt-success i{font-size:30px;color:#70445f}
    .receipt-meta{display:flex;justify-content:space-between;border-block:1px solid #ddd;padding:15px 0}
    .receipt-customer{padding:18px 0}.receipt-line{display:flex;justify-content:space-between;border-bottom:1px solid #eee;padding:10px 0}
    .receipt-total{display:flex;justify-content:space-between;font-size:20px;padding:18px 0;border-top:1px solid #aaa}
    .receipt-note{font-size:11px;color:#777}.receipt-actions{display:none}
  </style></head><body>${paper}</body></html>`);
  printWindow.document.close();
  printWindow.focus();
  printWindow.print();
});

document.getElementById("closeReceipt").addEventListener("click", closeReceipt);

const contactForm = document.getElementById("contactForm");
const contactFeedback = document.getElementById("contactFeedback");
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  contactFeedback.className = "form-feedback";

  if (!contactForm.checkValidity()) {
    contactForm.reportValidity();
    contactFeedback.textContent = "Please fill in every field with a valid email address.";
    contactFeedback.classList.add("error");
    return;
  }

  if (!cart.length) {
    contactFeedback.textContent = "Please add books to your cart and confirm your order first.";
    contactFeedback.classList.add("error");
    return;
  }

  makeReceipt();
  contactFeedback.textContent = "Order details saved in this demo. Your receipt is ready to download or print.";
  contactFeedback.classList.add("success");
  cart = [];
  saveCart();
  contactForm.reset();
});

const newsletterForm = document.getElementById("newsletterForm");
const newsletterFeedback = document.getElementById("newsletterFeedback");
newsletterForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const emailInput = document.getElementById("newsletterEmail");
  if (!emailInput.checkValidity()) {
    emailInput.reportValidity();
    newsletterFeedback.textContent = "Please enter a valid email address.";
    return;
  }
  newsletterFeedback.textContent = "You're on the list! Thanks for being a book lover.";
  newsletterForm.reset();
});


const bookLightbox = document.getElementById("bookLightbox");
const lightboxImage = document.getElementById("lightboxImage");

bookGrid.addEventListener("click", (event) => {
  const cover = event.target.closest("[data-lightbox]");
  if (!cover) return;
  lightboxImage.src = cover.dataset.lightbox;
  bookLightbox.classList.add("show");
  bookLightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
});

function closeLightbox() {
  bookLightbox.classList.remove("show");
  bookLightbox.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}
document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
bookLightbox.addEventListener("click", (event) => {
  if (event.target === bookLightbox) closeLightbox();
});


document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeCart();
    closeLightbox();
  }
});

document.querySelectorAll("#siteNav .nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    const nav = document.getElementById("siteNav");
    if (nav.classList.contains("show")) bootstrap.Collapse.getOrCreateInstance(nav).hide();
  });
});

const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  backToTop.classList.toggle("visible", window.scrollY > 420);
});
backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

document.getElementById("year").textContent = new Date().getFullYear();


renderBooks();
updateCart();
loadGoogleBooksCovers();



// Floating page navigation: move one screen down or return to the top.
const scrollDownButton = document.getElementById("scrollDown");
if (scrollDownButton) {
  scrollDownButton.addEventListener("click", () => {
    window.scrollBy({ top: Math.max(window.innerHeight * 0.82, 500), behavior: "smooth" });
  });

  window.addEventListener("scroll", () => {
    const nearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80;
    scrollDownButton.style.opacity = nearBottom ? "0" : "1";
    scrollDownButton.style.pointerEvents = nearBottom ? "none" : "auto";
  });
}

// Animate the three decorative books in the hero when clicked or keyboard-activated.
document.querySelectorAll("[data-hero-book]").forEach((book) => {
  const animateBook = () => {
    book.classList.remove("book-flip");
    // Force a reflow so the animation can be replayed on every click.
    void book.offsetWidth;
    book.classList.add("book-flip");
    window.setTimeout(() => book.classList.remove("book-flip"), 900);
  };

  book.addEventListener("click", animateBook);
  book.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      animateBook();
    }
  });
});
