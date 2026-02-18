import { BarChart3, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatCurrency, mockProducts, mockSales } from "@/data/mockData";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";

const monthlyData = [
  { name: "Yan", revenue: 45000000, cogs: 27000000, profit: 18000000 },
  { name: "Fev", revenue: 52000000, cogs: 31000000, profit: 21000000 },
  { name: "Mar", revenue: 38000000, cogs: 23000000, profit: 15000000 },
  { name: "Apr", revenue: 61000000, cogs: 36000000, profit: 25000000 },
  { name: "May", revenue: 55000000, cogs: 33000000, profit: 22000000 },
  { name: "Iyun", revenue: 70000000, cogs: 42000000, profit: 28000000 },
];

const topProducts = [...mockProducts]
  .sort((a, b) => (b.sellingPrice - b.averageCost) * b.currentStock - (a.sellingPrice - a.averageCost) * a.currentStock)
  .slice(0, 5);

export default function Reports() {
  return (
    <div>
      <div className="page-header flex items-center justify-between">
        <div>
          <h1 className="page-title">Hisobotlar</h1>
          <p className="page-subtitle">Moliyaviy va ombor hisobotlari</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Excel
          </Button>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            PDF
          </Button>
        </div>
      </div>

      {/* Revenue chart */}
      <div className="bg-card rounded-xl border p-5 shadow-sm mb-6">
        <h3 className="text-lg font-semibold text-card-foreground mb-4">Oylik daromad, tannarx va foyda</h3>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={monthlyData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 15%, 90%)" />
            <XAxis dataKey="name" tick={{ fill: "hsl(220, 10%, 46%)", fontSize: 12 }} />
            <YAxis tick={{ fill: "hsl(220, 10%, 46%)", fontSize: 12 }} tickFormatter={(v) => `${v / 1000000}M`} />
            <Tooltip formatter={(value: number) => formatCurrency(value)} />
            <Bar dataKey="revenue" name="Daromad" fill="hsl(220, 70%, 45%)" radius={[4, 4, 0, 0]} />
            <Bar dataKey="cogs" name="Tannarx" fill="hsl(0, 72%, 51%)" radius={[4, 4, 0, 0]} />
            <Bar dataKey="profit" name="Foyda" fill="hsl(142, 72%, 40%)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Top profitable products */}
      <div className="bg-card rounded-xl border p-5 shadow-sm">
        <h3 className="text-lg font-semibold text-card-foreground mb-4">Eng foydali mahsulotlar</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b text-left text-muted-foreground">
                <th className="pb-3 font-medium">Mahsulot</th>
                <th className="pb-3 font-medium text-right">Sotuv narxi</th>
                <th className="pb-3 font-medium text-right">Tannarx</th>
                <th className="pb-3 font-medium text-right">Foyda/birlik</th>
                <th className="pb-3 font-medium text-right">Marja %</th>
              </tr>
            </thead>
            <tbody>
              {topProducts.map((p) => {
                const profitPerUnit = p.sellingPrice - p.averageCost;
                const margin = ((profitPerUnit / p.sellingPrice) * 100).toFixed(1);
                return (
                  <tr key={p.id} className="border-b last:border-0">
                    <td className="py-3 font-medium">{p.name}</td>
                    <td className="py-3 text-right">{formatCurrency(p.sellingPrice)}</td>
                    <td className="py-3 text-right text-muted-foreground">{formatCurrency(p.averageCost)}</td>
                    <td className="py-3 text-right text-success font-medium">{formatCurrency(profitPerUnit)}</td>
                    <td className="py-3 text-right font-medium">{margin}%</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
