import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';
import Logo from '@/components/logo';

export const logo = (
  <>
    <Image
      alt="Jsson Logo"
      src={'/logo.png'}
      width={30}
      height={30}
      className="hidden w-22 in-[.uwu]:block"
      aria-label="Jsson Logo"
    />
    <Logo width={30} height={30} />
  </>
);

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          {logo}
          <span className="font-medium in-[.uwu]:hidden">Jsson Docs</span>
        </>
      ),
    },
    links: [
      {
        text: 'Playground',
        url: 'https://playground.jssonlang.tech',
        active: 'nested-url',
      },
      {
        text: 'Home',
        url: 'https://jssonlang.tech',
        active: 'nested-url',
      },
    ],
    githubUrl: 'https://github.com/jssonlang/jsson',
  };
}
