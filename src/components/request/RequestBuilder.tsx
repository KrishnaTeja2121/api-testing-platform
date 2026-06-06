"use client";

import { useState } from "react";

import MethodSelector from "./MethodSelector";
import UrlInput from "./UrlInput";

import ResponseViewer from "../response/ResponseViewer";

import { HttpMethod } from "@/types/api";

import { sendRequest } from "@/services/apiService";

export default function RequestBuilder() {
  const [method, setMethod] =
    useState<HttpMethod>("GET");

  const [url, setUrl] = useState("");

  const [response, setResponse] =
    useState(null);

  const [loading, setLoading] =
  useState(false);

  const [error, setError] =
  useState("");

   


async function handleSendRequest() {
  try {
    setError("");
    setLoading(true);

    const result =
      await sendRequest({
        method,
        url,
        headers: [],
        body: "",
      });

    setResponse(result);
  } catch (error) {
    setError(
      "Failed to execute request"
    );

    console.error(error);
  } finally {
    setLoading(false);
  }
}

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
  onClick={handleSendRequest}
  disabled={loading}
  className="
    bg-blue-600
    text-white
    px-4
    py-2
    rounded
    disabled:bg-gray-400
  "
>
  {loading
    ? "Sending..."
    : "Send Request"}
</button>

      <ResponseViewer
        response={response}
      />
    </div>
  );
}