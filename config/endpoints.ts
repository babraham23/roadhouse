export const identity_url = 'https://dev-s2-identity.azurewebsites.net';
export const base_url = 'https://dev-site2-api.sitesq.net/api/';

export const client_endpoint = `${base_url}Client`;

export const get_client_by_id = (id: string) => `${base_url}Client/${id}`;

export const get_plot_by_client = (id: string) => `${base_url}Plot/GetByClient/${id}`;

export const get_plot_by_id = (id: string) => `${base_url}Plot/Get/${id}`;

export const get_development_by_id = (id: string) => `${base_url}Development/${id}`;
