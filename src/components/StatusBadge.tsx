import { ReactNode } from "react";

interface StatusBadgeProps {
  status: string;
  children: ReactNode;
}

const statusStyles: Record<string, string> = {
  draft: "bg-muted text-muted-foreground",
  confirmed: "bg-success/10 text-success",
  unpaid: "bg-destructive/10 text-destructive",
  partial: "bg-warning/10 text-warning",
  paid: "bg-success/10 text-success",
};

const statusLabels: Record<string, string> = {
  draft: "Qoralama",
  confirmed: "Tasdiqlangan",
  unpaid: "To'lanmagan",
  partial: "Qisman",
  paid: "To'langan",
};

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusStyles[status] || statusStyles.draft}`}>
      {statusLabels[status] || status}
    </span>
  );
}
