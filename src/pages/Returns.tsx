import { RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function Returns() {
  return (
    <div>
      <div className="page-header flex items-center justify-between">
        <div>
          <h1 className="page-title">Qaytarishlar</h1>
          <p className="page-subtitle">Sotuv va loyiha qaytarishlari</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Yangi qaytarish
        </Button>
      </div>

      <div className="bg-card rounded-xl border p-12 shadow-sm text-center">
        <RotateCcw className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-card-foreground mb-2">Hozircha qaytarishlar yo'q</h3>
        <p className="text-sm text-muted-foreground">Qaytarish hujjati yaratish uchun yuqoridagi tugmani bosing</p>
      </div>
    </div>
  );
}
