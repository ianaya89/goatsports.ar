interface TestimonialCardProps {
  quote: string
  name: string
  title: string
}

export default function TestimonialCard({ quote, name, title }: TestimonialCardProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)

  return (
    <div className="group h-full bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-500 relative flex flex-col">
      {/* Accent top line */}
      <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-blue-500 to-accent-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Quote icon */}
      <div className="w-9 h-9 rounded-full bg-blue-50 group-hover:bg-accent-50 flex items-center justify-center mb-4 transition-colors duration-500">
        <svg className="w-4 h-4 text-blue-400 group-hover:text-accent-500 transition-colors duration-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
        </svg>
      </div>

      <p className="text-gray-600 leading-relaxed text-sm flex-grow">
        {quote}
      </p>

      <div className="flex items-center gap-3 pt-5 mt-6 border-t border-gray-100">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center flex-shrink-0">
          <span className="text-white text-xs font-semibold">{initials}</span>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 text-sm leading-tight">{name}</h4>
          <p className="text-xs text-gray-500">{title}</p>
        </div>
      </div>
    </div>
  )
}
