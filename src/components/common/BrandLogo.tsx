import bolibaLogo from '@/services/Boliba Posters 2.png';

type BrandLogoProps = {
  size?: number;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
};

export default function BrandLogo({
  size = 42,
  alt = 'Boliba logo',
  className,
  style
}: BrandLogoProps) {
  return (
    <img
      src={bolibaLogo}
      alt={alt}
      className={className}
      style={{
        width: size,
        height: size,
        objectFit: 'contain',
        display: 'block',
        borderRadius: 12,
        ...style
      }}
    />
  );
}
