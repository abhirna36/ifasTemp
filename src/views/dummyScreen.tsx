import React from 'react'
import {View} from 'react-native'
interface DummyScreenProps{
navigation:any,
address?:object,
setName:Function
}
interface DummyScreenState{
    count:number,
    name:string,

}


export default class DummyScreen extends React.Component <DummyScreenProps, DummyScreenState >{
    constructor(props: DummyScreenProps) {
        super(props)
    }

    render(){
        return <View></View>
    }
}