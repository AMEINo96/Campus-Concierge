import S3CBottomNav from "@/components/S3CBottomNav";

export default function S3CLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <S3CBottomNav />
    </>
  );
}
