import './Header.css';

interface HeaderInfo {
    name: string,
    title: string
}

export default function Header(props: HeaderInfo) {
    return (
        <div className='Header'>
            <div className='Header-name'>{props.name}</div>
            <div className='Header-subtitle'>{props.title}</div>
        </div>
    );
}
