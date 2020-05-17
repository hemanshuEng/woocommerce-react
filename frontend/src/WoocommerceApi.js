import axios from 'axios';
import crypto from 'crypto';
import OAuth from 'oauth-1.0a';

class WoocommerceApi {
    constructor() {
        this.request = axios.create({
            baseURL:process.env.REACT_APP_BASE_URL,
        })
    }

    _getOauth() {
       return OAuth({
            consumer: { key:process.env.REACT_APP_CONSUMER_KEY , secret:process.env.REACT_APP_CONSUMER_SECRET },
            signature_method: process.env.REACT_APP_SIGNATURE_METHOD,
            hash_function(base_string, key) {
                return crypto
                    .createHmac('sha1', key)
                    .update(base_string)
                    .digest('base64')
            },
        });
    }

    get(endpoint) {
        const method = 'GET';
        return this.request.get(endpoint,{
            headers: this._getOauth().toHeader(this._getOauth().authorize({
                url:process.env.REACT_APP_BASE_URL + endpoint,
                method: method
            }))
        })
    }
}

export default WoocommerceApi;