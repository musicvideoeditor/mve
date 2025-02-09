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
}
