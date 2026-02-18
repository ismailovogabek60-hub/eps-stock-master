import { KpiCard } from "@/components/KpiCard";
import {
  Warehouse,
  AlertTriangle,
  ArrowDownToLine,
  ArrowUpFromLine,
  HardHat,
  TrendingUp,
  DollarSign,
  CreditCard,
} from "lucide-react";
import { formatCurrency, mockProducts, mockSales, mockIncoming, mockProjectUse } from "@/data/mockData";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const lowStockProducts = mockProducts.filter(p => p.currentStock <= p.minStockLevel);
const totalStockValue = mockProducts.reduce((sum, p) => sum + p.currentStock * p.averageCost, 0);
const monthlyRevenue = mockSales.filter(s => s.status === 'confirmed').reduce((sum, s) => sum + s.totalRevenue, 0);
const monthlyProfit = mockSales.filter(s => s.status === 'confirmed').reduce((sum, s) => sum + s.grossProfit, 0);
const outstandingPayments = mockSales.filter(s => s.paymentStatus !== 'paid').reduce((sum, s) => sum + (s.totalRevenue - s.paidAmount), 0);

const revenueData = [
  { name: "Yan", revenue: 45000000, profit: 18000000 },
  { name: "Fev", revenue: 52000000, profit: 21000000 },
  { name: "Mar", revenue: 38000000, profit: 15000000 },
  { name: "Apr", revenue: 61000000, profit: 25000000 },
  { name: "May", revenue: 55000000, profit: 22000000 },
  { name: "Iyun", revenue: 70000000, profit: 28000000 },
];

const categoryData = [
  { name: "Karniz", value: 35, color: "hsl(220, 70%, 45%)" },
  { name: "Kolonna", value: 20, color: "hsl(35, 95%, 55%)" },
  { name: "Obramleniya", value: 15, color: "hsl(200, 80%, 50%)" },
  { name: "Sayding", value: 18, color: "hsl(142, 72%, 40%)" },
  { name: "Material", value: 8, color: "hsl(280, 60%, 55%)" },
  { name: "Tool", value: 4, color: "hsl(0, 72%, 51%)" },
];

export default function Dashboard() {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Dashboard</h1>
        <p className="page-subtitle">Ombor va moliyaviy ko'rsatkichlar</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <KpiCard
          title="Ombor qiymati"
          value={formatCurrency(totalStockValue)}
          icon={Warehouse}
          variant="primary"
          trend={{ value: "+5.2% o'tgan oyga nisbatan", positive: true }}
        />
        <KpiCard
          title="Kam qoldiq"
          value={`${lowStockProducts.length} mahsulot`}
          subtitle="Minimal darajadan past"
          icon={AlertTriangle}
          variant="warning"
        />
        <KpiCard
          title="Oylik daromad"
          value={formatCurrency(monthlyRevenue)}
          icon={TrendingUp}
          variant="success"
          trend={{ value: "+12.3%", positive: true }}
        />
        <KpiCard
          title="Oylik foyda"
          value={formatCurrency(monthlyProfit)}
          icon={DollarSign}
          variant="success"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <KpiCard
          title="Bugungi kirim"
          value={`${mockIncoming.filter(i => i.date === '2024-02-18').length} ta hujjat`}
          icon={ArrowDownToLine}
          variant="default"
        />
        <KpiCard
          title="Bugungi sotuv"
          value={`${mockSales.filter(s => s.date === '2024-02-18').length} ta hujjat`}
          icon={ArrowUpFromLine}
          variant="default"
        />
        <KpiCard
          title="Obyektga sarf"
          value={`${mockProjectUse.length} ta loyiha`}
          icon={HardHat}
          variant="default"
        />
        <KpiCard
          title="To'lanmagan"
          value={formatCurrency(outstandingPayments)}
          icon={CreditCard}
          variant="destructive"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-card rounded-xl border p-5 shadow-sm">
          <h3 className="text-lg font-semibold text-card-foreground mb-4">Daromad va foyda</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 15%, 90%)" />
              <XAxis dataKey="name" tick={{ fill: "hsl(220, 10%, 46%)", fontSize: 12 }} />
              <YAxis tick={{ fill: "hsl(220, 10%, 46%)", fontSize: 12 }} tickFormatter={(v) => `${v / 1000000}M`} />
              <Tooltip formatter={(value: number) => formatCurrency(value)} />
              <Bar dataKey="revenue" name="Daromad" fill="hsl(220, 70%, 45%)" radius={[4, 4, 0, 0]} />
              <Bar dataKey="profit" name="Foyda" fill="hsl(142, 72%, 40%)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-card rounded-xl border p-5 shadow-sm">
          <h3 className="text-lg font-semibold text-card-foreground mb-4">Kategoriya bo'yicha sotuv</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={categoryData} cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={3} dataKey="value">
                {categoryData.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex flex-wrap gap-2 mt-2">
            {categoryData.map((c) => (
              <div key={c.name} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: c.color }} />
                {c.name}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Low stock table */}
      {lowStockProducts.length > 0 && (
        <div className="mt-6 bg-card rounded-xl border p-5 shadow-sm">
          <h3 className="text-lg font-semibold text-card-foreground mb-4 flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-warning" />
            Kam qoldiq mahsulotlar
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-left text-muted-foreground">
                  <th className="pb-3 font-medium">SKU</th>
                  <th className="pb-3 font-medium">Nomi</th>
                  <th className="pb-3 font-medium">Qoldiq</th>
                  <th className="pb-3 font-medium">Min. daraja</th>
                </tr>
              </thead>
              <tbody>
                {lowStockProducts.map((p) => (
                  <tr key={p.id} className="border-b last:border-0">
                    <td className="py-3 font-mono text-xs">{p.sku}</td>
                    <td className="py-3">{p.name}</td>
                    <td className="py-3">
                      <span className="text-destructive font-medium">{p.currentStock}</span>
                    </td>
                    <td className="py-3">{p.minStockLevel}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
