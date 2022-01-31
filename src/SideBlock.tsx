import './SideBlock.css';

interface SideBlockProps {
    title: string,
    renderer?: () => JSX.Element
}

export default function SideBlock(props: SideBlockProps) {
    return (
        <div>
            <div className="SideBlock-title">{props.title.toUpperCase()}</div>
            <div>{props.renderer?.() ?? "Nothing here currently"}</div>
        </div>
    );
}
