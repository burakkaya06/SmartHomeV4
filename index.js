/** @format */


import { AppRegistry,Navigator,StyleSheet,Text,View} from 'react-native';
import{Router,Scene} from 'react-native-router-flux';
import {name as appName} from './app.json';
import React,{Component} from 'react';


import Login from './src/Pages/Login';
import Main from './src/Pages/Main';
import Admin from './src/Pages/Admin';
import CreatePage from "./src/Pages/CreatePage";
import ListPage from "./src/Pages/ListPage";
import DeletePage from "./src/Pages/DeletePage";
import EditPage from "./src/Pages/EditPage";
import User from "./src/Pages/User";
import HomeControl from "./src/Pages/HomeControl";
import HırsızPage from "./src/Pages/HırsızPage";


export default class smarthomestart extends Component{

    render()
    {
        return(
            <Router>
                <Scene>
                    <Scene
                        hideNavBar={true}
                        key="Login"
                        component={Login}
                        title="Giriş"
                        initial
                    />
                    <Scene
                        hideNavBar={true}
                        key="Main"
                        component={Main}
                        title="main"
                    />
                    <Scene
                        hideNavBar={true}
                        key="Admin"
                        component={Admin}
                        title="admin"
                    />
                    <Scene
                        hideNavBar={true}
                        key="EditPage"
                        component={EditPage}
                        title="editPage"
                    />
                    <Scene
                        hideNavBar={true}
                        key="HomeControl"
                        component={HomeControl}
                        title="homecontrol"
                    />
                    <Scene
                        hideNavBar={true}
                        key="HırsızPage"
                        component={HırsızPage}
                        title="hırsızpage"
                    />
                    <Scene
                        hideNavBar={true}
                        key="User"
                        component={User}
                        title="user"
                    />
                    <Scene
                        hideNavBar={true}
                        key="DeletePage"
                        component={DeletePage}
                        title="deletepage"
                    />
                    <Scene
                        hideNavBar={true}
                        key="CreatePage"
                        component={CreatePage}
                        title="CreatePage"
                    /><Scene
                    hideNavBar={true}
                    key="ListPage"
                    component={ListPage}
                    title="ListPage"
                />


                </Scene>

            </Router>


        );
    }
}





AppRegistry.registerComponent(appName, () => smarthomestart);
