import React from "react";
import ChildAddition from "./ChildAddition";
import ChildIncrement from "./ChildIncrement";
import ClassAjax from "./ClassAjax";
import LifeCycle from "./LifeCycle";

export default class ParentClass extends React.Component<{}, {}>{
    constructor(props: {}) {
        super(props);
        console.log("This is from Parent class");
        
    }

    // every class based component you have to implement render() functuon
    public render(): JSX.Element {
        return (
            <>
                <div>Learning based component</div>
                <ChildAddition a={10} b={12} />
                <ChildIncrement init={100} />
                <LifeCycle a={10}/>
                <ClassAjax/>
            </>
        )
    }
}

/*
parent invoide the child
return (
    <div>

        <child/>
    </div>
)

Child - calculator -argumentsnumber , number
props is a way to pass data between parent and child

Props is readonly but you cannot update it in the child when you pass from parent

To avoid this react provide something called State and we initialize it inside the constructor

*/