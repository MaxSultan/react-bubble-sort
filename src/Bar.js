import React from 'react';

export default class Bar extends React.Component{
    state = {};


    render(){
        const { d } = this.props
        return(
             <div style={{height:`${d}px`, ...barStyles}}></div>
        )
    }
}

const barStyles = {
    width: '5px', 
    marginLeft: '4px', 
    backgroundColor: 'blue',
}