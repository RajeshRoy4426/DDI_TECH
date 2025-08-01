export interface Program   {
  id: string;
  title: string;
  description: string;
  totalHours: number;
  skills: string[];
}

export interface Asset {
  asset_id: string;
  title: string;
  description: string;
  tags: string[];
}

export interface Topic {
  id: string;
  title: string;
  description: string;
  tags: any[];
  asset: Asset[];
}

export interface ProgramDetails {
  program_id: string;
  title: string;
  description: string;
  totalHours: number;
  level: string;
  skills: string[];
  programs?: Topic[];
}

