import requests from '@/utils/request'

export const getDataInfo = (data = {}) => requests.get('/web/data/info', data)

export const dataHot = (data = {}) => requests.get('/web/data/hot', data)

export const dataTop = (data = {}) => requests.get('/web/data/top', data)

