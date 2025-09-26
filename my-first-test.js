import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    // 10 iterations
    iterations: 10,
};
export default function (){
    http.get('https://quickpizza.grafana.com');
    sleep(1);
}