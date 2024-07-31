'use client';

import React, { ChangeEvent, TextareaHTMLAttributes, useImperativeHandle, useState } from 'react';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  maxLength: number;
  initialValue?: string;
  className: string;
}

export interface ILimitedInput {
  clearText: () => void;
  getText: string;
}

const LimitedInput = React.forwardRef<ILimitedInput, Props>(({ maxLength, initialValue, className, ...attr }, ref) => {
  const [text, setText] = useState<string>(initialValue || '');

  useImperativeHandle(ref, () => {
    return {
      clearText: () => setText(''),
      getText: text,
    };
  });

  return (
    <div className={className}>
      <textarea
        value={text}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
          const { value } = e.target;
          if (value.length > maxLength) {
            return;
          }
          setText(value);
        }}
        maxLength={maxLength}
        spellCheck="false"
        {...attr}
      />
      <div>
        <span>{`${text.length}/${maxLength}`}</span>
      </div>
    </div>
  );
});

export default LimitedInput;
