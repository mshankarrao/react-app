import React from "react";


interface IProps {
    a: number;
}

interface IState {
    b: number;
}

export default class LifeCycle extends React.Component<IProps, IState>{
    constructor(props: IProps) {
        super(props);
        this.state = {
            b: 5
        }
        console.log("LifeCycle contructor is called");
    }

    static getDerivedStateFromProps(props:IProps, state: IState) {
        console.log("LifeCycle getDerivedStateFromProps is called");
        return state;
    }

    public render(): JSX.Element {
        console.log("Render Invoked");
        return (
            <>
                <div>Child Component</div>
                <div>{"Props is " + this.props.a}</div>
                <div>{"State is " + this.state.b}</div>
                <button onClick={()=> this.increment()}>Increment by 1</button>
            </>
        );
    }

    public componentDidMount() {
        console.log("ComponentDidMount Invoked");
    }

    public shouldComponentUpdate(nextProps: IProps, nextState: IState): boolean {
        console.log("shouldComponentUpdate Invoked");
        return true;
    }

    public componentDidUpdate() {
        console.log("componentDidUpdate Invoked");
        return true;
    }

    increment(): void {
        const plus1 = this.state.b + 1;
        this.setState({ b: plus1 })
    }

    public getSnapshotBeforeUpdate(prevProps: IProps, prevState: IState) {
        console.log("getSnapshotBeforeUpdate Invoked");
        return {}
    }


}