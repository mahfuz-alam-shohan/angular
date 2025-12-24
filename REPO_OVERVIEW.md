# Repository overview

This document describes the repository structure, why key files exist, where secrets and design assets live, and how the front-end calls external APIs.

## What this repo is
An Angular single-page application (SPA) that renders a school/organization website. The app pulls content, notices, galleries, and staff data from a hosted API and renders them through Angular components and routed pages.

## Top-level files and what they do
- `angular.json` — Angular CLI workspace configuration (build, serve, test targets).
- `package.json` — Project metadata, scripts, and npm dependencies used by the app.
- `package-lock.json` / `yarn.lock` — Dependency lockfiles (npm/yarn) to keep installs deterministic.
- `tsconfig.json` — Base TypeScript compiler configuration.
- `tsconfig.app.json` — App-specific TypeScript build settings.
- `tsconfig.spec.json` — Test compilation settings.
- `karma.conf.js` — Karma test runner configuration for Angular unit tests.
- `tslint.json` — TSLint rules (legacy linting configuration).
- `README.md` / `README copy.md` — Project notes and usage documentation.
- `node_modules/` — Installed third‑party dependencies (generated, not source-controlled).

## Application entry points
- `src/main.ts` — Bootstraps the Angular app module.
- `src/index.html` — HTML shell used by Angular to mount the app.
- `src/polyfills.ts` — Browser polyfills used by Angular.
- `src/test.ts` — Test bootstrap for Karma/Jasmine.

## Application configuration and environments
- `src/environments/environment.ts` — Default (dev) environment config, including `c` and `k` keys.
- `src/environments/environment.prod.ts` — Production environment config (currently mirrors dev keys).

## Core Angular module/routing
- `src/app/app.module.ts` — Root module that declares components and imports HTTP, translation, and UI modules.
- `src/app/app-routing.module.ts` — Route table for pages like home, notices, galleries, and content pages.
- `src/app/app.component.ts` / `.html` / `.scss` — Root component shell and layout.

## Components and page layout
Component files live under `src/app/components/` and are organized by feature.

### Layout components
Located in `src/app/components/layouts/` and used to compose page structure:
- `aside/aside.component.*` — Sidebar content.
- `footer/footer.component.*` — Site footer.
- `navbar-style-two-2/navbar-style-two-2.component.*` — Header/navigation.
- `layout-document-*` and `layout-image-*` components — Shared layout wrappers for document and image blocks.

### Page components
Located in `src/app/components/pages/` and mapped in the router. Each page has a `.ts` (logic), `.html` (template), and `.scss` (styles) file:
- `home/` — Homepage.
- `notice/` — Notices list.
- `online-admisssion-pages/` — Online admission page.
- `image-gallery/`, `image-folder/` — Photo gallery and folders.
- `video-gallery/`, `video-folder/` — Video gallery and folders.
- `new-and-events/`, `new-and-events-items/` — News/events list and detail.
- `achievements/`, `achievements-item/` — Achievements list and detail.
- `governing-body/`, `chairman-messege/`, `vice-chairman/`, `principal-messages/`, `vice-principal/`, `cheif-patron/` — Administration profiles and messages.
- `mpo-teacher/`, `non-mpo-teacher/`, `mpo-office-staff/`, `non-mpo-office-staff/`, `hostel-in-charge/`, `hefz/` — Staff and department pages.
- `template-page/` — Shared template page used by many routes for CMS‑driven content.
- `contact/` — Contact page.

## Services, utilities, and configuration
- `src/app/app.service.ts` — High‑level service for fetching content, albums, notices, etc. Uses `Service` + `UrlConfig`.
- `src/app/api.service.ts` — Auth/token helper plus direct notice API call and URL normalization.
- `src/app/configs/service.ts` — HTTP helper with `get/post/put/delete` and `getKey` that adds headers.
- `src/app/configs/UrlConfig.ts` — Central list of API endpoint URLs.
- `src/app/EmitterService.ts` — Shared `BehaviorSubject` for app‑wide message updates.
- `src/app/utils/safe.pipe.ts` — Angular pipe for safely rendering trusted HTML/URLs.
- `src/app/utils/utility.ts` — Utility helpers (if used by components).

## Translations and localization
- `src/services/Lang_*.json` — Localized translation dictionaries.
- `src/services/home-translation-loader.service.ts` — Loads translation resources.
- `src/services/locale.ts` — Locale helpers.

