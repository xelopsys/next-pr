import { cx } from '@/components/utils';
import { HTMLAttributes, useId } from 'react';

const PlayButtonIcon = (props: HTMLAttributes<HTMLDivElement>) => {
  const id = useId();

  return (
    <>
      <div
        {...props}
        aria-hidden='true'
        style={{
          boxShadow: '0px 1px 1px 0px rgba(255, 255, 255, 0.2) inset',
          maskImage: `url(#triangle-mask-${id})`,
          WebkitMaskImage: `url(#triangle-mask-${id})`,
          ...props.style,
        }}
        className={cx(
          'size-20 rounded-full bg-alpha-white/30 backdrop-blur transition duration-300 ease-in-out hover:bg-alpha-white/50 group-hover:bg-alpha-white/50',
          props.className
        )}>
        <svg
          viewBox='0 0 80 80'
          className='absolute size-full'>
          <defs>
            <mask
              id={`triangle-mask-${id}`}
              style={{
                maskType: 'alpha',
              }}
              maskContentUnits='objectBoundingBox'>
              <path
                d='M0.5 1C0.776 1 1 0.776 1 0.5C1 0.224 0.776 0 0.5 0C0.224 0 0 0.224 0 0.5C0 0.776 0.224 1 0.5 1ZM0.421875 0.683401L0.703125 0.5262C0.723958 0.514556 0.723958 0.485444 0.703125 0.4738L0.421875 0.316599C0.401042 0.304963 0.375 0.319511 0.375 0.342799V0.657201C0.375 0.680489 0.401042 0.695037 0.421875 0.683401Z'
                clipRule='evenodd'
                fillRule='evenodd'
                fill='black'
              />

              {/* Another solution that works except on Safari. Will need to remove `mask-type: alpha` to make this work. */}
              {/* <rect width="100%" height="100%" fill="black" />
                            <path
                                d="M56.25 37.904C57.9167 38.8355 57.9167 41.1645 56.25 42.096L33.75 54.6721C32.0833 55.6037 30 54.4392 30 52.5761L30 27.4239C30 25.5608 32.0833 24.3963 33.75 25.3279L56.25 37.904Z"
                                fill="white"
                            /> */}
            </mask>
          </defs>
        </svg>
      </div>
    </>
  );
};

export default PlayButtonIcon;
