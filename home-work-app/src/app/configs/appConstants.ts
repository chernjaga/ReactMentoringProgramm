import { IAppConstants } from '../types';

export const AppConstants: IAppConstants = {
    apiConfig: {
        url: '//localhost:4000/movies'
    },
    filterItems: [
        {
            title: 'ALL',
            key: 1,
            label: 'all'
        },
        {
            title: 'DOCUMENTARY',
            key: 2,
            label: 'documentary'
        },
        {
            title: 'COMEDY',
            key: 3,
            label: 'comedy'
        },
        {
            title: 'HORROR',
            key: 4,
            label: 'horror'
        },
        {
            title: 'CRIME',
            key: 5,
            label: 'crime'
        }
    ]
};