## Styles and design assets
- `src/styles.scss` — Global styles for the application.
- `src/responsive.scss` — Responsive rules and overrides.
- `src/app/**/**/*.scss` — Component‑level styles scoped to specific UI pieces.
- `src/assets/` — Images, icons, and other static design assets.
- `src/favicon.ico` — Site favicon.

## Where secrets live (and how they are used)
> Note: these values are currently committed and should be treated as sensitive. If they are real secrets, rotate them and move to a secure environment mechanism.

- `src/environments/environment.ts` and `src/environments/environment.prod.ts` contain:
  - `c` and `k` values used as `X-App-Client` and `X-App-Key` headers.
- `localStorage['accessToken']` — Used by `Service` to attach `Authorization: Bearer <token>`.

## API base URLs
Defined in two places:
- `src/app/api.service.ts`
  - `apiUrl = https://portal2websiteapi.cloudcampus24.com/api/`
  - `apiUrlV1 = https://portal2websiteapi.cloudcampus24.com/api/v1/`
- `src/app/configs/UrlConfig.ts`
  - `rootUrl`, `apiUrl`, `apiUrlV1` (same domain, v1 paths)

## API endpoints and how to call them
### Auth and token management (`ApiService`)
- **Login / token:** `POST https://portal2websiteapi.cloudcampus24.com/api/UserAuth/login`
  - Method: `ApiService.getToken(postBody)`
  - Headers: `Content-Type: application/json`
- **Notices (token-protected):** `GET https://portal2websiteapi.cloudcampus24.com/api/v1/Notice/notices`
  - Method: `ApiService.getNotices(clientData)`
  - Headers: `Authorization: Bearer <AccessToken>`

### App data endpoints (`UrlConfig` + `Service.getKey`)
These endpoints are called via `AppService`, which uses `Service.getKey` to attach `X-App-Key` and `X-App-Client` headers from `environment`.

| AppService method | Endpoint | HTTP method | Purpose |
| --- | --- | --- | --- |
| `getNotices()` | `/api/v1/NoticeClient/notices` | GET | Public notices list (client‑key access). |
| `getClientBasics()` | `/api/v1/AppStructureClient/client-basics` | GET | App/site basic configuration. |
| `getImageAlbums()` | `/api/v1/AlbumClient/image-albums` | GET | Image album list. |
| `getImageFolders()` | `/api/v1/AlbumClient/image-albums-new` | GET | Image album folders. |
| `getImageAlbumsById(id)` | `/api/v1/AlbumClient/images/{id}` | GET | Images inside a specific album. |
| `getVideoAlbums()` | `/api/v1/AlbumClient/video-albums` | GET | Video album list. |
| `getVideoFolders()` | `/api/v1/AlbumClient/video-albums-new` | GET | Video album folders. |
| `getVideoAlbumsById(id)` | `/api/v1/AlbumClient/videos/{id}` | GET | Videos inside a specific album. |
| `getGBs()` | `/api/v1/GBMessageClient/governing-bodies` | GET | Governing body list. |
| `getGBMessages()` | `/api/v1/GBMessageClient/gb-messages` | GET | Governing body messages. |
| `getSlides()` | `/api/v1/AlbumClient/slide-images` | GET | Home page slider images. |
| `getTeaherStaff()` | `/api/v1/TeacherStaffClient/teachers-staffs` | GET | Teacher/staff directory. |
| `getContents()` | `/api/v1/ContentClient/contents` | GET | CMS content for template pages. |

### Example usage (from Angular components)
```ts
constructor(private appService: AppService) {}

ngOnInit(): void {
  this.appService.getClientBasics().subscribe((data) => {
    // use site basics
  });
}
```

### Header behavior summary
- `Service.getKey(...)` sends `X-App-Key` and `X-App-Client` headers using values from `environment`.
- `Service.get/post/put/delete(...)` sends `Authorization: Bearer <accessToken>` from `localStorage`.

## Where design/layout choices live
- Page layouts are defined in `src/app/components/pages/**.html`.
- Reusable layout blocks are in `src/app/components/layouts/`.
- Global theme and typography choices are in `src/styles.scss` and `src/responsive.scss`.
- Static images, logos, and media used in layouts are in `src/assets/`.

## Data flow summary (why these files exist)
- **Routing** (`app-routing.module.ts`) maps URLs to page components.
- **Components** render UI and call services for data.
- **Services** (`AppService`, `ApiService`, `Service`, `UrlConfig`) centralize API access and headers.
- **Translations** provide multilingual text for templates.
- **Environment files** keep runtime configuration and header keys.

