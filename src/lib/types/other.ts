import React from "react";

export interface FileUploadTypes {
  files: File[];
  entryId: string;
  modelId: string;
  field: string;
  path?: string;
}

export interface AlertBoxProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: () => void;
  isLoading?: boolean;
  title: string;
  theme: "info" | "success" | "delete";
  children: React.ReactNode;
  primaryCtaLabel?: string;
  secondaryCtaLabel?: string;
  hideButtons?: boolean;
}

export interface HomeConfigType {
  showOfferSection: boolean;
  clientLogos?: { url: string }[];
}
export interface PlanType {
  color?: string;
  name: string;
  description: string;
  price: number;
  cancelledPrice: number;
  flag?: string;
  planBenefits?: { benefit: string }[];
}
export interface PortfolioType {
  clientName: string;
  clientSubtitle?: string;
  url: string;
  logo?: { url: string };
}

export interface FaqType {
  question: string;
  answer: string;
}
