import React from "react";


interface IProps {
    a: number;
    b: number;
}

export default class ChildAddition extends React.Component<IProps, {}>{
    constructor(props: IProps) {
        super(props);
        console.log("Child class contructor is called");
        
    }

    public render(): JSX.Element {
        const sum = this.props.a + this.props.b;
        return (
            <>
                <div>Child Component</div>
                <div>{"addition is " + sum}</div>
            </>
        )
    }
}