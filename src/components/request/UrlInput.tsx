/*
I need:
1. Current URL
2. Function to update URL */

interface Props {
  value: string;
  onChange: (url: string) => void;
}

export default function UrlInput({
  value,
  onChange,
}: Props) {
  return (
    <input
      type="text"
      value={value}
      placeholder="https://api.example.com"
      onChange={(e) => onChange(e.target.value)}
      className="flex-1 border rounded px-3 py-2"
    />
  );
}

