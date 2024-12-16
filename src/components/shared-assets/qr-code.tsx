import { HTMLAttributes, useEffect, useRef } from 'react';
import QRCodeStyling from 'qr-code-styling';
import { cx } from '@/components/utils';

const QRCodeFrameHandle = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    {...props}
    className={cx(
      'size-3 rounded-tl border-l-2 border-t-2 border-brand_alt',
      className
    )}
  />
);

export const GradientScan = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    {...props}
    className={cx(
      'absolute bottom-0 h-1/2 w-full border-t border-brand bg-brand-solid/10',
      className
    )}
    style={{
      maskImage:
        'radial-gradient(52.19% 100% at 50% 0%, #000 0%, rgba(0,0,0,0) 95.31%)',
      WebkitMaskImage:
        'radial-gradient(52.19% 100% at 50% 0%, #000 0%, rgba(0,0,0,0) 95.31%)',
      ...props.style,
    }}
  />
);

interface QRCodeProps {
  url: string;
  size?: 'md' | 'lg';
  className?: string;
}

const styles = {
  md: { root: 'p-2', qr: { width: 96, height: 96 } },
  lg: { root: 'p-3', qr: { width: 128, height: 128 } },
};

export const QRCode = ({ size = 'md', url, className }: QRCodeProps) => {
  const qrCodeRef = useRef<HTMLDivElement | null>(null);
  const isAppended = useRef(false);

  const qrCode = new QRCodeStyling({
    width: styles[size].qr.width,
    height: styles[size].qr.height,
    data: url,
    type: 'svg',
  });

  useEffect(() => {
    if (qrCodeRef.current && !isAppended.current) {
      qrCode.append(qrCodeRef.current);
      isAppended.current = true;
    }
  }, []);

  return (
    <div
      className={cx(
        'relative flex items-center justify-center',
        styles[size].root,
        className
      )}>
      <div
        ref={(ref) => {
          qrCodeRef.current = ref;
        }}
      />

      <QRCodeFrameHandle className='absolute left-0 top-0' />
      <QRCodeFrameHandle className='absolute right-0 top-0 rotate-90' />
      <QRCodeFrameHandle className='absolute bottom-0 right-0 rotate-180' />
      <QRCodeFrameHandle className='absolute bottom-0 left-0 -rotate-90' />
    </div>
  );
};
