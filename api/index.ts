import httpRequest from "./tools";

export const APIArticleAddOrUpdate = (data: any) => httpRequest.post('/api/article/addOrUpdate', data);
export const APIgetArticleById = (params: any) => httpRequest.get('/api/article/' + params.id, params);

