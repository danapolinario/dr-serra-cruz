import React from 'react';
import { trackEvent } from '../analytics/gtag';

export type TrackedExternalLinkProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  'href' | 'onClick'
> & {
  href: string;
  /** Nome do evento GA4 (ex.: `social_click`). */
  eventName: string;
  /** Parâmetros enviados tal como aparecem no DebugView / relatórios. */
  eventParams: Record<string, string>;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

const TrackedExternalLink: React.FC<TrackedExternalLinkProps> = ({
  href,
  eventName,
  eventParams,
  children,
  className,
  onClick,
  ...rest
}) => {
  const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    trackEvent(eventName, eventParams);
    onClick?.(e);
  };

  return (
    <a {...rest} href={href} target="_blank" rel="noopener noreferrer" className={className} onClick={handleClick}>
      {children}
    </a>
  );
};

export default TrackedExternalLink;
