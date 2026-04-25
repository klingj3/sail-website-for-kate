# The Schooner Liberté — Website

This is a little project I'm doing for my sister Kate's new sailing business on
Cape Cod. The site shows off the different sails she offers and lets people book
tickets through FareHarbor.

What follows below are isntructions for her to make small changes to this site as a non-programmer.

---

## Quick reference — what to edit and where

| What you want to change | File to open |
| ----------------------- | ------------ |
| Sail cards (prices, times, descriptions, booking links) | `src/sails.json` |
| Contact info, season dates, social links | `src/siteConfig.json` |
| TripAdvisor review quotes | `src/testimonials.json` |
| Gallery photos | `src/gallery.json` |
| Private charters / bachelorette / FAQ page text | `src/data/occasionPages.ts` |

All of these files are designed to be edited without touching any other code.
Only change the text **between the quote marks** `" "` — don't delete the
quotes or commas.

---

## How to edit sail info (prices, times, descriptions, etc.)

**`src/sails.json`**

Open that file and you'll see a list of sails. Each one looks like this:

```json
{
  "title": "Morning Sails",
  "image": "/static/morning-sail.jpg",
  "duration": "2 hrs",
  "departs": "10:00 am",
  "description": "A beautiful time of day for spotting wildlife...",
  "pricing": "$40 / adult · $25 / child",
  "bookingUrl": "https://fareharbor.com/embeds/book/..."
}
```

| Field           | What it is                                                      |
| --------------- | --------------------------------------------------------------- |
| **title**       | The name shown on the card (e.g. "Morning Sails")               |
| **image**       | Path to the photo in the `public/static/` folder                |
| **duration**    | How long the sail lasts (e.g. "2 hrs")                          |
| **departs**     | Departure time (e.g. "10:00 am")                                |
| **description** | A paragraph describing the experience                           |
| **pricing**     | Price text shown on the card (e.g. "$40 / adult · $25 / child") |
| **bookingUrl**  | The FareHarbor link people go to when they click "Book Now"     |

- To add a sail: copy one block (`{` … `}`), paste it after the last one, and
  fill in the values. Make sure there's a comma between each block.
- To remove a sail: delete the entire block including the comma before or after
  it.

---

## How to edit contact info, season dates, and links

**`src/siteConfig.json`**

This file is the single source of truth for information that appears in
multiple places on the site — change it once and it updates everywhere.

```json
{
  "season": "June 20 – September 14",
  "contact": {
    "phone": "508-524-9121",
    "email": "schoonerliberte@gmail.com",
    "venueName": "Falmouth Harbor",
    "addressLine1": "227 Clinton Ave.",
    "addressLine2": "Falmouth, MA 02540"
  },
  "links": {
    "fareHarbor": "https://fareharbor.com/...",
    "tripAdvisor": "https://www.tripadvisor.com/...",
    "instagram": "https://www.instagram.com/schoonerliberte",
    "instagramHandle": "@schoonerliberte"
  },
  "socialProof": {
    "rating": "4.9",
    "reviewCount": "200+"
  }
}
```

Common things to update each season:

- **`season`** — update the start and end dates at the top of every season.
- **`socialProof.reviewCount`** — bump this as more TripAdvisor reviews come in.
- **`links.fareHarbor`** — if FareHarbor generates a new booking URL.

---

## How to rotate TripAdvisor review quotes

**`src/testimonials.json`**

A simple list of quotes shown in the Testimonials section. Each entry has three
fields: `headline`, `quote`, and `attribution`. Edit or replace any of them to
swap in newer reviews.

---

## How to update the photo gallery

**`src/gallery.json`**

A list of photos shown in the Gallery section. Each entry has:

| Field   | What it is                                                    |
| ------- | ------------------------------------------------------------- |
| **src** | Path to the image inside `public/static/` (e.g. `/static/gallery-1.jpg`) |
| **alt** | A short description of the photo (used by screen readers)     |

To add a photo: drop the image file into `public/static/`, then add a new entry
to the list. To remove a photo: delete its entry from the list.

---

## Making changes on GitHub (no terminal needed)

You can edit every file mentioned above directly on GitHub in your browser.
The general flow is: **create a branch → make your edits → open a pull request
→ merge it**. This keeps the live site safe while you preview changes.

### 1. Create a branch

1. Go to the repo:
   <https://github.com/klingj3/sail-website-for-kate>
2. Click the branch dropdown (it says **master** by default) near the top-left.
3. Type a short name for your branch, e.g. `update-sail-prices` or
   `new-gallery-photos`.
4. Click **"Create branch: … from master"**.

You're now on your own branch — any edits you make here won't affect the live
site until you merge them.

### 2. Edit a JSON file in the browser

1. While on your branch, navigate to the file you want to change (e.g.
   `kate-sailing-website/src/sails.json`).
2. Click the **pencil icon** (✏️) in the top-right corner of the file view to
   open the editor.
3. Make your changes. The same rules apply as above — only change the text
   **between the quote marks** and don't delete commas or brackets.
4. When you're done, click **"Commit changes…"**, add a short description of
   what you changed (e.g. "Update morning sail price"), and commit to your
   branch.

### 3. Add or replace images

You can upload images directly through GitHub too:

1. On your branch, navigate to `kate-sailing-website/public/static/`.
2. Click **"Add file" → "Upload files"**.
3. Drag your images in (or click "choose your files") and commit to your branch.

To replace an existing image, upload a new file **with the exact same name** —
GitHub will overwrite it.

> **Important — compress your images first!**
>
> Giant photos straight from a phone (3–8 MB each) will make the site slow.
> Before uploading, run every image through a free compressor:
>
> - [TinyPNG](https://tinypng.com/) — works for both PNG and JPEG, just
>   drag and drop
> - [Squoosh](https://squoosh.app/) — by Google, lets you fine-tune quality
>   vs. size
> - [iLoveIMG](https://www.iloveimg.com/compress-image) — batch compression
>
> **Target size: under 200 KB per image, ideally under 100 KB.** JPEGs at
> around 1200 px wide and 70–80% quality usually land in that range and still
> look great on screen. If a photo is only used as a small card thumbnail,
> 50 KB or less is plenty.

### 4. Open a pull request and merge

1. After committing your changes, GitHub will show a banner saying your branch
   has recent pushes. Click **"Compare & pull request"**.
2. Give the PR a title (e.g. "Update prices for 2026 season") and click
   **"Create pull request"**.
3. If it's not urgent, in reviews add me and I'll take a look and merge it for you.
4. Otherwise, or if you feel confident in small adjustments, just merge it in yourself. 

The site will automatically rebuild and deploy with your changes. Give it a
minute or two, then refresh the live site to check.

### 5. Clean up

After merging, GitHub will offer to delete the branch. Go ahead and click
**"Delete branch"** to keep things tidy.

---

## Running the site locally (optional, advanced)

If you do want to run things locally:

```
npm install
npm start
```

This opens the site at [http://localhost:3000](http://localhost:3000). Changes
you save to any file will hot-reload in the browser automatically.

## Building for production

```
npm run build
```

This creates an optimized build in the `build/` folder, ready to deploy.

### Use

ALL RIGHTS RESERVED.

While I'm normally an open-source guy, in this specific case I do ***not*** allow anyone
to use this code and rip it off to make a sick website to be a competitor to my sister's business. 

Violators ***will*** be keelhauled, made to walk the plank and stranded on a desert island.