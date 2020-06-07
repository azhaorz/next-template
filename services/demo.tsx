import useSWR from 'swr';

export function demo() {
  const { data, error } = useSWR('/api/user');
  console.log(data, error);
}
