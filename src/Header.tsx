import './Header.css';

interface HeaderInfo {
    name: string,
    title: string
}

export default function Header(props: HeaderInfo) {
    return (
        <div className='Header'>
            <div className='Header-name'>{props.name.toUpperCase()}</div>
            <span className='Header-subtitle'>{props.title.toUpperCase()}</span>
        </div>
    );
}
