export type LeadTone = "default" | "subtle" | "alert" | "success";

export interface LeadOwner {
  name: string;
}

export interface LeadBadge {
  primary: string;
  secondary?: string;
}

export interface LeadStatusBar {
  color: string;
  title?: string;
}

export interface LeadCardData {
  id: string;
  name: string;
  owners: LeadOwner[];
  contactInfo: string;
  contactTone?: LeadTone;
  statusLabel: string;
  statusTone?: LeadTone;
  borderTone?: "default" | "alert";
  badge?: LeadBadge;
  badgeExtraCount?: number;
  showBadge?: boolean;
  highlightBars?: LeadStatusBar[];
}

export interface PipelineColumnData {
  id: string;
  title: string;
  amount: string;
  leadsCount: number;
  leads: LeadCardData[];
}
