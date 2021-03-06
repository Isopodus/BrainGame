import axios from "axios";

const url = "http://46.101.158.115:8000";

const getOptions = token => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const api = {
  // email, password, username => id, username, email, number
  register: body => axios.post(`${url}/register`, body),

  // email, password => token
  login: body => axios.post(`${url}/login`, body),
  logout: token => axios.post(`${url}/logout`, {}, getOptions(token)),

  // => id, username, email, number
  me: token => axios.get(`${url}/api/users/me`, getOptions(token)),

  // => sessionId, sessionStatus, sessionStage, sessionTotalScore, sessionDifficulty (session data)
  lastSession: token => axios.get(`${url}/api/sessions/last`, getOptions(token)),

  // difficulty => session data
  newSession: (body, token) => axios.post(`${url}/api/sessions`, body, getOptions(token)),

  // score => session data
  updateSession: (body, token) => axios.post(`${url}/api/sessions/last/complete`, body, getOptions(token)),

  // score => session data
  closeSession: (body, token) => axios.post(`${url}/api/sessions/last/close`, body, getOptions(token)),

  // => session data
  cancelSession: token => axios.post(`${url}/api/sessions/last/cancel`, {}, getOptions(token)),

  // => { placeN: {username, email, totalScore, passedAllGames, number} }
  getLeaderboard: token => axios.get(`${url}/api/leaderboard`, getOptions(token)),

  // originalImage, drawnImage => distance
  compareImages: (body, token) => axios.post(`${url}/api/images/compare`, body, getOptions(token)),
};
