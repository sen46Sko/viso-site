import { client } from './axios';

export async function getTitle() {
  return client
    .get<{ data: { id: number; attributes: { title: string } } }>('/title')
    .then((res) => {
      return res.data.data.attributes.title;
    });
}
