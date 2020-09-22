import axios from 'axios'

import {urlApi} from '../config/config'


export const httpUrl = axios.create({
    baseURL: urlApi
})