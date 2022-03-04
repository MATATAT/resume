import { Box } from '@mui/material';
import './SideBlock.css';

interface SideBlockProps {
    title: string,
    renderer?: () => JSX.Element
}

export default function SideBlock(props: SideBlockProps) {
    return (
        <Box>
            <div className="SideBlock-title">{props.title}</div>
            <div>{props.renderer?.() ?? "Nothing here currently"}</div>
        </Box>
        // <div className='SideBlock'>
        //     <div className="SideBlock-title">{props.title}</div>
        //     <div>{props.renderer?.() ?? "Nothing here currently"}</div>
        // </div>
    );
}
