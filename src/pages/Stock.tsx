import { mockProducts, formatCurrency, unitLabels } from "@/data/mockData";
import { AlertTriangle, Package } from "lucide-react";

export default function Stock() {
  const totalValue = mockProducts.reduce((s, p) => s + p.currentStock * p.averageCost, 0);
  const lowStock = mockProducts.filter(p => p.currentStock <= p.minStockLevel);

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Ombor</h1>
        <p className="page-subtitle">Joriy zaxira holati</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="kpi-card border-l-4 border-l-primary">
          <p className="text-sm text-muted-foreground">Jami mahsulotlar</p>
          <p className="text-2xl font-bold">{mockProducts.length}</p>
        </div>
        <div className="kpi-card border-l-4 border-l-success">
          <p className="text-sm text-muted-foreground">Ombor qiymati</p>
          <p className="text-2xl font-bold">{formatCurrency(totalValue)}</p>
        </div>
        <div className="kpi-card border-l-4 border-l-warning">
          <p className="text-sm text-muted-foreground">Kam qoldiq</p>
          <p className="text-2xl font-bold">{lowStock.length} ta</p>
        </div>
      </div>

      <div className="bg-card rounded-xl border shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-muted/50 text-left text-muted-foreground">
                <th className="px-4 py-3 font-medium">SKU</th>
                <th className="px-4 py-3 font-medium">Nomi</th>
                <th className="px-4 py-3 font-medium">Birlik</th>
                <th className="px-4 py-3 font-medium text-right">Qoldiq</th>
                <th className="px-4 py-3 font-medium text-right">Min. daraja</th>
                <th className="px-4 py-3 font-medium text-right">Qiymati</th>
                <th className="px-4 py-3 font-medium">Holat</th>
              </tr>
            </thead>
            <tbody>
              {mockProducts.map((p) => (
                <tr key={p.id} className="border-b last:border-0 hover:bg-muted/30 transition-colors">
                  <td className="px-4 py-3 font-mono text-xs">{p.sku}</td>
                  <td className="px-4 py-3 font-medium">{p.name}</td>
                  <td className="px-4 py-3 text-muted-foreground">{unitLabels[p.unit]}</td>
                  <td className="px-4 py-3 text-right font-medium">{p.currentStock}</td>
                  <td className="px-4 py-3 text-right text-muted-foreground">{p.minStockLevel}</td>
                  <td className="px-4 py-3 text-right">{formatCurrency(p.currentStock * p.averageCost)}</td>
                  <td className="px-4 py-3">
                    {p.currentStock <= p.minStockLevel ? (
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-destructive">
                        <AlertTriangle className="h-3.5 w-3.5" /> Kam
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-success">
                        <Package className="h-3.5 w-3.5" /> Yetarli
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
