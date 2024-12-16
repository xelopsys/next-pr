import React, {
  useState,
  useEffect,
  useContext,
  createContext,
  ReactNode,
  ReactElement,
  cloneElement,
  isValidElement,
  CSSProperties,
  FC,
} from 'react';

type PaginationPage = {
  type: 'page';
  value: number;
  isCurrent: boolean;
};

type PaginationEllipsis = {
  type: 'ellipsis';
  key: number;
};

type PaginationItemType = PaginationPage | PaginationEllipsis;

interface PaginationContextType {
  pages: PaginationItemType[];
  currentPage: number;
  total: number;

  onPageChange: (page: number) => void;
}

const PaginationContext = createContext<PaginationContextType | undefined>(
  undefined
);

export interface PaginationRootProps {
  siblingCount?: number;
  page: number;
  total: number;
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
  onPageChange?: (page: number) => void;
}

const PaginationRoot = ({
  total,
  siblingCount = 1,
  page,
  onPageChange,
  children,
  style,
  className,
}: PaginationRootProps) => {
  const [pages, setPages] = useState<PaginationItemType[]>([]);

  useEffect(() => {
    const paginationItems = createPaginationItems();
    setPages(paginationItems);
  }, [total, siblingCount, page]);

  const createPaginationItems = (): PaginationItemType[] => {
    const items: PaginationItemType[] = [];
    const totalPageNumbers = siblingCount * 2 + 5;

    if (totalPageNumbers >= total) {
      for (let i = 1; i <= total; i++) {
        items.push({
          type: 'page',
          value: i,
          isCurrent: i === page,
        });
      }
    } else {
      const leftSiblingIndex = Math.max(page - siblingCount, 1);
      const rightSiblingIndex = Math.min(page + siblingCount, total);

      const showLeftEllipsis = leftSiblingIndex > 2;
      const showRightEllipsis = rightSiblingIndex < total - 1;

      if (!showLeftEllipsis && showRightEllipsis) {
        const leftItemCount = siblingCount * 2 + 3;
        const leftRange = range(1, leftItemCount);

        leftRange.forEach((pageNum) =>
          items.push({
            type: 'page',
            value: pageNum,
            isCurrent: pageNum === page,
          })
        );

        items.push({ type: 'ellipsis', key: leftItemCount + 1 });
        items.push({
          type: 'page',
          value: total,
          isCurrent: total === page,
        });
      } else if (showLeftEllipsis && !showRightEllipsis) {
        const rightItemCount = siblingCount * 2 + 3;
        const rightRange = range(total - rightItemCount + 1, total);

        items.push({
          type: 'page',
          value: 1,
          isCurrent: page === 1,
        });
        items.push({ type: 'ellipsis', key: total - rightItemCount });
        rightRange.forEach((pageNum) =>
          items.push({
            type: 'page',
            value: pageNum,
            isCurrent: pageNum === page,
          })
        );
      } else if (showLeftEllipsis && showRightEllipsis) {
        items.push({
          type: 'page',
          value: 1,
          isCurrent: page === 1,
        });
        items.push({ type: 'ellipsis', key: leftSiblingIndex - 1 });

        const middleRange = range(leftSiblingIndex, rightSiblingIndex);
        middleRange.forEach((pageNum) =>
          items.push({
            type: 'page',
            value: pageNum,
            isCurrent: pageNum === page,
          })
        );

        items.push({ type: 'ellipsis', key: rightSiblingIndex + 1 });
        items.push({
          type: 'page',
          value: total,
          isCurrent: total === page,
        });
      }
    }

    return items;
  };

  const onPageChangeHandler = (newPage: number) => {
    onPageChange?.(newPage);
  };

  const paginationContextValue: PaginationContextType = {
    pages,
    currentPage: page,
    total,
    onPageChange: onPageChangeHandler,
  };

  return (
    <PaginationContext.Provider value={paginationContextValue}>
      <nav
        aria-label='Pagination Navigation'
        style={style}
        className={className}>
        {children}
      </nav>
    </PaginationContext.Provider>
  );
};

function range(start: number, end: number): number[] {
  const length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
}

interface TriggerRenderProps {
  isDisabled: boolean;
  onClick: () => void;
}

interface TriggerProps {
  children: ReactNode | ((props: TriggerRenderProps) => ReactNode);
  style?: CSSProperties;
  className?: string | ((args: { isDisabled: boolean }) => string);
  asChild?: boolean;
  direction: 'prev' | 'next';
  ariaLabel?: string;
}

