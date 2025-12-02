'use client'

interface CardProps {
  children: React.ReactNode
  className?: string
}

function CardHeader({ children, className = '' }: CardProps) {
  return <div className={`p-4 border-b border-default-200 ${className}`}>{children}</div>
}

function CardBody({ children, className = '' }: CardProps) {
  return <div className={`p-4 ${className}`}>{children}</div>
}

function CardFooter({ children, className = '' }: CardProps) {
  return <div className={`p-4 border-t border-default-200 ${className}`}>{children}</div>
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`rounded-lg border border-default-200 bg-content1 ${className}`}>
      {children}
    </div>
  )
}

// Support both CardHeader and Card.Header patterns
Card.Header = CardHeader
Card.Body = CardBody
Card.Footer = CardFooter

// Export individual components as well
export { CardHeader, CardBody, CardFooter }
