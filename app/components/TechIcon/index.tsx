import awsLogo from '../../../public/cloudComputing/aws-svgrepo-com.png';
import k8sLogo from '../../../public/cloudComputing/kubu.png';
import Image from 'next/image';

const iconMap = {
  aws: awsLogo,
  kubernetes: k8sLogo,
};

export type IconType = keyof typeof iconMap;

type TechIconProps = {
  icon: IconType;
  className?: string;
};

const TechIcon = ({ icon, className = 'h-6 w-6' }: TechIconProps) => {
  const src = iconMap[icon];

  if (!src) {
    return null;
  }

  // The AWS logo is dark and needs a light background to be visible on dark surfaces.
  if (icon === 'aws') {
    return (
      <div className={`${className} rounded-full flex items-center justify-center bg-white p-0.5 border border-slate-300`}>
        <Image src={src} alt={`${icon} logo`} className="h-full w-full object-contain" />
      </div>
    );
  }

  return <Image src={src} alt={`${icon} logo`} className={className} />;
};

export default TechIcon;