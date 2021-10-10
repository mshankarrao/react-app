import { Redirect, Route, Switch } from "react-router-dom";
import ClassSearch from "./ClassSearch";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";
import FCParent, { FCPChild } from "./FCParent";
import Home from "./Home";
import Login from "./Login";
import ParentClass from "./ParentClass";
import SignUp from "./SignUp";
import StoreData from "./StoreData";
import UseContextEx from "./UseContextEx";
import UseEffectMount from "./UseEffectMount";
import UseEffectUpdate from "./UseEffectUpdate";
import UseRefEx from "./UseRefEx";
import UsersReducerUI from "./UsersReducerUI";
import CheckReducer from "./CheckReducer";
import Profile from "./Profile";
import { useContext } from "react";
import { UserContext } from "./UserProvider";

function App() {
  const userContext = useContext(UserContext);
  const renderProfile = () => {
    if (userContext && userContext.uid) return <Profile />;
    return <Redirect to="/Home" />
  }

  return (
    <Switch>
      {/* simple routing */}
      <Route path={"/a"} render={() => <ComponentA />} exact={true} />
      {/* routing with variables */}
      <Route path={"/b/:name"} render={() => <ComponentB />} exact={true} />
      {/* history object - back and push */}
      <Route path={"/c"} render={() => <ComponentC />} exact={true} />
      {/* simple class based component */}
      <Route path={"/classBased"} component={ParentClass} exact={true} />
      <Route path={"/classSearch"} component={ClassSearch} exact={true} />


      {/* not using component and using render because need to pass props   */}
      <Route path={"/functionBased"} render={() => <FCParent initNum={5} />} exact={true} />
      <Route path={"/functionChildBased"} render={() => <FCPChild />} exact={true} />

      <Route path={"/useEffectMount"} component={UseEffectMount} exact={true} />
      <Route path={"/useEffectUpdate"} component={UseEffectUpdate} exact={true} />
      <Route path={"/useContext"} component={UseContextEx} exact={true} />
      <Route path={"/useRef"} component={UseRefEx} exact={true} />
      {/* reducer */}
      <Route path={"/storeData"} component={StoreData} exact={true} />
      <Route path={"/userReducersUI"} component={UsersReducerUI} exact={true} />
      <Route path={"/checkReducer"} component={CheckReducer} exact={true} />


      {/* ui project */}
      <Route path={"/login"} component={Login} exact={true} />
      <Route path={"/signUp"} component={SignUp} exact={true} />
      <Route path={"/profile"} render={renderProfile} exact={true} />
      <Route path={"/home"} component={Home} exact={true} />
      <Route path={"/"} render={() => <Redirect to="/home" />} exact={true} />


    </Switch>
  );
}

export default App;
