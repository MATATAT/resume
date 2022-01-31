interface SideBlockProps {
    title: string,
    renderer?: () => JSX.Element
}

export default function SideBlock(props: SideBlockProps) {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>{props.renderer?.() ?? "Nothing here currently"}</div>
        </div>
    );
}
