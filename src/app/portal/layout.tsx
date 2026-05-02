import PortalBottomNav from "@/components/PortalBottomNav";

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <PortalBottomNav />
    </>
  );
}
