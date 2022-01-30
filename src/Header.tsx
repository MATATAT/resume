import { Component } from 'react';

interface HeaderInfo {
    name: string,
    title: string
}

export default class Header extends Component<HeaderInfo> {
    public state: HeaderInfo;

    constructor(props: HeaderInfo) {
        super(props);
        this.state = props;
    }

    public render() {
        return (
            <div>
                <header>{this.state.name}</header>
                <span>{this.state.title}</span>
            </div>
        );
    }
}