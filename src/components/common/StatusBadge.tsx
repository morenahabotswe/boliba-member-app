import clsx from 'clsx';

type StatusBadgeProps = {
  status: 'active' | 'pending' | 'under_review' | 'approved' | 'rejected' | 'completed' | 'processing' | 'draft' | 'submitted' | 'cancelled';
  className?: string;
};

export default function StatusBadge({ status, className }: StatusBadgeProps) {
  const map: Record<string, string> = {
    active: 'success',
    pending: 'warning',
    under_review: 'info',
    approved: 'success',
    rejected: 'danger',
    completed: 'success',
    processing: 'warning',
    draft: 'info',
    submitted: 'info',
    cancelled: 'danger'
  };

  return <span className={clsx('badge', map[status] ?? 'info', className)}>{status.replace('_', ' ')}</span>;
}
