import { ReactNode } from "react";

type SectionProps = {
    children?: ReactNode,
    className?: string,
    style?: React.CSSProperties,

}

const SectionItem = ({ children, className, style }: SectionProps) => {
    return <section className={className} style={style}>
        {children}
    </section>
}

export default SectionItem;
