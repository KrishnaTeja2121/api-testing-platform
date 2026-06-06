import { HttpMethod } from "@/types/api"; // We are importing a TypeScript type.

/*This defines what data the component expects.
MethodSelector needs:
1. Current selected value
2. Function to call when changed
*/
interface Props {
  value: HttpMethod;
  onChange: (method: HttpMethod) => void;
}

const methods: HttpMethod[] = [
  "GET",
  "POST",
  "PUT",
  "PATCH",
  "DELETE",
];

/*
This is called destructuring.

Without destructuring: function MethodSelector(props: Props)
You would write:
props.value
props.onChange

Instead we extract them immediately:
*/

export default function MethodSelector({
  value,
  onChange,
}: Props) {
  return (
    // Return JSX. Select Returns Dropdown
    <select
    /*
    This is important.

  The selected value comes from React state.

  Not from the browser.

React controls it.*/
      value={value}

      // confusing line
      // e - browser event
      // Target = element that triggered event. in this case select
      // e.target.value returns the selected value
      onChange={(e) =>
        onChange(e.target.value as HttpMethod) // typescript sees e.target.value as string,so we are sating to consider as HttpMethod
      }
      className="border rounded px-3 py-2"
    > // Rendering Options
      {methods.map((method) => (
        <option key={method}>
          {method}
        </option>
      ))}
    </select>
  );
}