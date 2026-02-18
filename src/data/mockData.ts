// Mock data for the warehouse management system

export interface Product {
  id: string;
  sku: string;
  name: string;
  category: 'Karniz' | 'Kolonna' | 'Obramleniya' | 'Sayding' | 'Material' | 'Tool';
  unit: 'dona' | 'm' | 'm2' | 'qadoq';
  standardSize?: string;
  minStockLevel: number;
  currentStock: number;
  averageCost: number;
  sellingPrice: number;
  notes?: string;
  photo?: string;
}

export interface Supplier {
  id: string;
  name: string;
  phone: string;
  address: string;
  notes?: string;
}

export interface Customer {
  id: string;
  name: string;
  phone: string;
  address: string;
  notes?: string;
}

export interface IncomingDocument {
  id: string;
  supplier: string;
  invoiceNumber: string;
  date: string;
  status: 'draft' | 'confirmed';
  totalAmount: number;
  itemCount: number;
}

export interface SaleDocument {
  id: string;
  customer: string;
  date: string;
  status: 'draft' | 'confirmed';
  paymentStatus: 'unpaid' | 'partial' | 'paid';
  totalRevenue: number;
  totalCogs: number;
  grossProfit: number;
  paidAmount: number;
  itemCount: number;
}

export interface ProjectUseDocument {
  id: string;
  projectName: string;
  address: string;
  clientName: string;
  clientPhone?: string;
  manager: string;
  date: string;
  status: 'draft' | 'confirmed';
  materialCost: number;
  itemCount: number;
}

export const mockProducts: Product[] = [
  { id: '1', sku: 'KRN-001', name: 'Karniz 10sm', category: 'Karniz', unit: 'm', minStockLevel: 50, currentStock: 120, averageCost: 15000, sellingPrice: 25000 },
  { id: '2', sku: 'KRN-002', name: 'Karniz 15sm', category: 'Karniz', unit: 'm', minStockLevel: 30, currentStock: 85, averageCost: 22000, sellingPrice: 35000 },
  { id: '3', sku: 'KOL-001', name: 'Kolonna D20', category: 'Kolonna', unit: 'dona', minStockLevel: 10, currentStock: 25, averageCost: 180000, sellingPrice: 300000 },
  { id: '4', sku: 'KOL-002', name: 'Kolonna D30', category: 'Kolonna', unit: 'dona', minStockLevel: 5, currentStock: 3, averageCost: 350000, sellingPrice: 550000 },
  { id: '5', sku: 'OBR-001', name: 'Obramleniya standart', category: 'Obramleniya', unit: 'm', minStockLevel: 40, currentStock: 95, averageCost: 12000, sellingPrice: 20000 },
  { id: '6', sku: 'OBR-002', name: 'Obramleniya premium', category: 'Obramleniya', unit: 'm', minStockLevel: 20, currentStock: 15, averageCost: 25000, sellingPrice: 42000 },
  { id: '7', sku: 'SYD-001', name: 'Sayding panel', category: 'Sayding', unit: 'm2', minStockLevel: 100, currentStock: 250, averageCost: 45000, sellingPrice: 72000 },
  { id: '8', sku: 'MAT-001', name: 'EPS blok 100mm', category: 'Material', unit: 'dona', minStockLevel: 200, currentStock: 450, averageCost: 35000, sellingPrice: 50000 },
  { id: '9', sku: 'MAT-002', name: 'Klej qorishma', category: 'Material', unit: 'qadoq', minStockLevel: 50, currentStock: 42, averageCost: 65000, sellingPrice: 85000 },
  { id: '10', sku: 'TL-001', name: 'Kesish asbobi', category: 'Tool', unit: 'dona', minStockLevel: 5, currentStock: 8, averageCost: 500000, sellingPrice: 650000 },
];

export const mockSuppliers: Supplier[] = [
  { id: '1', name: 'EPS Tashkent LLC', phone: '+998 71 234 5678', address: 'Toshkent, Chilonzor tumani' },
  { id: '2', name: 'Foam Master Co', phone: '+998 71 345 6789', address: 'Toshkent, Yakkasaroy tumani' },
  { id: '3', name: 'PoliStroy', phone: '+998 71 456 7890', address: 'Samarqand, Siob tumani' },
];

