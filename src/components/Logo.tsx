import Image from 'next/image';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'icon';
}

export default function Logo({ className = '', size = 'md', variant = 'full' }: LogoProps) {
  // Size configurations for full logo (with text)
  const fullSizes = {
    sm: { width: 150, height: 75 },
    md: { width: 200, height: 100 },
    lg: { width: 300, height: 150 },
    xl: { width: 400, height: 200 },
  };

  // Size configurations for icon only (without text)
  const iconSizes = {
    sm: { width: 40, height: 40 },
    md: { width: 56, height: 56 },
    lg: { width: 80, height: 80 },
    xl: { width: 112, height: 112 },
  };

  const imageSize = variant === 'full' ? fullSizes[size] : iconSizes[size];
  const imageSrc = variant === 'full' ? '/assets/logo.png' : '/assets/icon.png';

  return (
    <div className={`relative ${className} inline-block`}>
      <div 
        className="relative transition-transform duration-300 hover:scale-105"
        style={{
          width: `${imageSize.width}px`,
          height: `${imageSize.height}px`,
          filter: 'drop-shadow(0 0 20px rgba(245, 158, 65, 0.4))',
        }}
      >
        <Image
          src={imageSrc}
          alt={variant === 'full' ? 'TAMAKKUN AI Logo' : 'TAMAKKUN AI Icon'}
          width={imageSize.width}
          height={imageSize.height}
          className="object-contain"
          priority
          unoptimized={process.env.NODE_ENV === 'development'}
        />
      </div>
    </div>
  );
}
