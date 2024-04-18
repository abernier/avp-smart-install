"use client";

import { useRef } from "react";

export default function Input({ id }: { id?: string | null }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const handlePaste = (event: React.ClipboardEvent) => {
    event.preventDefault(); // Prevent the default paste behavior

    // Get the text from the clipboard
    const pastedText = event.clipboardData.getData("text");

    // Regular expression to find the ID in the URL
    const match = pastedText.match(/id(\d+)/);

    // If a match is found and the ref is correctly attached
    if (match && inputRef.current) {
      inputRef.current.value = match[1]; // Set the value directly on the input
    } else {
      // Optional: handle the case where no valid ID is found
      // alert("Please paste a valid App Store URL.");
    }
  };

  return (
    <label>
      <div className="mb-2">app-id</div>
      <input
        type="text"
        name="id"
        defaultValue={id ?? ""}
        ref={inputRef}
        onPaste={handlePaste}
        placeholder="123456789"
      />
    </label>
  );
}
