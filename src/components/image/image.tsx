'use client';

import Image from 'next/image';

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  quality?: number;
  priority?: boolean;
};

const contentfulLoader = (props: Pick<Props, 'src' | 'width' | 'quality'>) => {
  const { src, width, quality } = props;
  return `${src}?w=${width}&q=${quality ?? 75}`;
};

export default function ContentfulImage(props: Props) {
  const { src, alt, priority } = props;
  return (
    <Image src={src} alt={alt} loader={contentfulLoader} priority={priority} />
  );
}
