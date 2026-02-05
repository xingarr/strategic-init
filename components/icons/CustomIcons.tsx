import type React from "react"
import { PiBoundingBoxDuotone } from "react-icons/pi";
import { PiChartLineDuotone } from "react-icons/pi";
import { PiHandshakeDuotone } from "react-icons/pi";
import { PiShootingStarDuotone } from "react-icons/pi"
import { PiDevicesDuotone } from "react-icons/pi";
import { PiCheckerboardDuotone } from "react-icons/pi";
import { PiFireDuotone } from "react-icons/pi";
import { PiImageBrokenDuotone } from "react-icons/pi";
import { PiMapTrifoldDuotone } from "react-icons/pi";

type IconProps = {
  size?: string | number;
} & React.ComponentProps<'svg'>;

export function TeamIntegrationIcon({ size = '40px', ...props }: IconProps) {
  return <PiBoundingBoxDuotone size={size} {...props} />;
}

export function GrowthBarriersIcon({ size = '40px', ...props }: IconProps) {
  return <PiChartLineDuotone size={size} {...props} />;
}

export function TechLeadershipIcon({ size = '40px', ...props }: IconProps) {
  return <PiShootingStarDuotone size={size} {...props} />;
}

export function TransparentPartnershipsIcon({ size = '40px', ...props }: IconProps) {
  return <PiHandshakeDuotone size={size} {...props} />;
}

export function WebsiteWoesIcon({ size = '40px', ...props }: IconProps) {
  return <PiDevicesDuotone size={size} {...props} />;
}

export function PlanningGapsIcon({ size = '40px', ...props }: IconProps) {
  return <PiCheckerboardDuotone size={size} {...props} />;
}

export function ToolChaosIcon({ size = '40px', ...props }: IconProps) {
  return <PiFireDuotone size={size} {...props} />;
}

export function DevLimitsIcon({ size = '40px', ...props }: IconProps) {
  return <PiImageBrokenDuotone size={size} {...props} />;
}

export function StrategicRoadmapIcon({ size = '40px', ...props }: IconProps) {
  return <PiMapTrifoldDuotone size={size} {...props} />;
}

