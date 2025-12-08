"use client";

import { UITextareaProps } from "../types";

export default function ({ placeholder, className, children, ...props }: UITextareaProps) {

  return (<textarea
    spellCheck={false}
    translate="no"
    className={className}
    placeholder={placeholder}
    {...props}
  >
    {children}
  </textarea>);
}