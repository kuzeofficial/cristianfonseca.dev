"use client";

import {
  ArrowBendDownRight,
  FilePdf,
  TrendUp,
  FastForward,
  House,
  SealCheck,
  Briefcase,
  GithubLogo,
  TelegramLogo,
  TwitterLogo,
  AddressBook,
  NewspaperClipping,
  Code,
  CodesandboxLogo,
  Calendar,
  Spinner,
} from "@phosphor-icons/react";

interface IconProps {
  className?: string;
  size?: number;
}
export const HouseIcon = ({ className }: IconProps) => {
  return <House className={className} />;
};
export const SpinnerIcon = ({ className, size }: IconProps) => {
  return <Spinner className={className} size={size} />;
};
export const CalendarIcon = ({ className }: IconProps) => {
  return <Calendar className={className} />;
};
export const SealCheckIcon = ({ className }: IconProps) => {
  return <SealCheck className={className} />;
};
export const NewspaperClippingIcon = ({ className }: IconProps) => {
  return <NewspaperClipping className={className} />;
};
export const TelegramLogoIcon = ({ className }: IconProps) => {
  return <TelegramLogo className={className} />;
};
export const GithubLogoIcon = ({ className }: IconProps) => {
  return <GithubLogo className={className} />;
};
export const TwitterLogoIcon = ({ className }: IconProps) => {
  return <TwitterLogo className={className} />;
};
export const AddressBookIcon = ({ className }: IconProps) => {
  return <AddressBook className={className} />;
};
export const BriefcaseIcon = ({ className }: IconProps) => {
  return <Briefcase className={className} />;
};
export const ArrowBendDownRightIcon = ({ className }: IconProps) => {
  return <ArrowBendDownRight className={className} />;
};
export const FilePdfIcon = ({ className }: IconProps) => {
  return <FilePdf className={className} />;
};
export const TrendUpIcon = ({ className }: IconProps) => {
  return <TrendUp className={className} />;
};
export const FastForwardIcon = ({ className }: IconProps) => {
  return <FastForward className={className} />;
};

export const CodeIcon = ({ className }: IconProps) => {
  return <Code className={className} />;
};

export const CodesandboxLogoIcon = ({ className }: IconProps) => {
  return <CodesandboxLogo className={className} />;
};
