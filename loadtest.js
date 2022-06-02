import http from 'k6/http';
import { check, sleep } from 'k6';
import { Rate } from 'k6/metrics';

export const errorRate = new Rate('errors');

export default function () {
  const url = 'http://localhost:8887/mail/mail_beginner_user';
  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };


  const data = JSON.stringify({
    username: 'foobar',
  });

  check(http.post(url, data, params), {
    'status is 200': (r) => r.status == 200,
  }) || errorRate.add(1);

  // sleep(1)
}