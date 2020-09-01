import React, { useState, useEffect } from "react";
import { Bar, HorizontalBar } from "react-chartjs-2";


function convert_titles(titles_arr) {
    let new_titles_arr = []
    for (const title of titles_arr) {
        if (title.startsWith("land_use")) {
            new_titles_arr = [...new_titles_arr, "Land use"];
        } else if (title.startsWith("fresh")) {
            new_titles_arr = [...new_titles_arr, "Freshwater(10L)"];
        } else {
            new_titles_arr = [...new_titles_arr, title.replace(/^\w/, (c) => c.toUpperCase())];
        }
    }
    return new_titles_arr;
}

const LineByData = (props) => {
    const [chartData, setChartData] = useState({});

    const colors = ["rgba(75, 192, 192, 0.6)", "rgba(153, 102, 255, 0.6)", "rgba(255, 159, 64, 0.6)", "rgba(54, 162, 235, 0.6)"];



    const chart = () => {

        let datasetLand = []
        // save data set
        datasetLand = [{
            label: "Dish Footprint",
            backgroundColor: '#f2b705',
            borderWidth: 4,
            data: Object.values(props.dynamic_env_impact)
        }];


        // save data set
        datasetLand = [...datasetLand, {
            label: "Metarecipe Avarge",
            backgroundColor: '#2f1544',
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
            labels: convert_titles(Object.keys(props.dynamic_env_impact)),
            datasets: datasetLand
        });
    }

    useEffect(() => {
        chart();
    }, [props]);

    return (
        <div>
            <Bar
                data={chartData}
                // width={60}
                // height={20}   
                options={{
                    responsive: true,
                    aspectRatio: 3,
                    title: { text: "Environmental Impact", display: false },
                    legend: {
                        position: 'bottom',
                        // align: 'start'

                    },
                    scales: {
                        xAxes: [{
                            gridLines: {
                                color: '#2f1544',
                                lineWidth: 0.5
                            }
                        }],
                    }

                }}
            />
        </div>
    );
};

export default LineByData;