import React from "react";


interface IState {
    loading: string,
    email: string,
    photo: string
}

export default class ClassAjax extends React.Component<{}, IState>{
    constructor(props: {}) {
        super(props);
        this.state = {
            loading: "not started",
            email: "",
            photo: ""
        }
    }

    private async ajaxCall() {
        const response = await fetch("https://reqres.in/api/users");
        if (response.ok) {
            const json = await response.json();
            this.setState({
                email: json.data[0].email,
                photo: json.data[0].avatar,
                loading: "completed",

            });
        }
    }

    public componentDidMount() {
        this.setState({ loading: "started" })
        this.ajaxCall();
    }

    public render() {
        return (
            <>
                <div>{this.state.loading}</div>
                {this.state.loading === "completed" && this.renderPerson()}
            </>
        )
    }
    private renderPerson() {
        return (
            <>
                <div>{this.state.email}</div>
                <img src={this.state.photo} alt="" />
            </>
        )
    }


}
