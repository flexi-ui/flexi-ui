interface CardProps {
  children: React.ReactNode
  className?: string
}

function CardHeader({ children, className = '' }: CardProps) {
  return <div className={`p-4 border-b border-border ${className}`}>{children}</div>
}

function CardBody({ children, className = '' }: CardProps) {
  return <div className={`p-4 ${className}`}>{children}</div>
}

function CardFooter({ children, className = '' }: CardProps) {
  return <div className={`p-4 border-t border-border ${className}`}>{children}</div>
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`rounded-lg border border-border bg-surface ${className}`}>
      {children}
    </div>
  )
}

Card.Header = CardHeader
Card.Body = CardBody
Card.Footer = CardFooter

export { CardHeader, CardBody, CardFooter }
