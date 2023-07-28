import Image from 'next/image';

export default function Imagetag({ className, src, ...props }) {
  console.log(className);
  return (
    <Image
      className={`${className} imagetag`}
      src={src}
      // alt={src.src}
      {...props}
    />
  );
}
