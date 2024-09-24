interface NavgationProps {
  children?: React.ReactNode,
  className? : string
}

const Navgation = ({ children, className }: NavgationProps) => {
  return <header className={className}>
    {children}
  </header>
}

export default Navgation;