interface HeaderInfo {
    name: string,
    title: string
}

export default function Header(props: HeaderInfo) {
    return (
        <div>
            <h1>{props.name}</h1>
            <span>{props.title}</span>
        </div>
    )
}
