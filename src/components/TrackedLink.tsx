'use client';

import Link, { type LinkProps } from 'next/link';
import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from 'react';

type TrackedLinkProps = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps | 'onClick'> & {
    children: ReactNode;
    eventName?: string;
    eventLabel?: string;
    onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
  };

declare global {
  interface Window {
    gtag?: (command: 'event', eventName: string, params?: Record<string, string>) => void;
  }
}

export function TrackedLink({
  children,
  eventName = 'cta_click',
  eventLabel,
  href,
  onClick,
  ...props
}: TrackedLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    window.gtag?.('event', eventName, {
      link_label: eventLabel ?? textFromChildren(children),
      link_url: String(href),
    });
    onClick?.(event);
  }

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}

function textFromChildren(children: ReactNode): string {
  if (typeof children === 'string') return children;
  if (typeof children === 'number') return String(children);
  return 'Seaforth link';
}
