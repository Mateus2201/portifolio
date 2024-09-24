interface AsideProps {
    children?: React.ReactNode,
}

const Aside = ({ children }: AsideProps) => {
    return <aside className="flex h-screen items-center justify-center flex-col ">
        {children}
    </aside>
}

export default Aside;