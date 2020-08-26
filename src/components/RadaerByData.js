import React, { useState, useEffect } from "react";
import { Radar ,defaults } from "react-chartjs-2";

 

defaults.global.defaultFontFamily  = "'Baloo Tamma 2'";





function generate_random_idx_color(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

const RadarByData = (props) => {
    const [chartData, setChartData] = useState({});


    // to do make sure about order
    const colors = ["rgba(75, 192, 192, 0.6)", "rgba(153, 102, 255, 0.6)", "rgba(255, 159, 64, 0.6)", "rgba(54, 162, 235, 0.6)"];


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
                options={{
                    responsive: true,
                    aspectRatio: 1,
                    title: { text: props.title, display: true },
                    legend: {
                        display: false,


                    }
                }}
            />
        </div>
    );
};

export default RadarByData;