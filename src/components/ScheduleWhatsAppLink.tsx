import React from 'react';
import { useLocation } from 'react-router-dom';
import { WHATSAPP_AGENDAR_HREF } from '../config/whatsapp';
import { trackScheduleClick } from '../analytics/gtag';

export type ScheduleWhatsAppLinkProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  'href' | 'onClick'
> & {
  /** Identificador estável para relatórios (ex.: `header_desktop`). Se omitido, usa o pathname atual. */
  placement?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

const ScheduleWhatsAppLink: React.FC<ScheduleWhatsAppLinkProps> = ({
  placement,
  children,
  className,
  onClick,
  ...rest
}) => {
  const { pathname } = useLocation();
  const resolvedPlacement = placement ?? pathname;

  const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    trackScheduleClick(resolvedPlacement);
    onClick?.(e);
  };

  return (
    <a
      {...rest}
      href={WHATSAPP_AGENDAR_HREF}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={handleClick}
    >
      {children}
    </a>
  );
};

export default ScheduleWhatsAppLink;
