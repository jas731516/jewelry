import { createContext, useState } from 'react';
import Navbars from './components/Navbars';
import NewRelease from './components/NewRelease';
import NewAddInfo from './components/ProductDetails';
import { Route, Routes} from 'react-router-dom';
import Necklaces from './components/Necklaces';
import ProductDetails from './components/ProductDetails';
import Home from './components/Home';
import Bracelets from './components/Bracelets';
import Rings from './components/Rings';
import Charms from './components/Charms';
import Earrings from './components/Earings';
import Gift from './components/gift';
import Footer from './components/Footer';
import OrderReview from './components/OrderReview';
import Checkout from './components/Checkout';
import OrderConfirmation from './components/Order';

export const productContext = createContext();
export const WishlistContext = createContext();
export const ShoppingBagContext = createContext();
function App() {

  const [wishlistItems, setWishlistItems] = useState([]);
  const [shoppingBag, setShoppingBag] = useState([]);

  const addToBag = (item) => {
    setShoppingBag((prevBag) => [
      ...prevBag,
      {
        ...item,
        price: Number(item.price) || 0,
      },
    ]);
  };


  const removeFromBag = (id) => {
    setShoppingBag((prevBag) => prevBag.filter((item) => item.id !== id));
  };

  const [categories, SetCategories] = useState([
    {
      id: 1,
      img: require('./images/neck1.png'),
      title: 'INITIAL PENDANT',
      price: 100.00,
      tittle: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      accordionData: [
        {
          title: "DETAILS",
          content: { content1: "14k gold", content2: "30 inches long", content3: "Adjustable length between 26 and 38 inches" }
        },
        {
          title: "TIPS & WARNINGS",
          content: { content1: "  Keep in a jewelry box to preserve quality.", content2: "  Keep out of swimming pools to prevent discoloration.", content3: "  We recommend you clean your jewelry every 3-4 months." }
        },
        {
          title: "LOCAL AVAILABILITY",
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
          </svg>
        }
      ]
    },
    {
      id: 2, img: require('./images/neck2.png'), title: 'HEART DROP', price: 200.00,
      tittle: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      accordionData: [
        {
          title: "DETAILS",
          content: { content1: "14k gold", content2: "30 inches long", content3: "Adjustable length between 26 and 38 inches" }
        },
        {
          title: "TIPS & WARNINGS",
          content: { content1: "  Keep in a jewelry box to preserve quality.", content2: "  Keep out of swimming pools to prevent discoloration.", content3: "  We recommend you clean your jewelry every 3-4 months." }
        },
        {
          title: "LOCAL AVAILABILITY",
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
          </svg>
        }
      ]
    },
    {
      id: 3, img: require('./images/neck3.png'), title: 'DIAMOND CHOKER', price: 300.00,
      tittle: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      accordionData: [
        {
          title: "DETAILS",
          content: { content1: "14k gold", content2: "30 inches long", content3: "Adjustable length between 26 and 38 inches" }
        },
        {
          title: "TIPS & WARNINGS",
          content: { content1: "  Keep in a jewelry box to preserve quality.", content2: "  Keep out of swimming pools to prevent discoloration.", content3: "  We recommend you clean your jewelry every 3-4 months." }
        },
        {
          title: "LOCAL AVAILABILITY",
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
          </svg>
        }
      ]
    },
    {
      id: 4, img: require('./images/neck4.png'), title: 'LEAF PENDANT', price: 90.00,
      tittle: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      accordionData: [
        {
          title: "DETAILS",
          content: { content1: "14k gold", content2: "30 inches long", content3: "Adjustable length between 26 and 38 inches" }
        },
        {
          title: "TIPS & WARNINGS",
          content: { content1: "  Keep in a jewelry box to preserve quality.", content2: "  Keep out of swimming pools to prevent discoloration.", content3: "  We recommend you clean your jewelry every 3-4 months." }
        },
        {
          title: "LOCAL AVAILABILITY",
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
          </svg>
        }
      ]
    },
    {
      id: 5, img: require('./images/neck5.png'), title: 'RUBY PENDANT', price: 250.00,
      tittle: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      accordionData: [
        {
          title: "DETAILS",
          content: { content1: "14k gold", content2: "30 inches long", content3: "Adjustable length between 26 and 38 inches" }
        },
        {
          title: "TIPS & WARNINGS",
          content: { content1: "  Keep in a jewelry box to preserve quality.", content2: "  Keep out of swimming pools to prevent discoloration.", content3: "  We recommend you clean your jewelry every 3-4 months." }
        },
        {
          title: "LOCAL AVAILABILITY",
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
          </svg>
        }
      ]
    },
    {
      id: 6, img: require('./images/earings1.png'), title: 'DIAMOND STUDS', price: 200.00,
      tittle: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      accordionData: [
        {
          title: "DETAILS",
          content: { content1: "14k gold", content2: "30 inches long", content3: "Adjustable length between 26 and 38 inches" }
        },
        {
          title: "TIPS & WARNINGS",
          content: { content1: "  Keep in a jewelry box to preserve quality.", content2: "  Keep out of swimming pools to prevent discoloration.", content3: "  We recommend you clean your jewelry every 3-4 months." }
        },
        {
          title: "LOCAL AVAILABILITY",
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
          </svg>
        }
      ]
    },
    {
      id: 7, img: require('./images/earings2.png'), title: 'MINI HOOPS', price: 90.00,
      tittle: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      accordionData: [
        {
          title: "DETAILS",
          content: { content1: "14k gold", content2: "30 inches long", content3: "Adjustable length between 26 and 38 inches" }
        },
        {
          title: "TIPS & WARNINGS",
          content: { content1: "  Keep in a jewelry box to preserve quality.", content2: "  Keep out of swimming pools to prevent discoloration.", content3: "  We recommend you clean your jewelry every 3-4 months." }
        },
        {
          title: "LOCAL AVAILABILITY",
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
          </svg>
        }
      ]
    },
    {
      id: 8, img: require('./images/earings3.png'), title: 'DANGLING LEAVES', price: 60.00,
      tittle: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      accordionData: [
        {
          title: "DETAILS",
          content: { content1: "14k gold", content2: "30 inches long", content3: "Adjustable length between 26 and 38 inches" }
        },
        {
          title: "TIPS & WARNINGS",
          content: { content1: "  Keep in a jewelry box to preserve quality.", content2: "  Keep out of swimming pools to prevent discoloration.", content3: "  We recommend you clean your jewelry every 3-4 months." }
        },
        {
          title: "LOCAL AVAILABILITY",
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
          </svg>
        }
      ]
    },
    {
      id: 9, img: require('./images/earings4.png'), title: 'LEAF STUDS', price: 40.00,
      tittle: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      accordionData: [
        {
          title: "DETAILS",
          content: { content1: "14k gold", content2: "30 inches long", content3: "Adjustable length between 26 and 38 inches" }
        },
        {
          title: "TIPS & WARNINGS",
          content: { content1: "  Keep in a jewelry box to preserve quality.", content2: "  Keep out of swimming pools to prevent discoloration.", content3: "  We recommend you clean your jewelry every 3-4 months." }
        },
        {
          title: "LOCAL AVAILABILITY",
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
          </svg>
        }
      ]
    },
    {
      id: 10, img: require('./images/earings5.png'), title: 'CHAIN DROPS', price: 40.00,
      tittle: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      accordionData: [
        {
          title: "DETAILS",
          content: { content1: "14k gold", content2: "30 inches long", content3: "Adjustable length between 26 and 38 inches" }
        },
        {
          title: "TIPS & WARNINGS",
          content: { content1: "  Keep in a jewelry box to preserve quality.", content2: "  Keep out of swimming pools to prevent discoloration.", content3: "  We recommend you clean your jewelry every 3-4 months." }
        },
        {
          title: "LOCAL AVAILABILITY",
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
          </svg>
        }
      ]
    },
    { id: 11, img: require('./images/necklaces.png'), topic: 'Necklaces' },
    { id: 12, img: require('./images/earings.png'), topic: 'Earrings' },
    { id: 13, img: require('./images/bracelet.png'), topic: 'Bracelets' },
    { id: 14, img: require('./images/rings.png'), topic: 'Rings' },
    { id: 15, img: require('./images/charms.png'), topic: 'Charms' },
    {
      id: 16, img: require('./images/brace1.png'), title: 'CHAINED CUFF', price: 200.00,
      tittle: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      accordionData: [
        {
          title: "DETAILS",
          content: { content1: "14k gold", content2: "30 inches long", content3: "Adjustable length between 26 and 38 inches" }
        },
        {
          title: "TIPS & WARNINGS",
          content: { content1: "  Keep in a jewelry box to preserve quality.", content2: "  Keep out of swimming pools to prevent discoloration.", content3: "  We recommend you clean your jewelry every 3-4 months." }
        },
        {
          title: "LOCAL AVAILABILITY",
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
          </svg>
        }
      ]
    },
    {
      id: 17, img: require('./images/brace2.png'), title: 'THIN CHAIN', price: 90.00,
      tittle: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      accordionData: [
        {
          title: "DETAILS",
          content: { content1: "14k gold", content2: "30 inches long", content3: "Adjustable length between 26 and 38 inches" }
        },
        {
          title: "TIPS & WARNINGS",
          content: { content1: "  Keep in a jewelry box to preserve quality.", content2: "  Keep out of swimming pools to prevent discoloration.", content3: "  We recommend you clean your jewelry every 3-4 months." }
        },
        {
          title: "LOCAL AVAILABILITY",
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
          </svg>
        }
      ]
    },
    {
      id: 18, img: require('./images/brace3.png'), title: 'LEAFY CHAIN', price: 60.00,
      tittle: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      accordionData: [
        {
          title: "DETAILS",
          content: { content1: "14k gold", content2: "30 inches long", content3: "Adjustable length between 26 and 38 inches" }
        },
        {
          title: "TIPS & WARNINGS",
          content: { content1: "  Keep in a jewelry box to preserve quality.", content2: "  Keep out of swimming pools to prevent discoloration.", content3: "  We recommend you clean your jewelry every 3-4 months." }
        },
        {
          title: "LOCAL AVAILABILITY",
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
          </svg>
        }
      ]
    },
    {
      id: 19, img: require('./images/brace4.png'), title: 'FLORA CHAIN', price: 40.00,
      tittle: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      accordionData: [
        {
          title: "DETAILS",
          content: { content1: "14k gold", content2: "30 inches long", content3: "Adjustable length between 26 and 38 inches" }
        },
        {
          title: "TIPS & WARNINGS",
          content: { content1: "  Keep in a jewelry box to preserve quality.", content2: "  Keep out of swimming pools to prevent discoloration.", content3: "  We recommend you clean your jewelry every 3-4 months." }
        },
        {
          title: "LOCAL AVAILABILITY",
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
          </svg>
        }
      ]
    },
    {
      id: 20, img: require('./images/brace5.png'), title: 'ARROW CUFF', price: 50.00,
      tittle: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      accordionData: [
        {
          title: "DETAILS",
          content: { content1: "14k gold", content2: "30 inches long", content3: "Adjustable length between 26 and 38 inches" }
        },
        {
          title: "TIPS & WARNINGS",
          content: { content1: "  Keep in a jewelry box to preserve quality.", content2: "  Keep out of swimming pools to prevent discoloration.", content3: "  We recommend you clean your jewelry every 3-4 months." }
        },
        {
          title: "LOCAL AVAILABILITY",
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
          </svg>
        }
      ]
    },
    {
      id: 21,
      img: require('./images/Ring1.png'),
      title: 'RING OF LEAVES',
      price: 200.00,
      tittle: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      accordionData: [
        {
          title: "DETAILS",
          content: { content1: "14k gold", content2: "30 inches long", content3: "Adjustable length between 26 and 38 inches" }
        },
        {
          title: "TIPS & WARNINGS",
          content: { content1: "  Keep in a jewelry box to preserve quality.", content2: "  Keep out of swimming pools to prevent discoloration.", content3: "  We recommend you clean your jewelry every 3-4 months." }
        },
        {
          title: "LOCAL AVAILABILITY",
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
          </svg>
        }
      ]
    },
    {
      id: 22,
      img: require('./images/Ring2.png'),
      title: 'SIMPLE CHAIN RING',
      price: 100.00,
      tittle: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      accordionData: [
        {
          title: "DETAILS",
          content: { content1: "14k gold", content2: "30 inches long", content3: "Adjustable length between 26 and 38 inches" }
        },
        {
          title: "TIPS & WARNINGS",
          content: { content1: "  Keep in a jewelry box to preserve quality.", content2: "  Keep out of swimming pools to prevent discoloration.", content3: "  We recommend you clean your jewelry every 3-4 months." }
        },
        {
          title: "LOCAL AVAILABILITY",
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
          </svg>
        }
      ]
    },
    {
      id: 23,
      img: require('./images/Ring3.png'),
      title: 'TIARA RING',
      price: 150.00,
      tittle: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      accordionData: [
        {
          title: "DETAILS",
          content: { content1: "14k gold", content2: "30 inches long", content3: "Adjustable length between 26 and 38 inches" }
        },
        {
          title: "TIPS & WARNINGS",
          content: { content1: "  Keep in a jewelry box to preserve quality.", content2: "  Keep out of swimming pools to prevent discoloration.", content3: "  We recommend you clean your jewelry every 3-4 months." }
        },
        {
          title: "LOCAL AVAILABILITY",
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
          </svg>
        }
      ]
    },
    {
      id: 24,
      img: require('./images/Ring4.png'),
      title: 'ROSE RING',
      price: 100.00,
      tittle: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      accordionData: [
        {
          title: "DETAILS",
          content: { content1: "14k gold", content2: "30 inches long", content3: "Adjustable length between 26 and 38 inches" }
        },
        {
          title: "TIPS & WARNINGS",
          content: { content1: "  Keep in a jewelry box to preserve quality.", content2: "  Keep out of swimming pools to prevent discoloration.", content3: "  We recommend you clean your jewelry every 3-4 months." }
        },
        {
          title: "LOCAL AVAILABILITY",
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
          </svg>
        }
      ]
    },
    {
      id: 25,
      img: require('./images/Ring5.png'),
      title: 'SIGNET RING',
      price: 100.00,
      tittle: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      accordionData: [
        {
          title: "DETAILS",
          content: { content1: "14k gold", content2: "30 inches long", content3: "Adjustable length between 26 and 38 inches" }
        },
        {
          title: "TIPS & WARNINGS",
          content: { content1: "  Keep in a jewelry box to preserve quality.", content2: "  Keep out of swimming pools to prevent discoloration.", content3: "  We recommend you clean your jewelry every 3-4 months." }
        },
        {
          title: "LOCAL AVAILABILITY",
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
          </svg>
        }
      ]
    },
    {
      id: 26,
      img: require('./images/charm1.png'),
      title: 'KEY CHARM',
      price: 80.00,
      tittle: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      accordionData: [
        {
          title: "DETAILS",
          content: { content1: "14k gold", content2: "30 inches long", content3: "Adjustable length between 26 and 38 inches" }
        },
        {
          title: "TIPS & WARNINGS",
          content: { content1: "  Keep in a jewelry box to preserve quality.", content2: "  Keep out of swimming pools to prevent discoloration.", content3: "  We recommend you clean your jewelry every 3-4 months." }
        },
        {
          title: "LOCAL AVAILABILITY",
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
          </svg>
        }
      ]
    },
    {
      id: 27,
      img: require('./images/charm2.png'),
      title: 'CORNICELLO CHARM',
      price: 90.00,
      tittle: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      accordionData: [
        {
          title: "DETAILS",
          content: { content1: "14k gold", content2: "30 inches long", content3: "Adjustable length between 26 and 38 inches" }
        },
        {
          title: "TIPS & WARNINGS",
          content: { content1: "  Keep in a jewelry box to preserve quality.", content2: "  Keep out of swimming pools to prevent discoloration.", content3: "  We recommend you clean your jewelry every 3-4 months." }
        },
        {
          title: "LOCAL AVAILABILITY",
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
          </svg>
        }
      ]
    },
    {
      id: 28,
      img: require('./images/charm3.png'),
      title: 'MEDALLION CHARM',
      price: 60.00,
      tittle: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      accordionData: [
        {
          title: "DETAILS",
          content: { content1: "14k gold", content2: "30 inches long", content3: "Adjustable length between 26 and 38 inches" }
        },
        {
          title: "TIPS & WARNINGS",
          content: { content1: "  Keep in a jewelry box to preserve quality.", content2: "  Keep out of swimming pools to prevent discoloration.", content3: "  We recommend you clean your jewelry every 3-4 months." }
        },
        {
          title: "LOCAL AVAILABILITY",
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
          </svg>
        }
      ]
    },
    {
      id: 29,
      img: require('./images/charm4.png'),
      title: 'GLOBE CHARM',
      price: 90.00,
      tittle: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      accordionData: [
        {
          title: "DETAILS",
          content: { content1: "14k gold", content2: "30 inches long", content3: "Adjustable length between 26 and 38 inches" }
        },
        {
          title: "TIPS & WARNINGS",
          content: { content1: "  Keep in a jewelry box to preserve quality.", content2: "  Keep out of swimming pools to prevent discoloration.", content3: "  We recommend you clean your jewelry every 3-4 months." }
        },
        {
          title: "LOCAL AVAILABILITY",
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
          </svg>
        }
      ]
    },
    {
      id: 30,
      img: require('./images/charm5.png'),
      title: 'HEART CHARM',
      price: 80.00,
      tittle: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      accordionData: [
        {
          title: "DETAILS",
          content: { content1: "14k gold", content2: "30 inches long", content3: "Adjustable length between 26 and 38 inches" }
        },
        {
          title: "TIPS & WARNINGS",
          content: { content1: "  Keep in a jewelry box to preserve quality.", content2: "  Keep out of swimming pools to prevent discoloration.", content3: "  We recommend you clean your jewelry every 3-4 months." }
        },
        {
          title: "LOCAL AVAILABILITY",
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
          </svg>
        }
      ]
    },
    {
      id: 31, img: require('./images/earings6.png'), title: 'STAR BUNDLE STUDS', price: 100.00,
      tittle: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      accordionData: [
        {
          title: "DETAILS",
          content: { content1: "14k gold", content2: "30 inches long", content3: "Adjustable length between 26 and 38 inches" }
        },
        {
          title: "TIPS & WARNINGS",
          content: { content1: "  Keep in a jewelry box to preserve quality.", content2: "  Keep out of swimming pools to prevent discoloration.", content3: "  We recommend you clean your jewelry every 3-4 months." }
        },
        {
          title: "LOCAL AVAILABILITY",
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
          </svg>
        }
      ]
    },
    {
      id: 32, img: require('./images/earings7.png'), title: 'SPHERICAL DROPS', price: 150.00,
      tittle: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      accordionData: [
        {
          title: "DETAILS",
          content: { content1: "14k gold", content2: "30 inches long", content3: "Adjustable length between 26 and 38 inches" }
        },
        {
          title: "TIPS & WARNINGS",
          content: { content1: "  Keep in a jewelry box to preserve quality.", content2: "  Keep out of swimming pools to prevent discoloration.", content3: "  We recommend you clean your jewelry every 3-4 months." }
        },
        {
          title: "LOCAL AVAILABILITY",
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
          </svg>
        }
      ]
    },
    {
      id: 33, img: require('./images/earings8.png'), title: 'CHAINED STUDS', price: 100.00,
      tittle: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      accordionData: [
        {
          title: "DETAILS",
          content: { content1: "14k gold", content2: "30 inches long", content3: "Adjustable length between 26 and 38 inches" }
        },
        {
          title: "TIPS & WARNINGS",
          content: { content1: "  Keep in a jewelry box to preserve quality.", content2: "  Keep out of swimming pools to prevent discoloration.", content3: "  We recommend you clean your jewelry every 3-4 months." }
        },
        {
          title: "LOCAL AVAILABILITY",
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
          </svg>
        }
      ]
    },
    {
      id: 34,
      img: require('./images/necklace6.png'),
      title: 'OPAL HEART',
      price: 100.00,
      tittle: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      accordionData: [
        {
          title: "DETAILS",
          content: { content1: "14k gold", content2: "30 inches long", content3: "Adjustable length between 26 and 38 inches" }
        },
        {
          title: "TIPS & WARNINGS",
          content: { content1: "  Keep in a jewelry box to preserve quality.", content2: "  Keep out of swimming pools to prevent discoloration.", content3: "  We recommend you clean your jewelry every 3-4 months." }
        },
        {
          title: "LOCAL AVAILABILITY",
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
          </svg>
        }
      ]
    },
    {
      id: 35,
      img: require('./images/necklace7.png'),
      title: 'INTERLOCKING GOLD',
      price: 200.00,
      tittle: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      accordionData: [
        {
          title: "DETAILS",
          content: { content1: "14k gold", content2: "30 inches long", content3: "Adjustable length between 26 and 38 inches" }
        },
        {
          title: "TIPS & WARNINGS",
          content: { content1: "  Keep in a jewelry box to preserve quality.", content2: "  Keep out of swimming pools to prevent discoloration.", content3: "  We recommend you clean your jewelry every 3-4 months." }
        },
        {
          title: "LOCAL AVAILABILITY",
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
          </svg>
        }
      ]
    },
    {
      id: 36,
      img: require('./images/necklace8.png'),
      title: 'LARIAT',
      price: 150.00,
      tittle: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      accordionData: [
        {
          title: "DETAILS",
          content: { content1: "14k gold", content2: "30 inches long", content3: "Adjustable length between 26 and 38 inches" }
        },
        {
          title: "TIPS & WARNINGS",
          content: { content1: "  Keep in a jewelry box to preserve quality.", content2: "  Keep out of swimming pools to prevent discoloration.", content3: "  We recommend you clean your jewelry every 3-4 months." }
        },
        {
          title: "LOCAL AVAILABILITY",
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
          </svg>
        }
      ]
    },
    {
      id: 37,
      img: require('./images/necklace9.png'),
      title: 'TAG PENDANT',
      price: 100.00,
      tittle: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      accordionData: [
        {
          title: "DETAILS",
          content: { content1: "14k gold", content2: "30 inches long", content3: "Adjustable length between 26 and 38 inches" }
        },
        {
          title: "TIPS & WARNINGS",
          content: { content1: "  Keep in a jewelry box to preserve quality.", content2: "  Keep out of swimming pools to prevent discoloration.", content3: "  We recommend you clean your jewelry every 3-4 months." }
        },
        {
          title: "LOCAL AVAILABILITY",
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
          </svg>
        }
      ]
    },
    {
      id: 38,
      img: require('./images/necklace6.png'),
      title: 'FLORA PENDANT',
      price: 300.00,
      tittle: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      accordionData: [
        {
          title: "DETAILS",
          content: { content1: "14k gold", content2: "30 inches long", content3: "Adjustable length between 26 and 38 inches" }
        },
        {
          title: "TIPS & WARNINGS",
          content: { content1: "  Keep in a jewelry box to preserve quality.", content2: "  Keep out of swimming pools to prevent discoloration.", content3: "  We recommend you clean your jewelry every 3-4 months." }
        },
        {
          title: "LOCAL AVAILABILITY",
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
          </svg>
        }
      ]
    },
    { id: 39, title: "GIFTS $100 AND UNDER", img: require('./images/gift1.png') },
    { id: 40, title: "GIFTS $200  -  $300", img: require('./images/gift2.png') },
    { id: 41, title: "GIFTS $300 AND MORE", img: require('./images/gift3.png') },
    { id: 42, title: "GIFTS FOR HIM", img: require('./images/gift4.png') },
    { id: 43, title: "GIFTS FOR HER", img: require('./images/gift5.png') },
    { id: 44, title: "GIFTS FOR THEM", img: require('./images/gift6.png') },
  ])
  return (
    <ShoppingBagContext.Provider value={{ shoppingBag, setShoppingBag, addToBag, removeFromBag }}>
      <WishlistContext.Provider value={{ wishlistItems, setWishlistItems }}>
        <productContext.Provider value={{ categories, SetCategories }}>
          <Navbars />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='NewRelease' element={<NewRelease />} />
            <Route path='/AddInfo/:id' element={<NewAddInfo />} />
            <Route path='/bracelets' element={<Bracelets />} />
            <Route path='/rings' element={<Rings />} />
            <Route path='/charms' element={<Charms />} />
            <Route path='/earrings' element={<Earrings />} />
            <Route path='/gift' element={<Gift />} />
            <Route path="/necklaces" element={<Necklaces />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path='/orderreview' element={<OrderReview />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/order' element={<OrderConfirmation />} />
          </Routes>
          <Footer />
        </productContext.Provider>
      </WishlistContext.Provider>
    </ShoppingBagContext.Provider>
  );
}

export default App;