export const mockCustomers: Customer[] = [
  { id: '1', name: 'Abdullayev Jasur', phone: '+998 90 123 4567', address: 'Toshkent, Mirzo Ulug\'bek' },
  { id: '2', name: 'OOO "Qurilish Plus"', phone: '+998 71 987 6543', address: 'Toshkent, Sergeli tumani' },
  { id: '3', name: 'Karimov Sherzod', phone: '+998 93 456 7890', address: 'Buxoro shahri' },
  { id: '4', name: 'Navruz Building', phone: '+998 90 111 2233', address: 'Toshkent, Yunusobod' },
];

export const mockIncoming: IncomingDocument[] = [
  { id: 'IN-001', supplier: 'EPS Tashkent LLC', invoiceNumber: 'INV-2024-0156', date: '2024-02-15', status: 'confirmed', totalAmount: 12500000, itemCount: 5 },
  { id: 'IN-002', supplier: 'Foam Master Co', invoiceNumber: 'INV-2024-0203', date: '2024-02-16', status: 'confirmed', totalAmount: 8700000, itemCount: 3 },
  { id: 'IN-003', supplier: 'PoliStroy', invoiceNumber: 'INV-2024-0211', date: '2024-02-18', status: 'draft', totalAmount: 5200000, itemCount: 2 },
];

export const mockSales: SaleDocument[] = [
  { id: 'SL-001', customer: 'Abdullayev Jasur', date: '2024-02-15', status: 'confirmed', paymentStatus: 'paid', totalRevenue: 4500000, totalCogs: 2700000, grossProfit: 1800000, paidAmount: 4500000, itemCount: 4 },
  { id: 'SL-002', customer: 'OOO "Qurilish Plus"', date: '2024-02-16', status: 'confirmed', paymentStatus: 'partial', totalRevenue: 18200000, totalCogs: 11000000, grossProfit: 7200000, paidAmount: 10000000, itemCount: 8 },
  { id: 'SL-003', customer: 'Karimov Sherzod', date: '2024-02-17', status: 'draft', paymentStatus: 'unpaid', totalRevenue: 3200000, totalCogs: 1900000, grossProfit: 1300000, paidAmount: 0, itemCount: 3 },
  { id: 'SL-004', customer: 'Navruz Building', date: '2024-02-18', status: 'confirmed', paymentStatus: 'unpaid', totalRevenue: 9500000, totalCogs: 5700000, grossProfit: 3800000, paidAmount: 0, itemCount: 6 },
];

export const mockProjectUse: ProjectUseDocument[] = [
  { id: 'PR-001', projectName: 'Yunusobod 17-uy', address: 'Toshkent, Yunusobod', clientName: 'Rahimov Bobur', clientPhone: '+998 90 555 1234', manager: 'Aliyev Sardor', date: '2024-02-14', status: 'confirmed', materialCost: 7800000, itemCount: 6 },
  { id: 'PR-002', projectName: 'Villa Samarqand', address: 'Samarqand, Registon ko\'chasi', clientName: 'Tursunov Nodir', manager: 'Kamolov Jamshid', date: '2024-02-17', status: 'draft', materialCost: 4200000, itemCount: 4 },
];

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('uz-UZ', { maximumFractionDigits: 0 }).format(amount) + ' so\'m';
};

export const categoryColors: Record<string, string> = {
  Karniz: 'bg-primary/10 text-primary',
  Kolonna: 'bg-accent/10 text-accent-foreground',
  Obramleniya: 'bg-info/10 text-info',
  Sayding: 'bg-success/10 text-success',
  Material: 'bg-warning/10 text-warning-foreground',
  Tool: 'bg-destructive/10 text-destructive',
};

export const unitLabels: Record<string, string> = {
  dona: 'dona',
  m: 'metr',
  m2: 'm²',
  qadoq: 'qadoq',
};
