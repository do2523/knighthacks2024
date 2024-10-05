"use client"

import { useState } from "react";

export default function Input() {
    const [input, setInput] = useState("");

    function handleSubmit() {
        setInput("");
    }

    function handleKeyDown(keyDown: React.KeyboardEvent<HTMLInputElement>) {
        if (keyDown.key === "Enter") {
            handleSubmit();
        }
    }

    function handleChange (event: React.ChangeEvent<HTMLInputElement>) {
        setInput(event.target.value);
      };

    return <input value={input} onChange={handleChange} onKeyDown={handleKeyDown} className="border-black border-solid border-2"/>
}