import React, { PureComponent } from 'react';
import $ from 'jquery';
import {
  PieChart, Pie, Legend, Tooltip, Cell
} from 'recharts';

const COLORS = ['#dd44a8', '#3a87c1', '#454fbc', '#992f2f', '#c13a43', '#bc7745', '#bcc65d', '#44ddc6', '#2f6499', '#9c5dc6'];

const dataaa = [
  { name: 'Group A', value: 2400 }, { name: 'Group B', value: 4567 },
  { name: 'Group C', value: 1398 }, { name: 'Group D', value: 9800 },
  { name: 'Group E', value: 3908 }, { name: 'Group F', value: 4800 },
];

export default class Chart extends PureComponent {

  constructor(props) {
    super(props);


  }

  componentDidMount() {
    
  }
  /*componentDidUpdate(Prev){
    if (this.props.name != Prev.name){
      this.setState({name: this.props.name});
    }
  }*/


  render() {
    //console.log(this.props.data);
    return (
      <PieChart width={1400} height={800}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={this.props.data}
          cx={800}
          cy={400}
          outerRadius={300}
          fill="#8884d8"
          >
          {
            this.props.data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>
        <Tooltip formatter={function (a) {
          return ""
        }}/>
      </PieChart>
    );
  }
}