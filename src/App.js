import React from 'react';
import './App.css';
import Graph from './Graph';

class App extends React.Component {
  state = { 
    data: [],
  }

  // create 50 random pieces of data that are numbers between 0-500
  // and push them onto the data Array
  generateRandomData = () => {
    const dataArr = [];
    let keepGoing = true;
    while(keepGoing){
      const newData = Math.floor(Math.random() * 500)
      dataArr.push(newData)
      dataArr.length === 50 ? keepGoing = false : keepGoing = true;
    }
    this.setState({
      data: dataArr,
    })
  }
  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // visually show a representation of a bubble sort one flip at a time
  // highlight two bars, switch the smaller one so it is on the screenLeft, move to the next bar
  // repeating the process until the smallest bar of the three is on the leftmost side. then
  // move onto bar 4 

// compare array[0] to array[1] if array[1] is smaller than array[0] flip the two values
  async sortData(){
    const { data } = this.state;
    let cont = true;
    if(data.length === 0){
      alert('there is no data to sort')
    }else {
      var swapped;
      do {
          swapped = false;
          for (var i=0; i < data.length-1; i++) {
              if (data[i] > data[i+1]) {
                  var temp = data[i];
                  data[i] = data[i+1];
                  data[i+1] = temp;
                  swapped = true;
                  console.log(data)

                  }
          }
          this.setState({
            data: data,
          })
          await this.sleep(50)
      } while (swapped);
    }
  }


  render(){
    return (
      <div className="App">
        <h1>Bubble Sort</h1>
        <Graph data={this.state.data}></Graph> 
        <button onClick={() => this.generateRandomData()}>Generate Data</button>
        <button onClick={() => this.sortData()}>Sort Data</button>
      </div>
    );
  }
}

export default App;
