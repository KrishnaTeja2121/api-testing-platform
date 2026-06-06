interface Props {
  response: unknown;
}

export default function ResponseViewer({
  response,
}: Props) {
  if (!response) {
    return null;
  }

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-2">
        Response
      </h2>

      <pre className="bg-gray-100 p-4 rounded overflow-auto">
        {JSON.stringify(response, null, 2)}
      </pre>
    </div>
  );
}