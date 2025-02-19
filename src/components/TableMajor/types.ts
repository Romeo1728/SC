export interface ITableProps { 
  className?: string;
  headTitleArr: string[];
  bodyTitleArr: Record<string, any>[];
  loadPage?: string
}