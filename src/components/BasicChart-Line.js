// import React, { useState, useEffect } from "react";
// import { Line } from "react-chartjs-2";
// import axios from "axios";

// const BasicLine = ({urlData}) => {
//     const [chartData, setChartData] = useState({});

//     const chart = () => {
//         let chartTitles = [];
//         let chartVals = [];
//         let ingredientName = '';
//         axios
//             .get(urlData)
//             .then(res => {
//                 for (const [key , val] of Object.entries(res.data)) {
//                     if(!key.match('url|entity_id|entity_alias_readable')) {
//                         chartTitles = [...chartTitles , key]
//                         chartVals = [...chartVals , val]
//                     }
//                     if(key.match('entity_alias_readable')) {
//                         ingredientName = val
//                     }
//                 }
//                 setChartData({
//                     labels: chartTitles,
//                     datasets: [
//                         {
//                             label: ingredientName,
//                             data: chartVals,
//                             backgroundColor: ["rgba(208, 169, 116, 0.6)"],
//                             borderWidth: 4
//                         }
//                     ]
//                 });
//             })
//             .catch(err => {
//                 console.log(err);
//             });
//     };

//     useEffect(() => {
//         chart();
//     }, []);
//     return (
//             <div>
//                 <Line
//                     data={chartData}
//                     options={{
//                         responsive: true,
//                         title: { text: "Aroma Intensity ", display: true },
                     
//                     }}
//                 />
//             </div>
//     );
// };

// export default BasicLine;