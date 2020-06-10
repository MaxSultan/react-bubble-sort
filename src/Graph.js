import React from 'react';
import Bar from './Bar'

class Graph extends React.Component{

    //when the data array gets changed because of the sort, render the child bars and remap through the data
    componentDidUpdate(){

    }

    render() {
        const { data } = this.props
        return(
          <div style={styles}>
              {/* for each data point in the array return a div that has the height of the data point and a width
              of 4px */}
              {data.map(d => <Bar d={d}/> )}
          </div>
        )
    }
}

const length = 500;



const styles = {
    borderLeft: '2px solid black',
    borderBottom: '2px solid Black',
    height: `${length}px`,
    width:`${length}px`,
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    alignItems: 'flex-end',
    zIndex: '-1',
}

export default Graph;