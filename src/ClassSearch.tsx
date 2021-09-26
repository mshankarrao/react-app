import React from "react";
import "./ClassSearch.css";

interface IPerson {
    email: string;
    name: string;
    avatar: string;
}

interface IAjaxPerson {
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

interface IState {
    search: string;
    loading: string,
    persons: IPerson[]
}

export default class ClassSearch extends React.Component<{}, IState>{
    constructor(props: {}) {
        super(props);
        this.state = {
            search: "",
            loading: "not started",
            persons: []
        }
    }

    private async ajaxCall() {
        const response = await fetch("https://reqres.in/api/users");
        if (response.ok) {
            const json = await response.json();
            const persons = json.data.map((x: IAjaxPerson) => ({
                email: x.email,
                avatar: x.avatar,
                name: `${x.first_name} ${x.last_name}`
            }))
            this.setState({
                persons: persons,
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
                {this.state.loading === "completed" && this.renderPersons()}
            </>
        )
    }

    private renderPersons() {
        return (
            <>
                <input type="text" onChange={(event) => this.setState({ search: event.target.value })} />
                <div className="grid-container">
                    {this.state.persons.filter(x => x.name.includes(this.state.search)).map(this.renderPerson)}
                </div>
            </>
        )
    }

    private renderPerson(person: IPerson, index: number) {
        return (
            <>
                <div className="grid-item" key={index}>
                    <img src={person.avatar} alt="" />
                    <div>{person.name}</div>
                    <div>{person.email}</div>
                </div>
            </>
        )
    }


}