const Trigger: FC<TriggerProps> = ({
  children,
  style,
  className,
  asChild = false,
  direction,
  ariaLabel,
}) => {
  const context = useContext(PaginationContext);
  if (!context) {
    throw new Error(
      'Pagination components must be used within a Pagination.Root'
    );
  }

  const { currentPage, total, onPageChange } = context;

  const isDisabled =
    direction === 'prev' ? currentPage <= 1 : currentPage >= total;

  const handleClick = () => {
    if (!isDisabled) {
      const newPage = direction === 'prev' ? currentPage - 1 : currentPage + 1;
      onPageChange?.(newPage);
    }
  };

  const computedClassName =
    typeof className === 'function' ? className({ isDisabled }) : className;

  const defaultAriaLabel = direction === 'prev' ? 'Previous Page' : 'Next Page';

  if (typeof children === 'function') {
    return <>{children({ isDisabled, onClick: handleClick })}</>;
  }

  if (asChild && isValidElement(children)) {
    return cloneElement(children as ReactElement<any>, {
      onClick: handleClick,
      disabled: isDisabled,
      'aria-label': ariaLabel || defaultAriaLabel,
      style: { ...children.props.style, ...style },
      className:
        [computedClassName, children.props.className]
          .filter(Boolean)
          .join(' ') || undefined,
    });
  }

  return (
    <button
      onClick={handleClick}
      disabled={isDisabled}
      style={style}
      className={computedClassName}
      aria-label={ariaLabel || defaultAriaLabel}>
      {children}
    </button>
  );
};

const PaginationPrevTrigger: FC<Omit<TriggerProps, 'direction'>> = (props) => (
  <Trigger
    {...props}
    direction='prev'
  />
);

const PaginationNextTrigger: FC<Omit<TriggerProps, 'direction'>> = (props) => (
  <Trigger
    {...props}
    direction='next'
  />
);

interface PaginationItemRenderProps {
  isSelected: boolean;
  onClick: () => void;
  value: number;
  'aria-current'?: 'page';
  'aria-label'?: string;
}

export interface PaginationItemProps {
  value: number;
  isCurrent: boolean;
  children?: ReactNode | ((props: PaginationItemRenderProps) => ReactNode);
  style?: CSSProperties;
  className?: string | ((args: { isSelected: boolean }) => string);
  ariaLabel?: string;
  asChild?: boolean;
}

const PaginationItem = ({
  value,
  isCurrent,
  children,
  style,
  className,
  ariaLabel,
  asChild = false,
}: PaginationItemProps) => {
  const context = useContext(PaginationContext);
  if (!context) {
    throw new Error(
      'Pagination components must be used within a <Pagination.Root />'
    );
  }

  const { onPageChange } = context;

  const isSelected = isCurrent;

  const handleClick = () => {
    onPageChange?.(value);
  };

  const computedClassName =
    typeof className === 'function' ? className({ isSelected }) : className;

  if (typeof children === 'function') {
    return (
      <>
        {children({
          isSelected,
          onClick: handleClick,
          value,
          'aria-current': isCurrent ? 'page' : undefined,
          'aria-label': ariaLabel || `Page ${value}`,
        })}
      </>
    );
  }

  if (asChild && isValidElement(children)) {
    return cloneElement(children as ReactElement<any>, {
      onClick: handleClick,
      'aria-current': isCurrent ? 'page' : undefined,
      'aria-label': ariaLabel || `Page ${value}`,
      style: { ...children.props.style, ...style },
      className: [computedClassName, children.props.className]
        .filter(Boolean)
        .join(' '),
    });
  }

  return (
    <button
      onClick={handleClick}
      style={style}
      className={computedClassName}
      aria-current={isCurrent ? 'page' : undefined}
      aria-label={ariaLabel || `Page ${value}`}
      role='listitem'>
      {children}
    </button>
  );
};
interface PaginationEllipsisProps {
  key: number;
  children?: ReactNode;
  style?: CSSProperties;
  className?: string | (() => string);
}

const PaginationEllipsis: FC<PaginationEllipsisProps> = ({
  children,
  style,
  className,
}) => {
  const computedClassName =
    typeof className === 'function' ? className() : className;

  return (
    <span
      style={style}
      className={computedClassName}
      aria-hidden='true'>
      {children}
    </span>
  );
};

interface PaginationContextComponentProps {
  children: (pagination: PaginationContextType) => ReactNode;
}

const PaginationContextComponent: FC<PaginationContextComponentProps> = ({
  children,
}) => {
  const context = useContext(PaginationContext);
  if (!context) {
    throw new Error(
      'Pagination components must be used within a Pagination.Root'
    );
  }

  return <>{children(context)}</>;
};

export const Pagination = {
  Root: PaginationRoot,
  PrevTrigger: PaginationPrevTrigger,
  NextTrigger: PaginationNextTrigger,
  Item: PaginationItem,
  Ellipsis: PaginationEllipsis,
  Context: PaginationContextComponent,
};
