import siteConfig from 'siteConfig.json';

export interface OccasionPageData {
  title: string;
  image: string;
  imageAlt: string;
  content: string; // markdown
}

// ── Private Charters ────────────────────────────────────────────────────────

export const privateChartersData: OccasionPageData = {
  title: 'Private Charters',
  image: `${process.env.PUBLIC_URL}/static/private-charters.png`,
  imageAlt: 'Wedding rings aboard Schooner Liberté',
  content: `Step aboard Liberté, a magnificent 74-foot, three-masted staysail schooner, and enjoy an unforgettable private sailing experience.

### Charter Highlights

- Up to 49 guests (U.S.C.G. certified)
- Full onboard bar & music
- Spacious deck
- Private and Fully Customizable
- Cape Cod Sailing Season: ${siteConfig.season}

### Charter Rates

Rates start at **$1,400** for a morning sail — and vary by date, time of day, and number of guests. For an exact quote for your event please email ${siteConfig.contact.email}.

*Rates include vessel, captain, crew, taxes, and brokerage fees.*
*Not included: catering, beverages, or gratuity (customary 15–20%).*

### Perfect for Any Occasion

Weddings • Corporate outings • Birthdays • Bachelorette parties • Family reunions

### Guest Information

- Arrive 30 minutes prior to departure
- No BYOB (full bar onboard)
- Boat-friendly footwear recommended
- No balloons permitted
- No onsite parking (public lot ~8-minute walk)

*In the event of unsafe weather, charters will be rescheduled or refunded at the captain's discretion.*

### Vessel Specs

77′ overall | 65′ on deck | 18.5′ beam  
Six sails · 1,700+ sq. ft. of sail  
135hp diesel · Cruises at 8.5 knots`,
};

// ── FAQ ──────────────────────────────────────────────────────────────────────

export const faqData: OccasionPageData = {
  title: 'FAQ',
  image: `${process.env.PUBLIC_URL}/static/vessel-image.jpg`,
  imageAlt: 'Aboard Schooner Liberté',
  content: `### What should we bring?

Guests are encouraged to dress for the elements and to bring an extra jacket, sun hat, or sunscreen. If you forget any of these items, we have extras onboard as well as hats and sweatshirts available for purchase. You are welcome to bring a light lunch, snacks, or non-alcoholic beverages as long as they fit in a small bag. Please no coolers. We have a full licensed bar onboard and cannot allow any outside alcohol.

### Where should we park?

Unfortunately, we cannot offer any onsite parking and we strongly encourage guests to carpool or use ride share services. The Falmouth marina park at 180 Scranton Ave. offers free public parking and is located an 8-minute walk from our dock at ${siteConfig.contact.addressLine1} It may fill up at certain times, so we suggest arriving early.

### Where do we sail?

All public sails depart from Jim's Clam Shack at ${siteConfig.contact.addressLine1} ${siteConfig.contact.addressLine2}. We depart Falmouth Harbor, promptly set sail, and depending on the wind and tide we may head west to Nobska Lighthouse, south to Vineyard Haven, or east past Falmouth Heights. Regardless of where the wind carries us it is guaranteed to be beautiful!

### What is the cancellation policy?

In the event the captain decides to cancel a trip due to the weather everyone will receive a complete refund or opportunity to rebook. A passenger booked on a public sail may choose to cancel their trip up until the night before their reserved sail for a complete refund minus a $25 cancellation fee per group. There are no refunds for "no shows". Private charters are non-refundable unless the captain cancels due to severe weather.`,
};

// ── Bachelorette Parties ─────────────────────────────────────────────────────

export const bacheloretteData: OccasionPageData = {
  title: 'Bachelorette\nParties',
  image: `${process.env.PUBLIC_URL}/static/bachelorette.jpg`,
  imageAlt: 'Toasting with champagne aboard Schooner Liberté',
  content: `Liberté offers two great options for an unforgettable bachelorette party...

### Private Charter

Enjoy our 77′ schooner exclusively for your group (up to 49 guests)! Private charters are fully customizable, with a full onboard bar and spacious decks. You choose the music, decor, food, and drinks. Set the mood (nauti or elegant?) and relax without the worry of disrupting other guests.

### Private Charter Rates

Rates start at **$1,400** for a morning sail — and vary by date, time of day, and number of guests. For an exact quote for your event please email ${siteConfig.contact.email}.

*Rates include vessel, captain, crew, taxes, and brokerage fees.*
*Not included: catering, beverages, or gratuity (customary 15–20%).*

### Public Day Sail (Ticketed Option)

For smaller gatherings (up to 20 guests), your group is also welcome to join one of our scheduled public sails by purchasing individual tickets. This option offers the same beautiful sailing experience and onboard bar, while sharing the sail with other guests.

### Vessel Specs

77′ overall | 65′ on deck | 18.5′ beam  
Six sails · 1,700+ sq. ft. of sail  
135hp diesel · Cruises at 8.5 knots`,
};
