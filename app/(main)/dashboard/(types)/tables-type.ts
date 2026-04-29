export type TableColumn<T> = {
  key: keyof T;
  label: string;
  render?: (item: T) => React.ReactNode;
  mobileLabel?: string;
  actions?: (item: T) => RowAction<T>[];
};

export type DataTableProps<T> = {
  columns: TableColumn<T>[];
  data: T[];
  gridTemplate: string;
  pageSize?: number;
};

export type RowAction<T> = {
  label: string;
  onClick: (item: T) => void;
  show?: (item: T) => boolean;
};

export type Category = {
  name: string;
  products: number;
  date?: string;
  image: string;
  status: "active" | "inactive";
  action?: string;
};

export type Product = {
  name: string;
  description: string;
  availableQuantity: number;
  price: number;
  image: string;
  action?: string;
};

export type Promotion = {
  product: string;
  reduction: number;
  status: "active" | "inactive";
  action?: string;
};
