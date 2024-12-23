import requests from '@/utils/request';

export const getDataInfo = (data = {}) => requests.get('/web/data/info', data)
