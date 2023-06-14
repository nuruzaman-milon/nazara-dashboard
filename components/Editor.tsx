"use client";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Editor = () => {
  const [text, setText] = useState("kjkdljfldkdfj");

  const handleChange = (value: string) => {
    setText(value);
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  console.log(text);
  return (
    <div>
      <ReactQuill
        value={text}
        modules={modules}
        formats={formats}
        onChange={handleChange}
      />
    </div>
  );
};

export default Editor;
