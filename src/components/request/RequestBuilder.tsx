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

  async function handleSendRequest() {
    try {
      const result = await sendRequest({
        method,
        url,
        headers: [],
        body: "",
      });

      setResponse(result);
    } catch (error) {
      console.error(
        "Request failed:",
        error
      );
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
        className="
          bg-blue-600
          text-white
          px-4
          py-2
          rounded
          hover:bg-blue-700
        "
      >
        Send Request
      </button>

      <ResponseViewer
        response={response}
      />
    </div>
  );
}