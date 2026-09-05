import React, { useEffect, useRef, useState } from 'react';
import '../styling/Dropdown.css';

type DropdownProps = {
  label: string;
  value: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  closeOnOptionClick?: boolean;
};

const Dropdown: React.FC<DropdownProps> = ({
  label,
  value,
  children,
  footer,
  closeOnOptionClick = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const closeOnOutsideInteraction = (event: PointerEvent) => {
      if (!dropdownRef.current?.contains(event.target as Node))
        setIsOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener('pointerdown', closeOnOutsideInteraction);
      document.addEventListener('keydown', closeOnEscape);
    }

    return () => {
      document.removeEventListener('pointerdown', closeOnOutsideInteraction);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [isOpen]);

  return (
    <div className="dropdown-control">
      <span>{label}</span>
      <details
        ref={dropdownRef}
        className="dropdown"
        open={isOpen}
        onToggle={(event) =>
          setIsOpen((event.currentTarget as HTMLDetailsElement).open)
        }
      >
        <summary>
          {value}
          <span className="dropdown-chevron" aria-hidden="true">
            ▾
          </span>
        </summary>
        <div className="dropdown-menu">
          <div
            className="dropdown-options"
            onClick={() => closeOnOptionClick && setIsOpen(false)}
          >
            {children}
          </div>
          {footer && <div className="dropdown-footer">{footer}</div>}
        </div>
      </details>
    </div>
  );
};

export default Dropdown;
