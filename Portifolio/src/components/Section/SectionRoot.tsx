import { ReactNode } from "react";

type SectionsProps = {
    children?: ReactNode,
    className?: string,
    style?: React.CSSProperties,
}

const SectionRoot = ({ children, className, style }: SectionsProps) => {
    return <div className={className} style={style}>
        {children}
    </div>;
};

export default SectionRoot;
