"use client"; // important in Next.js.

import { useState } from "react"; // React hook. allows components to remember data
import MethodSelector from "./MethodSelector";
import UrlInput from "./UrlInput";
import { HttpMethod } from "@/types/api";

export default function RequestBuilder() {
  const [method, setMethod] =
    useState<HttpMethod>("GET");

  const [url, setUrl] = useState("");

  return (
    <div className="space-y-4">
      <div className="flex gap-3">
        <MethodSelector
          value={method}
          onChange={setMethod}
        />

        <UrlInput
          value={url}
          onChange={setUrl}
        />
      </div>

      <button
        className="
          bg-blue-600
          text-white
          px-4
          py-2
          rounded
        "
      >
        Send Request
      </button>
    </div>
  );
}