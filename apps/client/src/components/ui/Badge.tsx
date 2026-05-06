const COLORS: Record<string, string> = {
  'Más vendido': 'bg-primary-600 text-white',
  'Nuevo':       'bg-emerald-500 text-white',
  'Premium':     'bg-amber-500 text-white',
  'Exclusivo':   'bg-purple-600 text-white',
}

const DEFAULT_COLOR = 'bg-neutral-600 text-white'

export default function Badge({ label }: { label: string }) {
  return (
    <span className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full ${COLORS[label] ?? DEFAULT_COLOR}`}>
      {label}
    </span>
  )
}
