export interface TableRow {
  [key: string]: any;
}

export interface TableCol {
  key: string;
  label: string;
  type: 'text' | 'button';
}
