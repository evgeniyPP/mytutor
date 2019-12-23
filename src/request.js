import axios from 'axios';

const studentRequest = async data => {
  await axios.post('https://my-tutor-server.herokuapp.com/students/add', data);
  const response = await axios.get('https://my-tutor-server.herokuapp.com/tutors/');
  return {
    status: response.status,
    tutors: response.data
  };
};

const tutorRequest = async data => {
  const response = await axios.post('https://my-tutor-server.herokuapp.com/tutors/add', data);
  return {
    status: response.status
  };
};

export default async (isStudent, data) => {
  const func = isStudent ? studentRequest : tutorRequest;
  const response = await func(data);
  const { status, tutors } = response;
  if (status === 200) {
    return isStudent ? tutors : true;
  } else {
    throw new Error(`Статус ответа сервера ${status}`);
  }
};
