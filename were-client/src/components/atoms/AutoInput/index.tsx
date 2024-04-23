import React, { ChangeEvent, InputHTMLAttributes, RefObject, useRef } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  maxLength: number;
  onChange?: () => void;
}

const AutoInput = React.forwardRef<HTMLInputElement, Props>(({ maxLength, onChange, ...attr }, ref) => {
  const spanRef: RefObject<HTMLSpanElement> = useRef<HTMLSpanElement>(null);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (spanRef.current) {
      const { value } = e.target;
      if (value.length > maxLength) {
        e.target.value = value.slice(0, maxLength);
        return;
      }

      spanRef.current.innerText = value;
      const size = spanRef.current.getBoundingClientRect().width;
      e.target.style.width = `${15 + size}px`;
      e.target.value = value.trim();
    }

    if (onChange) {
      onChange();
    }
  };

  return (
    <div>
      <input {...attr} ref={ref} maxLength={maxLength} onChange={changeHandler} />
      {/** Hidden Span ( for autoSizing ) */}
      <span
        ref={spanRef}
        style={{ position: 'absolute', opacity: 0, fontSize: '16px', userSelect: 'none', zIndex: -1 }}
      />
    </div>
  );
});

export default AutoInput;
