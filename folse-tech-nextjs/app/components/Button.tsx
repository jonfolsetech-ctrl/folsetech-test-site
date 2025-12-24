interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export default function Button({ variant = 'primary', children, ...props }: ButtonProps) {
  const baseClasses = 'px-8 py-3 rounded-lg font-semibold transition';
  const variantClasses = {
    primary: 'bg-slate-900 text-white hover:bg-slate-800 hover:shadow-md',
    secondary: 'bg-white text-slate-900 border-2 border-slate-900 hover:bg-slate-50 hover:shadow-md',
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]}`} {...props}>
      {children}
    </button>
  );
}
