import React, { useState, useEffect } from "react";
import { Bar, HorizontalBar } from "react-chartjs-2";

const LineByData = (props) => {
    const [chartData, setChartData] = useState({});

    const colors = ["rgba(75, 192, 192, 0.6)", "rgba(153, 102, 255, 0.6)",  "rgba(255, 159, 64, 0.6)" , "rgba(54, 162, 235, 0.6)"];



    const chart = () => {

        let datasetLand = []
        // save data set
        datasetLand = [ {
            label: "Dish Footprint",
            backgroundColor: colors[0],
            borderWidth: 4,
            data: Object.values(props.dynamic_env_impact)
        }];
       
        
        // save data set
        datasetLand = [ ...datasetLand , {
            label: "Metarecipe Avarge",
            backgroundColor: colors[1],
            borderWidth: 4,
            data: Object.values(props.env_impact_avg)
        }];


        // datasetLand = [ ...datasetLand , {
        //     label: "Ghg",
        //     backgroundColor: colors[3],
        //     borderWidth: 4,
        //     data: Object.values(props.ghg_avg)
        // }];

        setChartData({
            labels: Object.keys(props.dynamic_env_impact),
            datasets: datasetLand
        });
    }

    useEffect(() => {
        chart();
    }, [props]);

    return (
        <div>
            <HorizontalBar
                data={chartData}
                options={{
                    responsive: true,
                    title: { text: "Environmental Impact", display: true },
                    // legend : {
                    //     display: false
                    
                    // }

                }}
            />
        </div>
    );
};

export default LineByData;