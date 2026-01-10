interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'icon';
}

export default function Logo({ className = '', size = 'md', variant = 'full' }: LogoProps) {
  const textSizes = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-4xl',
    xl: 'text-6xl',
  };

  const iconSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl',
  };

  const sizeClass = variant === 'full' ? textSizes[size] : iconSizes[size];

  if (variant === 'icon') {
    // Just show "TAMAKKUN AI" text for icon variant
    return (
      <div className={`${className} inline-block`}>
        <h1 className={`${sizeClass} font-bold text-white leading-tight tracking-tight`}>
          TAMAKKUN <span className="text-primary-400">AI</span>
        </h1>
      </div>
    );
  }

  // Full variant - larger display with subtitle
  return (
    <div className={`${className} text-center`}>
      <h1 
        className={`${sizeClass} font-bold leading-tight mb-4`}
        style={{
          textShadow: '0 2px 20px rgba(0,0,0,0.5), 0 0 40px rgba(245, 158, 65, 0.4)',
        }}
      >
        <span className="text-white">TAMAKKUN</span>{' '}
        <span className="text-primary-400" style={{
          textShadow: '0 2px 20px rgba(0,0,0,0.5), 0 0 50px rgba(245, 158, 65, 0.6)',
        }}>AI</span>
      </h1>
      {size === 'xl' || size === 'lg' ? (
        <p className="text-lg md:text-xl text-gray-400 font-medium">
          Empowerment through Intelligence
        </p>
      ) : null}
    </div>
  );
}
