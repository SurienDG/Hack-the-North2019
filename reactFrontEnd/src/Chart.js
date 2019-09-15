import React, { PureComponent } from 'react';
import $ from 'jquery';
import {
  PieChart, Pie, Sector, Cell,
} from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent, index,
}) => {
   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};



export default class Chart extends PureComponent {
  constructor(props){
    super(props);
    this.state = {data: [], name: "suriendg"
  };
} 
  
  componentDidMount(){
  //   this.setState((state,props) => {
  //     state.data.push({ name: 'asdaf', value: 300 });
  //     return state;
  //   // $.getJSON(`http://localhost:2525/stats/piechart/${state.name}`, (json) => {        
  //   //     for (const key in json) {
          
  //   //         state.data.push({name: key, value: json[key]});
  //   //     }
  //   //     console.log(state);
    
  //   // });});
  // });
  this.setState((state) => {
    let data = state.data;

    
    
    $.getJSON(`http://localhost:2525/stats/piechart/${state.name}`, (json) => {        
       for (const key in json) {
          
           data.push({name: key, value: json[key]});
      }
      this.setState(data);
    
    
  });
  })
}
  
  
  render() {
    console.log(this.state.data)
    return (
      
      <PieChart width={400} height={400}>
        <Pie
          data={this.state.data}
          cx={200}
          cy={200}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {
            this.state.data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>
      </PieChart>
    );
  }
}
