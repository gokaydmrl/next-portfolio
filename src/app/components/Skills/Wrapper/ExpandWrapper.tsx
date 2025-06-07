function ExpandWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  return <div className={`expandWrapper ${className}`}>{children}</div>;
}
export default ExpandWrapper;
