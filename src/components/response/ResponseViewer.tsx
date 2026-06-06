import { ApiResponse }
from "@/types/api";

interface Props {
  response: ApiResponse | null;
}

export default function ResponseViewer({
  response,
}: Props) {
  if (!response) {
    return null;
  }

  return (
    <div className="mt-8 space-y-4">

      <h2
        className="
          text-xl
          font-bold
        "
      >
        Response
      </h2>

      <div
        className="
          flex
          gap-6
          text-sm
          font-medium
        "
      >
        <span>
          Status:
          {" "}
          {response.status}
          {" "}
          {response.statusText}
        </span>

        <span>
          Time:
          {" "}
          {response.responseTime}
          ms
        </span>
      </div>

      <div>
        <h3
          className="
            font-semibold
            mb-2
          "
        >
          Headers
        </h3>

        <pre
          className="
            bg-gray-100
            p-4
            rounded
            overflow-auto
          "
        >
          {JSON.stringify(
            response.headers,
            null,
            2
          )}
        </pre>
      </div>

      <div>
        <h3
          className="
            font-semibold
            mb-2
          "
        >
          Body
        </h3>

        <pre
          className="
            bg-gray-100
            p-4
            rounded
            overflow-auto
          "
        >
          {JSON.stringify(
            response.body,
            null,
            2
          )}
        </pre>
      </div>

    </div>
  );
}