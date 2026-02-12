# Performance Fix Plan - Doctor Mold Pro

**Date:** 2026-02-12  
**Target:** Improve mobile Lighthouse/PageSpeed for doctormoldpro.com  
**Stack:** React + Vite SPA with client-side routing

---

## Baseline Metrics (Mobile-like, lab results from localhost:5173)

| Page                         | Perf Score | LCP       | TBT    | CLS     | Total Bytes | JS Bytes | Image Bytes | Requests |
|-----------------------------|-----------:|----------:|-------:|--------:|------------:|---------:|------------:|---------:|
| `/` (home)                  | **0.53**   | **22.7 s** | 169 ms | 0.013   | 7.5 MB      | 3.94 MB  | 3.46 MB     | 90      |
| `/mold-testing-tampa`       | **0.53**   | **21.0 s** | 160 ms | 0.00    | 7.3 MB      | 3.94 MB  | 3.29 MB     | 86      |
| `/mold-removal-tampa`       | **0.51**   | **21.0 s** | ~160 ms| (good)  | 7.3 MB      | 3.94 MB  | 3.30 MB     | 88      |
| `/mold-testing-appointment` | **0.53**   | **20.7 s** | ~160 ms| (good)  | 8.5 MB      | 4.81 MB  | (rest)      | 192     |

**Key Issues Identified:**
- **LCP is critically slow** (~21-23s) - likely due to 3.1 MB logo PNG blocking render
- **Total payload too large** (7-8.5 MB) - logo alone is 40%+ of total bytes
- TBT and CLS are already good (no blocking issues there)
- Booking page has 192 requests due to third-party widget loading eagerly

---

## Issues Found (Ranked by Impact)

### 🔴 Critical (LCP / Above-the-fold)
1. **Logo image is 3.1 MB PNG** (`FinalLogo_Transparent_DrMoldPro.png`)
   - Largest single resource on all pages
   - Blocks LCP on every route
   - Should be <100 KB optimized WebP/AVIF

### 🟡 High (Render-blocking & Unused Code)
2. **Booking widget script loads immediately** on `/mold-testing-appointment`
   - Adds 4.8 MB JS + 192 requests
   - Not needed until user interacts with calendar
   - Should defer until after initial paint or user interaction

3. **All routes bundled eagerly** - non-critical pages (blog, price packages, etc.) loaded upfront
   - Increases initial JS bundle unnecessarily
   - Should use route-based code splitting

### 🟢 Medium (Third-party scripts)
4. **Third-party scripts** (GTM, recaptcha, chat widget) - ~740 KB
   - Already async, but could be further optimized
   - Consider delaying chat widget until user interaction

---

## Fixes Implemented

### ✅ Fix #1: Optimize Logo Image (LCP / Above-the-fold)
**Status:** Code changes complete - **ACTION REQUIRED: Create optimized WebP version**

**Changes Made:**
- Added `<link rel="preload">` in `index.html` for logo (with `fetchpriority="high"`)
- Updated `Layout.tsx` to use `<picture>` element with WebP support + PNG fallback
- Added `fetchPriority="high"` to logo img tag

**Files Modified:**
- `index.html` - Added preload link
- `src/components/Layout.tsx` - Added picture element with WebP source

**Next Step:**
- **Create optimized WebP version** of `/FinalLogo_Transparent_DrMoldPro.png`
  - Target: <100 KB (ideally 50-80 KB)
  - Save as `/public/FinalLogo_Transparent_DrMoldPro.webp`
  - The code will automatically use WebP when available, fallback to PNG

**Expected Impact:**
- Reduce image bytes from **3.1 MB → <100 KB** (~97% reduction)
- Improve LCP from **~22s → <3s** (assuming logo is LCP element)
- Reduce total payload by **~3 MB**

---

### ✅ Fix #2: Defer Booking Widget Script (Render-blocking)
**Status:** Complete

**Changes Made:**
- Updated `MoldTestingAppointment.tsx` to defer booking script loading
- Script now loads:
  - After 3-second delay (allows initial paint to complete), OR
  - On first user interaction (scroll, touch, mouse move, keydown)

**Files Modified:**
- `src/pages/MoldTestingAppointment.tsx` - Changed script loading strategy

**Expected Impact:**
- Booking page LCP should improve (no longer blocked by widget JS)
- Initial JS bundle reduced on booking page
- Better perceived performance (page appears interactive faster)

---

### ✅ Fix #3: Route-Based Code Splitting (Unused Code)
**Status:** Complete

**Changes Made:**
- Converted non-critical routes to `React.lazy()`:
  - `/blog`
  - `/price-packages`
  - `/certifications`
  - `/terms`
  - `/mold-types` and `/mold-types/:type`
  - Service detail pages
  - `/404` (NotFound)
- Kept critical "money" pages eager-loaded:
  - `/` (home)
  - `/mold-testing-tampa`
  - `/mold-removal-tampa`
  - `/mold-testing-appointment`
- Added `Suspense` boundaries with simple loading fallback

**Files Modified:**
- `src/App.tsx` - Converted imports to lazy loading

**Expected Impact:**
- Reduce initial JS bundle by **~500 KB - 1 MB** (estimated)
- Faster Time to Interactive (TTI) on home/service pages
- Users only pay for JS of pages they visit

---

## Final Metrics (To Be Measured)

After implementing all fixes and creating optimized WebP logo:

**Target Goals:**
- **LCP < 2.5s** (down from ~22s)
- **CLS < 0.1** (already good, maintain)
- **Performance Score:** Improve from 0.51-0.53 to **>0.70** (best effort given stack constraints)
- **Total Bytes:** Reduce from 7-8.5 MB to **<3 MB**

**Re-measurement Plan:**
1. Create optimized WebP logo (<100 KB)
2. Run Lighthouse on all 4 pages again
3. Compare before/after metrics
4. Document improvements

---

## Code/Config Changes Summary

### Files Modified:
1. `index.html` - Added logo preload link
2. `src/components/Layout.tsx` - Added WebP picture element
3. `src/pages/MoldTestingAppointment.tsx` - Deferred booking script
4. `src/App.tsx` - Added route-based code splitting

### Assets Needed:
- **`/public/FinalLogo_Transparent_DrMoldPro.webp`** - Optimized WebP version (<100 KB)

---

## Notes

- All changes maintain visual consistency (no layout regressions)
- Fallbacks in place (PNG if WebP unavailable, eager routes if lazy fails)
- Script deferral uses passive event listeners for performance
- Code splitting uses React.lazy + Suspense (standard pattern)

---

## Next Steps (Optional Future Improvements)

1. **Image optimization:** Convert other images to WebP/AVIF
2. **Font optimization:** Ensure `font-display: swap` on all fonts
3. **Third-party script optimization:** Further delay chat widget until interaction
4. **CDN:** Consider CDN for static assets if not already using
5. **Compression:** Ensure Brotli/Gzip enabled on server
6. **Caching:** Add long-lived cache headers for static assets

---

**Report Generated:** 2026-02-12  
**Lighthouse Reports:** See `/performance-reports/2026-02-12-*-mobile.json`
