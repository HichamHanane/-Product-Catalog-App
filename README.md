# Product Catalog (Vite + React)

Simple product catalog UI built with Vite and React. Uses a Redux-style slice for product state and a small component hierarchy for listing, filtering, and favoriting products.

## Quick start / Setup

Prerequisites
- Node.js 16+ and npm

Install and run
```sh
npm install
npm run dev   # start dev server (Vite)
npm run build # build for production
```

Useful files
- [package.json](package.json)
- [index.html](index.html)
- [vite.config.js](vite.config.js)
- [src/main.jsx](src/main.jsx)
- [src/App.jsx](src/App.jsx)
- [`ProductSlice`](src/Features/ProductSlice.js) — state slice for products ([src/Features/ProductSlice.js](src/Features/ProductSlice.js))
- [`store`](store/store.js) — Redux store config ([store/store.js](store/store.js))
- Components:
  - [src/Components/ProductList/ProductList.jsx](src/Components/ProductList/ProductList.jsx)
  - [src/Components/ProductCard/ProductCard.jsx](src/Components/ProductCard/ProductCard.jsx)
  - [src/Components/FilterBar/FilterBar.jsx](src/Components/FilterBar/FilterBar.jsx)
  - [src/Components/FavoriteSidebar/FavoriteSidebar.jsx](src/Components/FavoriteSidebar/FavoriteSidebar.jsx)
  - [src/Components/Header/Header.jsx](src/Components/Header/Header.jsx)
- Pages:
  - [src/pages/ProductPage.jsx](src/pages/ProductPage.jsx)

## Design notes / decisions

- Build tooling
  - Chosen Vite for fast dev server and simple build configuration ([vite.config.js](vite.config.js)).
- State management
  - Product state is colocated in a single slice file: [`ProductSlice`](src/Features/ProductSlice.js). This keeps actions and reducers together and makes it easy to extend selectors and async actions.
  - Store configuration lives in [`store`](store/store.js) to keep app bootstrap logic isolated.
- Component structure
  - Presentational components (e.g. `ProductCard`, `ProductList`) are intentionally simple and stateless where possible — they receive data via props and emit events via callbacks.
  - `FilterBar` handles filter UI and lifts filter state up to parent page (`src/pages/ProductPage.jsx`) to avoid global coupling.
  - `FavoriteSidebar` is a focused UI surface for favorites to keep the main list layout clean.
- Styling
  - Simple CSS modules/files per component (see each component folder for `*.css`). This keeps styles colocated and easy to reason about.

## Things I'd improve with more time

- Tests
  - Add unit tests (Jest/React Testing Library) for slices and key components.
- Type safety
  - Migrate to TypeScript to make component props and store types explicit.
- Performance
  - Add memoization for list rendering and virtualized list for very large datasets.
  - Debounce filter inputs and optimize expensive selectors with reselect.
- UX / accessibility
  - Improve keyboard navigation and ARIA attributes for interactive controls.
  - Add responsive breakpoints and test across screen sizes.
- Data handling
  - Add server-side pagination / lazy loading for large product catalogs.
  - Add offline caching and optimistic updates for favorite toggles.
- CI / DX
  - Add linting and pre-commit hooks (ESLint, Prettier).
  - Add GitHub Actions for build and test on PR.

## Contributing

1. Fork and create a feature branch.
2. Run the dev server and ensure lint/tests pass.
3. Open a pull request with a clear description.

---

If you want, I can add a basic test scaffold or convert the project to TypeScript next.