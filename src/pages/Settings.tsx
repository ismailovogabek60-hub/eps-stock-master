import { Settings as SettingsIcon, User, Shield, Bell } from "lucide-react";

export default function SettingsPage() {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Sozlamalar</h1>
        <p className="page-subtitle">Tizim sozlamalari</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-card rounded-xl border p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
          <User className="h-8 w-8 text-primary mb-3" />
          <h3 className="font-semibold text-card-foreground mb-1">Profil</h3>
          <p className="text-sm text-muted-foreground">Foydalanuvchi ma'lumotlari</p>
        </div>
        <div className="bg-card rounded-xl border p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
          <Shield className="h-8 w-8 text-primary mb-3" />
          <h3 className="font-semibold text-card-foreground mb-1">Rollar va ruxsatlar</h3>
          <p className="text-sm text-muted-foreground">Foydalanuvchi rollari boshqaruvi</p>
        </div>
        <div className="bg-card rounded-xl border p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
          <Bell className="h-8 w-8 text-primary mb-3" />
          <h3 className="font-semibold text-card-foreground mb-1">Bildirishnomalar</h3>
          <p className="text-sm text-muted-foreground">Ogohlantirish sozlamalari</p>
        </div>
      </div>
    </div>
  );
}
