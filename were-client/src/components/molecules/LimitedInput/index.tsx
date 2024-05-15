'use client';

import React, { ChangeEvent, TextareaHTMLAttributes, useState } from 'react';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  maxLength: number;
  initialValue?: string;
  className: string;
}

const LimitedInput = React.forwardRef<HTMLTextAreaElement, Props>(
  ({ maxLength, initialValue, className, ...attr }, ref) => {
    const [text, setText] = useState<string>(initialValue || '');

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
          ref={ref}
          {...attr}
        />
        <div>
          <span>{`${text.length}/${maxLength}`}</span>
        </div>
      </div>
    );
  },
);

export default LimitedInput;
