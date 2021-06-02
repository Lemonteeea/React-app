import React from "react"
import { Button } from 'antd';

interface Props {
    click: Function;
    text: string;
}

class PrimaryButtom extends React.Component<Props,{}> {
    render() {
        return (
            <Button type="primary" onClick={ e => this.props.click(e) }>{this.props.text}</Button>
        )
    }
}

export default PrimaryButtom