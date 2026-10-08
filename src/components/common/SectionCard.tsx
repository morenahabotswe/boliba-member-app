type SectionCardProps = {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  actions?: React.ReactNode;
};

export default function SectionCard({ title, subtitle, children, actions }: SectionCardProps) {
  return (
    <section className="panel">
      <div className="section-header" style={{ marginBottom: 16 }}>
        <div>
          <h3>{title}</h3>
          {subtitle ? <p className="page-subtitle" style={{ marginTop: 4 }}>{subtitle}</p> : null}
        </div>
        {actions}
      </div>
      {children}
    </section>
  );
}
