import { mockSales, formatCurrency } from "@/data/mockData";
import { StatusBadge } from "@/components/StatusBadge";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function Sales() {
  return (
    <div>
      <div className="page-header flex items-center justify-between">
        <div>
          <h1 className="page-title">Sotuv / Chiqim</h1>
          <p className="page-subtitle">Sotuv hujjatlari va moliyaviy natijalar</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Yangi sotuv
        </Button>
      </div>

      <div className="bg-card rounded-xl border shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-muted/50 text-left text-muted-foreground">
                <th className="px-4 py-3 font-medium">Hujjat №</th>
                <th className="px-4 py-3 font-medium">Mijoz</th>
                <th className="px-4 py-3 font-medium">Sana</th>
                <th className="px-4 py-3 font-medium text-right">Daromad</th>
                <th className="px-4 py-3 font-medium text-right">Tannarx</th>
                <th className="px-4 py-3 font-medium text-right">Foyda</th>
                <th className="px-4 py-3 font-medium">To'lov</th>
                <th className="px-4 py-3 font-medium">Holat</th>
              </tr>
            </thead>
            <tbody>
              {mockSales.map((doc) => (
                <tr key={doc.id} className="border-b last:border-0 hover:bg-muted/30 transition-colors cursor-pointer">
                  <td className="px-4 py-3 font-mono text-xs font-medium">{doc.id}</td>
                  <td className="px-4 py-3">{doc.customer}</td>
                  <td className="px-4 py-3 text-muted-foreground">{doc.date}</td>
                  <td className="px-4 py-3 text-right font-medium">{formatCurrency(doc.totalRevenue)}</td>
                  <td className="px-4 py-3 text-right text-muted-foreground">{formatCurrency(doc.totalCogs)}</td>
                  <td className="px-4 py-3 text-right font-medium text-success">{formatCurrency(doc.grossProfit)}</td>
                  <td className="px-4 py-3">
                    <StatusBadge status={doc.paymentStatus}>{doc.paymentStatus}</StatusBadge>
                  </td>
                  <td className="px-4 py-3">
                    <StatusBadge status={doc.status}>{doc.status}</StatusBadge>
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
