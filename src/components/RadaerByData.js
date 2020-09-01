import React, { useState, useEffect } from "react";
import { Radar ,defaults } from "react-chartjs-2";

 

defaults.global.defaultFontFamily  = "'Baloo Tamma 2'";
defaults.global.defaultFontColor =  '#2f1544'
defaults.global.defaultFontStyle =  'bold'
// defaults.global.defaultFontStyle =  '20'





function generate_random_idx_color(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

const RadarByData = (props) => {
    const [chartData, setChartData] = useState({});


    // to do make sure about order
    const colors = ['#f2b705'];


    const chart = () => {


        let datasets = [];
        let color_idx = generate_random_idx_color(0, colors.length);
        // let aromaLabel = aroma.entity_alias_readable;
        // pick color
        let data_color = colors[color_idx];


        // save data set
        datasets = [{
            // label: "dd",
            backgroundColor: "rgba(0,0,0,0)",
            borderColor: data_color,
            borderWidth: 2,
            data: Object.values(props.data),
            pointRadius: 1.5

        }];



        setChartData({
            labels: Object.keys(props.data),
            datasets: datasets
        });
    }

    useEffect(() => {
        chart();
    }, [props]);

    return (
        <div>
            <Radar
                data={chartData}
                width={100}
                height={100}   
                color ='green'
                options={{
                    responsive: true,
                    aspectRatio: 1,
                   
                    title: { text: props.title, display: false },
                    legend: {
                        display: false,
                    },
                    scale: {
                        gridLines: {
                          color: '#2f1544',
                          lineWidth: 0.5
                        },
                        angleLines : {
                            color: '#2f1544', 
                            lineWidth: 0.5

                        },
                        //  ticks: {
                        //     display: false

                        // }
                      }
                }}
            />
        </div>
    );
};

export default RadarByData;