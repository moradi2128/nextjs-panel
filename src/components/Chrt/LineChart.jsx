"use client"
import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { randomIntFromInterval } from '@/utils/randomIntFromInterval';




ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
export const options = {
    responsive: true,
      interaction: {
      mode: 'index',
      intersect: false,
    },
    tooltips: {
        rtl: true,
        textDirection: "rtl"
    },
    plugins: {
        legend: {
            position: 'top',
            align: "start",
            rtl: true,
            textDirection: "rtl"
        },
        // title: {
        //     display: true,
        //     text: 'Chart.js Line Chart',
        // },

    },
    scales: {
        y: {
            type: 'linear',
            display: true,
            position: 'right',
        },
        
}

};
const labels = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'ابان', 'آذر', 'دی', 'بهمن', 'اسفند'];
export const data = {
    labels: labels.reverse(),
    datasets: [
        {
            label: 'فروش مارکتینگ',
            data: labels.map(() => randomIntFromInterval(0, 1000)).reverse(),
            borderColor: 'rgb(255, 99, 132)',
            borderWidth: 2,
            fill: true,
            tension: 0.5,
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'فروش آنلاین',
            data: labels.map(() => randomIntFromInterval(0, 1000)).reverse(),
            borderColor: 'rgb(37, 156, 235)',
            borderWidth: 2,
            fill: true,
            tension: 0.5,
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};
const LineChart = () => {
    return (
        <Line options={options} data={data} />
    )
}

export default LineChart










