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
    Filler,
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
    Filler,
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
        x:{
            grid:{
                display:false
            }
        }

    }

};

const labels = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'ابان', 'آذر', 'دی', 'بهمن', 'اسفند'];

export const data = {
    labels: labels.reverse(),
    datasets: [
        {
            fill: true,
            label: 'پرداخت',
            fill: true,
            tension: 0.5,
            data: labels.map(() => randomIntFromInterval(0, 100)).reverse(),
            borderColor: '#1fccad',
            backgroundColor: '#1fccacc1',
        },
        {
            fill: true,
            label: 'درآمد',
            fill: true,
            tension: 0.5,
            data: labels.map(() => randomIntFromInterval(0, 100)).reverse(),
            borderColor: '#33a6ff',
            backgroundColor: '#33a7ffca',
        },

    ],
};


const AreaChart = () => {
    return <Line options={options} data={data} />;
}

export default AreaChart
