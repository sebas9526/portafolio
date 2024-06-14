import { ReactNode } from "react";

export interface ToastProps {
  time      ?: number;
  title     ?: string;
  showToast ?: boolean;
  onHide    ?: () => void;
  template  ?: ReactNode | null;
  message   ?: string | ReactNode;
  type      ?: "success" | "info" | "warn" | "error" | undefined;
}