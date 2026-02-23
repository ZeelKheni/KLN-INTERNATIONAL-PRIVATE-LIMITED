import React from 'react';

const Button = React.forwardRef(({ 
  className = '',
  variant = 'default',
  size = 'default',
  children,
  ...props
}, ref) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 disabled:pointer-events-none disabled:opacity-50";
  
  const variants = {
    default: "bg-amber-800 text-white hover:bg-amber-900",
    outline: "border-2 border-amber-800 text-amber-800 hover:bg-amber-100",
    ghost: "hover:bg-amber-100 text-amber-800",
  };

  const sizes = {
    default: "h-10 px-4 py-2",
    sm: "h-8 px-3 text-sm",
    lg: "h-12 px-6 text-lg",
  };

  const variantStyles = variants[variant];
  const sizeStyles = sizes[size];

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export { Button };