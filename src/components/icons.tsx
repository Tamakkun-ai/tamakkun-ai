// Icon components using Heroicons outline version
import {
  MagnifyingGlassIcon,
  CheckCircleIcon,
  ChartBarIcon,
  RocketLaunchIcon,
  CpuChipIcon,
  HeartIcon,
  MicrophoneIcon,
  VideoCameraIcon,
  Cog6ToothIcon,
  FireIcon,
  ChartBarSquareIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  ArrowRightIcon,
  CheckIcon,
  FunnelIcon,
  AcademicCapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

// Export individual icons with consistent sizing
export const IconSearch = MagnifyingGlassIcon;
export const IconCheck = CheckCircleIcon;
export const IconChart = ChartBarIcon;
export const IconTarget = FunnelIcon; // Using FunnelIcon as target/matching icon
export const IconRocket = RocketLaunchIcon;
export const IconBrain = CpuChipIcon;
export const IconHeart = HeartIcon;
export const IconMicrophone = MicrophoneIcon;
export const IconVideo = VideoCameraIcon;
export const IconGear = Cog6ToothIcon;
export const IconFire = FireIcon;
export const IconChartSquare = ChartBarSquareIcon;
export const IconShield = ShieldCheckIcon;
export const IconUsers = UserGroupIcon;
export const IconTrophy = AcademicCapIcon; // Using AcademicCapIcon as trophy icon
export const IconArrow = ArrowRightIcon;
export const IconCheckSimple = CheckIcon;
export const IconSparkle = SparklesIcon;

// Icon wrapper component for consistent styling
interface IconWrapperProps {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  size?: number;
  className?: string;
}

export function IconWrapper({ Icon, size = 24, className = '' }: IconWrapperProps) {
  return (
    <Icon 
      className={`${className}`}
      width={size}
      height={size}
      strokeWidth={2}
    />
  );
}
