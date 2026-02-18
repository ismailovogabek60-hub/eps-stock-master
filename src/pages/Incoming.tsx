import { mockIncoming, formatCurrency } from "@/data/mockData";
import { StatusBadge } from "@/components/StatusBadge";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function Incoming() {
  return (
    <div>
      <div className="page-header flex items-center justify-between">
        <div>
          <h1 className="page-title">Kirim</h1>
          <p className="page-subtitle">Tovar kirim hujjatlari</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Yangi kirim
        </Button>
      </div>

      <div className="bg-card rounded-xl border shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-muted/50 text-left text-muted-foreground">
                <th className="px-4 py-3 font-medium">Hujjat №</th>
                <th className="px-4 py-3 font-medium">Yetkazuvchi</th>
                <th className="px-4 py-3 font-medium">Faktura №</th>
                <th className="px-4 py-3 font-medium">Sana</th>
                <th className="px-4 py-3 font-medium text-right">Mahsulotlar</th>
                <th className="px-4 py-3 font-medium text-right">Summa</th>
                <th className="px-4 py-3 font-medium">Holat</th>
              </tr>
            </thead>
            <tbody>
              {mockIncoming.map((doc) => (
                <tr key={doc.id} className="border-b last:border-0 hover:bg-muted/30 transition-colors cursor-pointer">
                  <td className="px-4 py-3 font-mono text-xs font-medium">{doc.id}</td>
                  <td className="px-4 py-3">{doc.supplier}</td>
                  <td className="px-4 py-3 text-muted-foreground">{doc.invoiceNumber}</td>
                  <td className="px-4 py-3 text-muted-foreground">{doc.date}</td>
                  <td className="px-4 py-3 text-right">{doc.itemCount} ta</td>
                  <td className="px-4 py-3 text-right font-medium">{formatCurrency(doc.totalAmount)}</td>
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
