import { Merriweather, Inter } from 'next/font/google'

const headingFont = Merriweather({
  subsets: ['latin'],
  weight: ['700', '800', '900'],
})

const bodyFont = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
})

const Title = ({
  title = "",
  highlightedText = "",
  description = "",
  className = "",
}) => {
  return (
    <div className={`mb-8 ${className}`}>

      <h2 className={`${headingFont.className} text-3xl font-black tracking-tight text-[#0A1929] sm:text-4xl lg:text-5xl`}>
        {title.includes(highlightedText) ? (
          title.split(highlightedText).map((part, index, array) => (
            <span key={index}>
              {part}
              {index < array.length - 1 && (
                <span className="text-[#F97316]">{highlightedText}</span>
              )}
            </span>
          ))
        ) : (
          title
        )}
      </h2>

  
      <p className={`${bodyFont.className} mt-2 text-sm text-slate-500`}>
        {description}
      </p>
    </div>
  )
}

export default Title