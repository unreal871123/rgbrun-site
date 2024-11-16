import cn from "classnames";
import Image from "next/image";

type Props = {
    title: string;
    src: string;
  };

const Logo = ({ title, src }: Props) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn("shadow-sm", {
        "hover:shadow-lg transition-shadow duration-200": '',
      })}
      width={200}
      height={630}
    />
  );
  return (
    <div className="sm:mx-0">
      {image}
    </div>
  );
};

export default Logo;
