# API Testing Platform

A lightweight API testing interface built with Next.js, React, TypeScript, and Tailwind CSS.

## Overview

This project provides a browser-based request builder for sending HTTP API calls and inspecting responses. It supports:

- selecting HTTP methods (`GET`, `POST`, `PUT`, `PATCH`, `DELETE`)
- entering a request URL
- sending requests from the browser
- viewing response status, status text, headers, body, and response time
- basic error handling for failed requests

## Features

- **Request Builder**: choose the HTTP method and target URL
- **Response Viewer**: display response metadata and format JSON output
- **Live feedback**: loading state while a request is in progress
- **Type-safe API models**: `ApiRequest` and `ApiResponse` definitions in TypeScript

## Tech Stack

- Next.js `16.2.7`
- React `19.2.4`
- TypeScript `^5`
- Tailwind CSS `^4`
- ESLint `^9`

## Installation

1. Clone the repository

```bash
git clone https://github.com/your-org/api-testing-platform.git
cd api-testing-platform
```

2. Install dependencies

```bash
npm install
```

## Development

Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser to use the app.

## Build for Production

```bash
npm run build
npm run start
```

## Project Structure

- `src/app/page.tsx` — application entry point
- `src/components/layout/Header.tsx` — page header
- `src/components/request/RequestBuilder.tsx` — main request form and submit flow
- `src/components/request/MethodSelector.tsx` — HTTP method selection
- `src/components/request/UrlInput.tsx` — URL input field
- `src/components/response/ResponseViewer.tsx` — response display panel
- `src/services/apiService.ts` — request execution and response parsing
- `src/types/api.ts` — API request and response types

## Notes

- The current implementation sends requests from the browser using `fetch`.
- Response bodies are parsed as JSON and rendered with `JSON.stringify`.
- The request payload currently includes headers and body fields in the request type, but the browser fetch implementation only sends the URL and method.

## License

This project is currently provided without a license. Add a `LICENSE` file if you want to define usage terms.
