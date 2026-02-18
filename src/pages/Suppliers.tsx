import { mockSuppliers } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Plus, Phone, MapPin } from "lucide-react";

export default function Suppliers() {
  return (
    <div>
      <div className="page-header flex items-center justify-between">
        <div>
          <h1 className="page-title">Yetkazuvchilar</h1>
          <p className="page-subtitle">Yetkazib beruvchilar ro'yxati</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Yangi yetkazuvchi
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockSuppliers.map((s) => (
          <div key={s.id} className="bg-card rounded-xl border p-5 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <h3 className="font-semibold text-card-foreground mb-3">{s.name}</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                {s.phone}
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {s.address}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
