import React from "react";
import createReactClass from 'create-react-class';
import store from "./redux/store";

export default function(Component) {
    const displayName = Component.displayName
        || Component.name
        || "Component";

    return createReactClass({
        displayName: `ContextMenuConnector(${displayName})`,
        getInitialState() {
            return {
                item: store.getState().currentItem
            };
        },
        componentDidMount() {
            this.unsubscribe = store.subscribe(this.handleUpdate);
        },
        componentWillUnmount() {
            this.unsubscribe();
        },
        handleUpdate() {
            this.setState(this.getInitialState());
        },
        render() {
            return <Component {...this.props} item={this.state.item}/>;
        }
    });
}
