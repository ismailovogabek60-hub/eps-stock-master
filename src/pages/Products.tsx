import { useState } from "react";
import { mockProducts, formatCurrency, categoryColors, unitLabels } from "@/data/mockData";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Plus, Filter } from "lucide-react";

const categories = ["Barchasi", "Karniz", "Kolonna", "Obramleniya", "Sayding", "Material", "Tool"];

export default function Products() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Barchasi");

  const filtered = mockProducts.filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.sku.toLowerCase().includes(search.toLowerCase());
    const matchCategory = activeCategory === "Barchasi" || p.category === activeCategory;
    return matchSearch && matchCategory;
  });

  return (
    <div>
      <div className="page-header flex items-center justify-between">
        <div>
          <h1 className="page-title">Mahsulotlar</h1>
          <p className="page-subtitle">Mahsulotlar va materiallar katalogi</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Yangi mahsulot
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Qidirish (nomi yoki SKU)..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>
        <div className="flex gap-1.5 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="bg-card rounded-xl border shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-muted/50 text-left text-muted-foreground">
                <th className="px-4 py-3 font-medium">SKU</th>
                <th className="px-4 py-3 font-medium">Nomi</th>
                <th className="px-4 py-3 font-medium">Kategoriya</th>
                <th className="px-4 py-3 font-medium">Birlik</th>
                <th className="px-4 py-3 font-medium text-right">Qoldiq</th>
                <th className="px-4 py-3 font-medium text-right">O'rtacha narx</th>
                <th className="px-4 py-3 font-medium text-right">Sotuv narxi</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((p) => (
                <tr key={p.id} className="border-b last:border-0 hover:bg-muted/30 transition-colors cursor-pointer">
                  <td className="px-4 py-3 font-mono text-xs">{p.sku}</td>
                  <td className="px-4 py-3 font-medium">{p.name}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${categoryColors[p.category]}`}>
                      {p.category}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">{unitLabels[p.unit]}</td>
                  <td className="px-4 py-3 text-right">
                    <span className={p.currentStock <= p.minStockLevel ? "text-destructive font-semibold" : ""}>
                      {p.currentStock}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right text-muted-foreground">{formatCurrency(p.averageCost)}</td>
                  <td className="px-4 py-3 text-right font-medium">{formatCurrency(p.sellingPrice)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filtered.length === 0 && (
          <div className="py-12 text-center text-muted-foreground">Mahsulot topilmadi</div>
        )}
      </div>
    </div>
  );
}
