import axios from './axios';

export const getSecurityQuestionnaireById = async (id) => axios.get(`/get_applicable_questions/${id}`, {}).then((r) => r.data);

export const updateVendorResponse = async (payload) => axios.post('add_vendor_response', payload).then((r) => r.data);
export const deleteFile = async (file) => axios.delete(`/delete_file/${file}`, {}).then((r) => r.data);
export const uploadFile = async (payload) => axios.post('/upload_file', payload).then((r) => r.data);
